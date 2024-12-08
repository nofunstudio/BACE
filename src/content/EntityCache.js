import * as THREE from "./three.js";
import * as utils from "./utils.js";

export default () => {
	const PATCHED = "__SERIALIZATION_PATCHED__";

	return class EntityCache extends EventTarget {
		constructor() {
			super();
			this.scenes = new Set();
			this.renderers = [];

			this.entityMap = new Map();
			this.resourcesSent = new Map();

			this.resources = {
				images: {},
				attributes: {},
				devtoolsConfig: {},
			};
		}

		// Helper functions for edge detection
		#gaussianBlur3x3(gray, width, height) {
			const kernel = [1, 2, 1, 2, 4, 2, 1, 2, 1];
			const sum = 16;
			const out = new Uint8ClampedArray(width * height);
			for (let y = 1; y < height - 1; y++) {
				for (let x = 1; x < width - 1; x++) {
					let idx = y * width + x;
					let val = 0;
					let k = 0;
					for (let ky = -1; ky <= 1; ky++) {
						for (let kx = -1; kx <= 1; kx++) {
							const px = (y + ky) * width + (x + kx);
							val += gray[px] * kernel[k++];
						}
					}
					out[idx] = val / sum;
				}
			}
			return out;
		}

		#sobelOperator(gray, width, height) {
			const gx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
			const gy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
			const mag = new Float32Array(width * height);
			const dir = new Float32Array(width * height);

			for (let y = 1; y < height - 1; y++) {
				for (let x = 1; x < width - 1; x++) {
					let idx = y * width + x;
					let sumX = 0,
						sumY = 0;
					let k = 0;
					for (let ky = -1; ky <= 1; ky++) {
						for (let kx = -1; kx <= 1; kx++) {
							const px = (y + ky) * width + (x + kx);
							sumX += gray[px] * gx[k];
							sumY += gray[px] * gy[k];
							k++;
						}
					}
					const g = Math.sqrt(sumX * sumX + sumY * sumY);
					mag[idx] = g;
					dir[idx] = Math.atan2(sumY, sumX);
				}
			}
			return { mag, dir };
		}

		#nonMaximumSuppression(mag, dir, width, height) {
			const out = new Float32Array(width * height);
			for (let y = 1; y < height - 1; y++) {
				for (let x = 1; x < width - 1; x++) {
					let idx = y * width + x;
					const angle = dir[idx] * (180 / Math.PI);
					let sector = angle < 0 ? angle + 180 : angle;

					const g = mag[idx];
					let g1 = 0,
						g2 = 0;

					if (
						(sector >= 0 && sector < 22.5) ||
						(sector >= 157.5 && sector <= 180)
					) {
						g1 = mag[idx + 1];
						g2 = mag[idx - 1];
					} else if (sector >= 22.5 && sector < 67.5) {
						g1 = mag[idx + width + 1];
						g2 = mag[idx - width - 1];
					} else if (sector >= 67.5 && sector < 112.5) {
						g1 = mag[idx + width];
						g2 = mag[idx - width];
					} else if (sector >= 112.5 && sector < 157.5) {
						g1 = mag[idx + width - 1];
						g2 = mag[idx - width + 1];
					}

					if (g >= g1 && g >= g2) {
						out[idx] = g;
					} else {
						out[idx] = 0;
					}
				}
			}
			return out;
		}

		#doubleThresholdHysteresis(nms, width, height, lowThresh, highThresh) {
			const strong = 255;
			const weak = 75;
			const out = new Uint8ClampedArray(width * height);

			for (let i = 0; i < width * height; i++) {
				const val = nms[i];
				if (val >= highThresh) out[i] = strong;
				else if (val >= lowThresh) out[i] = weak;
				else out[i] = 0;
			}

			for (let y = 1; y < height - 1; y++) {
				for (let x = 1; x < width - 1; x++) {
					let idx = y * width + x;
					if (out[idx] == weak) {
						if (
							out[idx + 1] == strong ||
							out[idx - 1] == strong ||
							out[idx + width] == strong ||
							out[idx - width] == strong ||
							out[idx + width + 1] == strong ||
							out[idx + width - 1] == strong ||
							out[idx - width + 1] == strong ||
							out[idx - width - 1] == strong
						) {
							out[idx] = strong;
						} else {
							out[idx] = 0;
						}
					}
				}
			}
			return out;
		}

		#cannyEdgeDetect(imageData, lowThreshold, highThreshold) {
			const width = imageData.width;
			const height = imageData.height;
			const data = imageData.data;

			const gray = new Uint8ClampedArray(width * height);
			for (let i = 0; i < width * height; i++) {
				const r = data[4 * i];
				const g = data[4 * i + 1];
				const b = data[4 * i + 2];
				gray[i] = 0.2989 * r + 0.587 * g + 0.114 * b;
			}

			const blurred = this.#gaussianBlur3x3(gray, width, height);
			const { mag, dir } = this.#sobelOperator(blurred, width, height);
			const nms = this.#nonMaximumSuppression(mag, dir, width, height);
			const edges = this.#doubleThresholdHysteresis(
				nms,
				width,
				height,
				lowThreshold * 255,
				highThreshold * 255
			);

			const outData = new Uint8ClampedArray(width * height * 4);
			for (let i = 0; i < width * height; i++) {
				const val = edges[i];
				outData[4 * i] = val;
				outData[4 * i + 1] = val;
				outData[4 * i + 2] = val;
				outData[4 * i + 3] = 255;
			}
			return new ImageData(outData, width, height);
		}

		getEntity(id) {
			return this.entityMap.get(id);
		}

		add(entity) {
			if (!entity || utils.isHiddenFromTools(entity)) {
				return;
			}

			const id = this._getID(entity);

			if (!id) {
				return;
			}

			if (entity.isScene || entity.isCamera) {
				this.scenes.add(entity);
				this._registerEntity(entity);
			} else if (typeof entity.render === "function") {
				this.entityMap.set(id, entity);
			} else {
				throw new Error(
					"May only observe scenes, cameras and renderers currently."
				);
			}

			return id;
		}

		getSceneGraph(uuid) {
			const graph = {};
			const scene = this.getEntity(uuid);
			const objects = [scene];

			while (objects.length) {
				const object = objects.shift();
				this._registerEntity(object);

				graph[object.uuid] = {
					uuid: object.uuid,
					name: object.name,
					baseType: utils.getBaseType(object),
					children: [],
				};

				if (object.parent) {
					if (graph[object.parent.uuid]) {
						graph[object.parent.uuid].children.push(object.uuid);
					}
				}

				if (object.children) {
					objects.push(...object.children);
				}
			}

			return graph;
		}

		getOverview(type) {
			const entities = [];
			const entitiesAdded = new Set();

			for (let scene of this.scenes) {
				if (type === "scenes") {
					addEntity(scene);
				} else if (type === "camera") {
					addEntity(scene);
				} else {
					utils.forEachDependency(
						scene,
						(entity) => {
							this._registerEntity(entity);
							const valid =
								type === "geometries"
									? entity.isGeometry || entity.isBufferGeometry
									: type === "materials"
									? entity.isMaterial
									: type === "textures"
									? entity.isTexture
									: false;
							if (valid && !entitiesAdded.has(entity.uuid)) {
								addEntity(entity);
							}
						},
						{
							recursive: true,
						}
					);
				}
			}

			function addEntity(entity) {
				entities.push({
					name: entity.name,
					uuid: entity.uuid,
					baseType: utils.getBaseType(entity),
				});
				entitiesAdded.add(entity.uuid);
			}

			return entities;
		}

		getRenderingInfo(id) {
			const entity = this.getEntity(id);
			if (!entity || !/renderer/.test(id)) {
				return;
			}

			try {
				let activeScene = null;
				let activeCamera = null;
				for (const [uuid, obj] of this.entityMap) {
					if (!activeScene && obj.isScene && !utils.isHiddenFromTools(obj)) {
						activeScene = obj;
					}
					if (!activeCamera && obj.isCamera && !utils.isHiddenFromTools(obj)) {
						activeCamera = obj;
					}
					if (activeScene && activeCamera) break;
				}

				if (!activeScene || !activeCamera) {
					console.warn("No visible scene or camera found.");
					return;
				}

				const width = entity.domElement.width;
				const height = entity.domElement.height;

				// Render color image
				entity.render(activeScene, activeCamera);
				{
					const dataURL = entity.domElement.toDataURL("image/png");
					const link = document.createElement("a");
					link.href = dataURL;
					link.download = "rendered_image.png";
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				}

				// NORMAL PASS
				const normalMaterial = new THREE.MeshNormalMaterial();
				const originalNormals = [];
				activeScene.traverse((obj) => {
					if (obj.isMesh) {
						originalNormals.push({ obj, material: obj.material });
						obj.material = normalMaterial;
					}
				});

				const normalRenderer = new THREE.WebGLRenderer({
					preserveDrawingBuffer: true,
				});

				normalRenderer.setSize(width, height);
				normalRenderer.setClearColor(0x000000, 1);
				const normalTarget = new THREE.WebGLRenderTarget(width, height, {
					minFilter: THREE.LinearFilter,
					magFilter: THREE.LinearFilter,
					format: THREE.RGBAFormat,
					type: THREE.UnsignedByteType,
				});
				normalTarget.texture.encoding = THREE.LinearEncoding;

				normalRenderer.setRenderTarget(normalTarget);
				normalRenderer.render(activeScene, activeCamera);
				normalRenderer.setRenderTarget(null);

				for (const { obj, material } of originalNormals) {
					obj.material = material;
				}

				const normalPixelBuffer = new Uint8Array(width * height * 4);
				normalRenderer.readRenderTargetPixels(
					normalTarget,
					0,
					0,
					width,
					height,
					normalPixelBuffer
				);

				const offscreenNormal = document.createElement("canvas");
				offscreenNormal.width = width;
				offscreenNormal.height = height;
				const offscreenNormalCtx = offscreenNormal.getContext("2d");
				const normalImgData = offscreenNormalCtx.createImageData(width, height);
				normalImgData.data.set(normalPixelBuffer);
				offscreenNormalCtx.putImageData(normalImgData, 0, 0);

				const normalCanvas = document.createElement("canvas");
				normalCanvas.width = width;
				normalCanvas.height = height;
				const normalCtx = normalCanvas.getContext("2d");
				normalCtx.translate(width / 2, height / 2);
				normalCtx.rotate(Math.PI);
				normalCtx.scale(-1, 1);
				normalCtx.translate(-width / 2, -height / 2);
				normalCtx.drawImage(offscreenNormal, 0, 0);

				{
					const normalURL = normalCanvas.toDataURL("image/png");
					const normalLink = document.createElement("a");
					normalLink.href = normalURL;
					normalLink.download = "normal_map.png";
					document.body.appendChild(normalLink);
					normalLink.click();
					document.body.removeChild(normalLink);
				}
				const colorRenderer = new THREE.WebGLRenderer({
					preserveDrawingBuffer: true,
				});
				colorRenderer.setSize(width, height);
				colorRenderer.setClearColor(0x000000, 1);
				const colorTarget = new THREE.WebGLRenderTarget(width, height, {
					minFilter: THREE.LinearFilter,
					magFilter: THREE.LinearFilter,
					format: THREE.RGBAFormat,
					type: THREE.UnsignedByteType,
				});
				colorTarget.texture.encoding = THREE.LinearEncoding;

				colorRenderer.setRenderTarget(colorTarget);
				colorRenderer.render(activeScene, activeCamera);
				colorRenderer.setRenderTarget(null);

				// Create a buffer to store pixel data
				const colorPixelBuffer = new Uint8Array(width * height * 4);

				// Read pixels from colorTarget into colorPixelBuffer
				colorRenderer.readRenderTargetPixels(
					colorTarget,
					0,
					0,
					width,
					height,
					colorPixelBuffer
				);

				// Now we have raw RGBA data in colorPixelBuffer
				const cannyCanvas = document.createElement("canvas");
				cannyCanvas.width = width;
				cannyCanvas.height = height;
				const cannyCtx = cannyCanvas.getContext("2d");
				const cannyImgData = cannyCtx.createImageData(width, height);

				// Set pixel data
				cannyImgData.data.set(colorPixelBuffer);

				// Run Canny
				const edges = this.#cannyEdgeDetect(cannyImgData, 0.1, 0.3);

				// `edges` is an ImageData with edge information (0 or 255)

				// Rotate/flip edges if needed
				const offscreenCanny = document.createElement("canvas");
				offscreenCanny.width = width;
				offscreenCanny.height = height;
				const offscreenCannyCtx = offscreenCanny.getContext("2d");
				offscreenCannyCtx.putImageData(edges, 0, 0);

				const finalCannyCanvas = document.createElement("canvas");
				finalCannyCanvas.width = width;
				finalCannyCanvas.height = height;
				const finalCannyCtx = finalCannyCanvas.getContext("2d");
				finalCannyCtx.translate(width / 2, height / 2);
				finalCannyCtx.rotate(Math.PI);
				finalCannyCtx.scale(-1, 1);
				finalCannyCtx.translate(-width / 2, -height / 2);
				finalCannyCtx.drawImage(offscreenCanny, 0, 0);

				const cannyURL = finalCannyCanvas.toDataURL("image/png");
				const cannyLink = document.createElement("a");
				cannyLink.href = cannyURL;
				cannyLink.download = "canny_map.png";
				document.body.appendChild(cannyLink);
				cannyLink.click();
				document.body.removeChild(cannyLink);

				normalTarget.dispose();
				normalRenderer.dispose();

				// DEPTH PASS (as before)
				const depthMaterial = new THREE.MeshDepthMaterial();
				depthMaterial.depthPacking = THREE.BasicDepthPacking;
				const originalDepths = [];
				activeScene.traverse((obj) => {
					if (obj.isMesh) {
						originalDepths.push({ obj, material: obj.material });
						obj.material = depthMaterial;
					}
				});

				const depthRenderer = new THREE.WebGLRenderer({
					preserveDrawingBuffer: true,
				});
				depthRenderer.setSize(width, height);
				depthRenderer.setClearColor(0x000000, 1);
				const depthTarget = new THREE.WebGLRenderTarget(width, height, {
					minFilter: THREE.LinearFilter,
					magFilter: THREE.LinearFilter,
					format: THREE.RGBAFormat,
					type: THREE.UnsignedByteType,
				});
				depthTarget.texture.encoding = THREE.LinearEncoding;

				depthRenderer.setRenderTarget(depthTarget);
				depthRenderer.render(activeScene, activeCamera);
				depthRenderer.setRenderTarget(null);

				for (const { obj, material } of originalDepths) {
					obj.material = material;
				}

				const depthPixelBuffer = new Uint8Array(width * height * 4);
				depthRenderer.readRenderTargetPixels(
					depthTarget,
					0,
					0,
					width,
					height,
					depthPixelBuffer
				);

				const offscreenDepth = document.createElement("canvas");
				offscreenDepth.width = width;
				offscreenDepth.height = height;
				const offscreenDepthCtx = offscreenDepth.getContext("2d");
				const depthImgData = offscreenDepthCtx.createImageData(width, height);
				for (let j = 0; j < height; j++) {
					for (let i = 0; i < width; i++) {
						const index = (j * width + i) * 4;
						const r = depthPixelBuffer[index];
						depthImgData.data[index] = r;
						depthImgData.data[index + 1] = r;
						depthImgData.data[index + 2] = r;
						depthImgData.data[index + 3] = 255;
					}
				}
				offscreenDepthCtx.putImageData(depthImgData, 0, 0);

				const depthCanvas = document.createElement("canvas");
				depthCanvas.width = width;
				depthCanvas.height = height;
				const depthCtx = depthCanvas.getContext("2d");
				depthCtx.translate(width / 2, height / 2);
				depthCtx.rotate(Math.PI);
				depthCtx.scale(-1, 1);
				depthCtx.translate(-width / 2, -height / 2);
				depthCtx.drawImage(offscreenDepth, 0, 0);

				{
					const depthURL = depthCanvas.toDataURL("image/png");
					const depthLink = document.createElement("a");
					depthLink.href = depthURL;
					depthLink.download = "depth_map.png";
					document.body.appendChild(depthLink);
					depthLink.click();
					document.body.removeChild(depthLink);
				}

				depthTarget.dispose();
				depthRenderer.dispose();
			} catch (error) {
				console.error("Error generating maps:", error);
			}

			return {
				type: "renderer",
				uuid: id,
				info: {
					render: entity.info.render,
					memory: entity.info.memory,
					programs: entity.info.programs.length,
				},
			};
		}

		getSerializedEntity(id) {
			const entity = this.getEntity(id);
			if (!entity) {
				return;
			}

			if (/renderer/.test(id)) {
				const data = InstrumentedToJSON.call(entity);
				data.type = "renderer";
				data.uuid = id;
				return data;
			}

			if (utils.isHiddenFromTools(entity)) {
				this.entityMap.delete(id);
				return;
			}

			const meta = {
				geometries: [],
				materials: [],
				textures: [],
				shapes: [],
				images: this.resources.images,
				attributes: this.resources.attributes,
				devtoolsConfig: {
					serializeChildren: !entity.isObject3D,
				},
			};

			utils.forEachDependency(entity, (dep) => {
				this._registerEntity(dep);
			});

			let entitiesAdded = new Set();
			let serializedEntity = this._serializeEntity(entity, meta);

			let entities = [serializedEntity];
			entitiesAdded.add(serializedEntity.uuid);

			this._postSerialization(meta);

			for (let resourceType of [
				"geometries",
				"materials",
				"textures",
				"shapes",
			]) {
				for (let resource of Object.values(meta[resourceType])) {
					if (!entitiesAdded.has(resource.uuid)) {
						entities.push(resource);
						entitiesAdded.add(resource.uuid);
					}
				}
			}

			for (let resourceType of ["images", "attributes"]) {
				const resources = this.resources[resourceType];
				for (let uuid of Object.keys(resources)) {
					if (!this.resourcesSent.has(uuid)) {
						const resEntity = resources[uuid];
						this.resourcesSent.set(uuid, resEntity.version);
						entities.push(resEntity);
					}
				}
			}

			return entities;
		}

		_patchToJSON(entity) {
			if (entity.isBufferGeometry) {
				for (let key of Object.keys(entity.attributes)) {
					const attr = entity.attributes[key];
					if (attr.isInterleavedBufferAttribute) {
						this._patchToJSON(attr);
					}
				}
			}

			if (!entity[PATCHED]) {
				entity.toJSON = InstrumentedToJSON;
				entity[PATCHED] = true;
			}
		}

		_serializeEntity(entity, meta = {}) {
			let json;
			try {
				json = entity.toJSON(meta);
			} catch (e) {
				console.error(`${entity.uuid} does not appear to be serializable.`, e);
			}
			return json && json.object ? json.object : json;
		}

		_registerEntity(entity) {
			const { uuid } = entity;
			if (uuid && !this.entityMap.has(uuid)) {
				this._patchToJSON(entity);
				this.entityMap.set(uuid, entity);
			}
		}

		_postSerialization(data) {
			for (let geo of Object.values(data.geometries)) {
				if (geo.data) {
					const id = `attrs-${geo.uuid}`;
					data.attributes[id] = geo.data;
					delete geo.data;
				}
			}
		}

		_getID(entity) {
			if (typeof entity.render === "function") {
				let rendererIndex = this.renderers.indexOf(entity);
				if (rendererIndex === -1) {
					rendererIndex = this.renderers.length;
					this.renderers.push(entity);
				}
				return `renderer-${rendererIndex}`;
			} else if (entity.uuid) {
				return entity.uuid;
			}
		}
	};
};
