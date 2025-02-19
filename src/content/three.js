export default () => {
	var exports = {};
	var module = { exports };
	/**
	 * @license
	 * Copyright 2010-2022 Three.js Authors
	 * SPDX-License-Identifier: MIT
	 */
	!(function (t, e) {
		"object" == typeof exports && "undefined" != typeof module
			? e(exports)
			: "function" == typeof define && define.amd
			? define(["exports"], e)
			: e(
					((t =
						"undefined" != typeof globalThis ? globalThis : t || self).THREE =
						{})
			  );
	})(this, function (t) {
		"use strict";
		const e = "137",
			n = 100,
			i = 300,
			r = 301,
			s = 302,
			a = 303,
			o = 304,
			l = 306,
			c = 307,
			h = 1e3,
			u = 1001,
			d = 1002,
			p = 1003,
			m = 1004,
			f = 1005,
			g = 1006,
			v = 1007,
			y = 1008,
			x = 1009,
			_ = 1012,
			M = 1014,
			b = 1015,
			w = 1016,
			S = 1020,
			T = 1023,
			E = 1026,
			A = 1027,
			R = 33776,
			L = 33777,
			C = 33778,
			P = 33779,
			D = 35840,
			I = 35841,
			N = 35842,
			B = 35843,
			z = 37492,
			O = 37496,
			F = 37808,
			U = 37809,
			H = 37810,
			G = 37811,
			k = 37812,
			V = 37813,
			W = 37814,
			j = 37815,
			q = 37816,
			X = 37817,
			J = 37818,
			Y = 37819,
			Z = 37820,
			K = 37821,
			Q = 36492,
			$ = 2300,
			tt = 2301,
			et = 2302,
			nt = 2400,
			it = 2401,
			rt = 2402,
			st = 2500,
			at = 2501,
			ot = 3e3,
			lt = 3001,
			ct = 7680,
			ht = 35044,
			ut = 35048,
			dt = "300 es",
			pt = 1035;
		class mt {
			addEventListener(t, e) {
				void 0 === this._listeners && (this._listeners = {});
				const n = this._listeners;
				void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
			}
			hasEventListener(t, e) {
				if (void 0 === this._listeners) return !1;
				const n = this._listeners;
				return void 0 !== n[t] && -1 !== n[t].indexOf(e);
			}
			removeEventListener(t, e) {
				if (void 0 === this._listeners) return;
				const n = this._listeners[t];
				if (void 0 !== n) {
					const t = n.indexOf(e);
					-1 !== t && n.splice(t, 1);
				}
			}
			dispatchEvent(t) {
				if (void 0 === this._listeners) return;
				const e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					const n = e.slice(0);
					for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
					t.target = null;
				}
			}
		}
		const ft = [];
		for (let t = 0; t < 256; t++) ft[t] = (t < 16 ? "0" : "") + t.toString(16);
		let gt = 1234567;
		const vt = Math.PI / 180,
			yt = 180 / Math.PI;
		function xt() {
			const t = (4294967295 * Math.random()) | 0,
				e = (4294967295 * Math.random()) | 0,
				n = (4294967295 * Math.random()) | 0,
				i = (4294967295 * Math.random()) | 0;
			return (
				ft[255 & t] +
				ft[(t >> 8) & 255] +
				ft[(t >> 16) & 255] +
				ft[(t >> 24) & 255] +
				"-" +
				ft[255 & e] +
				ft[(e >> 8) & 255] +
				"-" +
				ft[((e >> 16) & 15) | 64] +
				ft[(e >> 24) & 255] +
				"-" +
				ft[(63 & n) | 128] +
				ft[(n >> 8) & 255] +
				"-" +
				ft[(n >> 16) & 255] +
				ft[(n >> 24) & 255] +
				ft[255 & i] +
				ft[(i >> 8) & 255] +
				ft[(i >> 16) & 255] +
				ft[(i >> 24) & 255]
			).toUpperCase();
		}
		function _t(t, e, n) {
			return Math.max(e, Math.min(n, t));
		}
		function Mt(t, e) {
			return ((t % e) + e) % e;
		}
		function bt(t, e, n) {
			return (1 - n) * t + n * e;
		}
		function wt(t) {
			return 0 == (t & (t - 1)) && 0 !== t;
		}
		function St(t) {
			return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
		}
		function Tt(t) {
			return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
		}
		var Et = Object.freeze({
			__proto__: null,
			DEG2RAD: vt,
			RAD2DEG: yt,
			generateUUID: xt,
			clamp: _t,
			euclideanModulo: Mt,
			mapLinear: function (t, e, n, i, r) {
				return i + ((t - e) * (r - i)) / (n - e);
			},
			inverseLerp: function (t, e, n) {
				return t !== e ? (n - t) / (e - t) : 0;
			},
			lerp: bt,
			damp: function (t, e, n, i) {
				return bt(t, e, 1 - Math.exp(-n * i));
			},
			pingpong: function (t, e = 1) {
				return e - Math.abs(Mt(t, 2 * e) - e);
			},
			smoothstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * (3 - 2 * t);
			},
			smootherstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
			},
			randInt: function (t, e) {
				return t + Math.floor(Math.random() * (e - t + 1));
			},
			randFloat: function (t, e) {
				return t + Math.random() * (e - t);
			},
			randFloatSpread: function (t) {
				return t * (0.5 - Math.random());
			},
			seededRandom: function (t) {
				return (
					void 0 !== t && (gt = t % 2147483647),
					(gt = (16807 * gt) % 2147483647),
					(gt - 1) / 2147483646
				);
			},
			degToRad: function (t) {
				return t * vt;
			},
			radToDeg: function (t) {
				return t * yt;
			},
			isPowerOfTwo: wt,
			ceilPowerOfTwo: St,
			floorPowerOfTwo: Tt,
			setQuaternionFromProperEuler: function (t, e, n, i, r) {
				const s = Math.cos,
					a = Math.sin,
					o = s(n / 2),
					l = a(n / 2),
					c = s((e + i) / 2),
					h = a((e + i) / 2),
					u = s((e - i) / 2),
					d = a((e - i) / 2),
					p = s((i - e) / 2),
					m = a((i - e) / 2);
				switch (r) {
					case "XYX":
						t.set(o * h, l * u, l * d, o * c);
						break;
					case "YZY":
						t.set(l * d, o * h, l * u, o * c);
						break;
					case "ZXZ":
						t.set(l * u, l * d, o * h, o * c);
						break;
					case "XZX":
						t.set(o * h, l * m, l * p, o * c);
						break;
					case "YXY":
						t.set(l * p, o * h, l * m, o * c);
						break;
					case "ZYZ":
						t.set(l * m, l * p, o * h, o * c);
						break;
					default:
						console.warn(
							"THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
								r
						);
				}
			},
		});
		class At {
			constructor(t = 0, e = 0) {
				(this.x = t), (this.y = e);
			}
			get width() {
				return this.x;
			}
			set width(t) {
				this.x = t;
			}
			get height() {
				return this.y;
			}
			set height(t) {
				this.y = t;
			}
			set(t, e) {
				return (this.x = t), (this.y = e), this;
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					default:
						throw new Error("index is out of range: " + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					default:
						throw new Error("index is out of range: " + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y);
			}
			copy(t) {
				return (this.x = t.x), (this.y = t.y), this;
			}
			add(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
					  ),
					  this.addVectors(t, e))
					: ((this.x += t.x), (this.y += t.y), this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), this;
			}
			addVectors(t, e) {
				return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
			}
			addScaledVector(t, e) {
				return (this.x += t.x * e), (this.y += t.y * e), this;
			}
			sub(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
					  ),
					  this.subVectors(t, e))
					: ((this.x -= t.x), (this.y -= t.y), this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), this;
			}
			subVectors(t, e) {
				return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
			}
			multiply(t) {
				return (this.x *= t.x), (this.y *= t.y), this;
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), this;
			}
			divide(t) {
				return (this.x /= t.x), (this.y /= t.y), this;
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			applyMatrix3(t) {
				const e = this.x,
					n = this.y,
					i = t.elements;
				return (
					(this.x = i[0] * e + i[3] * n + i[6]),
					(this.y = i[1] * e + i[4] * n + i[7]),
					this
				);
			}
			min(t) {
				return (
					(this.x = Math.min(this.x, t.x)),
					(this.y = Math.min(this.y, t.y)),
					this
				);
			}
			max(t) {
				return (
					(this.x = Math.max(this.x, t.x)),
					(this.y = Math.max(this.y, t.y)),
					this
				);
			}
			clamp(t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					this
				);
			}
			clampScalar(t, e) {
				return (
					(this.x = Math.max(t, Math.min(e, this.x))),
					(this.y = Math.max(t, Math.min(e, this.y))),
					this
				);
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(
					Math.max(t, Math.min(e, n))
				);
			}
			floor() {
				return (
					(this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
				);
			}
			ceil() {
				return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
			}
			round() {
				return (
					(this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
				);
			}
			roundToZero() {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					this
				);
			}
			negate() {
				return (this.x = -this.x), (this.y = -this.y), this;
			}
			dot(t) {
				return this.x * t.x + this.y * t.y;
			}
			cross(t) {
				return this.x * t.y - this.y * t.x;
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y;
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			angle() {
				return Math.atan2(-this.y, -this.x) + Math.PI;
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t));
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					n = this.y - t.y;
				return e * e + n * n;
			}
			manhattanDistanceTo(t) {
				return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (
					(this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
				);
			}
			lerpVectors(t, e, n) {
				return (
					(this.x = t.x + (e.x - t.x) * n),
					(this.y = t.y + (e.y - t.y) * n),
					this
				);
			}
			equals(t) {
				return t.x === this.x && t.y === this.y;
			}
			fromArray(t, e = 0) {
				return (this.x = t[e]), (this.y = t[e + 1]), this;
			}
			toArray(t = [], e = 0) {
				return (t[e] = this.x), (t[e + 1] = this.y), t;
			}
			fromBufferAttribute(t, e, n) {
				return (
					void 0 !== n &&
						console.warn(
							"THREE.Vector2: offset has been removed from .fromBufferAttribute()."
						),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					this
				);
			}
			rotateAround(t, e) {
				const n = Math.cos(e),
					i = Math.sin(e),
					r = this.x - t.x,
					s = this.y - t.y;
				return (
					(this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this
				);
			}
			random() {
				return (this.x = Math.random()), (this.y = Math.random()), this;
			}
			*[Symbol.iterator]() {
				yield this.x, yield this.y;
			}
		}
		At.prototype.isVector2 = !0;
		class Rt {
			constructor() {
				(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
					arguments.length > 0 &&
						console.error(
							"THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
						);
			}
			set(t, e, n, i, r, s, a, o, l) {
				const c = this.elements;
				return (
					(c[0] = t),
					(c[1] = i),
					(c[2] = a),
					(c[3] = e),
					(c[4] = r),
					(c[5] = o),
					(c[6] = n),
					(c[7] = s),
					(c[8] = l),
					this
				);
			}
			identity() {
				return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
			}
			copy(t) {
				const e = this.elements,
					n = t.elements;
				return (
					(e[0] = n[0]),
					(e[1] = n[1]),
					(e[2] = n[2]),
					(e[3] = n[3]),
					(e[4] = n[4]),
					(e[5] = n[5]),
					(e[6] = n[6]),
					(e[7] = n[7]),
					(e[8] = n[8]),
					this
				);
			}
			extractBasis(t, e, n) {
				return (
					t.setFromMatrix3Column(this, 0),
					e.setFromMatrix3Column(this, 1),
					n.setFromMatrix3Column(this, 2),
					this
				);
			}
			setFromMatrix4(t) {
				const e = t.elements;
				return (
					this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
				);
			}
			multiply(t) {
				return this.multiplyMatrices(this, t);
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this);
			}
			multiplyMatrices(t, e) {
				const n = t.elements,
					i = e.elements,
					r = this.elements,
					s = n[0],
					a = n[3],
					o = n[6],
					l = n[1],
					c = n[4],
					h = n[7],
					u = n[2],
					d = n[5],
					p = n[8],
					m = i[0],
					f = i[3],
					g = i[6],
					v = i[1],
					y = i[4],
					x = i[7],
					_ = i[2],
					M = i[5],
					b = i[8];
				return (
					(r[0] = s * m + a * v + o * _),
					(r[3] = s * f + a * y + o * M),
					(r[6] = s * g + a * x + o * b),
					(r[1] = l * m + c * v + h * _),
					(r[4] = l * f + c * y + h * M),
					(r[7] = l * g + c * x + h * b),
					(r[2] = u * m + d * v + p * _),
					(r[5] = u * f + d * y + p * M),
					(r[8] = u * g + d * x + p * b),
					this
				);
			}
			multiplyScalar(t) {
				const e = this.elements;
				return (
					(e[0] *= t),
					(e[3] *= t),
					(e[6] *= t),
					(e[1] *= t),
					(e[4] *= t),
					(e[7] *= t),
					(e[2] *= t),
					(e[5] *= t),
					(e[8] *= t),
					this
				);
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					n = t[1],
					i = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8];
				return (
					e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
				);
			}
			invert() {
				const t = this.elements,
					e = t[0],
					n = t[1],
					i = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8],
					h = c * s - a * l,
					u = a * o - c * r,
					d = l * r - s * o,
					p = e * h + n * u + i * d;
				if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
				const m = 1 / p;
				return (
					(t[0] = h * m),
					(t[1] = (i * l - c * n) * m),
					(t[2] = (a * n - i * s) * m),
					(t[3] = u * m),
					(t[4] = (c * e - i * o) * m),
					(t[5] = (i * r - a * e) * m),
					(t[6] = d * m),
					(t[7] = (n * o - l * e) * m),
					(t[8] = (s * e - n * r) * m),
					this
				);
			}
			transpose() {
				let t;
				const e = this.elements;
				return (
					(t = e[1]),
					(e[1] = e[3]),
					(e[3] = t),
					(t = e[2]),
					(e[2] = e[6]),
					(e[6] = t),
					(t = e[5]),
					(e[5] = e[7]),
					(e[7] = t),
					this
				);
			}
			getNormalMatrix(t) {
				return this.setFromMatrix4(t).invert().transpose();
			}
			transposeIntoArray(t) {
				const e = this.elements;
				return (
					(t[0] = e[0]),
					(t[1] = e[3]),
					(t[2] = e[6]),
					(t[3] = e[1]),
					(t[4] = e[4]),
					(t[5] = e[7]),
					(t[6] = e[2]),
					(t[7] = e[5]),
					(t[8] = e[8]),
					this
				);
			}
			setUvTransform(t, e, n, i, r, s, a) {
				const o = Math.cos(r),
					l = Math.sin(r);
				return (
					this.set(
						n * o,
						n * l,
						-n * (o * s + l * a) + s + t,
						-i * l,
						i * o,
						-i * (-l * s + o * a) + a + e,
						0,
						0,
						1
					),
					this
				);
			}
			scale(t, e) {
				const n = this.elements;
				return (
					(n[0] *= t),
					(n[3] *= t),
					(n[6] *= t),
					(n[1] *= e),
					(n[4] *= e),
					(n[7] *= e),
					this
				);
			}
			rotate(t) {
				const e = Math.cos(t),
					n = Math.sin(t),
					i = this.elements,
					r = i[0],
					s = i[3],
					a = i[6],
					o = i[1],
					l = i[4],
					c = i[7];
				return (
					(i[0] = e * r + n * o),
					(i[3] = e * s + n * l),
					(i[6] = e * a + n * c),
					(i[1] = -n * r + e * o),
					(i[4] = -n * s + e * l),
					(i[7] = -n * a + e * c),
					this
				);
			}
			translate(t, e) {
				const n = this.elements;
				return (
					(n[0] += t * n[2]),
					(n[3] += t * n[5]),
					(n[6] += t * n[8]),
					(n[1] += e * n[2]),
					(n[4] += e * n[5]),
					(n[7] += e * n[8]),
					this
				);
			}
			equals(t) {
				const e = this.elements,
					n = t.elements;
				for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
				return !0;
			}
			fromArray(t, e = 0) {
				for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
				return this;
			}
			toArray(t = [], e = 0) {
				const n = this.elements;
				return (
					(t[e] = n[0]),
					(t[e + 1] = n[1]),
					(t[e + 2] = n[2]),
					(t[e + 3] = n[3]),
					(t[e + 4] = n[4]),
					(t[e + 5] = n[5]),
					(t[e + 6] = n[6]),
					(t[e + 7] = n[7]),
					(t[e + 8] = n[8]),
					t
				);
			}
			clone() {
				return new this.constructor().fromArray(this.elements);
			}
		}
		function Lt(t) {
			for (let e = t.length - 1; e >= 0; --e) if (t[e] > 65535) return !0;
			return !1;
		}
		Rt.prototype.isMatrix3 = !0;
		const Ct = {
			Int8Array: Int8Array,
			Uint8Array: Uint8Array,
			Uint8ClampedArray: Uint8ClampedArray,
			Int16Array: Int16Array,
			Uint16Array: Uint16Array,
			Int32Array: Int32Array,
			Uint32Array: Uint32Array,
			Float32Array: Float32Array,
			Float64Array: Float64Array,
		};
		function Pt(t, e) {
			return new Ct[t](e);
		}
		function Dt(t) {
			return document.createElementNS("http://www.w3.org/1999/xhtml", t);
		}
		const It = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074,
			},
			Nt = { h: 0, s: 0, l: 0 },
			Bt = { h: 0, s: 0, l: 0 };
		function zt(t, e, n) {
			return (
				n < 0 && (n += 1),
				n > 1 && (n -= 1),
				n < 1 / 6
					? t + 6 * (e - t) * n
					: n < 0.5
					? e
					: n < 2 / 3
					? t + 6 * (e - t) * (2 / 3 - n)
					: t
			);
		}
		function Ot(t) {
			return t < 0.04045
				? 0.0773993808 * t
				: Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
		}
		function Ft(t) {
			return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
		}
		class Ut {
			constructor(t, e, n) {
				return void 0 === e && void 0 === n
					? this.set(t)
					: this.setRGB(t, e, n);
			}
			set(t) {
				return (
					t && t.isColor
						? this.copy(t)
						: "number" == typeof t
						? this.setHex(t)
						: "string" == typeof t && this.setStyle(t),
					this
				);
			}
			setScalar(t) {
				return (this.r = t), (this.g = t), (this.b = t), this;
			}
			setHex(t) {
				return (
					(t = Math.floor(t)),
					(this.r = ((t >> 16) & 255) / 255),
					(this.g = ((t >> 8) & 255) / 255),
					(this.b = (255 & t) / 255),
					this
				);
			}
			setRGB(t, e, n) {
				return (this.r = t), (this.g = e), (this.b = n), this;
			}
			setHSL(t, e, n) {
				if (((t = Mt(t, 1)), (e = _t(e, 0, 1)), (n = _t(n, 0, 1)), 0 === e))
					this.r = this.g = this.b = n;
				else {
					const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
						r = 2 * n - i;
					(this.r = zt(r, i, t + 1 / 3)),
						(this.g = zt(r, i, t)),
						(this.b = zt(r, i, t - 1 / 3));
				}
				return this;
			}
			setStyle(t) {
				function e(e) {
					void 0 !== e &&
						parseFloat(e) < 1 &&
						console.warn(
							"THREE.Color: Alpha component of " + t + " will be ignored."
						);
				}
				let n;
				if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
					let t;
					const i = n[1],
						r = n[2];
					switch (i) {
						case "rgb":
						case "rgba":
							if (
								(t =
									/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
										r
									))
							)
								return (
									(this.r = Math.min(255, parseInt(t[1], 10)) / 255),
									(this.g = Math.min(255, parseInt(t[2], 10)) / 255),
									(this.b = Math.min(255, parseInt(t[3], 10)) / 255),
									e(t[4]),
									this
								);
							if (
								(t =
									/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
										r
									))
							)
								return (
									(this.r = Math.min(100, parseInt(t[1], 10)) / 100),
									(this.g = Math.min(100, parseInt(t[2], 10)) / 100),
									(this.b = Math.min(100, parseInt(t[3], 10)) / 100),
									e(t[4]),
									this
								);
							break;
						case "hsl":
						case "hsla":
							if (
								(t =
									/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
										r
									))
							) {
								const n = parseFloat(t[1]) / 360,
									i = parseInt(t[2], 10) / 100,
									r = parseInt(t[3], 10) / 100;
								return e(t[4]), this.setHSL(n, i, r);
							}
					}
				} else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
					const t = n[1],
						e = t.length;
					if (3 === e)
						return (
							(this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
							(this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
							(this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
							this
						);
					if (6 === e)
						return (
							(this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
							(this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
							(this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
							this
						);
				}
				return t && t.length > 0 ? this.setColorName(t) : this;
			}
			setColorName(t) {
				const e = It[t.toLowerCase()];
				return (
					void 0 !== e
						? this.setHex(e)
						: console.warn("THREE.Color: Unknown color " + t),
					this
				);
			}
			clone() {
				return new this.constructor(this.r, this.g, this.b);
			}
			copy(t) {
				return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
			}
			copySRGBToLinear(t) {
				return (this.r = Ot(t.r)), (this.g = Ot(t.g)), (this.b = Ot(t.b)), this;
			}
			copyLinearToSRGB(t) {
				return (this.r = Ft(t.r)), (this.g = Ft(t.g)), (this.b = Ft(t.b)), this;
			}
			convertSRGBToLinear() {
				return this.copySRGBToLinear(this), this;
			}
			convertLinearToSRGB() {
				return this.copyLinearToSRGB(this), this;
			}
			getHex() {
				return (
					((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
				);
			}
			getHexString() {
				return ("000000" + this.getHex().toString(16)).slice(-6);
			}
			getHSL(t) {
				const e = this.r,
					n = this.g,
					i = this.b,
					r = Math.max(e, n, i),
					s = Math.min(e, n, i);
				let a, o;
				const l = (s + r) / 2;
				if (s === r) (a = 0), (o = 0);
				else {
					const t = r - s;
					switch (((o = l <= 0.5 ? t / (r + s) : t / (2 - r - s)), r)) {
						case e:
							a = (n - i) / t + (n < i ? 6 : 0);
							break;
						case n:
							a = (i - e) / t + 2;
							break;
						case i:
							a = (e - n) / t + 4;
					}
					a /= 6;
				}
				return (t.h = a), (t.s = o), (t.l = l), t;
			}
			getStyle() {
				return (
					"rgb(" +
					((255 * this.r) | 0) +
					"," +
					((255 * this.g) | 0) +
					"," +
					((255 * this.b) | 0) +
					")"
				);
			}
			offsetHSL(t, e, n) {
				return (
					this.getHSL(Nt),
					(Nt.h += t),
					(Nt.s += e),
					(Nt.l += n),
					this.setHSL(Nt.h, Nt.s, Nt.l),
					this
				);
			}
			add(t) {
				return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
			}
			addColors(t, e) {
				return (
					(this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
				);
			}
			addScalar(t) {
				return (this.r += t), (this.g += t), (this.b += t), this;
			}
			sub(t) {
				return (
					(this.r = Math.max(0, this.r - t.r)),
					(this.g = Math.max(0, this.g - t.g)),
					(this.b = Math.max(0, this.b - t.b)),
					this
				);
			}
			multiply(t) {
				return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
			}
			multiplyScalar(t) {
				return (this.r *= t), (this.g *= t), (this.b *= t), this;
			}
			lerp(t, e) {
				return (
					(this.r += (t.r - this.r) * e),
					(this.g += (t.g - this.g) * e),
					(this.b += (t.b - this.b) * e),
					this
				);
			}
			lerpColors(t, e, n) {
				return (
					(this.r = t.r + (e.r - t.r) * n),
					(this.g = t.g + (e.g - t.g) * n),
					(this.b = t.b + (e.b - t.b) * n),
					this
				);
			}
			lerpHSL(t, e) {
				this.getHSL(Nt), t.getHSL(Bt);
				const n = bt(Nt.h, Bt.h, e),
					i = bt(Nt.s, Bt.s, e),
					r = bt(Nt.l, Bt.l, e);
				return this.setHSL(n, i, r), this;
			}
			equals(t) {
				return t.r === this.r && t.g === this.g && t.b === this.b;
			}
			fromArray(t, e = 0) {
				return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
			}
			toArray(t = [], e = 0) {
				return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
			}
			fromBufferAttribute(t, e) {
				return (
					(this.r = t.getX(e)),
					(this.g = t.getY(e)),
					(this.b = t.getZ(e)),
					!0 === t.normalized &&
						((this.r /= 255), (this.g /= 255), (this.b /= 255)),
					this
				);
			}
			toJSON() {
				return this.getHex();
			}
		}
		let Ht;
		(Ut.NAMES = It),
			(Ut.prototype.isColor = !0),
			(Ut.prototype.r = 1),
			(Ut.prototype.g = 1),
			(Ut.prototype.b = 1);
		class Gt {
			static getDataURL(t) {
				if (/^data:/i.test(t.src)) return t.src;
				if ("undefined" == typeof HTMLCanvasElement) return t.src;
				let e;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === Ht && (Ht = Dt("canvas")),
						(Ht.width = t.width),
						(Ht.height = t.height);
					const n = Ht.getContext("2d");
					t instanceof ImageData
						? n.putImageData(t, 0, 0)
						: n.drawImage(t, 0, 0, t.width, t.height),
						(e = Ht);
				}
				return e.width > 2048 || e.height > 2048
					? (console.warn(
							"THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
							t
					  ),
					  e.toDataURL("image/jpeg", 0.6))
					: e.toDataURL("image/png");
			}
			static sRGBToLinear(t) {
				if (
					("undefined" != typeof HTMLImageElement &&
						t instanceof HTMLImageElement) ||
					("undefined" != typeof HTMLCanvasElement &&
						t instanceof HTMLCanvasElement) ||
					("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
				) {
					const e = Dt("canvas");
					(e.width = t.width), (e.height = t.height);
					const n = e.getContext("2d");
					n.drawImage(t, 0, 0, t.width, t.height);
					const i = n.getImageData(0, 0, t.width, t.height),
						r = i.data;
					for (let t = 0; t < r.length; t++) r[t] = 255 * Ot(r[t] / 255);
					return n.putImageData(i, 0, 0), e;
				}
				if (t.data) {
					const e = t.data.slice(0);
					for (let t = 0; t < e.length; t++)
						e instanceof Uint8Array || e instanceof Uint8ClampedArray
							? (e[t] = Math.floor(255 * Ot(e[t] / 255)))
							: (e[t] = Ot(e[t]));
					return { data: e, width: t.width, height: t.height };
				}
				return (
					console.warn(
						"THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
					),
					t
				);
			}
		}
		let kt = 0;
		class Vt extends mt {
			constructor(
				t = Vt.DEFAULT_IMAGE,
				e = Vt.DEFAULT_MAPPING,
				n = 1001,
				i = 1001,
				r = 1006,
				s = 1008,
				a = 1023,
				o = 1009,
				l = 1,
				c = 3e3
			) {
				super(),
					Object.defineProperty(this, "id", { value: kt++ }),
					(this.uuid = xt()),
					(this.name = ""),
					(this.image = t),
					(this.mipmaps = []),
					(this.mapping = e),
					(this.wrapS = n),
					(this.wrapT = i),
					(this.magFilter = r),
					(this.minFilter = s),
					(this.anisotropy = l),
					(this.format = a),
					(this.internalFormat = null),
					(this.type = o),
					(this.offset = new At(0, 0)),
					(this.repeat = new At(1, 1)),
					(this.center = new At(0, 0)),
					(this.rotation = 0),
					(this.matrixAutoUpdate = !0),
					(this.matrix = new Rt()),
					(this.generateMipmaps = !0),
					(this.premultiplyAlpha = !1),
					(this.flipY = !0),
					(this.unpackAlignment = 4),
					(this.encoding = c),
					(this.userData = {}),
					(this.version = 0),
					(this.onUpdate = null),
					(this.isRenderTargetTexture = !1),
					(this.needsPMREMUpdate = !1);
			}
			updateMatrix() {
				this.matrix.setUvTransform(
					this.offset.x,
					this.offset.y,
					this.repeat.x,
					this.repeat.y,
					this.rotation,
					this.center.x,
					this.center.y
				);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return (
					(this.name = t.name),
					(this.image = t.image),
					(this.mipmaps = t.mipmaps.slice(0)),
					(this.mapping = t.mapping),
					(this.wrapS = t.wrapS),
					(this.wrapT = t.wrapT),
					(this.magFilter = t.magFilter),
					(this.minFilter = t.minFilter),
					(this.anisotropy = t.anisotropy),
					(this.format = t.format),
					(this.internalFormat = t.internalFormat),
					(this.type = t.type),
					this.offset.copy(t.offset),
					this.repeat.copy(t.repeat),
					this.center.copy(t.center),
					(this.rotation = t.rotation),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					this.matrix.copy(t.matrix),
					(this.generateMipmaps = t.generateMipmaps),
					(this.premultiplyAlpha = t.premultiplyAlpha),
					(this.flipY = t.flipY),
					(this.unpackAlignment = t.unpackAlignment),
					(this.encoding = t.encoding),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					this
				);
			}
			toJSON(t) {
				const e = void 0 === t || "string" == typeof t;
				if (!e && void 0 !== t.textures[this.uuid])
					return t.textures[this.uuid];
				const n = {
					metadata: {
						version: 4.5,
						type: "Texture",
						generator: "Texture.toJSON",
					},
					uuid: this.uuid,
					name: this.name,
					mapping: this.mapping,
					repeat: [this.repeat.x, this.repeat.y],
					offset: [this.offset.x, this.offset.y],
					center: [this.center.x, this.center.y],
					rotation: this.rotation,
					wrap: [this.wrapS, this.wrapT],
					format: this.format,
					type: this.type,
					encoding: this.encoding,
					minFilter: this.minFilter,
					magFilter: this.magFilter,
					anisotropy: this.anisotropy,
					flipY: this.flipY,
					premultiplyAlpha: this.premultiplyAlpha,
					unpackAlignment: this.unpackAlignment,
				};
				if (void 0 !== this.image) {
					const i = this.image;
					if (
						(void 0 === i.uuid && (i.uuid = xt()),
						!e && void 0 === t.images[i.uuid])
					) {
						let e;
						if (Array.isArray(i)) {
							e = [];
							for (let t = 0, n = i.length; t < n; t++)
								i[t].isDataTexture ? e.push(Wt(i[t].image)) : e.push(Wt(i[t]));
						} else e = Wt(i);
						t.images[i.uuid] = { uuid: i.uuid, url: e };
					}
					n.image = i.uuid;
				}
				return (
					"{}" !== JSON.stringify(this.userData) &&
						(n.userData = this.userData),
					e || (t.textures[this.uuid] = n),
					n
				);
			}
			dispose() {
				this.dispatchEvent({ type: "dispose" });
			}
			transformUv(t) {
				if (this.mapping !== i) return t;
				if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
					switch (this.wrapS) {
						case h:
							t.x = t.x - Math.floor(t.x);
							break;
						case u:
							t.x = t.x < 0 ? 0 : 1;
							break;
						case d:
							1 === Math.abs(Math.floor(t.x) % 2)
								? (t.x = Math.ceil(t.x) - t.x)
								: (t.x = t.x - Math.floor(t.x));
					}
				if (t.y < 0 || t.y > 1)
					switch (this.wrapT) {
						case h:
							t.y = t.y - Math.floor(t.y);
							break;
						case u:
							t.y = t.y < 0 ? 0 : 1;
							break;
						case d:
							1 === Math.abs(Math.floor(t.y) % 2)
								? (t.y = Math.ceil(t.y) - t.y)
								: (t.y = t.y - Math.floor(t.y));
					}
				return this.flipY && (t.y = 1 - t.y), t;
			}
			set needsUpdate(t) {
				!0 === t && this.version++;
			}
		}
		function Wt(t) {
			return ("undefined" != typeof HTMLImageElement &&
				t instanceof HTMLImageElement) ||
				("undefined" != typeof HTMLCanvasElement &&
					t instanceof HTMLCanvasElement) ||
				("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
				? Gt.getDataURL(t)
				: t.data
				? {
						data: Array.prototype.slice.call(t.data),
						width: t.width,
						height: t.height,
						type: t.data.constructor.name,
				  }
				: (console.warn("THREE.Texture: Unable to serialize Texture."), {});
		}
		(Vt.DEFAULT_IMAGE = void 0),
			(Vt.DEFAULT_MAPPING = i),
			(Vt.prototype.isTexture = !0);
		class jt {
			constructor(t = 0, e = 0, n = 0, i = 1) {
				(this.x = t), (this.y = e), (this.z = n), (this.w = i);
			}
			get width() {
				return this.z;
			}
			set width(t) {
				this.z = t;
			}
			get height() {
				return this.w;
			}
			set height(t) {
				this.w = t;
			}
			set(t, e, n, i) {
				return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setZ(t) {
				return (this.z = t), this;
			}
			setW(t) {
				return (this.w = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error("index is out of range: " + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error("index is out of range: " + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z, this.w);
			}
			copy(t) {
				return (
					(this.x = t.x),
					(this.y = t.y),
					(this.z = t.z),
					(this.w = void 0 !== t.w ? t.w : 1),
					this
				);
			}
			add(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
					  ),
					  this.addVectors(t, e))
					: ((this.x += t.x),
					  (this.y += t.y),
					  (this.z += t.z),
					  (this.w += t.w),
					  this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
			}
			addVectors(t, e) {
				return (
					(this.x = t.x + e.x),
					(this.y = t.y + e.y),
					(this.z = t.z + e.z),
					(this.w = t.w + e.w),
					this
				);
			}
			addScaledVector(t, e) {
				return (
					(this.x += t.x * e),
					(this.y += t.y * e),
					(this.z += t.z * e),
					(this.w += t.w * e),
					this
				);
			}
			sub(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
					  ),
					  this.subVectors(t, e))
					: ((this.x -= t.x),
					  (this.y -= t.y),
					  (this.z -= t.z),
					  (this.w -= t.w),
					  this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
			}
			subVectors(t, e) {
				return (
					(this.x = t.x - e.x),
					(this.y = t.y - e.y),
					(this.z = t.z - e.z),
					(this.w = t.w - e.w),
					this
				);
			}
			multiply(t) {
				return (
					(this.x *= t.x),
					(this.y *= t.y),
					(this.z *= t.z),
					(this.w *= t.w),
					this
				);
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
			}
			applyMatrix4(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = this.w,
					s = t.elements;
				return (
					(this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
					(this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
					(this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
					(this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
					this
				);
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			setAxisAngleFromQuaternion(t) {
				this.w = 2 * Math.acos(t.w);
				const e = Math.sqrt(1 - t.w * t.w);
				return (
					e < 1e-4
						? ((this.x = 1), (this.y = 0), (this.z = 0))
						: ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
					this
				);
			}
			setAxisAngleFromRotationMatrix(t) {
				let e, n, i, r;
				const s = 0.01,
					a = 0.1,
					o = t.elements,
					l = o[0],
					c = o[4],
					h = o[8],
					u = o[1],
					d = o[5],
					p = o[9],
					m = o[2],
					f = o[6],
					g = o[10];
				if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
					if (
						Math.abs(c + u) < a &&
						Math.abs(h + m) < a &&
						Math.abs(p + f) < a &&
						Math.abs(l + d + g - 3) < a
					)
						return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					const t = (l + 1) / 2,
						o = (d + 1) / 2,
						v = (g + 1) / 2,
						y = (c + u) / 4,
						x = (h + m) / 4,
						_ = (p + f) / 4;
					return (
						t > o && t > v
							? t < s
								? ((n = 0), (i = 0.707106781), (r = 0.707106781))
								: ((n = Math.sqrt(t)), (i = y / n), (r = x / n))
							: o > v
							? o < s
								? ((n = 0.707106781), (i = 0), (r = 0.707106781))
								: ((i = Math.sqrt(o)), (n = y / i), (r = _ / i))
							: v < s
							? ((n = 0.707106781), (i = 0.707106781), (r = 0))
							: ((r = Math.sqrt(v)), (n = x / r), (i = _ / r)),
						this.set(n, i, r, e),
						this
					);
				}
				let v = Math.sqrt(
					(f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
				);
				return (
					Math.abs(v) < 0.001 && (v = 1),
					(this.x = (f - p) / v),
					(this.y = (h - m) / v),
					(this.z = (u - c) / v),
					(this.w = Math.acos((l + d + g - 1) / 2)),
					this
				);
			}
			min(t) {
				return (
					(this.x = Math.min(this.x, t.x)),
					(this.y = Math.min(this.y, t.y)),
					(this.z = Math.min(this.z, t.z)),
					(this.w = Math.min(this.w, t.w)),
					this
				);
			}
			max(t) {
				return (
					(this.x = Math.max(this.x, t.x)),
					(this.y = Math.max(this.y, t.y)),
					(this.z = Math.max(this.z, t.z)),
					(this.w = Math.max(this.w, t.w)),
					this
				);
			}
			clamp(t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					(this.z = Math.max(t.z, Math.min(e.z, this.z))),
					(this.w = Math.max(t.w, Math.min(e.w, this.w))),
					this
				);
			}
			clampScalar(t, e) {
				return (
					(this.x = Math.max(t, Math.min(e, this.x))),
					(this.y = Math.max(t, Math.min(e, this.y))),
					(this.z = Math.max(t, Math.min(e, this.z))),
					(this.w = Math.max(t, Math.min(e, this.w))),
					this
				);
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(
					Math.max(t, Math.min(e, n))
				);
			}
			floor() {
				return (
					(this.x = Math.floor(this.x)),
					(this.y = Math.floor(this.y)),
					(this.z = Math.floor(this.z)),
					(this.w = Math.floor(this.w)),
					this
				);
			}
			ceil() {
				return (
					(this.x = Math.ceil(this.x)),
					(this.y = Math.ceil(this.y)),
					(this.z = Math.ceil(this.z)),
					(this.w = Math.ceil(this.w)),
					this
				);
			}
			round() {
				return (
					(this.x = Math.round(this.x)),
					(this.y = Math.round(this.y)),
					(this.z = Math.round(this.z)),
					(this.w = Math.round(this.w)),
					this
				);
			}
			roundToZero() {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
					this
				);
			}
			negate() {
				return (
					(this.x = -this.x),
					(this.y = -this.y),
					(this.z = -this.z),
					(this.w = -this.w),
					this
				);
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
			}
			lengthSq() {
				return (
					this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
				);
			}
			length() {
				return Math.sqrt(
					this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
				);
			}
			manhattanLength() {
				return (
					Math.abs(this.x) +
					Math.abs(this.y) +
					Math.abs(this.z) +
					Math.abs(this.w)
				);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (
					(this.x += (t.x - this.x) * e),
					(this.y += (t.y - this.y) * e),
					(this.z += (t.z - this.z) * e),
					(this.w += (t.w - this.w) * e),
					this
				);
			}
			lerpVectors(t, e, n) {
				return (
					(this.x = t.x + (e.x - t.x) * n),
					(this.y = t.y + (e.y - t.y) * n),
					(this.z = t.z + (e.z - t.z) * n),
					(this.w = t.w + (e.w - t.w) * n),
					this
				);
			}
			equals(t) {
				return (
					t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
				);
			}
			fromArray(t, e = 0) {
				return (
					(this.x = t[e]),
					(this.y = t[e + 1]),
					(this.z = t[e + 2]),
					(this.w = t[e + 3]),
					this
				);
			}
			toArray(t = [], e = 0) {
				return (
					(t[e] = this.x),
					(t[e + 1] = this.y),
					(t[e + 2] = this.z),
					(t[e + 3] = this.w),
					t
				);
			}
			fromBufferAttribute(t, e, n) {
				return (
					void 0 !== n &&
						console.warn(
							"THREE.Vector4: offset has been removed from .fromBufferAttribute()."
						),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					(this.z = t.getZ(e)),
					(this.w = t.getW(e)),
					this
				);
			}
			random() {
				return (
					(this.x = Math.random()),
					(this.y = Math.random()),
					(this.z = Math.random()),
					(this.w = Math.random()),
					this
				);
			}
			*[Symbol.iterator]() {
				yield this.x, yield this.y, yield this.z, yield this.w;
			}
		}
		jt.prototype.isVector4 = !0;
		class qt extends mt {
			constructor(t, e, n = {}) {
				super(),
					(this.width = t),
					(this.height = e),
					(this.depth = 1),
					(this.scissor = new jt(0, 0, t, e)),
					(this.scissorTest = !1),
					(this.viewport = new jt(0, 0, t, e)),
					(this.texture = new Vt(
						void 0,
						n.mapping,
						n.wrapS,
						n.wrapT,
						n.magFilter,
						n.minFilter,
						n.format,
						n.type,
						n.anisotropy,
						n.encoding
					)),
					(this.texture.isRenderTargetTexture = !0),
					(this.texture.image = { width: t, height: e, depth: 1 }),
					(this.texture.generateMipmaps =
						void 0 !== n.generateMipmaps && n.generateMipmaps),
					(this.texture.internalFormat =
						void 0 !== n.internalFormat ? n.internalFormat : null),
					(this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g),
					(this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
					(this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
					(this.depthTexture =
						void 0 !== n.depthTexture ? n.depthTexture : null);
			}
			setTexture(t) {
				(t.image = {
					width: this.width,
					height: this.height,
					depth: this.depth,
				}),
					(this.texture = t);
			}
			setSize(t, e, n = 1) {
				(this.width === t && this.height === e && this.depth === n) ||
					((this.width = t),
					(this.height = e),
					(this.depth = n),
					(this.texture.image.width = t),
					(this.texture.image.height = e),
					(this.texture.image.depth = n),
					this.dispose()),
					this.viewport.set(0, 0, t, e),
					this.scissor.set(0, 0, t, e);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return (
					(this.width = t.width),
					(this.height = t.height),
					(this.depth = t.depth),
					this.viewport.copy(t.viewport),
					(this.texture = t.texture.clone()),
					(this.texture.image = Object.assign({}, t.texture.image)),
					(this.depthBuffer = t.depthBuffer),
					(this.stencilBuffer = t.stencilBuffer),
					(this.depthTexture = t.depthTexture),
					this
				);
			}
			dispose() {
				this.dispatchEvent({ type: "dispose" });
			}
		}
		qt.prototype.isWebGLRenderTarget = !0;
		class Xt extends qt {
			constructor(t, e, n) {
				super(t, e);
				const i = this.texture;
				this.texture = [];
				for (let t = 0; t < n; t++) this.texture[t] = i.clone();
			}
			setSize(t, e, n = 1) {
				if (this.width !== t || this.height !== e || this.depth !== n) {
					(this.width = t), (this.height = e), (this.depth = n);
					for (let i = 0, r = this.texture.length; i < r; i++)
						(this.texture[i].image.width = t),
							(this.texture[i].image.height = e),
							(this.texture[i].image.depth = n);
					this.dispose();
				}
				return (
					this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this
				);
			}
			copy(t) {
				this.dispose(),
					(this.width = t.width),
					(this.height = t.height),
					(this.depth = t.depth),
					this.viewport.set(0, 0, this.width, this.height),
					this.scissor.set(0, 0, this.width, this.height),
					(this.depthBuffer = t.depthBuffer),
					(this.stencilBuffer = t.stencilBuffer),
					(this.depthTexture = t.depthTexture),
					(this.texture.length = 0);
				for (let e = 0, n = t.texture.length; e < n; e++)
					this.texture[e] = t.texture[e].clone();
				return this;
			}
		}
		Xt.prototype.isWebGLMultipleRenderTargets = !0;
		class Jt extends qt {
			constructor(t, e, n = {}) {
				super(t, e, n),
					(this.samples = 4),
					(this.ignoreDepthForMultisampleCopy =
						void 0 === n.ignoreDepth || n.ignoreDepth),
					(this.useRenderToTexture =
						void 0 !== n.useRenderToTexture && n.useRenderToTexture),
					(this.useRenderbuffer = !1 === this.useRenderToTexture);
			}
			copy(t) {
				return (
					super.copy.call(this, t),
					(this.samples = t.samples),
					(this.useRenderToTexture = t.useRenderToTexture),
					(this.useRenderbuffer = t.useRenderbuffer),
					this
				);
			}
		}
		Jt.prototype.isWebGLMultisampleRenderTarget = !0;
		class Yt {
			constructor(t = 0, e = 0, n = 0, i = 1) {
				(this._x = t), (this._y = e), (this._z = n), (this._w = i);
			}
			static slerp(t, e, n, i) {
				return (
					console.warn(
						"THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
					),
					n.slerpQuaternions(t, e, i)
				);
			}
			static slerpFlat(t, e, n, i, r, s, a) {
				let o = n[i + 0],
					l = n[i + 1],
					c = n[i + 2],
					h = n[i + 3];
				const u = r[s + 0],
					d = r[s + 1],
					p = r[s + 2],
					m = r[s + 3];
				if (0 === a)
					return (
						(t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
					);
				if (1 === a)
					return (
						(t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m)
					);
				if (h !== m || o !== u || l !== d || c !== p) {
					let t = 1 - a;
					const e = o * u + l * d + c * p + h * m,
						n = e >= 0 ? 1 : -1,
						i = 1 - e * e;
					if (i > Number.EPSILON) {
						const r = Math.sqrt(i),
							s = Math.atan2(r, e * n);
						(t = Math.sin(t * s) / r), (a = Math.sin(a * s) / r);
					}
					const r = a * n;
					if (
						((o = o * t + u * r),
						(l = l * t + d * r),
						(c = c * t + p * r),
						(h = h * t + m * r),
						t === 1 - a)
					) {
						const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
						(o *= t), (l *= t), (c *= t), (h *= t);
					}
				}
				(t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
			}
			static multiplyQuaternionsFlat(t, e, n, i, r, s) {
				const a = n[i],
					o = n[i + 1],
					l = n[i + 2],
					c = n[i + 3],
					h = r[s],
					u = r[s + 1],
					d = r[s + 2],
					p = r[s + 3];
				return (
					(t[e] = a * p + c * h + o * d - l * u),
					(t[e + 1] = o * p + c * u + l * h - a * d),
					(t[e + 2] = l * p + c * d + a * u - o * h),
					(t[e + 3] = c * p - a * h - o * u - l * d),
					t
				);
			}
			get x() {
				return this._x;
			}
			set x(t) {
				(this._x = t), this._onChangeCallback();
			}
			get y() {
				return this._y;
			}
			set y(t) {
				(this._y = t), this._onChangeCallback();
			}
			get z() {
				return this._z;
			}
			set z(t) {
				(this._z = t), this._onChangeCallback();
			}
			get w() {
				return this._w;
			}
			set w(t) {
				(this._w = t), this._onChangeCallback();
			}
			set(t, e, n, i) {
				return (
					(this._x = t),
					(this._y = e),
					(this._z = n),
					(this._w = i),
					this._onChangeCallback(),
					this
				);
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._w);
			}
			copy(t) {
				return (
					(this._x = t.x),
					(this._y = t.y),
					(this._z = t.z),
					(this._w = t.w),
					this._onChangeCallback(),
					this
				);
			}
			setFromEuler(t, e) {
				if (!t || !t.isEuler)
					throw new Error(
						"THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
					);
				const n = t._x,
					i = t._y,
					r = t._z,
					s = t._order,
					a = Math.cos,
					o = Math.sin,
					l = a(n / 2),
					c = a(i / 2),
					h = a(r / 2),
					u = o(n / 2),
					d = o(i / 2),
					p = o(r / 2);
				switch (s) {
					case "XYZ":
						(this._x = u * c * h + l * d * p),
							(this._y = l * d * h - u * c * p),
							(this._z = l * c * p + u * d * h),
							(this._w = l * c * h - u * d * p);
						break;
					case "YXZ":
						(this._x = u * c * h + l * d * p),
							(this._y = l * d * h - u * c * p),
							(this._z = l * c * p - u * d * h),
							(this._w = l * c * h + u * d * p);
						break;
					case "ZXY":
						(this._x = u * c * h - l * d * p),
							(this._y = l * d * h + u * c * p),
							(this._z = l * c * p + u * d * h),
							(this._w = l * c * h - u * d * p);
						break;
					case "ZYX":
						(this._x = u * c * h - l * d * p),
							(this._y = l * d * h + u * c * p),
							(this._z = l * c * p - u * d * h),
							(this._w = l * c * h + u * d * p);
						break;
					case "YZX":
						(this._x = u * c * h + l * d * p),
							(this._y = l * d * h + u * c * p),
							(this._z = l * c * p - u * d * h),
							(this._w = l * c * h - u * d * p);
						break;
					case "XZY":
						(this._x = u * c * h - l * d * p),
							(this._y = l * d * h - u * c * p),
							(this._z = l * c * p + u * d * h),
							(this._w = l * c * h + u * d * p);
						break;
					default:
						console.warn(
							"THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
								s
						);
				}
				return !1 !== e && this._onChangeCallback(), this;
			}
			setFromAxisAngle(t, e) {
				const n = e / 2,
					i = Math.sin(n);
				return (
					(this._x = t.x * i),
					(this._y = t.y * i),
					(this._z = t.z * i),
					(this._w = Math.cos(n)),
					this._onChangeCallback(),
					this
				);
			}
			setFromRotationMatrix(t) {
				const e = t.elements,
					n = e[0],
					i = e[4],
					r = e[8],
					s = e[1],
					a = e[5],
					o = e[9],
					l = e[2],
					c = e[6],
					h = e[10],
					u = n + a + h;
				if (u > 0) {
					const t = 0.5 / Math.sqrt(u + 1);
					(this._w = 0.25 / t),
						(this._x = (c - o) * t),
						(this._y = (r - l) * t),
						(this._z = (s - i) * t);
				} else if (n > a && n > h) {
					const t = 2 * Math.sqrt(1 + n - a - h);
					(this._w = (c - o) / t),
						(this._x = 0.25 * t),
						(this._y = (i + s) / t),
						(this._z = (r + l) / t);
				} else if (a > h) {
					const t = 2 * Math.sqrt(1 + a - n - h);
					(this._w = (r - l) / t),
						(this._x = (i + s) / t),
						(this._y = 0.25 * t),
						(this._z = (o + c) / t);
				} else {
					const t = 2 * Math.sqrt(1 + h - n - a);
					(this._w = (s - i) / t),
						(this._x = (r + l) / t),
						(this._y = (o + c) / t),
						(this._z = 0.25 * t);
				}
				return this._onChangeCallback(), this;
			}
			setFromUnitVectors(t, e) {
				let n = t.dot(e) + 1;
				return (
					n < Number.EPSILON
						? ((n = 0),
						  Math.abs(t.x) > Math.abs(t.z)
								? ((this._x = -t.y),
								  (this._y = t.x),
								  (this._z = 0),
								  (this._w = n))
								: ((this._x = 0),
								  (this._y = -t.z),
								  (this._z = t.y),
								  (this._w = n)))
						: ((this._x = t.y * e.z - t.z * e.y),
						  (this._y = t.z * e.x - t.x * e.z),
						  (this._z = t.x * e.y - t.y * e.x),
						  (this._w = n)),
					this.normalize()
				);
			}
			angleTo(t) {
				return 2 * Math.acos(Math.abs(_t(this.dot(t), -1, 1)));
			}
			rotateTowards(t, e) {
				const n = this.angleTo(t);
				if (0 === n) return this;
				const i = Math.min(1, e / n);
				return this.slerp(t, i), this;
			}
			identity() {
				return this.set(0, 0, 0, 1);
			}
			invert() {
				return this.conjugate();
			}
			conjugate() {
				return (
					(this._x *= -1),
					(this._y *= -1),
					(this._z *= -1),
					this._onChangeCallback(),
					this
				);
			}
			dot(t) {
				return (
					this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
				);
			}
			lengthSq() {
				return (
					this._x * this._x +
					this._y * this._y +
					this._z * this._z +
					this._w * this._w
				);
			}
			length() {
				return Math.sqrt(
					this._x * this._x +
						this._y * this._y +
						this._z * this._z +
						this._w * this._w
				);
			}
			normalize() {
				let t = this.length();
				return (
					0 === t
						? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
						: ((t = 1 / t),
						  (this._x = this._x * t),
						  (this._y = this._y * t),
						  (this._z = this._z * t),
						  (this._w = this._w * t)),
					this._onChangeCallback(),
					this
				);
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
					  ),
					  this.multiplyQuaternions(t, e))
					: this.multiplyQuaternions(this, t);
			}
			premultiply(t) {
				return this.multiplyQuaternions(t, this);
			}
			multiplyQuaternions(t, e) {
				const n = t._x,
					i = t._y,
					r = t._z,
					s = t._w,
					a = e._x,
					o = e._y,
					l = e._z,
					c = e._w;
				return (
					(this._x = n * c + s * a + i * l - r * o),
					(this._y = i * c + s * o + r * a - n * l),
					(this._z = r * c + s * l + n * o - i * a),
					(this._w = s * c - n * a - i * o - r * l),
					this._onChangeCallback(),
					this
				);
			}
			slerp(t, e) {
				if (0 === e) return this;
				if (1 === e) return this.copy(t);
				const n = this._x,
					i = this._y,
					r = this._z,
					s = this._w;
				let a = s * t._w + n * t._x + i * t._y + r * t._z;
				if (
					(a < 0
						? ((this._w = -t._w),
						  (this._x = -t._x),
						  (this._y = -t._y),
						  (this._z = -t._z),
						  (a = -a))
						: this.copy(t),
					a >= 1)
				)
					return (
						(this._w = s), (this._x = n), (this._y = i), (this._z = r), this
					);
				const o = 1 - a * a;
				if (o <= Number.EPSILON) {
					const t = 1 - e;
					return (
						(this._w = t * s + e * this._w),
						(this._x = t * n + e * this._x),
						(this._y = t * i + e * this._y),
						(this._z = t * r + e * this._z),
						this.normalize(),
						this._onChangeCallback(),
						this
					);
				}
				const l = Math.sqrt(o),
					c = Math.atan2(l, a),
					h = Math.sin((1 - e) * c) / l,
					u = Math.sin(e * c) / l;
				return (
					(this._w = s * h + this._w * u),
					(this._x = n * h + this._x * u),
					(this._y = i * h + this._y * u),
					(this._z = r * h + this._z * u),
					this._onChangeCallback(),
					this
				);
			}
			slerpQuaternions(t, e, n) {
				return this.copy(t).slerp(e, n);
			}
			random() {
				const t = Math.random(),
					e = Math.sqrt(1 - t),
					n = Math.sqrt(t),
					i = 2 * Math.PI * Math.random(),
					r = 2 * Math.PI * Math.random();
				return this.set(
					e * Math.cos(i),
					n * Math.sin(r),
					n * Math.cos(r),
					e * Math.sin(i)
				);
			}
			equals(t) {
				return (
					t._x === this._x &&
					t._y === this._y &&
					t._z === this._z &&
					t._w === this._w
				);
			}
			fromArray(t, e = 0) {
				return (
					(this._x = t[e]),
					(this._y = t[e + 1]),
					(this._z = t[e + 2]),
					(this._w = t[e + 3]),
					this._onChangeCallback(),
					this
				);
			}
			toArray(t = [], e = 0) {
				return (
					(t[e] = this._x),
					(t[e + 1] = this._y),
					(t[e + 2] = this._z),
					(t[e + 3] = this._w),
					t
				);
			}
			fromBufferAttribute(t, e) {
				return (
					(this._x = t.getX(e)),
					(this._y = t.getY(e)),
					(this._z = t.getZ(e)),
					(this._w = t.getW(e)),
					this
				);
			}
			_onChange(t) {
				return (this._onChangeCallback = t), this;
			}
			_onChangeCallback() {}
		}
		Yt.prototype.isQuaternion = !0;
		class Zt {
			constructor(t = 0, e = 0, n = 0) {
				(this.x = t), (this.y = e), (this.z = n);
			}
			set(t, e, n) {
				return (
					void 0 === n && (n = this.z),
					(this.x = t),
					(this.y = e),
					(this.z = n),
					this
				);
			}
			setScalar(t) {
				return (this.x = t), (this.y = t), (this.z = t), this;
			}
			setX(t) {
				return (this.x = t), this;
			}
			setY(t) {
				return (this.y = t), this;
			}
			setZ(t) {
				return (this.z = t), this;
			}
			setComponent(t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					default:
						throw new Error("index is out of range: " + t);
				}
				return this;
			}
			getComponent(t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					default:
						throw new Error("index is out of range: " + t);
				}
			}
			clone() {
				return new this.constructor(this.x, this.y, this.z);
			}
			copy(t) {
				return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
			}
			add(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
					  ),
					  this.addVectors(t, e))
					: ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
			}
			addScalar(t) {
				return (this.x += t), (this.y += t), (this.z += t), this;
			}
			addVectors(t, e) {
				return (
					(this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
				);
			}
			addScaledVector(t, e) {
				return (
					(this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
				);
			}
			sub(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
					  ),
					  this.subVectors(t, e))
					: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
			}
			subScalar(t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), this;
			}
			subVectors(t, e) {
				return (
					(this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
				);
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
					  ),
					  this.multiplyVectors(t, e))
					: ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
			}
			multiplyScalar(t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), this;
			}
			multiplyVectors(t, e) {
				return (
					(this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
				);
			}
			applyEuler(t) {
				return (
					(t && t.isEuler) ||
						console.error(
							"THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
						),
					this.applyQuaternion(Qt.setFromEuler(t))
				);
			}
			applyAxisAngle(t, e) {
				return this.applyQuaternion(Qt.setFromAxisAngle(t, e));
			}
			applyMatrix3(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (
					(this.x = r[0] * e + r[3] * n + r[6] * i),
					(this.y = r[1] * e + r[4] * n + r[7] * i),
					(this.z = r[2] * e + r[5] * n + r[8] * i),
					this
				);
			}
			applyNormalMatrix(t) {
				return this.applyMatrix3(t).normalize();
			}
			applyMatrix4(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements,
					s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
				return (
					(this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s),
					(this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s),
					(this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s),
					this
				);
			}
			applyQuaternion(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.x,
					s = t.y,
					a = t.z,
					o = t.w,
					l = o * e + s * i - a * n,
					c = o * n + a * e - r * i,
					h = o * i + r * n - s * e,
					u = -r * e - s * n - a * i;
				return (
					(this.x = l * o + u * -r + c * -a - h * -s),
					(this.y = c * o + u * -s + h * -r - l * -a),
					(this.z = h * o + u * -a + l * -s - c * -r),
					this
				);
			}
			project(t) {
				return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
					t.projectionMatrix
				);
			}
			unproject(t) {
				return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
					t.matrixWorld
				);
			}
			transformDirection(t) {
				const e = this.x,
					n = this.y,
					i = this.z,
					r = t.elements;
				return (
					(this.x = r[0] * e + r[4] * n + r[8] * i),
					(this.y = r[1] * e + r[5] * n + r[9] * i),
					(this.z = r[2] * e + r[6] * n + r[10] * i),
					this.normalize()
				);
			}
			divide(t) {
				return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
			}
			divideScalar(t) {
				return this.multiplyScalar(1 / t);
			}
			min(t) {
				return (
					(this.x = Math.min(this.x, t.x)),
					(this.y = Math.min(this.y, t.y)),
					(this.z = Math.min(this.z, t.z)),
					this
				);
			}
			max(t) {
				return (
					(this.x = Math.max(this.x, t.x)),
					(this.y = Math.max(this.y, t.y)),
					(this.z = Math.max(this.z, t.z)),
					this
				);
			}
			clamp(t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					(this.z = Math.max(t.z, Math.min(e.z, this.z))),
					this
				);
			}
			clampScalar(t, e) {
				return (
					(this.x = Math.max(t, Math.min(e, this.x))),
					(this.y = Math.max(t, Math.min(e, this.y))),
					(this.z = Math.max(t, Math.min(e, this.z))),
					this
				);
			}
			clampLength(t, e) {
				const n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(
					Math.max(t, Math.min(e, n))
				);
			}
			floor() {
				return (
					(this.x = Math.floor(this.x)),
					(this.y = Math.floor(this.y)),
					(this.z = Math.floor(this.z)),
					this
				);
			}
			ceil() {
				return (
					(this.x = Math.ceil(this.x)),
					(this.y = Math.ceil(this.y)),
					(this.z = Math.ceil(this.z)),
					this
				);
			}
			round() {
				return (
					(this.x = Math.round(this.x)),
					(this.y = Math.round(this.y)),
					(this.z = Math.round(this.z)),
					this
				);
			}
			roundToZero() {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					this
				);
			}
			negate() {
				return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
			}
			dot(t) {
				return this.x * t.x + this.y * t.y + this.z * t.z;
			}
			lengthSq() {
				return this.x * this.x + this.y * this.y + this.z * this.z;
			}
			length() {
				return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
			}
			manhattanLength() {
				return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
			}
			normalize() {
				return this.divideScalar(this.length() || 1);
			}
			setLength(t) {
				return this.normalize().multiplyScalar(t);
			}
			lerp(t, e) {
				return (
					(this.x += (t.x - this.x) * e),
					(this.y += (t.y - this.y) * e),
					(this.z += (t.z - this.z) * e),
					this
				);
			}
			lerpVectors(t, e, n) {
				return (
					(this.x = t.x + (e.x - t.x) * n),
					(this.y = t.y + (e.y - t.y) * n),
					(this.z = t.z + (e.z - t.z) * n),
					this
				);
			}
			cross(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
					  ),
					  this.crossVectors(t, e))
					: this.crossVectors(this, t);
			}
			crossVectors(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					s = e.x,
					a = e.y,
					o = e.z;
				return (
					(this.x = i * o - r * a),
					(this.y = r * s - n * o),
					(this.z = n * a - i * s),
					this
				);
			}
			projectOnVector(t) {
				const e = t.lengthSq();
				if (0 === e) return this.set(0, 0, 0);
				const n = t.dot(this) / e;
				return this.copy(t).multiplyScalar(n);
			}
			projectOnPlane(t) {
				return Kt.copy(this).projectOnVector(t), this.sub(Kt);
			}
			reflect(t) {
				return this.sub(Kt.copy(t).multiplyScalar(2 * this.dot(t)));
			}
			angleTo(t) {
				const e = Math.sqrt(this.lengthSq() * t.lengthSq());
				if (0 === e) return Math.PI / 2;
				const n = this.dot(t) / e;
				return Math.acos(_t(n, -1, 1));
			}
			distanceTo(t) {
				return Math.sqrt(this.distanceToSquared(t));
			}
			distanceToSquared(t) {
				const e = this.x - t.x,
					n = this.y - t.y,
					i = this.z - t.z;
				return e * e + n * n + i * i;
			}
			manhattanDistanceTo(t) {
				return (
					Math.abs(this.x - t.x) +
					Math.abs(this.y - t.y) +
					Math.abs(this.z - t.z)
				);
			}
			setFromSpherical(t) {
				return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
			}
			setFromSphericalCoords(t, e, n) {
				const i = Math.sin(e) * t;
				return (
					(this.x = i * Math.sin(n)),
					(this.y = Math.cos(e) * t),
					(this.z = i * Math.cos(n)),
					this
				);
			}
			setFromCylindrical(t) {
				return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
			}
			setFromCylindricalCoords(t, e, n) {
				return (
					(this.x = t * Math.sin(e)),
					(this.y = n),
					(this.z = t * Math.cos(e)),
					this
				);
			}
			setFromMatrixPosition(t) {
				const e = t.elements;
				return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
			}
			setFromMatrixScale(t) {
				const e = this.setFromMatrixColumn(t, 0).length(),
					n = this.setFromMatrixColumn(t, 1).length(),
					i = this.setFromMatrixColumn(t, 2).length();
				return (this.x = e), (this.y = n), (this.z = i), this;
			}
			setFromMatrixColumn(t, e) {
				return this.fromArray(t.elements, 4 * e);
			}
			setFromMatrix3Column(t, e) {
				return this.fromArray(t.elements, 3 * e);
			}
			equals(t) {
				return t.x === this.x && t.y === this.y && t.z === this.z;
			}
			fromArray(t, e = 0) {
				return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
			}
			toArray(t = [], e = 0) {
				return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
			}
			fromBufferAttribute(t, e, n) {
				return (
					void 0 !== n &&
						console.warn(
							"THREE.Vector3: offset has been removed from .fromBufferAttribute()."
						),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					(this.z = t.getZ(e)),
					this
				);
			}
			random() {
				return (
					(this.x = Math.random()),
					(this.y = Math.random()),
					(this.z = Math.random()),
					this
				);
			}
			randomDirection() {
				const t = 2 * (Math.random() - 0.5),
					e = Math.random() * Math.PI * 2,
					n = Math.sqrt(1 - t ** 2);
				return (
					(this.x = n * Math.cos(e)),
					(this.y = n * Math.sin(e)),
					(this.z = t),
					this
				);
			}
			*[Symbol.iterator]() {
				yield this.x, yield this.y, yield this.z;
			}
		}
		Zt.prototype.isVector3 = !0;
		const Kt = new Zt(),
			Qt = new Yt();
		class $t {
			constructor(
				t = new Zt(1 / 0, 1 / 0, 1 / 0),
				e = new Zt(-1 / 0, -1 / 0, -1 / 0)
			) {
				(this.min = t), (this.max = e);
			}
			set(t, e) {
				return this.min.copy(t), this.max.copy(e), this;
			}
			setFromArray(t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					s = -1 / 0,
					a = -1 / 0;
				for (let o = 0, l = t.length; o < l; o += 3) {
					const l = t[o],
						c = t[o + 1],
						h = t[o + 2];
					l < e && (e = l),
						c < n && (n = c),
						h < i && (i = h),
						l > r && (r = l),
						c > s && (s = c),
						h > a && (a = h);
				}
				return this.min.set(e, n, i), this.max.set(r, s, a), this;
			}
			setFromBufferAttribute(t) {
				let e = 1 / 0,
					n = 1 / 0,
					i = 1 / 0,
					r = -1 / 0,
					s = -1 / 0,
					a = -1 / 0;
				for (let o = 0, l = t.count; o < l; o++) {
					const l = t.getX(o),
						c = t.getY(o),
						h = t.getZ(o);
					l < e && (e = l),
						c < n && (n = c),
						h < i && (i = h),
						l > r && (r = l),
						c > s && (s = c),
						h > a && (a = h);
				}
				return this.min.set(e, n, i), this.max.set(r, s, a), this;
			}
			setFromPoints(t) {
				this.makeEmpty();
				for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
				return this;
			}
			setFromCenterAndSize(t, e) {
				const n = ee.copy(e).multiplyScalar(0.5);
				return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
			}
			setFromObject(t, e = !1) {
				return this.makeEmpty(), this.expandByObject(t, e);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this;
			}
			makeEmpty() {
				return (
					(this.min.x = this.min.y = this.min.z = 1 / 0),
					(this.max.x = this.max.y = this.max.z = -1 / 0),
					this
				);
			}
			isEmpty() {
				return (
					this.max.x < this.min.x ||
					this.max.y < this.min.y ||
					this.max.z < this.min.z
				);
			}
			getCenter(t) {
				return this.isEmpty()
					? t.set(0, 0, 0)
					: t.addVectors(this.min, this.max).multiplyScalar(0.5);
			}
			getSize(t) {
				return this.isEmpty()
					? t.set(0, 0, 0)
					: t.subVectors(this.max, this.min);
			}
			expandByPoint(t) {
				return this.min.min(t), this.max.max(t), this;
			}
			expandByVector(t) {
				return this.min.sub(t), this.max.add(t), this;
			}
			expandByScalar(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this;
			}
			expandByObject(t, e = !1) {
				t.updateWorldMatrix(!1, !1);
				const n = t.geometry;
				if (void 0 !== n)
					if (e && null != n.attributes && void 0 !== n.attributes.position) {
						const e = n.attributes.position;
						for (let n = 0, i = e.count; n < i; n++)
							ee.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
								this.expandByPoint(ee);
					} else
						null === n.boundingBox && n.computeBoundingBox(),
							ne.copy(n.boundingBox),
							ne.applyMatrix4(t.matrixWorld),
							this.union(ne);
				const i = t.children;
				for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
				return this;
			}
			containsPoint(t) {
				return !(
					t.x < this.min.x ||
					t.x > this.max.x ||
					t.y < this.min.y ||
					t.y > this.max.y ||
					t.z < this.min.z ||
					t.z > this.max.z
				);
			}
			containsBox(t) {
				return (
					this.min.x <= t.min.x &&
					t.max.x <= this.max.x &&
					this.min.y <= t.min.y &&
					t.max.y <= this.max.y &&
					this.min.z <= t.min.z &&
					t.max.z <= this.max.z
				);
			}
			getParameter(t, e) {
				return e.set(
					(t.x - this.min.x) / (this.max.x - this.min.x),
					(t.y - this.min.y) / (this.max.y - this.min.y),
					(t.z - this.min.z) / (this.max.z - this.min.z)
				);
			}
			intersectsBox(t) {
				return !(
					t.max.x < this.min.x ||
					t.min.x > this.max.x ||
					t.max.y < this.min.y ||
					t.min.y > this.max.y ||
					t.max.z < this.min.z ||
					t.min.z > this.max.z
				);
			}
			intersectsSphere(t) {
				return (
					this.clampPoint(t.center, ee),
					ee.distanceToSquared(t.center) <= t.radius * t.radius
				);
			}
			intersectsPlane(t) {
				let e, n;
				return (
					t.normal.x > 0
						? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
						: ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
					t.normal.y > 0
						? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
						: ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
					t.normal.z > 0
						? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
						: ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
					e <= -t.constant && n >= -t.constant
				);
			}
			intersectsTriangle(t) {
				if (this.isEmpty()) return !1;
				this.getCenter(ce),
					he.subVectors(this.max, ce),
					ie.subVectors(t.a, ce),
					re.subVectors(t.b, ce),
					se.subVectors(t.c, ce),
					ae.subVectors(re, ie),
					oe.subVectors(se, re),
					le.subVectors(ie, se);
				let e = [
					0,
					-ae.z,
					ae.y,
					0,
					-oe.z,
					oe.y,
					0,
					-le.z,
					le.y,
					ae.z,
					0,
					-ae.x,
					oe.z,
					0,
					-oe.x,
					le.z,
					0,
					-le.x,
					-ae.y,
					ae.x,
					0,
					-oe.y,
					oe.x,
					0,
					-le.y,
					le.x,
					0,
				];
				return (
					!!pe(e, ie, re, se, he) &&
					((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
					!!pe(e, ie, re, se, he) &&
						(ue.crossVectors(ae, oe),
						(e = [ue.x, ue.y, ue.z]),
						pe(e, ie, re, se, he)))
				);
			}
			clampPoint(t, e) {
				return e.copy(t).clamp(this.min, this.max);
			}
			distanceToPoint(t) {
				return ee.copy(t).clamp(this.min, this.max).sub(t).length();
			}
			getBoundingSphere(t) {
				return (
					this.getCenter(t.center),
					(t.radius = 0.5 * this.getSize(ee).length()),
					t
				);
			}
			intersect(t) {
				return (
					this.min.max(t.min),
					this.max.min(t.max),
					this.isEmpty() && this.makeEmpty(),
					this
				);
			}
			union(t) {
				return this.min.min(t.min), this.max.max(t.max), this;
			}
			applyMatrix4(t) {
				return (
					this.isEmpty() ||
						(te[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
						te[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
						te[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
						te[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
						te[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
						te[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
						te[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
						te[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
						this.setFromPoints(te)),
					this
				);
			}
			translate(t) {
				return this.min.add(t), this.max.add(t), this;
			}
			equals(t) {
				return t.min.equals(this.min) && t.max.equals(this.max);
			}
		}
		$t.prototype.isBox3 = !0;
		const te = [
				new Zt(),
				new Zt(),
				new Zt(),
				new Zt(),
				new Zt(),
				new Zt(),
				new Zt(),
				new Zt(),
			],
			ee = new Zt(),
			ne = new $t(),
			ie = new Zt(),
			re = new Zt(),
			se = new Zt(),
			ae = new Zt(),
			oe = new Zt(),
			le = new Zt(),
			ce = new Zt(),
			he = new Zt(),
			ue = new Zt(),
			de = new Zt();
		function pe(t, e, n, i, r) {
			for (let s = 0, a = t.length - 3; s <= a; s += 3) {
				de.fromArray(t, s);
				const a =
						r.x * Math.abs(de.x) + r.y * Math.abs(de.y) + r.z * Math.abs(de.z),
					o = e.dot(de),
					l = n.dot(de),
					c = i.dot(de);
				if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
			}
			return !0;
		}
		const me = new $t(),
			fe = new Zt(),
			ge = new Zt(),
			ve = new Zt();
		class ye {
			constructor(t = new Zt(), e = -1) {
				(this.center = t), (this.radius = e);
			}
			set(t, e) {
				return this.center.copy(t), (this.radius = e), this;
			}
			setFromPoints(t, e) {
				const n = this.center;
				void 0 !== e ? n.copy(e) : me.setFromPoints(t).getCenter(n);
				let i = 0;
				for (let e = 0, r = t.length; e < r; e++)
					i = Math.max(i, n.distanceToSquared(t[e]));
				return (this.radius = Math.sqrt(i)), this;
			}
			copy(t) {
				return this.center.copy(t.center), (this.radius = t.radius), this;
			}
			isEmpty() {
				return this.radius < 0;
			}
			makeEmpty() {
				return this.center.set(0, 0, 0), (this.radius = -1), this;
			}
			containsPoint(t) {
				return t.distanceToSquared(this.center) <= this.radius * this.radius;
			}
			distanceToPoint(t) {
				return t.distanceTo(this.center) - this.radius;
			}
			intersectsSphere(t) {
				const e = this.radius + t.radius;
				return t.center.distanceToSquared(this.center) <= e * e;
			}
			intersectsBox(t) {
				return t.intersectsSphere(this);
			}
			intersectsPlane(t) {
				return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
			}
			clampPoint(t, e) {
				const n = this.center.distanceToSquared(t);
				return (
					e.copy(t),
					n > this.radius * this.radius &&
						(e.sub(this.center).normalize(),
						e.multiplyScalar(this.radius).add(this.center)),
					e
				);
			}
			getBoundingBox(t) {
				return this.isEmpty()
					? (t.makeEmpty(), t)
					: (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
			}
			applyMatrix4(t) {
				return (
					this.center.applyMatrix4(t),
					(this.radius = this.radius * t.getMaxScaleOnAxis()),
					this
				);
			}
			translate(t) {
				return this.center.add(t), this;
			}
			expandByPoint(t) {
				ve.subVectors(t, this.center);
				const e = ve.lengthSq();
				if (e > this.radius * this.radius) {
					const t = Math.sqrt(e),
						n = 0.5 * (t - this.radius);
					this.center.add(ve.multiplyScalar(n / t)), (this.radius += n);
				}
				return this;
			}
			union(t) {
				return (
					!0 === this.center.equals(t.center)
						? ge.set(0, 0, 1).multiplyScalar(t.radius)
						: ge
								.subVectors(t.center, this.center)
								.normalize()
								.multiplyScalar(t.radius),
					this.expandByPoint(fe.copy(t.center).add(ge)),
					this.expandByPoint(fe.copy(t.center).sub(ge)),
					this
				);
			}
			equals(t) {
				return t.center.equals(this.center) && t.radius === this.radius;
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		const xe = new Zt(),
			_e = new Zt(),
			Me = new Zt(),
			be = new Zt(),
			we = new Zt(),
			Se = new Zt(),
			Te = new Zt();
		class Ee {
			constructor(t = new Zt(), e = new Zt(0, 0, -1)) {
				(this.origin = t), (this.direction = e);
			}
			set(t, e) {
				return this.origin.copy(t), this.direction.copy(e), this;
			}
			copy(t) {
				return (
					this.origin.copy(t.origin), this.direction.copy(t.direction), this
				);
			}
			at(t, e) {
				return e.copy(this.direction).multiplyScalar(t).add(this.origin);
			}
			lookAt(t) {
				return this.direction.copy(t).sub(this.origin).normalize(), this;
			}
			recast(t) {
				return this.origin.copy(this.at(t, xe)), this;
			}
			closestPointToPoint(t, e) {
				e.subVectors(t, this.origin);
				const n = e.dot(this.direction);
				return n < 0
					? e.copy(this.origin)
					: e.copy(this.direction).multiplyScalar(n).add(this.origin);
			}
			distanceToPoint(t) {
				return Math.sqrt(this.distanceSqToPoint(t));
			}
			distanceSqToPoint(t) {
				const e = xe.subVectors(t, this.origin).dot(this.direction);
				return e < 0
					? this.origin.distanceToSquared(t)
					: (xe.copy(this.direction).multiplyScalar(e).add(this.origin),
					  xe.distanceToSquared(t));
			}
			distanceSqToSegment(t, e, n, i) {
				_e.copy(t).add(e).multiplyScalar(0.5),
					Me.copy(e).sub(t).normalize(),
					be.copy(this.origin).sub(_e);
				const r = 0.5 * t.distanceTo(e),
					s = -this.direction.dot(Me),
					a = be.dot(this.direction),
					o = -be.dot(Me),
					l = be.lengthSq(),
					c = Math.abs(1 - s * s);
				let h, u, d, p;
				if (c > 0)
					if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
						if (u >= -p)
							if (u <= p) {
								const t = 1 / c;
								(h *= t),
									(u *= t),
									(d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
							} else
								(u = r),
									(h = Math.max(0, -(s * u + a))),
									(d = -h * h + u * (u + 2 * o) + l);
						else
							(u = -r),
								(h = Math.max(0, -(s * u + a))),
								(d = -h * h + u * (u + 2 * o) + l);
					else
						u <= -p
							? ((h = Math.max(0, -(-s * r + a))),
							  (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
							  (d = -h * h + u * (u + 2 * o) + l))
							: u <= p
							? ((h = 0),
							  (u = Math.min(Math.max(-r, -o), r)),
							  (d = u * (u + 2 * o) + l))
							: ((h = Math.max(0, -(s * r + a))),
							  (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
							  (d = -h * h + u * (u + 2 * o) + l));
				else
					(u = s > 0 ? -r : r),
						(h = Math.max(0, -(s * u + a))),
						(d = -h * h + u * (u + 2 * o) + l);
				return (
					n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
					i && i.copy(Me).multiplyScalar(u).add(_e),
					d
				);
			}
			intersectSphere(t, e) {
				xe.subVectors(t.center, this.origin);
				const n = xe.dot(this.direction),
					i = xe.dot(xe) - n * n,
					r = t.radius * t.radius;
				if (i > r) return null;
				const s = Math.sqrt(r - i),
					a = n - s,
					o = n + s;
				return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
			}
			intersectsSphere(t) {
				return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
			}
			distanceToPlane(t) {
				const e = t.normal.dot(this.direction);
				if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
				const n = -(this.origin.dot(t.normal) + t.constant) / e;
				return n >= 0 ? n : null;
			}
			intersectPlane(t, e) {
				const n = this.distanceToPlane(t);
				return null === n ? null : this.at(n, e);
			}
			intersectsPlane(t) {
				const e = t.distanceToPoint(this.origin);
				if (0 === e) return !0;
				return t.normal.dot(this.direction) * e < 0;
			}
			intersectBox(t, e) {
				let n, i, r, s, a, o;
				const l = 1 / this.direction.x,
					c = 1 / this.direction.y,
					h = 1 / this.direction.z,
					u = this.origin;
				return (
					l >= 0
						? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
						: ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
					c >= 0
						? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c))
						: ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
					n > s || r > i
						? null
						: ((r > n || n != n) && (n = r),
						  (s < i || i != i) && (i = s),
						  h >= 0
								? ((a = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
								: ((a = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
						  n > o || a > i
								? null
								: ((a > n || n != n) && (n = a),
								  (o < i || i != i) && (i = o),
								  i < 0 ? null : this.at(n >= 0 ? n : i, e)))
				);
			}
			intersectsBox(t) {
				return null !== this.intersectBox(t, xe);
			}
			intersectTriangle(t, e, n, i, r) {
				we.subVectors(e, t), Se.subVectors(n, t), Te.crossVectors(we, Se);
				let s,
					a = this.direction.dot(Te);
				if (a > 0) {
					if (i) return null;
					s = 1;
				} else {
					if (!(a < 0)) return null;
					(s = -1), (a = -a);
				}
				be.subVectors(this.origin, t);
				const o = s * this.direction.dot(Se.crossVectors(be, Se));
				if (o < 0) return null;
				const l = s * this.direction.dot(we.cross(be));
				if (l < 0) return null;
				if (o + l > a) return null;
				const c = -s * be.dot(Te);
				return c < 0 ? null : this.at(c / a, r);
			}
			applyMatrix4(t) {
				return (
					this.origin.applyMatrix4(t),
					this.direction.transformDirection(t),
					this
				);
			}
			equals(t) {
				return (
					t.origin.equals(this.origin) && t.direction.equals(this.direction)
				);
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		class Ae {
			constructor() {
				(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
					arguments.length > 0 &&
						console.error(
							"THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
						);
			}
			set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
				const g = this.elements;
				return (
					(g[0] = t),
					(g[4] = e),
					(g[8] = n),
					(g[12] = i),
					(g[1] = r),
					(g[5] = s),
					(g[9] = a),
					(g[13] = o),
					(g[2] = l),
					(g[6] = c),
					(g[10] = h),
					(g[14] = u),
					(g[3] = d),
					(g[7] = p),
					(g[11] = m),
					(g[15] = f),
					this
				);
			}
			identity() {
				return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			}
			clone() {
				return new Ae().fromArray(this.elements);
			}
			copy(t) {
				const e = this.elements,
					n = t.elements;
				return (
					(e[0] = n[0]),
					(e[1] = n[1]),
					(e[2] = n[2]),
					(e[3] = n[3]),
					(e[4] = n[4]),
					(e[5] = n[5]),
					(e[6] = n[6]),
					(e[7] = n[7]),
					(e[8] = n[8]),
					(e[9] = n[9]),
					(e[10] = n[10]),
					(e[11] = n[11]),
					(e[12] = n[12]),
					(e[13] = n[13]),
					(e[14] = n[14]),
					(e[15] = n[15]),
					this
				);
			}
			copyPosition(t) {
				const e = this.elements,
					n = t.elements;
				return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
			}
			setFromMatrix3(t) {
				const e = t.elements;
				return (
					this.set(
						e[0],
						e[3],
						e[6],
						0,
						e[1],
						e[4],
						e[7],
						0,
						e[2],
						e[5],
						e[8],
						0,
						0,
						0,
						0,
						1
					),
					this
				);
			}
			extractBasis(t, e, n) {
				return (
					t.setFromMatrixColumn(this, 0),
					e.setFromMatrixColumn(this, 1),
					n.setFromMatrixColumn(this, 2),
					this
				);
			}
			makeBasis(t, e, n) {
				return (
					this.set(
						t.x,
						e.x,
						n.x,
						0,
						t.y,
						e.y,
						n.y,
						0,
						t.z,
						e.z,
						n.z,
						0,
						0,
						0,
						0,
						1
					),
					this
				);
			}
			extractRotation(t) {
				const e = this.elements,
					n = t.elements,
					i = 1 / Re.setFromMatrixColumn(t, 0).length(),
					r = 1 / Re.setFromMatrixColumn(t, 1).length(),
					s = 1 / Re.setFromMatrixColumn(t, 2).length();
				return (
					(e[0] = n[0] * i),
					(e[1] = n[1] * i),
					(e[2] = n[2] * i),
					(e[3] = 0),
					(e[4] = n[4] * r),
					(e[5] = n[5] * r),
					(e[6] = n[6] * r),
					(e[7] = 0),
					(e[8] = n[8] * s),
					(e[9] = n[9] * s),
					(e[10] = n[10] * s),
					(e[11] = 0),
					(e[12] = 0),
					(e[13] = 0),
					(e[14] = 0),
					(e[15] = 1),
					this
				);
			}
			makeRotationFromEuler(t) {
				(t && t.isEuler) ||
					console.error(
						"THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
					);
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z,
					s = Math.cos(n),
					a = Math.sin(n),
					o = Math.cos(i),
					l = Math.sin(i),
					c = Math.cos(r),
					h = Math.sin(r);
				if ("XYZ" === t.order) {
					const t = s * c,
						n = s * h,
						i = a * c,
						r = a * h;
					(e[0] = o * c),
						(e[4] = -o * h),
						(e[8] = l),
						(e[1] = n + i * l),
						(e[5] = t - r * l),
						(e[9] = -a * o),
						(e[2] = r - t * l),
						(e[6] = i + n * l),
						(e[10] = s * o);
				} else if ("YXZ" === t.order) {
					const t = o * c,
						n = o * h,
						i = l * c,
						r = l * h;
					(e[0] = t + r * a),
						(e[4] = i * a - n),
						(e[8] = s * l),
						(e[1] = s * h),
						(e[5] = s * c),
						(e[9] = -a),
						(e[2] = n * a - i),
						(e[6] = r + t * a),
						(e[10] = s * o);
				} else if ("ZXY" === t.order) {
					const t = o * c,
						n = o * h,
						i = l * c,
						r = l * h;
					(e[0] = t - r * a),
						(e[4] = -s * h),
						(e[8] = i + n * a),
						(e[1] = n + i * a),
						(e[5] = s * c),
						(e[9] = r - t * a),
						(e[2] = -s * l),
						(e[6] = a),
						(e[10] = s * o);
				} else if ("ZYX" === t.order) {
					const t = s * c,
						n = s * h,
						i = a * c,
						r = a * h;
					(e[0] = o * c),
						(e[4] = i * l - n),
						(e[8] = t * l + r),
						(e[1] = o * h),
						(e[5] = r * l + t),
						(e[9] = n * l - i),
						(e[2] = -l),
						(e[6] = a * o),
						(e[10] = s * o);
				} else if ("YZX" === t.order) {
					const t = s * o,
						n = s * l,
						i = a * o,
						r = a * l;
					(e[0] = o * c),
						(e[4] = r - t * h),
						(e[8] = i * h + n),
						(e[1] = h),
						(e[5] = s * c),
						(e[9] = -a * c),
						(e[2] = -l * c),
						(e[6] = n * h + i),
						(e[10] = t - r * h);
				} else if ("XZY" === t.order) {
					const t = s * o,
						n = s * l,
						i = a * o,
						r = a * l;
					(e[0] = o * c),
						(e[4] = -h),
						(e[8] = l * c),
						(e[1] = t * h + r),
						(e[5] = s * c),
						(e[9] = n * h - i),
						(e[2] = i * h - n),
						(e[6] = a * c),
						(e[10] = r * h + t);
				}
				return (
					(e[3] = 0),
					(e[7] = 0),
					(e[11] = 0),
					(e[12] = 0),
					(e[13] = 0),
					(e[14] = 0),
					(e[15] = 1),
					this
				);
			}
			makeRotationFromQuaternion(t) {
				return this.compose(Ce, t, Pe);
			}
			lookAt(t, e, n) {
				const i = this.elements;
				return (
					Ne.subVectors(t, e),
					0 === Ne.lengthSq() && (Ne.z = 1),
					Ne.normalize(),
					De.crossVectors(n, Ne),
					0 === De.lengthSq() &&
						(1 === Math.abs(n.z) ? (Ne.x += 1e-4) : (Ne.z += 1e-4),
						Ne.normalize(),
						De.crossVectors(n, Ne)),
					De.normalize(),
					Ie.crossVectors(Ne, De),
					(i[0] = De.x),
					(i[4] = Ie.x),
					(i[8] = Ne.x),
					(i[1] = De.y),
					(i[5] = Ie.y),
					(i[9] = Ne.y),
					(i[2] = De.z),
					(i[6] = Ie.z),
					(i[10] = Ne.z),
					this
				);
			}
			multiply(t, e) {
				return void 0 !== e
					? (console.warn(
							"THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
					  ),
					  this.multiplyMatrices(t, e))
					: this.multiplyMatrices(this, t);
			}
			premultiply(t) {
				return this.multiplyMatrices(t, this);
			}
			multiplyMatrices(t, e) {
				const n = t.elements,
					i = e.elements,
					r = this.elements,
					s = n[0],
					a = n[4],
					o = n[8],
					l = n[12],
					c = n[1],
					h = n[5],
					u = n[9],
					d = n[13],
					p = n[2],
					m = n[6],
					f = n[10],
					g = n[14],
					v = n[3],
					y = n[7],
					x = n[11],
					_ = n[15],
					M = i[0],
					b = i[4],
					w = i[8],
					S = i[12],
					T = i[1],
					E = i[5],
					A = i[9],
					R = i[13],
					L = i[2],
					C = i[6],
					P = i[10],
					D = i[14],
					I = i[3],
					N = i[7],
					B = i[11],
					z = i[15];
				return (
					(r[0] = s * M + a * T + o * L + l * I),
					(r[4] = s * b + a * E + o * C + l * N),
					(r[8] = s * w + a * A + o * P + l * B),
					(r[12] = s * S + a * R + o * D + l * z),
					(r[1] = c * M + h * T + u * L + d * I),
					(r[5] = c * b + h * E + u * C + d * N),
					(r[9] = c * w + h * A + u * P + d * B),
					(r[13] = c * S + h * R + u * D + d * z),
					(r[2] = p * M + m * T + f * L + g * I),
					(r[6] = p * b + m * E + f * C + g * N),
					(r[10] = p * w + m * A + f * P + g * B),
					(r[14] = p * S + m * R + f * D + g * z),
					(r[3] = v * M + y * T + x * L + _ * I),
					(r[7] = v * b + y * E + x * C + _ * N),
					(r[11] = v * w + y * A + x * P + _ * B),
					(r[15] = v * S + y * R + x * D + _ * z),
					this
				);
			}
			multiplyScalar(t) {
				const e = this.elements;
				return (
					(e[0] *= t),
					(e[4] *= t),
					(e[8] *= t),
					(e[12] *= t),
					(e[1] *= t),
					(e[5] *= t),
					(e[9] *= t),
					(e[13] *= t),
					(e[2] *= t),
					(e[6] *= t),
					(e[10] *= t),
					(e[14] *= t),
					(e[3] *= t),
					(e[7] *= t),
					(e[11] *= t),
					(e[15] *= t),
					this
				);
			}
			determinant() {
				const t = this.elements,
					e = t[0],
					n = t[4],
					i = t[8],
					r = t[12],
					s = t[1],
					a = t[5],
					o = t[9],
					l = t[13],
					c = t[2],
					h = t[6],
					u = t[10],
					d = t[14];
				return (
					t[3] *
						(+r * o * h -
							i * l * h -
							r * a * u +
							n * l * u +
							i * a * d -
							n * o * d) +
					t[7] *
						(+e * o * d -
							e * l * u +
							r * s * u -
							i * s * d +
							i * l * c -
							r * o * c) +
					t[11] *
						(+e * l * h -
							e * a * d -
							r * s * h +
							n * s * d +
							r * a * c -
							n * l * c) +
					t[15] *
						(-i * a * c -
							e * o * h +
							e * a * u +
							i * s * h -
							n * s * u +
							n * o * c)
				);
			}
			transpose() {
				const t = this.elements;
				let e;
				return (
					(e = t[1]),
					(t[1] = t[4]),
					(t[4] = e),
					(e = t[2]),
					(t[2] = t[8]),
					(t[8] = e),
					(e = t[6]),
					(t[6] = t[9]),
					(t[9] = e),
					(e = t[3]),
					(t[3] = t[12]),
					(t[12] = e),
					(e = t[7]),
					(t[7] = t[13]),
					(t[13] = e),
					(e = t[11]),
					(t[11] = t[14]),
					(t[14] = e),
					this
				);
			}
			setPosition(t, e, n) {
				const i = this.elements;
				return (
					t.isVector3
						? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
						: ((i[12] = t), (i[13] = e), (i[14] = n)),
					this
				);
			}
			invert() {
				const t = this.elements,
					e = t[0],
					n = t[1],
					i = t[2],
					r = t[3],
					s = t[4],
					a = t[5],
					o = t[6],
					l = t[7],
					c = t[8],
					h = t[9],
					u = t[10],
					d = t[11],
					p = t[12],
					m = t[13],
					f = t[14],
					g = t[15],
					v =
						h * f * l -
						m * u * l +
						m * o * d -
						a * f * d -
						h * o * g +
						a * u * g,
					y =
						p * u * l -
						c * f * l -
						p * o * d +
						s * f * d +
						c * o * g -
						s * u * g,
					x =
						c * m * l -
						p * h * l +
						p * a * d -
						s * m * d -
						c * a * g +
						s * h * g,
					_ =
						p * h * o -
						c * m * o -
						p * a * u +
						s * m * u +
						c * a * f -
						s * h * f,
					M = e * v + n * y + i * x + r * _;
				if (0 === M)
					return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				const b = 1 / M;
				return (
					(t[0] = v * b),
					(t[1] =
						(m * u * r -
							h * f * r -
							m * i * d +
							n * f * d +
							h * i * g -
							n * u * g) *
						b),
					(t[2] =
						(a * f * r -
							m * o * r +
							m * i * l -
							n * f * l -
							a * i * g +
							n * o * g) *
						b),
					(t[3] =
						(h * o * r -
							a * u * r -
							h * i * l +
							n * u * l +
							a * i * d -
							n * o * d) *
						b),
					(t[4] = y * b),
					(t[5] =
						(c * f * r -
							p * u * r +
							p * i * d -
							e * f * d -
							c * i * g +
							e * u * g) *
						b),
					(t[6] =
						(p * o * r -
							s * f * r -
							p * i * l +
							e * f * l +
							s * i * g -
							e * o * g) *
						b),
					(t[7] =
						(s * u * r -
							c * o * r +
							c * i * l -
							e * u * l -
							s * i * d +
							e * o * d) *
						b),
					(t[8] = x * b),
					(t[9] =
						(p * h * r -
							c * m * r -
							p * n * d +
							e * m * d +
							c * n * g -
							e * h * g) *
						b),
					(t[10] =
						(s * m * r -
							p * a * r +
							p * n * l -
							e * m * l -
							s * n * g +
							e * a * g) *
						b),
					(t[11] =
						(c * a * r -
							s * h * r -
							c * n * l +
							e * h * l +
							s * n * d -
							e * a * d) *
						b),
					(t[12] = _ * b),
					(t[13] =
						(c * m * i -
							p * h * i +
							p * n * u -
							e * m * u -
							c * n * f +
							e * h * f) *
						b),
					(t[14] =
						(p * a * i -
							s * m * i -
							p * n * o +
							e * m * o +
							s * n * f -
							e * a * f) *
						b),
					(t[15] =
						(s * h * i -
							c * a * i +
							c * n * o -
							e * h * o -
							s * n * u +
							e * a * u) *
						b),
					this
				);
			}
			scale(t) {
				const e = this.elements,
					n = t.x,
					i = t.y,
					r = t.z;
				return (
					(e[0] *= n),
					(e[4] *= i),
					(e[8] *= r),
					(e[1] *= n),
					(e[5] *= i),
					(e[9] *= r),
					(e[2] *= n),
					(e[6] *= i),
					(e[10] *= r),
					(e[3] *= n),
					(e[7] *= i),
					(e[11] *= r),
					this
				);
			}
			getMaxScaleOnAxis() {
				const t = this.elements,
					e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
					n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
					i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
				return Math.sqrt(Math.max(e, n, i));
			}
			makeTranslation(t, e, n) {
				return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
			}
			makeRotationX(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
			}
			makeRotationY(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
			}
			makeRotationZ(t) {
				const e = Math.cos(t),
					n = Math.sin(t);
				return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
			}
			makeRotationAxis(t, e) {
				const n = Math.cos(e),
					i = Math.sin(e),
					r = 1 - n,
					s = t.x,
					a = t.y,
					o = t.z,
					l = r * s,
					c = r * a;
				return (
					this.set(
						l * s + n,
						l * a - i * o,
						l * o + i * a,
						0,
						l * a + i * o,
						c * a + n,
						c * o - i * s,
						0,
						l * o - i * a,
						c * o + i * s,
						r * o * o + n,
						0,
						0,
						0,
						0,
						1
					),
					this
				);
			}
			makeScale(t, e, n) {
				return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
			}
			makeShear(t, e, n, i, r, s) {
				return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
			}
			compose(t, e, n) {
				const i = this.elements,
					r = e._x,
					s = e._y,
					a = e._z,
					o = e._w,
					l = r + r,
					c = s + s,
					h = a + a,
					u = r * l,
					d = r * c,
					p = r * h,
					m = s * c,
					f = s * h,
					g = a * h,
					v = o * l,
					y = o * c,
					x = o * h,
					_ = n.x,
					M = n.y,
					b = n.z;
				return (
					(i[0] = (1 - (m + g)) * _),
					(i[1] = (d + x) * _),
					(i[2] = (p - y) * _),
					(i[3] = 0),
					(i[4] = (d - x) * M),
					(i[5] = (1 - (u + g)) * M),
					(i[6] = (f + v) * M),
					(i[7] = 0),
					(i[8] = (p + y) * b),
					(i[9] = (f - v) * b),
					(i[10] = (1 - (u + m)) * b),
					(i[11] = 0),
					(i[12] = t.x),
					(i[13] = t.y),
					(i[14] = t.z),
					(i[15] = 1),
					this
				);
			}
			decompose(t, e, n) {
				const i = this.elements;
				let r = Re.set(i[0], i[1], i[2]).length();
				const s = Re.set(i[4], i[5], i[6]).length(),
					a = Re.set(i[8], i[9], i[10]).length();
				this.determinant() < 0 && (r = -r),
					(t.x = i[12]),
					(t.y = i[13]),
					(t.z = i[14]),
					Le.copy(this);
				const o = 1 / r,
					l = 1 / s,
					c = 1 / a;
				return (
					(Le.elements[0] *= o),
					(Le.elements[1] *= o),
					(Le.elements[2] *= o),
					(Le.elements[4] *= l),
					(Le.elements[5] *= l),
					(Le.elements[6] *= l),
					(Le.elements[8] *= c),
					(Le.elements[9] *= c),
					(Le.elements[10] *= c),
					e.setFromRotationMatrix(Le),
					(n.x = r),
					(n.y = s),
					(n.z = a),
					this
				);
			}
			makePerspective(t, e, n, i, r, s) {
				void 0 === s &&
					console.warn(
						"THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
					);
				const a = this.elements,
					o = (2 * r) / (e - t),
					l = (2 * r) / (n - i),
					c = (e + t) / (e - t),
					h = (n + i) / (n - i),
					u = -(s + r) / (s - r),
					d = (-2 * s * r) / (s - r);
				return (
					(a[0] = o),
					(a[4] = 0),
					(a[8] = c),
					(a[12] = 0),
					(a[1] = 0),
					(a[5] = l),
					(a[9] = h),
					(a[13] = 0),
					(a[2] = 0),
					(a[6] = 0),
					(a[10] = u),
					(a[14] = d),
					(a[3] = 0),
					(a[7] = 0),
					(a[11] = -1),
					(a[15] = 0),
					this
				);
			}
			makeOrthographic(t, e, n, i, r, s) {
				const a = this.elements,
					o = 1 / (e - t),
					l = 1 / (n - i),
					c = 1 / (s - r),
					h = (e + t) * o,
					u = (n + i) * l,
					d = (s + r) * c;
				return (
					(a[0] = 2 * o),
					(a[4] = 0),
					(a[8] = 0),
					(a[12] = -h),
					(a[1] = 0),
					(a[5] = 2 * l),
					(a[9] = 0),
					(a[13] = -u),
					(a[2] = 0),
					(a[6] = 0),
					(a[10] = -2 * c),
					(a[14] = -d),
					(a[3] = 0),
					(a[7] = 0),
					(a[11] = 0),
					(a[15] = 1),
					this
				);
			}
			equals(t) {
				const e = this.elements,
					n = t.elements;
				for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
				return !0;
			}
			fromArray(t, e = 0) {
				for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
				return this;
			}
			toArray(t = [], e = 0) {
				const n = this.elements;
				return (
					(t[e] = n[0]),
					(t[e + 1] = n[1]),
					(t[e + 2] = n[2]),
					(t[e + 3] = n[3]),
					(t[e + 4] = n[4]),
					(t[e + 5] = n[5]),
					(t[e + 6] = n[6]),
					(t[e + 7] = n[7]),
					(t[e + 8] = n[8]),
					(t[e + 9] = n[9]),
					(t[e + 10] = n[10]),
					(t[e + 11] = n[11]),
					(t[e + 12] = n[12]),
					(t[e + 13] = n[13]),
					(t[e + 14] = n[14]),
					(t[e + 15] = n[15]),
					t
				);
			}
		}
		Ae.prototype.isMatrix4 = !0;
		const Re = new Zt(),
			Le = new Ae(),
			Ce = new Zt(0, 0, 0),
			Pe = new Zt(1, 1, 1),
			De = new Zt(),
			Ie = new Zt(),
			Ne = new Zt(),
			Be = new Ae(),
			ze = new Yt();
		class Oe {
			constructor(t = 0, e = 0, n = 0, i = Oe.DefaultOrder) {
				(this._x = t), (this._y = e), (this._z = n), (this._order = i);
			}
			get x() {
				return this._x;
			}
			set x(t) {
				(this._x = t), this._onChangeCallback();
			}
			get y() {
				return this._y;
			}
			set y(t) {
				(this._y = t), this._onChangeCallback();
			}
			get z() {
				return this._z;
			}
			set z(t) {
				(this._z = t), this._onChangeCallback();
			}
			get order() {
				return this._order;
			}
			set order(t) {
				(this._order = t), this._onChangeCallback();
			}
			set(t, e, n, i = this._order) {
				return (
					(this._x = t),
					(this._y = e),
					(this._z = n),
					(this._order = i),
					this._onChangeCallback(),
					this
				);
			}
			clone() {
				return new this.constructor(this._x, this._y, this._z, this._order);
			}
			copy(t) {
				return (
					(this._x = t._x),
					(this._y = t._y),
					(this._z = t._z),
					(this._order = t._order),
					this._onChangeCallback(),
					this
				);
			}
			setFromRotationMatrix(t, e = this._order, n = !0) {
				const i = t.elements,
					r = i[0],
					s = i[4],
					a = i[8],
					o = i[1],
					l = i[5],
					c = i[9],
					h = i[2],
					u = i[6],
					d = i[10];
				switch (e) {
					case "XYZ":
						(this._y = Math.asin(_t(a, -1, 1))),
							Math.abs(a) < 0.9999999
								? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
								: ((this._x = Math.atan2(u, l)), (this._z = 0));
						break;
					case "YXZ":
						(this._x = Math.asin(-_t(c, -1, 1))),
							Math.abs(c) < 0.9999999
								? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
								: ((this._y = Math.atan2(-h, r)), (this._z = 0));
						break;
					case "ZXY":
						(this._x = Math.asin(_t(u, -1, 1))),
							Math.abs(u) < 0.9999999
								? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
								: ((this._y = 0), (this._z = Math.atan2(o, r)));
						break;
					case "ZYX":
						(this._y = Math.asin(-_t(h, -1, 1))),
							Math.abs(h) < 0.9999999
								? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
								: ((this._x = 0), (this._z = Math.atan2(-s, l)));
						break;
					case "YZX":
						(this._z = Math.asin(_t(o, -1, 1))),
							Math.abs(o) < 0.9999999
								? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
								: ((this._x = 0), (this._y = Math.atan2(a, d)));
						break;
					case "XZY":
						(this._z = Math.asin(-_t(s, -1, 1))),
							Math.abs(s) < 0.9999999
								? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
								: ((this._x = Math.atan2(-c, d)), (this._y = 0));
						break;
					default:
						console.warn(
							"THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
								e
						);
				}
				return (this._order = e), !0 === n && this._onChangeCallback(), this;
			}
			setFromQuaternion(t, e, n) {
				return (
					Be.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Be, e, n)
				);
			}
			setFromVector3(t, e = this._order) {
				return this.set(t.x, t.y, t.z, e);
			}
			reorder(t) {
				return ze.setFromEuler(this), this.setFromQuaternion(ze, t);
			}
			equals(t) {
				return (
					t._x === this._x &&
					t._y === this._y &&
					t._z === this._z &&
					t._order === this._order
				);
			}
			fromArray(t) {
				return (
					(this._x = t[0]),
					(this._y = t[1]),
					(this._z = t[2]),
					void 0 !== t[3] && (this._order = t[3]),
					this._onChangeCallback(),
					this
				);
			}
			toArray(t = [], e = 0) {
				return (
					(t[e] = this._x),
					(t[e + 1] = this._y),
					(t[e + 2] = this._z),
					(t[e + 3] = this._order),
					t
				);
			}
			toVector3(t) {
				return t
					? t.set(this._x, this._y, this._z)
					: new Zt(this._x, this._y, this._z);
			}
			_onChange(t) {
				return (this._onChangeCallback = t), this;
			}
			_onChangeCallback() {}
		}
		(Oe.prototype.isEuler = !0),
			(Oe.DefaultOrder = "XYZ"),
			(Oe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
		class Fe {
			constructor() {
				this.mask = 1;
			}
			set(t) {
				this.mask = ((1 << t) | 0) >>> 0;
			}
			enable(t) {
				this.mask |= (1 << t) | 0;
			}
			enableAll() {
				this.mask = -1;
			}
			toggle(t) {
				this.mask ^= (1 << t) | 0;
			}
			disable(t) {
				this.mask &= ~((1 << t) | 0);
			}
			disableAll() {
				this.mask = 0;
			}
			test(t) {
				return 0 != (this.mask & t.mask);
			}
			isEnabled(t) {
				return 0 != (this.mask & ((1 << t) | 0));
			}
		}
		let Ue = 0;
		const He = new Zt(),
			Ge = new Yt(),
			ke = new Ae(),
			Ve = new Zt(),
			We = new Zt(),
			je = new Zt(),
			qe = new Yt(),
			Xe = new Zt(1, 0, 0),
			Je = new Zt(0, 1, 0),
			Ye = new Zt(0, 0, 1),
			Ze = { type: "added" },
			Ke = { type: "removed" };
		class Qe extends mt {
			constructor() {
				super(),
					Object.defineProperty(this, "id", { value: Ue++ }),
					(this.uuid = xt()),
					(this.name = ""),
					(this.type = "Object3D"),
					(this.parent = null),
					(this.children = []),
					(this.up = Qe.DefaultUp.clone());
				const t = new Zt(),
					e = new Oe(),
					n = new Yt(),
					i = new Zt(1, 1, 1);
				e._onChange(function () {
					n.setFromEuler(e, !1);
				}),
					n._onChange(function () {
						e.setFromQuaternion(n, void 0, !1);
					}),
					Object.defineProperties(this, {
						position: { configurable: !0, enumerable: !0, value: t },
						rotation: { configurable: !0, enumerable: !0, value: e },
						quaternion: { configurable: !0, enumerable: !0, value: n },
						scale: { configurable: !0, enumerable: !0, value: i },
						modelViewMatrix: { value: new Ae() },
						normalMatrix: { value: new Rt() },
					}),
					(this.matrix = new Ae()),
					(this.matrixWorld = new Ae()),
					(this.matrixAutoUpdate = Qe.DefaultMatrixAutoUpdate),
					(this.matrixWorldNeedsUpdate = !1),
					(this.layers = new Fe()),
					(this.visible = !0),
					(this.castShadow = !1),
					(this.receiveShadow = !1),
					(this.frustumCulled = !0),
					(this.renderOrder = 0),
					(this.animations = []),
					(this.userData = {});
			}
			onBeforeRender() {}
			onAfterRender() {}
			applyMatrix4(t) {
				this.matrixAutoUpdate && this.updateMatrix(),
					this.matrix.premultiply(t),
					this.matrix.decompose(this.position, this.quaternion, this.scale);
			}
			applyQuaternion(t) {
				return this.quaternion.premultiply(t), this;
			}
			setRotationFromAxisAngle(t, e) {
				this.quaternion.setFromAxisAngle(t, e);
			}
			setRotationFromEuler(t) {
				this.quaternion.setFromEuler(t, !0);
			}
			setRotationFromMatrix(t) {
				this.quaternion.setFromRotationMatrix(t);
			}
			setRotationFromQuaternion(t) {
				this.quaternion.copy(t);
			}
			rotateOnAxis(t, e) {
				return Ge.setFromAxisAngle(t, e), this.quaternion.multiply(Ge), this;
			}
			rotateOnWorldAxis(t, e) {
				return Ge.setFromAxisAngle(t, e), this.quaternion.premultiply(Ge), this;
			}
			rotateX(t) {
				return this.rotateOnAxis(Xe, t);
			}
			rotateY(t) {
				return this.rotateOnAxis(Je, t);
			}
			rotateZ(t) {
				return this.rotateOnAxis(Ye, t);
			}
			translateOnAxis(t, e) {
				return (
					He.copy(t).applyQuaternion(this.quaternion),
					this.position.add(He.multiplyScalar(e)),
					this
				);
			}
			translateX(t) {
				return this.translateOnAxis(Xe, t);
			}
			translateY(t) {
				return this.translateOnAxis(Je, t);
			}
			translateZ(t) {
				return this.translateOnAxis(Ye, t);
			}
			localToWorld(t) {
				return t.applyMatrix4(this.matrixWorld);
			}
			worldToLocal(t) {
				return t.applyMatrix4(ke.copy(this.matrixWorld).invert());
			}
			lookAt(t, e, n) {
				t.isVector3 ? Ve.copy(t) : Ve.set(t, e, n);
				const i = this.parent;
				this.updateWorldMatrix(!0, !1),
					We.setFromMatrixPosition(this.matrixWorld),
					this.isCamera || this.isLight
						? ke.lookAt(We, Ve, this.up)
						: ke.lookAt(Ve, We, this.up),
					this.quaternion.setFromRotationMatrix(ke),
					i &&
						(ke.extractRotation(i.matrixWorld),
						Ge.setFromRotationMatrix(ke),
						this.quaternion.premultiply(Ge.invert()));
			}
			add(t) {
				if (arguments.length > 1) {
					for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
					return this;
				}
				return t === this
					? (console.error(
							"THREE.Object3D.add: object can't be added as a child of itself.",
							t
					  ),
					  this)
					: (t && t.isObject3D
							? (null !== t.parent && t.parent.remove(t),
							  (t.parent = this),
							  this.children.push(t),
							  t.dispatchEvent(Ze))
							: console.error(
									"THREE.Object3D.add: object not an instance of THREE.Object3D.",
									t
							  ),
					  this);
			}
			remove(t) {
				if (arguments.length > 1) {
					for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
					return this;
				}
				const e = this.children.indexOf(t);
				return (
					-1 !== e &&
						((t.parent = null),
						this.children.splice(e, 1),
						t.dispatchEvent(Ke)),
					this
				);
			}
			removeFromParent() {
				const t = this.parent;
				return null !== t && t.remove(this), this;
			}
			clear() {
				for (let t = 0; t < this.children.length; t++) {
					const e = this.children[t];
					(e.parent = null), e.dispatchEvent(Ke);
				}
				return (this.children.length = 0), this;
			}
			attach(t) {
				return (
					this.updateWorldMatrix(!0, !1),
					ke.copy(this.matrixWorld).invert(),
					null !== t.parent &&
						(t.parent.updateWorldMatrix(!0, !1),
						ke.multiply(t.parent.matrixWorld)),
					t.applyMatrix4(ke),
					this.add(t),
					t.updateWorldMatrix(!1, !0),
					this
				);
			}
			getObjectById(t) {
				return this.getObjectByProperty("id", t);
			}
			getObjectByName(t) {
				return this.getObjectByProperty("name", t);
			}
			getObjectByProperty(t, e) {
				if (this[t] === e) return this;
				for (let n = 0, i = this.children.length; n < i; n++) {
					const i = this.children[n].getObjectByProperty(t, e);
					if (void 0 !== i) return i;
				}
			}
			getWorldPosition(t) {
				return (
					this.updateWorldMatrix(!0, !1),
					t.setFromMatrixPosition(this.matrixWorld)
				);
			}
			getWorldQuaternion(t) {
				return (
					this.updateWorldMatrix(!0, !1),
					this.matrixWorld.decompose(We, t, je),
					t
				);
			}
			getWorldScale(t) {
				return (
					this.updateWorldMatrix(!0, !1),
					this.matrixWorld.decompose(We, qe, t),
					t
				);
			}
			getWorldDirection(t) {
				this.updateWorldMatrix(!0, !1);
				const e = this.matrixWorld.elements;
				return t.set(e[8], e[9], e[10]).normalize();
			}
			raycast() {}
			traverse(t) {
				t(this);
				const e = this.children;
				for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
			}
			traverseVisible(t) {
				if (!1 === this.visible) return;
				t(this);
				const e = this.children;
				for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
			}
			traverseAncestors(t) {
				const e = this.parent;
				null !== e && (t(e), e.traverseAncestors(t));
			}
			updateMatrix() {
				this.matrix.compose(this.position, this.quaternion, this.scale),
					(this.matrixWorldNeedsUpdate = !0);
			}
			updateMatrixWorld(t) {
				this.matrixAutoUpdate && this.updateMatrix(),
					(this.matrixWorldNeedsUpdate || t) &&
						(null === this.parent
							? this.matrixWorld.copy(this.matrix)
							: this.matrixWorld.multiplyMatrices(
									this.parent.matrixWorld,
									this.matrix
							  ),
						(this.matrixWorldNeedsUpdate = !1),
						(t = !0));
				const e = this.children;
				for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
			}
			updateWorldMatrix(t, e) {
				const n = this.parent;
				if (
					(!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
					this.matrixAutoUpdate && this.updateMatrix(),
					null === this.parent
						? this.matrixWorld.copy(this.matrix)
						: this.matrixWorld.multiplyMatrices(
								this.parent.matrixWorld,
								this.matrix
						  ),
					!0 === e)
				) {
					const t = this.children;
					for (let e = 0, n = t.length; e < n; e++)
						t[e].updateWorldMatrix(!1, !0);
				}
			}
			toJSON(t) {
				const e = void 0 === t || "string" == typeof t,
					n = {};
				e &&
					((t = {
						geometries: {},
						materials: {},
						textures: {},
						images: {},
						shapes: {},
						skeletons: {},
						animations: {},
					}),
					(n.metadata = {
						version: 4.5,
						type: "Object",
						generator: "Object3D.toJSON",
					}));
				const i = {};
				function r(e, n) {
					return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
				}
				if (
					((i.uuid = this.uuid),
					(i.type = this.type),
					"" !== this.name && (i.name = this.name),
					!0 === this.castShadow && (i.castShadow = !0),
					!0 === this.receiveShadow && (i.receiveShadow = !0),
					!1 === this.visible && (i.visible = !1),
					!1 === this.frustumCulled && (i.frustumCulled = !1),
					0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
					"{}" !== JSON.stringify(this.userData) &&
						(i.userData = this.userData),
					(i.layers = this.layers.mask),
					(i.matrix = this.matrix.toArray()),
					!1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
					this.isInstancedMesh &&
						((i.type = "InstancedMesh"),
						(i.count = this.count),
						(i.instanceMatrix = this.instanceMatrix.toJSON()),
						null !== this.instanceColor &&
							(i.instanceColor = this.instanceColor.toJSON())),
					this.isScene)
				)
					this.background &&
						(this.background.isColor
							? (i.background = this.background.toJSON())
							: this.background.isTexture &&
							  (i.background = this.background.toJSON(t).uuid)),
						this.environment &&
							this.environment.isTexture &&
							(i.environment = this.environment.toJSON(t).uuid);
				else if (this.isMesh || this.isLine || this.isPoints) {
					i.geometry = r(t.geometries, this.geometry);
					const e = this.geometry.parameters;
					if (void 0 !== e && void 0 !== e.shapes) {
						const n = e.shapes;
						if (Array.isArray(n))
							for (let e = 0, i = n.length; e < i; e++) {
								const i = n[e];
								r(t.shapes, i);
							}
						else r(t.shapes, n);
					}
				}
				if (
					(this.isSkinnedMesh &&
						((i.bindMode = this.bindMode),
						(i.bindMatrix = this.bindMatrix.toArray()),
						void 0 !== this.skeleton &&
							(r(t.skeletons, this.skeleton),
							(i.skeleton = this.skeleton.uuid))),
					void 0 !== this.material)
				)
					if (Array.isArray(this.material)) {
						const e = [];
						for (let n = 0, i = this.material.length; n < i; n++)
							e.push(r(t.materials, this.material[n]));
						i.material = e;
					} else i.material = r(t.materials, this.material);
				if (this.children.length > 0) {
					i.children = [];
					for (let e = 0; e < this.children.length; e++)
						i.children.push(this.children[e].toJSON(t).object);
				}
				if (this.animations.length > 0) {
					i.animations = [];
					for (let e = 0; e < this.animations.length; e++) {
						const n = this.animations[e];
						i.animations.push(r(t.animations, n));
					}
				}
				if (e) {
					const e = s(t.geometries),
						i = s(t.materials),
						r = s(t.textures),
						a = s(t.images),
						o = s(t.shapes),
						l = s(t.skeletons),
						c = s(t.animations);
					e.length > 0 && (n.geometries = e),
						i.length > 0 && (n.materials = i),
						r.length > 0 && (n.textures = r),
						a.length > 0 && (n.images = a),
						o.length > 0 && (n.shapes = o),
						l.length > 0 && (n.skeletons = l),
						c.length > 0 && (n.animations = c);
				}
				return (n.object = i), n;
				function s(t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						delete i.metadata, e.push(i);
					}
					return e;
				}
			}
			clone(t) {
				return new this.constructor().copy(this, t);
			}
			copy(t, e = !0) {
				if (
					((this.name = t.name),
					this.up.copy(t.up),
					this.position.copy(t.position),
					(this.rotation.order = t.rotation.order),
					this.quaternion.copy(t.quaternion),
					this.scale.copy(t.scale),
					this.matrix.copy(t.matrix),
					this.matrixWorld.copy(t.matrixWorld),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					(this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
					(this.layers.mask = t.layers.mask),
					(this.visible = t.visible),
					(this.castShadow = t.castShadow),
					(this.receiveShadow = t.receiveShadow),
					(this.frustumCulled = t.frustumCulled),
					(this.renderOrder = t.renderOrder),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					!0 === e)
				)
					for (let e = 0; e < t.children.length; e++) {
						const n = t.children[e];
						this.add(n.clone());
					}
				return this;
			}
		}
		(Qe.DefaultUp = new Zt(0, 1, 0)),
			(Qe.DefaultMatrixAutoUpdate = !0),
			(Qe.prototype.isObject3D = !0);
		const $e = new Zt(),
			tn = new Zt(),
			en = new Zt(),
			nn = new Zt(),
			rn = new Zt(),
			sn = new Zt(),
			an = new Zt(),
			on = new Zt(),
			ln = new Zt(),
			cn = new Zt();
		class hn {
			constructor(t = new Zt(), e = new Zt(), n = new Zt()) {
				(this.a = t), (this.b = e), (this.c = n);
			}
			static getNormal(t, e, n, i) {
				i.subVectors(n, e), $e.subVectors(t, e), i.cross($e);
				const r = i.lengthSq();
				return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
			}
			static getBarycoord(t, e, n, i, r) {
				$e.subVectors(i, e), tn.subVectors(n, e), en.subVectors(t, e);
				const s = $e.dot($e),
					a = $e.dot(tn),
					o = $e.dot(en),
					l = tn.dot(tn),
					c = tn.dot(en),
					h = s * l - a * a;
				if (0 === h) return r.set(-2, -1, -1);
				const u = 1 / h,
					d = (l * o - a * c) * u,
					p = (s * c - a * o) * u;
				return r.set(1 - d - p, p, d);
			}
			static containsPoint(t, e, n, i) {
				return (
					this.getBarycoord(t, e, n, i, nn),
					nn.x >= 0 && nn.y >= 0 && nn.x + nn.y <= 1
				);
			}
			static getUV(t, e, n, i, r, s, a, o) {
				return (
					this.getBarycoord(t, e, n, i, nn),
					o.set(0, 0),
					o.addScaledVector(r, nn.x),
					o.addScaledVector(s, nn.y),
					o.addScaledVector(a, nn.z),
					o
				);
			}
			static isFrontFacing(t, e, n, i) {
				return (
					$e.subVectors(n, e), tn.subVectors(t, e), $e.cross(tn).dot(i) < 0
				);
			}
			set(t, e, n) {
				return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
			}
			setFromPointsAndIndices(t, e, n, i) {
				return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
			}
			setFromAttributeAndIndices(t, e, n, i) {
				return (
					this.a.fromBufferAttribute(t, e),
					this.b.fromBufferAttribute(t, n),
					this.c.fromBufferAttribute(t, i),
					this
				);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
			}
			getArea() {
				return (
					$e.subVectors(this.c, this.b),
					tn.subVectors(this.a, this.b),
					0.5 * $e.cross(tn).length()
				);
			}
			getMidpoint(t) {
				return t
					.addVectors(this.a, this.b)
					.add(this.c)
					.multiplyScalar(1 / 3);
			}
			getNormal(t) {
				return hn.getNormal(this.a, this.b, this.c, t);
			}
			getPlane(t) {
				return t.setFromCoplanarPoints(this.a, this.b, this.c);
			}
			getBarycoord(t, e) {
				return hn.getBarycoord(t, this.a, this.b, this.c, e);
			}
			getUV(t, e, n, i, r) {
				return hn.getUV(t, this.a, this.b, this.c, e, n, i, r);
			}
			containsPoint(t) {
				return hn.containsPoint(t, this.a, this.b, this.c);
			}
			isFrontFacing(t) {
				return hn.isFrontFacing(this.a, this.b, this.c, t);
			}
			intersectsBox(t) {
				return t.intersectsTriangle(this);
			}
			closestPointToPoint(t, e) {
				const n = this.a,
					i = this.b,
					r = this.c;
				let s, a;
				rn.subVectors(i, n), sn.subVectors(r, n), on.subVectors(t, n);
				const o = rn.dot(on),
					l = sn.dot(on);
				if (o <= 0 && l <= 0) return e.copy(n);
				ln.subVectors(t, i);
				const c = rn.dot(ln),
					h = sn.dot(ln);
				if (c >= 0 && h <= c) return e.copy(i);
				const u = o * h - c * l;
				if (u <= 0 && o >= 0 && c <= 0)
					return (s = o / (o - c)), e.copy(n).addScaledVector(rn, s);
				cn.subVectors(t, r);
				const d = rn.dot(cn),
					p = sn.dot(cn);
				if (p >= 0 && d <= p) return e.copy(r);
				const m = d * l - o * p;
				if (m <= 0 && l >= 0 && p <= 0)
					return (a = l / (l - p)), e.copy(n).addScaledVector(sn, a);
				const f = c * p - d * h;
				if (f <= 0 && h - c >= 0 && d - p >= 0)
					return (
						an.subVectors(r, i),
						(a = (h - c) / (h - c + (d - p))),
						e.copy(i).addScaledVector(an, a)
					);
				const g = 1 / (f + m + u);
				return (
					(s = m * g),
					(a = u * g),
					e.copy(n).addScaledVector(rn, s).addScaledVector(sn, a)
				);
			}
			equals(t) {
				return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
			}
		}
		let un = 0;
		class dn extends mt {
			constructor() {
				super(),
					Object.defineProperty(this, "id", { value: un++ }),
					(this.uuid = xt()),
					(this.name = ""),
					(this.type = "Material"),
					(this.fog = !0),
					(this.blending = 1),
					(this.side = 0),
					(this.vertexColors = !1),
					(this.opacity = 1),
					(this.transparent = !1),
					(this.blendSrc = 204),
					(this.blendDst = 205),
					(this.blendEquation = n),
					(this.blendSrcAlpha = null),
					(this.blendDstAlpha = null),
					(this.blendEquationAlpha = null),
					(this.depthFunc = 3),
					(this.depthTest = !0),
					(this.depthWrite = !0),
					(this.stencilWriteMask = 255),
					(this.stencilFunc = 519),
					(this.stencilRef = 0),
					(this.stencilFuncMask = 255),
					(this.stencilFail = ct),
					(this.stencilZFail = ct),
					(this.stencilZPass = ct),
					(this.stencilWrite = !1),
					(this.clippingPlanes = null),
					(this.clipIntersection = !1),
					(this.clipShadows = !1),
					(this.shadowSide = null),
					(this.colorWrite = !0),
					(this.alphaWrite = !0),
					(this.precision = null),
					(this.polygonOffset = !1),
					(this.polygonOffsetFactor = 0),
					(this.polygonOffsetUnits = 0),
					(this.dithering = !1),
					(this.alphaToCoverage = !1),
					(this.premultipliedAlpha = !1),
					(this.visible = !0),
					(this.toneMapped = !0),
					(this.userData = {}),
					(this.version = 0),
					(this._alphaTest = 0);
			}
			get alphaTest() {
				return this._alphaTest;
			}
			set alphaTest(t) {
				this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
			}
			onBuild() {}
			onBeforeRender() {}
			onBeforeCompile() {}
			customProgramCacheKey() {
				return this.onBeforeCompile.toString();
			}
			setValues(t) {
				if (void 0 !== t)
					for (const e in t) {
						const n = t[e];
						if (void 0 === n) {
							console.warn(
								"THREE.Material: '" + e + "' parameter is undefined."
							);
							continue;
						}
						if ("shading" === e) {
							console.warn(
								"THREE." +
									this.type +
									": .shading has been removed. Use the boolean .flatShading instead."
							),
								(this.flatShading = 1 === n);
							continue;
						}
						const i = this[e];
						void 0 !== i
							? i && i.isColor
								? i.set(n)
								: i && i.isVector3 && n && n.isVector3
								? i.copy(n)
								: (this[e] = n)
							: console.warn(
									"THREE." +
										this.type +
										": '" +
										e +
										"' is not a property of this material."
							  );
					}
			}
			toJSON(t) {
				const e = void 0 === t || "string" == typeof t;
				e && (t = { textures: {}, images: {} });
				const n = {
					metadata: {
						version: 4.5,
						type: "Material",
						generator: "Material.toJSON",
					},
				};
				function i(t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						delete i.metadata, e.push(i);
					}
					return e;
				}
				if (
					((n.uuid = this.uuid),
					(n.type = this.type),
					"" !== this.name && (n.name = this.name),
					this.color && this.color.isColor && (n.color = this.color.getHex()),
					void 0 !== this.roughness && (n.roughness = this.roughness),
					void 0 !== this.metalness && (n.metalness = this.metalness),
					void 0 !== this.sheen && (n.sheen = this.sheen),
					this.sheenColor &&
						this.sheenColor.isColor &&
						(n.sheenColor = this.sheenColor.getHex()),
					void 0 !== this.sheenRoughness &&
						(n.sheenRoughness = this.sheenRoughness),
					this.emissive &&
						this.emissive.isColor &&
						(n.emissive = this.emissive.getHex()),
					this.emissiveIntensity &&
						1 !== this.emissiveIntensity &&
						(n.emissiveIntensity = this.emissiveIntensity),
					this.specular &&
						this.specular.isColor &&
						(n.specular = this.specular.getHex()),
					void 0 !== this.specularIntensity &&
						(n.specularIntensity = this.specularIntensity),
					this.specularColor &&
						this.specularColor.isColor &&
						(n.specularColor = this.specularColor.getHex()),
					void 0 !== this.shininess && (n.shininess = this.shininess),
					void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
					void 0 !== this.clearcoatRoughness &&
						(n.clearcoatRoughness = this.clearcoatRoughness),
					this.clearcoatMap &&
						this.clearcoatMap.isTexture &&
						(n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
					this.clearcoatRoughnessMap &&
						this.clearcoatRoughnessMap.isTexture &&
						(n.clearcoatRoughnessMap =
							this.clearcoatRoughnessMap.toJSON(t).uuid),
					this.clearcoatNormalMap &&
						this.clearcoatNormalMap.isTexture &&
						((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
						(n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
					this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
					this.matcap &&
						this.matcap.isTexture &&
						(n.matcap = this.matcap.toJSON(t).uuid),
					this.alphaMap &&
						this.alphaMap.isTexture &&
						(n.alphaMap = this.alphaMap.toJSON(t).uuid),
					this.lightMap &&
						this.lightMap.isTexture &&
						((n.lightMap = this.lightMap.toJSON(t).uuid),
						(n.lightMapIntensity = this.lightMapIntensity)),
					this.aoMap &&
						this.aoMap.isTexture &&
						((n.aoMap = this.aoMap.toJSON(t).uuid),
						(n.aoMapIntensity = this.aoMapIntensity)),
					this.bumpMap &&
						this.bumpMap.isTexture &&
						((n.bumpMap = this.bumpMap.toJSON(t).uuid),
						(n.bumpScale = this.bumpScale)),
					this.normalMap &&
						this.normalMap.isTexture &&
						((n.normalMap = this.normalMap.toJSON(t).uuid),
						(n.normalMapType = this.normalMapType),
						(n.normalScale = this.normalScale.toArray())),
					this.displacementMap &&
						this.displacementMap.isTexture &&
						((n.displacementMap = this.displacementMap.toJSON(t).uuid),
						(n.displacementScale = this.displacementScale),
						(n.displacementBias = this.displacementBias)),
					this.roughnessMap &&
						this.roughnessMap.isTexture &&
						(n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
					this.metalnessMap &&
						this.metalnessMap.isTexture &&
						(n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
					this.emissiveMap &&
						this.emissiveMap.isTexture &&
						(n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
					this.specularMap &&
						this.specularMap.isTexture &&
						(n.specularMap = this.specularMap.toJSON(t).uuid),
					this.specularIntensityMap &&
						this.specularIntensityMap.isTexture &&
						(n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
					this.specularColorMap &&
						this.specularColorMap.isTexture &&
						(n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
					this.envMap &&
						this.envMap.isTexture &&
						((n.envMap = this.envMap.toJSON(t).uuid),
						void 0 !== this.combine && (n.combine = this.combine)),
					void 0 !== this.envMapIntensity &&
						(n.envMapIntensity = this.envMapIntensity),
					void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
					void 0 !== this.refractionRatio &&
						(n.refractionRatio = this.refractionRatio),
					this.gradientMap &&
						this.gradientMap.isTexture &&
						(n.gradientMap = this.gradientMap.toJSON(t).uuid),
					void 0 !== this.transmission && (n.transmission = this.transmission),
					this.transmissionMap &&
						this.transmissionMap.isTexture &&
						(n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
					void 0 !== this.thickness && (n.thickness = this.thickness),
					this.thicknessMap &&
						this.thicknessMap.isTexture &&
						(n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
					void 0 !== this.attenuationDistance &&
						(n.attenuationDistance = this.attenuationDistance),
					void 0 !== this.attenuationColor &&
						(n.attenuationColor = this.attenuationColor.getHex()),
					void 0 !== this.size && (n.size = this.size),
					null !== this.shadowSide && (n.shadowSide = this.shadowSide),
					void 0 !== this.sizeAttenuation &&
						(n.sizeAttenuation = this.sizeAttenuation),
					1 !== this.blending && (n.blending = this.blending),
					0 !== this.side && (n.side = this.side),
					this.vertexColors && (n.vertexColors = !0),
					this.opacity < 1 && (n.opacity = this.opacity),
					!0 === this.transparent && (n.transparent = this.transparent),
					(n.depthFunc = this.depthFunc),
					(n.depthTest = this.depthTest),
					(n.depthWrite = this.depthWrite),
					(n.colorWrite = this.colorWrite),
					(n.alphaWrite = this.alphaWrite),
					(n.stencilWrite = this.stencilWrite),
					(n.stencilWriteMask = this.stencilWriteMask),
					(n.stencilFunc = this.stencilFunc),
					(n.stencilRef = this.stencilRef),
					(n.stencilFuncMask = this.stencilFuncMask),
					(n.stencilFail = this.stencilFail),
					(n.stencilZFail = this.stencilZFail),
					(n.stencilZPass = this.stencilZPass),
					this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
					!0 === this.polygonOffset && (n.polygonOffset = !0),
					0 !== this.polygonOffsetFactor &&
						(n.polygonOffsetFactor = this.polygonOffsetFactor),
					0 !== this.polygonOffsetUnits &&
						(n.polygonOffsetUnits = this.polygonOffsetUnits),
					this.linewidth &&
						1 !== this.linewidth &&
						(n.linewidth = this.linewidth),
					void 0 !== this.dashSize && (n.dashSize = this.dashSize),
					void 0 !== this.gapSize && (n.gapSize = this.gapSize),
					void 0 !== this.scale && (n.scale = this.scale),
					!0 === this.dithering && (n.dithering = !0),
					this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
					!0 === this.alphaToCoverage &&
						(n.alphaToCoverage = this.alphaToCoverage),
					!0 === this.premultipliedAlpha &&
						(n.premultipliedAlpha = this.premultipliedAlpha),
					!0 === this.wireframe && (n.wireframe = this.wireframe),
					this.wireframeLinewidth > 1 &&
						(n.wireframeLinewidth = this.wireframeLinewidth),
					"round" !== this.wireframeLinecap &&
						(n.wireframeLinecap = this.wireframeLinecap),
					"round" !== this.wireframeLinejoin &&
						(n.wireframeLinejoin = this.wireframeLinejoin),
					!0 === this.flatShading && (n.flatShading = this.flatShading),
					!1 === this.visible && (n.visible = !1),
					!1 === this.toneMapped && (n.toneMapped = !1),
					"{}" !== JSON.stringify(this.userData) &&
						(n.userData = this.userData),
					e)
				) {
					const e = i(t.textures),
						r = i(t.images);
					e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
				}
				return n;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				(this.name = t.name),
					(this.fog = t.fog),
					(this.blending = t.blending),
					(this.side = t.side),
					(this.vertexColors = t.vertexColors),
					(this.opacity = t.opacity),
					(this.transparent = t.transparent),
					(this.blendSrc = t.blendSrc),
					(this.blendDst = t.blendDst),
					(this.blendEquation = t.blendEquation),
					(this.blendSrcAlpha = t.blendSrcAlpha),
					(this.blendDstAlpha = t.blendDstAlpha),
					(this.blendEquationAlpha = t.blendEquationAlpha),
					(this.depthFunc = t.depthFunc),
					(this.depthTest = t.depthTest),
					(this.depthWrite = t.depthWrite),
					(this.stencilWriteMask = t.stencilWriteMask),
					(this.stencilFunc = t.stencilFunc),
					(this.stencilRef = t.stencilRef),
					(this.stencilFuncMask = t.stencilFuncMask),
					(this.stencilFail = t.stencilFail),
					(this.stencilZFail = t.stencilZFail),
					(this.stencilZPass = t.stencilZPass),
					(this.stencilWrite = t.stencilWrite);
				const e = t.clippingPlanes;
				let n = null;
				if (null !== e) {
					const t = e.length;
					n = new Array(t);
					for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
				}
				return (
					(this.clippingPlanes = n),
					(this.clipIntersection = t.clipIntersection),
					(this.clipShadows = t.clipShadows),
					(this.shadowSide = t.shadowSide),
					(this.colorWrite = t.colorWrite),
					(this.alphaWrite = t.alphaWrite),
					(this.precision = t.precision),
					(this.polygonOffset = t.polygonOffset),
					(this.polygonOffsetFactor = t.polygonOffsetFactor),
					(this.polygonOffsetUnits = t.polygonOffsetUnits),
					(this.dithering = t.dithering),
					(this.alphaTest = t.alphaTest),
					(this.alphaToCoverage = t.alphaToCoverage),
					(this.premultipliedAlpha = t.premultipliedAlpha),
					(this.visible = t.visible),
					(this.toneMapped = t.toneMapped),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					this
				);
			}
			dispose() {
				this.dispatchEvent({ type: "dispose" });
			}
			set needsUpdate(t) {
				!0 === t && this.version++;
			}
		}
		dn.prototype.isMaterial = !0;
		class pn extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshBasicMaterial"),
					(this.color = new Ut(16777215)),
					(this.map = null),
					(this.lightMap = null),
					(this.lightMapIntensity = 1),
					(this.aoMap = null),
					(this.aoMapIntensity = 1),
					(this.specularMap = null),
					(this.alphaMap = null),
					(this.envMap = null),
					(this.combine = 0),
					(this.reflectivity = 1),
					(this.refractionRatio = 0.98),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.wireframeLinecap = "round"),
					(this.wireframeLinejoin = "round"),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					this
				);
			}
		}
		pn.prototype.isMeshBasicMaterial = !0;
		const mn = new Zt(),
			fn = new At();
		class gn {
			constructor(t, e, n) {
				if (Array.isArray(t))
					throw new TypeError(
						"THREE.BufferAttribute: array should be a Typed Array."
					);
				(this.name = ""),
					(this.array = t),
					(this.itemSize = e),
					(this.count = void 0 !== t ? t.length / e : 0),
					(this.normalized = !0 === n),
					(this.usage = ht),
					(this.updateRange = { offset: 0, count: -1 }),
					(this.version = 0);
			}
			onUploadCallback() {}
			set needsUpdate(t) {
				!0 === t && this.version++;
			}
			setUsage(t) {
				return (this.usage = t), this;
			}
			copy(t) {
				return (
					(this.name = t.name),
					(this.array = new t.array.constructor(t.array)),
					(this.itemSize = t.itemSize),
					(this.count = t.count),
					(this.normalized = t.normalized),
					(this.usage = t.usage),
					this
				);
			}
			copyAt(t, e, n) {
				(t *= this.itemSize), (n *= e.itemSize);
				for (let i = 0, r = this.itemSize; i < r; i++)
					this.array[t + i] = e.array[n + i];
				return this;
			}
			copyArray(t) {
				return this.array.set(t), this;
			}
			copyColorsArray(t) {
				const e = this.array;
				let n = 0;
				for (let i = 0, r = t.length; i < r; i++) {
					let r = t[i];
					void 0 === r &&
						(console.warn(
							"THREE.BufferAttribute.copyColorsArray(): color is undefined",
							i
						),
						(r = new Ut())),
						(e[n++] = r.r),
						(e[n++] = r.g),
						(e[n++] = r.b);
				}
				return this;
			}
			copyVector2sArray(t) {
				const e = this.array;
				let n = 0;
				for (let i = 0, r = t.length; i < r; i++) {
					let r = t[i];
					void 0 === r &&
						(console.warn(
							"THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
							i
						),
						(r = new At())),
						(e[n++] = r.x),
						(e[n++] = r.y);
				}
				return this;
			}
			copyVector3sArray(t) {
				const e = this.array;
				let n = 0;
				for (let i = 0, r = t.length; i < r; i++) {
					let r = t[i];
					void 0 === r &&
						(console.warn(
							"THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
							i
						),
						(r = new Zt())),
						(e[n++] = r.x),
						(e[n++] = r.y),
						(e[n++] = r.z);
				}
				return this;
			}
			copyVector4sArray(t) {
				const e = this.array;
				let n = 0;
				for (let i = 0, r = t.length; i < r; i++) {
					let r = t[i];
					void 0 === r &&
						(console.warn(
							"THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
							i
						),
						(r = new jt())),
						(e[n++] = r.x),
						(e[n++] = r.y),
						(e[n++] = r.z),
						(e[n++] = r.w);
				}
				return this;
			}
			applyMatrix3(t) {
				if (2 === this.itemSize)
					for (let e = 0, n = this.count; e < n; e++)
						fn.fromBufferAttribute(this, e),
							fn.applyMatrix3(t),
							this.setXY(e, fn.x, fn.y);
				else if (3 === this.itemSize)
					for (let e = 0, n = this.count; e < n; e++)
						mn.fromBufferAttribute(this, e),
							mn.applyMatrix3(t),
							this.setXYZ(e, mn.x, mn.y, mn.z);
				return this;
			}
			applyMatrix4(t) {
				for (let e = 0, n = this.count; e < n; e++)
					(mn.x = this.getX(e)),
						(mn.y = this.getY(e)),
						(mn.z = this.getZ(e)),
						mn.applyMatrix4(t),
						this.setXYZ(e, mn.x, mn.y, mn.z);
				return this;
			}
			applyNormalMatrix(t) {
				for (let e = 0, n = this.count; e < n; e++)
					(mn.x = this.getX(e)),
						(mn.y = this.getY(e)),
						(mn.z = this.getZ(e)),
						mn.applyNormalMatrix(t),
						this.setXYZ(e, mn.x, mn.y, mn.z);
				return this;
			}
			transformDirection(t) {
				for (let e = 0, n = this.count; e < n; e++)
					(mn.x = this.getX(e)),
						(mn.y = this.getY(e)),
						(mn.z = this.getZ(e)),
						mn.transformDirection(t),
						this.setXYZ(e, mn.x, mn.y, mn.z);
				return this;
			}
			set(t, e = 0) {
				return this.array.set(t, e), this;
			}
			getX(t) {
				return this.array[t * this.itemSize];
			}
			setX(t, e) {
				return (this.array[t * this.itemSize] = e), this;
			}
			getY(t) {
				return this.array[t * this.itemSize + 1];
			}
			setY(t, e) {
				return (this.array[t * this.itemSize + 1] = e), this;
			}
			getZ(t) {
				return this.array[t * this.itemSize + 2];
			}
			setZ(t, e) {
				return (this.array[t * this.itemSize + 2] = e), this;
			}
			getW(t) {
				return this.array[t * this.itemSize + 3];
			}
			setW(t, e) {
				return (this.array[t * this.itemSize + 3] = e), this;
			}
			setXY(t, e, n) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					this
				);
			}
			setXYZ(t, e, n, i) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					(this.array[t + 2] = i),
					this
				);
			}
			setXYZW(t, e, n, i, r) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					(this.array[t + 2] = i),
					(this.array[t + 3] = r),
					this
				);
			}
			onUpload(t) {
				return (this.onUploadCallback = t), this;
			}
			clone() {
				return new this.constructor(this.array, this.itemSize).copy(this);
			}
			toJSON() {
				const t = {
					itemSize: this.itemSize,
					type: this.array.constructor.name,
					array: Array.prototype.slice.call(this.array),
					normalized: this.normalized,
				};
				return (
					"" !== this.name && (t.name = this.name),
					this.usage !== ht && (t.usage = this.usage),
					(0 === this.updateRange.offset && -1 === this.updateRange.count) ||
						(t.updateRange = this.updateRange),
					t
				);
			}
		}
		gn.prototype.isBufferAttribute = !0;
		class vn extends gn {
			constructor(t, e, n) {
				super(new Int8Array(t), e, n);
			}
		}
		class yn extends gn {
			constructor(t, e, n) {
				super(new Uint8Array(t), e, n);
			}
		}
		class xn extends gn {
			constructor(t, e, n) {
				super(new Uint8ClampedArray(t), e, n);
			}
		}
		class _n extends gn {
			constructor(t, e, n) {
				super(new Int16Array(t), e, n);
			}
		}
		class Mn extends gn {
			constructor(t, e, n) {
				super(new Uint16Array(t), e, n);
			}
		}
		class bn extends gn {
			constructor(t, e, n) {
				super(new Int32Array(t), e, n);
			}
		}
		class wn extends gn {
			constructor(t, e, n) {
				super(new Uint32Array(t), e, n);
			}
		}
		class Sn extends gn {
			constructor(t, e, n) {
				super(new Uint16Array(t), e, n);
			}
		}
		Sn.prototype.isFloat16BufferAttribute = !0;
		class Tn extends gn {
			constructor(t, e, n) {
				super(new Float32Array(t), e, n);
			}
		}
		class En extends gn {
			constructor(t, e, n) {
				super(new Float64Array(t), e, n);
			}
		}
		let An = 0;
		const Rn = new Ae(),
			Ln = new Qe(),
			Cn = new Zt(),
			Pn = new $t(),
			Dn = new $t(),
			In = new Zt();
		class Nn extends mt {
			constructor() {
				super(),
					Object.defineProperty(this, "id", { value: An++ }),
					(this.uuid = xt()),
					(this.name = ""),
					(this.type = "BufferGeometry"),
					(this.index = null),
					(this.attributes = {}),
					(this.morphAttributes = {}),
					(this.morphTargetsRelative = !1),
					(this.groups = []),
					(this.boundingBox = null),
					(this.boundingSphere = null),
					(this.drawRange = { start: 0, count: 1 / 0 }),
					(this.userData = {});
			}
			getIndex() {
				return this.index;
			}
			setIndex(t) {
				return (
					Array.isArray(t)
						? (this.index = new (Lt(t) ? wn : Mn)(t, 1))
						: (this.index = t),
					this
				);
			}
			getAttribute(t) {
				return this.attributes[t];
			}
			setAttribute(t, e) {
				return (this.attributes[t] = e), this;
			}
			deleteAttribute(t) {
				return delete this.attributes[t], this;
			}
			hasAttribute(t) {
				return void 0 !== this.attributes[t];
			}
			addGroup(t, e, n = 0) {
				this.groups.push({ start: t, count: e, materialIndex: n });
			}
			clearGroups() {
				this.groups = [];
			}
			setDrawRange(t, e) {
				(this.drawRange.start = t), (this.drawRange.count = e);
			}
			applyMatrix4(t) {
				const e = this.attributes.position;
				void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
				const n = this.attributes.normal;
				if (void 0 !== n) {
					const e = new Rt().getNormalMatrix(t);
					n.applyNormalMatrix(e), (n.needsUpdate = !0);
				}
				const i = this.attributes.tangent;
				return (
					void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
					null !== this.boundingBox && this.computeBoundingBox(),
					null !== this.boundingSphere && this.computeBoundingSphere(),
					this
				);
			}
			applyQuaternion(t) {
				return Rn.makeRotationFromQuaternion(t), this.applyMatrix4(Rn), this;
			}
			rotateX(t) {
				return Rn.makeRotationX(t), this.applyMatrix4(Rn), this;
			}
			rotateY(t) {
				return Rn.makeRotationY(t), this.applyMatrix4(Rn), this;
			}
			rotateZ(t) {
				return Rn.makeRotationZ(t), this.applyMatrix4(Rn), this;
			}
			translate(t, e, n) {
				return Rn.makeTranslation(t, e, n), this.applyMatrix4(Rn), this;
			}
			scale(t, e, n) {
				return Rn.makeScale(t, e, n), this.applyMatrix4(Rn), this;
			}
			lookAt(t) {
				return (
					Ln.lookAt(t), Ln.updateMatrix(), this.applyMatrix4(Ln.matrix), this
				);
			}
			center() {
				return (
					this.computeBoundingBox(),
					this.boundingBox.getCenter(Cn).negate(),
					this.translate(Cn.x, Cn.y, Cn.z),
					this
				);
			}
			setFromPoints(t) {
				const e = [];
				for (let n = 0, i = t.length; n < i; n++) {
					const i = t[n];
					e.push(i.x, i.y, i.z || 0);
				}
				return this.setAttribute("position", new Tn(e, 3)), this;
			}
			computeBoundingBox() {
				null === this.boundingBox && (this.boundingBox = new $t());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute)
					return (
						console.error(
							'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
							this
						),
						void this.boundingBox.set(
							new Zt(-1 / 0, -1 / 0, -1 / 0),
							new Zt(1 / 0, 1 / 0, 1 / 0)
						)
					);
				if (void 0 !== t) {
					if ((this.boundingBox.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							Pn.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (In.addVectors(this.boundingBox.min, Pn.min),
									  this.boundingBox.expandByPoint(In),
									  In.addVectors(this.boundingBox.max, Pn.max),
									  this.boundingBox.expandByPoint(In))
									: (this.boundingBox.expandByPoint(Pn.min),
									  this.boundingBox.expandByPoint(Pn.max));
						}
				} else this.boundingBox.makeEmpty();
				(isNaN(this.boundingBox.min.x) ||
					isNaN(this.boundingBox.min.y) ||
					isNaN(this.boundingBox.min.z)) &&
					console.error(
						'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
						this
					);
			}
			computeBoundingSphere() {
				null === this.boundingSphere && (this.boundingSphere = new ye());
				const t = this.attributes.position,
					e = this.morphAttributes.position;
				if (t && t.isGLBufferAttribute)
					return (
						console.error(
							'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
							this
						),
						void this.boundingSphere.set(new Zt(), 1 / 0)
					);
				if (t) {
					const n = this.boundingSphere.center;
					if ((Pn.setFromBufferAttribute(t), e))
						for (let t = 0, n = e.length; t < n; t++) {
							const n = e[t];
							Dn.setFromBufferAttribute(n),
								this.morphTargetsRelative
									? (In.addVectors(Pn.min, Dn.min),
									  Pn.expandByPoint(In),
									  In.addVectors(Pn.max, Dn.max),
									  Pn.expandByPoint(In))
									: (Pn.expandByPoint(Dn.min), Pn.expandByPoint(Dn.max));
						}
					Pn.getCenter(n);
					let i = 0;
					for (let e = 0, r = t.count; e < r; e++)
						In.fromBufferAttribute(t, e),
							(i = Math.max(i, n.distanceToSquared(In)));
					if (e)
						for (let r = 0, s = e.length; r < s; r++) {
							const s = e[r],
								a = this.morphTargetsRelative;
							for (let e = 0, r = s.count; e < r; e++)
								In.fromBufferAttribute(s, e),
									a && (Cn.fromBufferAttribute(t, e), In.add(Cn)),
									(i = Math.max(i, n.distanceToSquared(In)));
						}
					(this.boundingSphere.radius = Math.sqrt(i)),
						isNaN(this.boundingSphere.radius) &&
							console.error(
								'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
								this
							);
				}
			}
			computeTangents() {
				const t = this.index,
					e = this.attributes;
				if (
					null === t ||
					void 0 === e.position ||
					void 0 === e.normal ||
					void 0 === e.uv
				)
					return void console.error(
						"THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
					);
				const n = t.array,
					i = e.position.array,
					r = e.normal.array,
					s = e.uv.array,
					a = i.length / 3;
				void 0 === e.tangent &&
					this.setAttribute("tangent", new gn(new Float32Array(4 * a), 4));
				const o = e.tangent.array,
					l = [],
					c = [];
				for (let t = 0; t < a; t++) (l[t] = new Zt()), (c[t] = new Zt());
				const h = new Zt(),
					u = new Zt(),
					d = new Zt(),
					p = new At(),
					m = new At(),
					f = new At(),
					g = new Zt(),
					v = new Zt();
				function y(t, e, n) {
					h.fromArray(i, 3 * t),
						u.fromArray(i, 3 * e),
						d.fromArray(i, 3 * n),
						p.fromArray(s, 2 * t),
						m.fromArray(s, 2 * e),
						f.fromArray(s, 2 * n),
						u.sub(h),
						d.sub(h),
						m.sub(p),
						f.sub(p);
					const r = 1 / (m.x * f.y - f.x * m.y);
					isFinite(r) &&
						(g
							.copy(u)
							.multiplyScalar(f.y)
							.addScaledVector(d, -m.y)
							.multiplyScalar(r),
						v
							.copy(d)
							.multiplyScalar(m.x)
							.addScaledVector(u, -f.x)
							.multiplyScalar(r),
						l[t].add(g),
						l[e].add(g),
						l[n].add(g),
						c[t].add(v),
						c[e].add(v),
						c[n].add(v));
				}
				let x = this.groups;
				0 === x.length && (x = [{ start: 0, count: n.length }]);
				for (let t = 0, e = x.length; t < e; ++t) {
					const e = x[t],
						i = e.start;
					for (let t = i, r = i + e.count; t < r; t += 3)
						y(n[t + 0], n[t + 1], n[t + 2]);
				}
				const _ = new Zt(),
					M = new Zt(),
					b = new Zt(),
					w = new Zt();
				function S(t) {
					b.fromArray(r, 3 * t), w.copy(b);
					const e = l[t];
					_.copy(e),
						_.sub(b.multiplyScalar(b.dot(e))).normalize(),
						M.crossVectors(w, e);
					const n = M.dot(c[t]) < 0 ? -1 : 1;
					(o[4 * t] = _.x),
						(o[4 * t + 1] = _.y),
						(o[4 * t + 2] = _.z),
						(o[4 * t + 3] = n);
				}
				for (let t = 0, e = x.length; t < e; ++t) {
					const e = x[t],
						i = e.start;
					for (let t = i, r = i + e.count; t < r; t += 3)
						S(n[t + 0]), S(n[t + 1]), S(n[t + 2]);
				}
			}
			computeVertexNormals() {
				const t = this.index,
					e = this.getAttribute("position");
				if (void 0 !== e) {
					let n = this.getAttribute("normal");
					if (void 0 === n)
						(n = new gn(new Float32Array(3 * e.count), 3)),
							this.setAttribute("normal", n);
					else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
					const i = new Zt(),
						r = new Zt(),
						s = new Zt(),
						a = new Zt(),
						o = new Zt(),
						l = new Zt(),
						c = new Zt(),
						h = new Zt();
					if (t)
						for (let u = 0, d = t.count; u < d; u += 3) {
							const d = t.getX(u + 0),
								p = t.getX(u + 1),
								m = t.getX(u + 2);
							i.fromBufferAttribute(e, d),
								r.fromBufferAttribute(e, p),
								s.fromBufferAttribute(e, m),
								c.subVectors(s, r),
								h.subVectors(i, r),
								c.cross(h),
								a.fromBufferAttribute(n, d),
								o.fromBufferAttribute(n, p),
								l.fromBufferAttribute(n, m),
								a.add(c),
								o.add(c),
								l.add(c),
								n.setXYZ(d, a.x, a.y, a.z),
								n.setXYZ(p, o.x, o.y, o.z),
								n.setXYZ(m, l.x, l.y, l.z);
						}
					else
						for (let t = 0, a = e.count; t < a; t += 3)
							i.fromBufferAttribute(e, t + 0),
								r.fromBufferAttribute(e, t + 1),
								s.fromBufferAttribute(e, t + 2),
								c.subVectors(s, r),
								h.subVectors(i, r),
								c.cross(h),
								n.setXYZ(t + 0, c.x, c.y, c.z),
								n.setXYZ(t + 1, c.x, c.y, c.z),
								n.setXYZ(t + 2, c.x, c.y, c.z);
					this.normalizeNormals(), (n.needsUpdate = !0);
				}
			}
			merge(t, e) {
				if (!t || !t.isBufferGeometry)
					return void console.error(
						"THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
						t
					);
				void 0 === e &&
					((e = 0),
					console.warn(
						"THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
					));
				const n = this.attributes;
				for (const i in n) {
					if (void 0 === t.attributes[i]) continue;
					const r = n[i].array,
						s = t.attributes[i],
						a = s.array,
						o = s.itemSize * e,
						l = Math.min(a.length, r.length - o);
					for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t];
				}
				return this;
			}
			normalizeNormals() {
				const t = this.attributes.normal;
				for (let e = 0, n = t.count; e < n; e++)
					In.fromBufferAttribute(t, e),
						In.normalize(),
						t.setXYZ(e, In.x, In.y, In.z);
			}
			toNonIndexed() {
				function t(t, e) {
					const n = t.array,
						i = t.itemSize,
						r = t.normalized,
						s = new n.constructor(e.length * i);
					let a = 0,
						o = 0;
					for (let r = 0, l = e.length; r < l; r++) {
						a = t.isInterleavedBufferAttribute
							? e[r] * t.data.stride + t.offset
							: e[r] * i;
						for (let t = 0; t < i; t++) s[o++] = n[a++];
					}
					return new gn(s, i, r);
				}
				if (null === this.index)
					return (
						console.warn(
							"THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
						),
						this
					);
				const e = new Nn(),
					n = this.index.array,
					i = this.attributes;
				for (const r in i) {
					const s = t(i[r], n);
					e.setAttribute(r, s);
				}
				const r = this.morphAttributes;
				for (const i in r) {
					const s = [],
						a = r[i];
					for (let e = 0, i = a.length; e < i; e++) {
						const i = t(a[e], n);
						s.push(i);
					}
					e.morphAttributes[i] = s;
				}
				e.morphTargetsRelative = this.morphTargetsRelative;
				const s = this.groups;
				for (let t = 0, n = s.length; t < n; t++) {
					const n = s[t];
					e.addGroup(n.start, n.count, n.materialIndex);
				}
				return e;
			}
			toJSON() {
				const t = {
					metadata: {
						version: 4.5,
						type: "BufferGeometry",
						generator: "BufferGeometry.toJSON",
					},
				};
				if (
					((t.uuid = this.uuid),
					(t.type = this.type),
					"" !== this.name && (t.name = this.name),
					Object.keys(this.userData).length > 0 && (t.userData = this.userData),
					void 0 !== this.parameters)
				) {
					const e = this.parameters;
					for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
					return t;
				}
				t.data = { attributes: {} };
				const e = this.index;
				null !== e &&
					(t.data.index = {
						type: e.array.constructor.name,
						array: Array.prototype.slice.call(e.array),
					});
				const n = this.attributes;
				for (const e in n) {
					const i = n[e];
					t.data.attributes[e] = i.toJSON(t.data);
				}
				const i = {};
				let r = !1;
				for (const e in this.morphAttributes) {
					const n = this.morphAttributes[e],
						s = [];
					for (let e = 0, i = n.length; e < i; e++) {
						const i = n[e];
						s.push(i.toJSON(t.data));
					}
					s.length > 0 && ((i[e] = s), (r = !0));
				}
				r &&
					((t.data.morphAttributes = i),
					(t.data.morphTargetsRelative = this.morphTargetsRelative));
				const s = this.groups;
				s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
				const a = this.boundingSphere;
				return (
					null !== a &&
						(t.data.boundingSphere = {
							center: a.center.toArray(),
							radius: a.radius,
						}),
					t
				);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				(this.index = null),
					(this.attributes = {}),
					(this.morphAttributes = {}),
					(this.groups = []),
					(this.boundingBox = null),
					(this.boundingSphere = null);
				const e = {};
				this.name = t.name;
				const n = t.index;
				null !== n && this.setIndex(n.clone(e));
				const i = t.attributes;
				for (const t in i) {
					const n = i[t];
					this.setAttribute(t, n.clone(e));
				}
				const r = t.morphAttributes;
				for (const t in r) {
					const n = [],
						i = r[t];
					for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
					this.morphAttributes[t] = n;
				}
				this.morphTargetsRelative = t.morphTargetsRelative;
				const s = t.groups;
				for (let t = 0, e = s.length; t < e; t++) {
					const e = s[t];
					this.addGroup(e.start, e.count, e.materialIndex);
				}
				const a = t.boundingBox;
				null !== a && (this.boundingBox = a.clone());
				const o = t.boundingSphere;
				return (
					null !== o && (this.boundingSphere = o.clone()),
					(this.drawRange.start = t.drawRange.start),
					(this.drawRange.count = t.drawRange.count),
					(this.userData = t.userData),
					void 0 !== t.parameters &&
						(this.parameters = Object.assign({}, t.parameters)),
					this
				);
			}
			dispose() {
				this.dispatchEvent({ type: "dispose" });
			}
		}
		Nn.prototype.isBufferGeometry = !0;
		const Bn = new Ae(),
			zn = new Ee(),
			On = new ye(),
			Fn = new Zt(),
			Un = new Zt(),
			Hn = new Zt(),
			Gn = new Zt(),
			kn = new Zt(),
			Vn = new Zt(),
			Wn = new Zt(),
			jn = new Zt(),
			qn = new Zt(),
			Xn = new At(),
			Jn = new At(),
			Yn = new At(),
			Zn = new Zt(),
			Kn = new Zt();
		class Qn extends Qe {
			constructor(t = new Nn(), e = new pn()) {
				super(),
					(this.type = "Mesh"),
					(this.geometry = t),
					(this.material = e),
					this.updateMorphTargets();
			}
			copy(t) {
				return (
					super.copy(t),
					void 0 !== t.morphTargetInfluences &&
						(this.morphTargetInfluences = t.morphTargetInfluences.slice()),
					void 0 !== t.morphTargetDictionary &&
						(this.morphTargetDictionary = Object.assign(
							{},
							t.morphTargetDictionary
						)),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			}
			updateMorphTargets() {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			}
			raycast(t, e) {
				const n = this.geometry,
					i = this.material,
					r = this.matrixWorld;
				if (void 0 === i) return;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					On.copy(n.boundingSphere),
					On.applyMatrix4(r),
					!1 === t.ray.intersectsSphere(On))
				)
					return;
				if (
					(Bn.copy(r).invert(),
					zn.copy(t.ray).applyMatrix4(Bn),
					null !== n.boundingBox && !1 === zn.intersectsBox(n.boundingBox))
				)
					return;
				let s;
				if (n.isBufferGeometry) {
					const r = n.index,
						a = n.attributes.position,
						o = n.morphAttributes.position,
						l = n.morphTargetsRelative,
						c = n.attributes.uv,
						h = n.attributes.uv2,
						u = n.groups,
						d = n.drawRange;
					if (null !== r)
						if (Array.isArray(i))
							for (let n = 0, p = u.length; n < p; n++) {
								const p = u[n],
									m = i[p.materialIndex];
								for (
									let n = Math.max(p.start, d.start),
										i = Math.min(
											r.count,
											Math.min(p.start + p.count, d.start + d.count)
										);
									n < i;
									n += 3
								) {
									const i = r.getX(n),
										u = r.getX(n + 1),
										d = r.getX(n + 2);
									(s = $n(this, m, t, zn, a, o, l, c, h, i, u, d)),
										s &&
											((s.faceIndex = Math.floor(n / 3)),
											(s.face.materialIndex = p.materialIndex),
											e.push(s));
								}
							}
						else {
							for (
								let n = Math.max(0, d.start),
									u = Math.min(r.count, d.start + d.count);
								n < u;
								n += 3
							) {
								const u = r.getX(n),
									d = r.getX(n + 1),
									p = r.getX(n + 2);
								(s = $n(this, i, t, zn, a, o, l, c, h, u, d, p)),
									s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
							}
						}
					else if (void 0 !== a)
						if (Array.isArray(i))
							for (let n = 0, r = u.length; n < r; n++) {
								const r = u[n],
									p = i[r.materialIndex];
								for (
									let n = Math.max(r.start, d.start),
										i = Math.min(
											a.count,
											Math.min(r.start + r.count, d.start + d.count)
										);
									n < i;
									n += 3
								) {
									(s = $n(this, p, t, zn, a, o, l, c, h, n, n + 1, n + 2)),
										s &&
											((s.faceIndex = Math.floor(n / 3)),
											(s.face.materialIndex = r.materialIndex),
											e.push(s));
								}
							}
						else {
							for (
								let n = Math.max(0, d.start),
									r = Math.min(a.count, d.start + d.count);
								n < r;
								n += 3
							) {
								(s = $n(this, i, t, zn, a, o, l, c, h, n, n + 1, n + 2)),
									s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
							}
						}
				} else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
			}
		}
		function $n(t, e, n, i, r, s, a, o, l, c, h, u) {
			Fn.fromBufferAttribute(r, c),
				Un.fromBufferAttribute(r, h),
				Hn.fromBufferAttribute(r, u);
			const d = t.morphTargetInfluences;
			if (s && d) {
				Wn.set(0, 0, 0), jn.set(0, 0, 0), qn.set(0, 0, 0);
				for (let t = 0, e = s.length; t < e; t++) {
					const e = d[t],
						n = s[t];
					0 !== e &&
						(Gn.fromBufferAttribute(n, c),
						kn.fromBufferAttribute(n, h),
						Vn.fromBufferAttribute(n, u),
						a
							? (Wn.addScaledVector(Gn, e),
							  jn.addScaledVector(kn, e),
							  qn.addScaledVector(Vn, e))
							: (Wn.addScaledVector(Gn.sub(Fn), e),
							  jn.addScaledVector(kn.sub(Un), e),
							  qn.addScaledVector(Vn.sub(Hn), e)));
				}
				Fn.add(Wn), Un.add(jn), Hn.add(qn);
			}
			t.isSkinnedMesh &&
				(t.boneTransform(c, Fn),
				t.boneTransform(h, Un),
				t.boneTransform(u, Hn));
			const p = (function (t, e, n, i, r, s, a, o) {
				let l;
				if (
					((l =
						1 === e.side
							? i.intersectTriangle(a, s, r, !0, o)
							: i.intersectTriangle(r, s, a, 2 !== e.side, o)),
					null === l)
				)
					return null;
				Kn.copy(o), Kn.applyMatrix4(t.matrixWorld);
				const c = n.ray.origin.distanceTo(Kn);
				return c < n.near || c > n.far
					? null
					: { distance: c, point: Kn.clone(), object: t };
			})(t, e, n, i, Fn, Un, Hn, Zn);
			if (p) {
				o &&
					(Xn.fromBufferAttribute(o, c),
					Jn.fromBufferAttribute(o, h),
					Yn.fromBufferAttribute(o, u),
					(p.uv = hn.getUV(Zn, Fn, Un, Hn, Xn, Jn, Yn, new At()))),
					l &&
						(Xn.fromBufferAttribute(l, c),
						Jn.fromBufferAttribute(l, h),
						Yn.fromBufferAttribute(l, u),
						(p.uv2 = hn.getUV(Zn, Fn, Un, Hn, Xn, Jn, Yn, new At())));
				const t = { a: c, b: h, c: u, normal: new Zt(), materialIndex: 0 };
				hn.getNormal(Fn, Un, Hn, t.normal), (p.face = t);
			}
			return p;
		}
		Qn.prototype.isMesh = !0;
		class ti extends Nn {
			constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
				super(),
					(this.type = "BoxGeometry"),
					(this.parameters = {
						width: t,
						height: e,
						depth: n,
						widthSegments: i,
						heightSegments: r,
						depthSegments: s,
					});
				const a = this;
				(i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
				const o = [],
					l = [],
					c = [],
					h = [];
				let u = 0,
					d = 0;
				function p(t, e, n, i, r, s, p, m, f, g, v) {
					const y = s / f,
						x = p / g,
						_ = s / 2,
						M = p / 2,
						b = m / 2,
						w = f + 1,
						S = g + 1;
					let T = 0,
						E = 0;
					const A = new Zt();
					for (let s = 0; s < S; s++) {
						const a = s * x - M;
						for (let o = 0; o < w; o++) {
							const u = o * y - _;
							(A[t] = u * i),
								(A[e] = a * r),
								(A[n] = b),
								l.push(A.x, A.y, A.z),
								(A[t] = 0),
								(A[e] = 0),
								(A[n] = m > 0 ? 1 : -1),
								c.push(A.x, A.y, A.z),
								h.push(o / f),
								h.push(1 - s / g),
								(T += 1);
						}
					}
					for (let t = 0; t < g; t++)
						for (let e = 0; e < f; e++) {
							const n = u + e + w * t,
								i = u + e + w * (t + 1),
								r = u + (e + 1) + w * (t + 1),
								s = u + (e + 1) + w * t;
							o.push(n, i, s), o.push(i, r, s), (E += 6);
						}
					a.addGroup(d, E, v), (d += E), (u += T);
				}
				p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
					p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
					p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
					p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
					p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
					p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
					this.setIndex(o),
					this.setAttribute("position", new Tn(l, 3)),
					this.setAttribute("normal", new Tn(c, 3)),
					this.setAttribute("uv", new Tn(h, 2));
			}
			static fromJSON(t) {
				return new ti(
					t.width,
					t.height,
					t.depth,
					t.widthSegments,
					t.heightSegments,
					t.depthSegments
				);
			}
		}
		function ei(t) {
			const e = {};
			for (const n in t) {
				e[n] = {};
				for (const i in t[n]) {
					const r = t[n][i];
					r &&
					(r.isColor ||
						r.isMatrix3 ||
						r.isMatrix4 ||
						r.isVector2 ||
						r.isVector3 ||
						r.isVector4 ||
						r.isTexture ||
						r.isQuaternion)
						? (e[n][i] = r.clone())
						: Array.isArray(r)
						? (e[n][i] = r.slice())
						: (e[n][i] = r);
				}
			}
			return e;
		}
		function ni(t) {
			const e = {};
			for (let n = 0; n < t.length; n++) {
				const i = ei(t[n]);
				for (const t in i) e[t] = i[t];
			}
			return e;
		}
		const ii = { clone: ei, merge: ni };
		class ri extends dn {
			constructor(t) {
				super(),
					(this.type = "ShaderMaterial"),
					(this.defines = {}),
					(this.uniforms = {}),
					(this.vertexShader =
						"void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
					(this.fragmentShader =
						"void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
					(this.linewidth = 1),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.fog = !1),
					(this.lights = !1),
					(this.clipping = !1),
					(this.extensions = {
						derivatives: !1,
						fragDepth: !1,
						drawBuffers: !1,
						shaderTextureLOD: !1,
					}),
					(this.defaultAttributeValues = {
						color: [1, 1, 1],
						uv: [0, 0],
						uv2: [0, 0],
					}),
					(this.index0AttributeName = void 0),
					(this.uniformsNeedUpdate = !1),
					(this.glslVersion = null),
					void 0 !== t &&
						(void 0 !== t.attributes &&
							console.error(
								"THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
							),
						this.setValues(t));
			}
			copy(t) {
				return (
					super.copy(t),
					(this.fragmentShader = t.fragmentShader),
					(this.vertexShader = t.vertexShader),
					(this.uniforms = ei(t.uniforms)),
					(this.defines = Object.assign({}, t.defines)),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.lights = t.lights),
					(this.clipping = t.clipping),
					(this.extensions = Object.assign({}, t.extensions)),
					(this.glslVersion = t.glslVersion),
					this
				);
			}
			toJSON(t) {
				const e = super.toJSON(t);
				(e.glslVersion = this.glslVersion), (e.uniforms = {});
				for (const n in this.uniforms) {
					const i = this.uniforms[n].value;
					i && i.isTexture
						? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
						: i && i.isColor
						? (e.uniforms[n] = { type: "c", value: i.getHex() })
						: i && i.isVector2
						? (e.uniforms[n] = { type: "v2", value: i.toArray() })
						: i && i.isVector3
						? (e.uniforms[n] = { type: "v3", value: i.toArray() })
						: i && i.isVector4
						? (e.uniforms[n] = { type: "v4", value: i.toArray() })
						: i && i.isMatrix3
						? (e.uniforms[n] = { type: "m3", value: i.toArray() })
						: i && i.isMatrix4
						? (e.uniforms[n] = { type: "m4", value: i.toArray() })
						: (e.uniforms[n] = { value: i });
				}
				Object.keys(this.defines).length > 0 && (e.defines = this.defines),
					(e.vertexShader = this.vertexShader),
					(e.fragmentShader = this.fragmentShader);
				const n = {};
				for (const t in this.extensions)
					!0 === this.extensions[t] && (n[t] = !0);
				return Object.keys(n).length > 0 && (e.extensions = n), e;
			}
		}
		ri.prototype.isShaderMaterial = !0;
		class si extends Qe {
			constructor() {
				super(),
					(this.type = "Camera"),
					(this.matrixWorldInverse = new Ae()),
					(this.projectionMatrix = new Ae()),
					(this.projectionMatrixInverse = new Ae());
			}
			copy(t, e) {
				return (
					super.copy(t, e),
					this.matrixWorldInverse.copy(t.matrixWorldInverse),
					this.projectionMatrix.copy(t.projectionMatrix),
					this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
					this
				);
			}
			getWorldDirection(t) {
				this.updateWorldMatrix(!0, !1);
				const e = this.matrixWorld.elements;
				return t.set(-e[8], -e[9], -e[10]).normalize();
			}
			updateMatrixWorld(t) {
				super.updateMatrixWorld(t),
					this.matrixWorldInverse.copy(this.matrixWorld).invert();
			}
			updateWorldMatrix(t, e) {
				super.updateWorldMatrix(t, e),
					this.matrixWorldInverse.copy(this.matrixWorld).invert();
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		si.prototype.isCamera = !0;
		class ai extends si {
			constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
				super(),
					(this.type = "PerspectiveCamera"),
					(this.fov = t),
					(this.zoom = 1),
					(this.near = n),
					(this.far = i),
					(this.focus = 10),
					(this.aspect = e),
					(this.view = null),
					(this.filmGauge = 35),
					(this.filmOffset = 0),
					this.updateProjectionMatrix();
			}
			copy(t, e) {
				return (
					super.copy(t, e),
					(this.fov = t.fov),
					(this.zoom = t.zoom),
					(this.near = t.near),
					(this.far = t.far),
					(this.focus = t.focus),
					(this.aspect = t.aspect),
					(this.view = null === t.view ? null : Object.assign({}, t.view)),
					(this.filmGauge = t.filmGauge),
					(this.filmOffset = t.filmOffset),
					this
				);
			}
			setFocalLength(t) {
				const e = (0.5 * this.getFilmHeight()) / t;
				(this.fov = 2 * yt * Math.atan(e)), this.updateProjectionMatrix();
			}
			getFocalLength() {
				const t = Math.tan(0.5 * vt * this.fov);
				return (0.5 * this.getFilmHeight()) / t;
			}
			getEffectiveFOV() {
				return 2 * yt * Math.atan(Math.tan(0.5 * vt * this.fov) / this.zoom);
			}
			getFilmWidth() {
				return this.filmGauge * Math.min(this.aspect, 1);
			}
			getFilmHeight() {
				return this.filmGauge / Math.max(this.aspect, 1);
			}
			setViewOffset(t, e, n, i, r, s) {
				(this.aspect = t / e),
					null === this.view &&
						(this.view = {
							enabled: !0,
							fullWidth: 1,
							fullHeight: 1,
							offsetX: 0,
							offsetY: 0,
							width: 1,
							height: 1,
						}),
					(this.view.enabled = !0),
					(this.view.fullWidth = t),
					(this.view.fullHeight = e),
					(this.view.offsetX = n),
					(this.view.offsetY = i),
					(this.view.width = r),
					(this.view.height = s),
					this.updateProjectionMatrix();
			}
			clearViewOffset() {
				null !== this.view && (this.view.enabled = !1),
					this.updateProjectionMatrix();
			}
			updateProjectionMatrix() {
				const t = this.near;
				let e = (t * Math.tan(0.5 * vt * this.fov)) / this.zoom,
					n = 2 * e,
					i = this.aspect * n,
					r = -0.5 * i;
				const s = this.view;
				if (null !== this.view && this.view.enabled) {
					const t = s.fullWidth,
						a = s.fullHeight;
					(r += (s.offsetX * i) / t),
						(e -= (s.offsetY * n) / a),
						(i *= s.width / t),
						(n *= s.height / a);
				}
				const a = this.filmOffset;
				0 !== a && (r += (t * a) / this.getFilmWidth()),
					this.projectionMatrix.makePerspective(
						r,
						r + i,
						e,
						e - n,
						t,
						this.far
					),
					this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					(e.object.fov = this.fov),
					(e.object.zoom = this.zoom),
					(e.object.near = this.near),
					(e.object.far = this.far),
					(e.object.focus = this.focus),
					(e.object.aspect = this.aspect),
					null !== this.view && (e.object.view = Object.assign({}, this.view)),
					(e.object.filmGauge = this.filmGauge),
					(e.object.filmOffset = this.filmOffset),
					e
				);
			}
		}
		ai.prototype.isPerspectiveCamera = !0;
		const oi = 90;
		class li extends Qe {
			constructor(t, e, n) {
				if (
					(super(),
					(this.type = "CubeCamera"),
					!0 !== n.isWebGLCubeRenderTarget)
				)
					return void console.error(
						"THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
					);
				this.renderTarget = n;
				const i = new ai(oi, 1, t, e);
				(i.layers = this.layers),
					i.up.set(0, -1, 0),
					i.lookAt(new Zt(1, 0, 0)),
					this.add(i);
				const r = new ai(oi, 1, t, e);
				(r.layers = this.layers),
					r.up.set(0, -1, 0),
					r.lookAt(new Zt(-1, 0, 0)),
					this.add(r);
				const s = new ai(oi, 1, t, e);
				(s.layers = this.layers),
					s.up.set(0, 0, 1),
					s.lookAt(new Zt(0, 1, 0)),
					this.add(s);
				const a = new ai(oi, 1, t, e);
				(a.layers = this.layers),
					a.up.set(0, 0, -1),
					a.lookAt(new Zt(0, -1, 0)),
					this.add(a);
				const o = new ai(oi, 1, t, e);
				(o.layers = this.layers),
					o.up.set(0, -1, 0),
					o.lookAt(new Zt(0, 0, 1)),
					this.add(o);
				const l = new ai(oi, 1, t, e);
				(l.layers = this.layers),
					l.up.set(0, -1, 0),
					l.lookAt(new Zt(0, 0, -1)),
					this.add(l);
			}
			update(t, e) {
				null === this.parent && this.updateMatrixWorld();
				const n = this.renderTarget,
					[i, r, s, a, o, l] = this.children,
					c = t.xr.enabled,
					h = t.getRenderTarget();
				t.xr.enabled = !1;
				const u = n.texture.generateMipmaps;
				(n.texture.generateMipmaps = !1),
					t.setRenderTarget(n, 0),
					t.render(e, i),
					t.setRenderTarget(n, 1),
					t.render(e, r),
					t.setRenderTarget(n, 2),
					t.render(e, s),
					t.setRenderTarget(n, 3),
					t.render(e, a),
					t.setRenderTarget(n, 4),
					t.render(e, o),
					(n.texture.generateMipmaps = u),
					t.setRenderTarget(n, 5),
					t.render(e, l),
					t.setRenderTarget(h),
					(t.xr.enabled = c),
					(n.texture.needsPMREMUpdate = !0);
			}
		}
		class ci extends Vt {
			constructor(t, e, n, i, s, a, o, l, c, h) {
				super(
					(t = void 0 !== t ? t : []),
					(e = void 0 !== e ? e : r),
					n,
					i,
					s,
					a,
					o,
					l,
					c,
					h
				),
					(this.flipY = !1);
			}
			get images() {
				return this.image;
			}
			set images(t) {
				this.image = t;
			}
		}
		ci.prototype.isCubeTexture = !0;
		class hi extends qt {
			constructor(t, e, n) {
				Number.isInteger(e) &&
					(console.warn(
						"THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
					),
					(e = n)),
					super(t, t, e),
					(e = e || {}),
					(this.texture = new ci(
						void 0,
						e.mapping,
						e.wrapS,
						e.wrapT,
						e.magFilter,
						e.minFilter,
						e.format,
						e.type,
						e.anisotropy,
						e.encoding
					)),
					(this.texture.isRenderTargetTexture = !0),
					(this.texture.generateMipmaps =
						void 0 !== e.generateMipmaps && e.generateMipmaps),
					(this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : g);
			}
			fromEquirectangularTexture(t, e) {
				(this.texture.type = e.type),
					(this.texture.format = T),
					(this.texture.encoding = e.encoding),
					(this.texture.generateMipmaps = e.generateMipmaps),
					(this.texture.minFilter = e.minFilter),
					(this.texture.magFilter = e.magFilter);
				const n = {
						uniforms: { tEquirect: { value: null } },
						vertexShader:
							"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
						fragmentShader:
							"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
					},
					i = new ti(5, 5, 5),
					r = new ri({
						name: "CubemapFromEquirect",
						uniforms: ei(n.uniforms),
						vertexShader: n.vertexShader,
						fragmentShader: n.fragmentShader,
						side: 1,
						blending: 0,
					});
				r.uniforms.tEquirect.value = e;
				const s = new Qn(i, r),
					a = e.minFilter;
				e.minFilter === y && (e.minFilter = g);
				return (
					new li(1, 10, this).update(t, s),
					(e.minFilter = a),
					s.geometry.dispose(),
					s.material.dispose(),
					this
				);
			}
			clear(t, e, n, i) {
				const r = t.getRenderTarget();
				for (let r = 0; r < 6; r++)
					t.setRenderTarget(this, r), t.clear(e, n, i);
				t.setRenderTarget(r);
			}
		}
		hi.prototype.isWebGLCubeRenderTarget = !0;
		const ui = new Zt(),
			di = new Zt(),
			pi = new Rt();
		class mi {
			constructor(t = new Zt(1, 0, 0), e = 0) {
				(this.normal = t), (this.constant = e);
			}
			set(t, e) {
				return this.normal.copy(t), (this.constant = e), this;
			}
			setComponents(t, e, n, i) {
				return this.normal.set(t, e, n), (this.constant = i), this;
			}
			setFromNormalAndCoplanarPoint(t, e) {
				return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
			}
			setFromCoplanarPoints(t, e, n) {
				const i = ui.subVectors(n, e).cross(di.subVectors(t, e)).normalize();
				return this.setFromNormalAndCoplanarPoint(i, t), this;
			}
			copy(t) {
				return this.normal.copy(t.normal), (this.constant = t.constant), this;
			}
			normalize() {
				const t = 1 / this.normal.length();
				return this.normal.multiplyScalar(t), (this.constant *= t), this;
			}
			negate() {
				return (this.constant *= -1), this.normal.negate(), this;
			}
			distanceToPoint(t) {
				return this.normal.dot(t) + this.constant;
			}
			distanceToSphere(t) {
				return this.distanceToPoint(t.center) - t.radius;
			}
			projectPoint(t, e) {
				return e
					.copy(this.normal)
					.multiplyScalar(-this.distanceToPoint(t))
					.add(t);
			}
			intersectLine(t, e) {
				const n = t.delta(ui),
					i = this.normal.dot(n);
				if (0 === i)
					return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
				const r = -(t.start.dot(this.normal) + this.constant) / i;
				return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
			}
			intersectsLine(t) {
				const e = this.distanceToPoint(t.start),
					n = this.distanceToPoint(t.end);
				return (e < 0 && n > 0) || (n < 0 && e > 0);
			}
			intersectsBox(t) {
				return t.intersectsPlane(this);
			}
			intersectsSphere(t) {
				return t.intersectsPlane(this);
			}
			coplanarPoint(t) {
				return t.copy(this.normal).multiplyScalar(-this.constant);
			}
			applyMatrix4(t, e) {
				const n = e || pi.getNormalMatrix(t),
					i = this.coplanarPoint(ui).applyMatrix4(t),
					r = this.normal.applyMatrix3(n).normalize();
				return (this.constant = -i.dot(r)), this;
			}
			translate(t) {
				return (this.constant -= t.dot(this.normal)), this;
			}
			equals(t) {
				return t.normal.equals(this.normal) && t.constant === this.constant;
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		mi.prototype.isPlane = !0;
		const fi = new ye(),
			gi = new Zt();
		class vi {
			constructor(
				t = new mi(),
				e = new mi(),
				n = new mi(),
				i = new mi(),
				r = new mi(),
				s = new mi()
			) {
				this.planes = [t, e, n, i, r, s];
			}
			set(t, e, n, i, r, s) {
				const a = this.planes;
				return (
					a[0].copy(t),
					a[1].copy(e),
					a[2].copy(n),
					a[3].copy(i),
					a[4].copy(r),
					a[5].copy(s),
					this
				);
			}
			copy(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
				return this;
			}
			setFromProjectionMatrix(t) {
				const e = this.planes,
					n = t.elements,
					i = n[0],
					r = n[1],
					s = n[2],
					a = n[3],
					o = n[4],
					l = n[5],
					c = n[6],
					h = n[7],
					u = n[8],
					d = n[9],
					p = n[10],
					m = n[11],
					f = n[12],
					g = n[13],
					v = n[14],
					y = n[15];
				return (
					e[0].setComponents(a - i, h - o, m - u, y - f).normalize(),
					e[1].setComponents(a + i, h + o, m + u, y + f).normalize(),
					e[2].setComponents(a + r, h + l, m + d, y + g).normalize(),
					e[3].setComponents(a - r, h - l, m - d, y - g).normalize(),
					e[4].setComponents(a - s, h - c, m - p, y - v).normalize(),
					e[5].setComponents(a + s, h + c, m + p, y + v).normalize(),
					this
				);
			}
			intersectsObject(t) {
				const e = t.geometry;
				return (
					null === e.boundingSphere && e.computeBoundingSphere(),
					fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
					this.intersectsSphere(fi)
				);
			}
			intersectsSprite(t) {
				return (
					fi.center.set(0, 0, 0),
					(fi.radius = 0.7071067811865476),
					fi.applyMatrix4(t.matrixWorld),
					this.intersectsSphere(fi)
				);
			}
			intersectsSphere(t) {
				const e = this.planes,
					n = t.center,
					i = -t.radius;
				for (let t = 0; t < 6; t++) {
					if (e[t].distanceToPoint(n) < i) return !1;
				}
				return !0;
			}
			intersectsBox(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) {
					const i = e[n];
					if (
						((gi.x = i.normal.x > 0 ? t.max.x : t.min.x),
						(gi.y = i.normal.y > 0 ? t.max.y : t.min.y),
						(gi.z = i.normal.z > 0 ? t.max.z : t.min.z),
						i.distanceToPoint(gi) < 0)
					)
						return !1;
				}
				return !0;
			}
			containsPoint(t) {
				const e = this.planes;
				for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
				return !0;
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		function yi() {
			let t = null,
				e = !1,
				n = null,
				i = null;
			function r(e, s) {
				n(e, s), (i = t.requestAnimationFrame(r));
			}
			return {
				start: function () {
					!0 !== e &&
						null !== n &&
						((i = t.requestAnimationFrame(r)), (e = !0));
				},
				stop: function () {
					t.cancelAnimationFrame(i), (e = !1);
				},
				setAnimationLoop: function (t) {
					n = t;
				},
				setContext: function (e) {
					t = e;
				},
			};
		}
		function xi(t, e) {
			const n = e.isWebGL2,
				i = new WeakMap();
			return {
				get: function (t) {
					return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
				},
				remove: function (e) {
					e.isInterleavedBufferAttribute && (e = e.data);
					const n = i.get(e);
					n && (t.deleteBuffer(n.buffer), i.delete(e));
				},
				update: function (e, r) {
					if (e.isGLBufferAttribute) {
						const t = i.get(e);
						return void (
							(!t || t.version < e.version) &&
							i.set(e, {
								buffer: e.buffer,
								type: e.type,
								bytesPerElement: e.elementSize,
								version: e.version,
							})
						);
					}
					e.isInterleavedBufferAttribute && (e = e.data);
					const s = i.get(e);
					void 0 === s
						? i.set(
								e,
								(function (e, i) {
									const r = e.array,
										s = e.usage,
										a = t.createBuffer();
									t.bindBuffer(i, a),
										t.bufferData(i, r, s),
										e.onUploadCallback();
									let o = 5126;
									return (
										r instanceof Float32Array
											? (o = 5126)
											: r instanceof Float64Array
											? console.warn(
													"THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
											  )
											: r instanceof Uint16Array
											? e.isFloat16BufferAttribute
												? n
													? (o = 5131)
													: console.warn(
															"THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
													  )
												: (o = 5123)
											: r instanceof Int16Array
											? (o = 5122)
											: r instanceof Uint32Array
											? (o = 5125)
											: r instanceof Int32Array
											? (o = 5124)
											: r instanceof Int8Array
											? (o = 5120)
											: (r instanceof Uint8Array ||
													r instanceof Uint8ClampedArray) &&
											  (o = 5121),
										{
											buffer: a,
											type: o,
											bytesPerElement: r.BYTES_PER_ELEMENT,
											version: e.version,
										}
									);
								})(e, r)
						  )
						: s.version < e.version &&
						  (!(function (e, i, r) {
								const s = i.array,
									a = i.updateRange;
								t.bindBuffer(r, e),
									-1 === a.count
										? t.bufferSubData(r, 0, s)
										: (n
												? t.bufferSubData(
														r,
														a.offset * s.BYTES_PER_ELEMENT,
														s,
														a.offset,
														a.count
												  )
												: t.bufferSubData(
														r,
														a.offset * s.BYTES_PER_ELEMENT,
														s.subarray(a.offset, a.offset + a.count)
												  ),
										  (a.count = -1));
						  })(s.buffer, e, r),
						  (s.version = e.version));
				},
			};
		}
		class _i extends Nn {
			constructor(t = 1, e = 1, n = 1, i = 1) {
				super(),
					(this.type = "PlaneGeometry"),
					(this.parameters = {
						width: t,
						height: e,
						widthSegments: n,
						heightSegments: i,
					});
				const r = t / 2,
					s = e / 2,
					a = Math.floor(n),
					o = Math.floor(i),
					l = a + 1,
					c = o + 1,
					h = t / a,
					u = e / o,
					d = [],
					p = [],
					m = [],
					f = [];
				for (let t = 0; t < c; t++) {
					const e = t * u - s;
					for (let n = 0; n < l; n++) {
						const i = n * h - r;
						p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o);
					}
				}
				for (let t = 0; t < o; t++)
					for (let e = 0; e < a; e++) {
						const n = e + l * t,
							i = e + l * (t + 1),
							r = e + 1 + l * (t + 1),
							s = e + 1 + l * t;
						d.push(n, i, s), d.push(i, r, s);
					}
				this.setIndex(d),
					this.setAttribute("position", new Tn(p, 3)),
					this.setAttribute("normal", new Tn(m, 3)),
					this.setAttribute("uv", new Tn(f, 2));
			}
			static fromJSON(t) {
				return new _i(t.width, t.height, t.widthSegments, t.heightSegments);
			}
		}
		const Mi = {
				alphamap_fragment:
					"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
				alphamap_pars_fragment:
					"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				alphatest_fragment:
					"#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
				alphatest_pars_fragment:
					"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
				aomap_fragment:
					"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
				aomap_pars_fragment:
					"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
				begin_vertex: "vec3 transformed = vec3( position );",
				beginnormal_vertex:
					"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
				bsdfs:
					"vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
				bumpmap_pars_fragment:
					"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
				clipping_planes_fragment:
					"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
				clipping_planes_pars_fragment:
					"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
				clipping_planes_pars_vertex:
					"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
				clipping_planes_vertex:
					"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
				color_fragment:
					"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
				color_pars_fragment:
					"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
				color_pars_vertex:
					"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
				color_vertex:
					"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
				common:
					"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
				cube_uv_reflection_fragment:
					"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\treturn texture2D( envMap, uv ).rgb;\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
				defaultnormal_vertex:
					"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
				displacementmap_pars_vertex:
					"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
				displacementmap_vertex:
					"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
				emissivemap_fragment:
					"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
				emissivemap_pars_fragment:
					"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
				encodings_fragment:
					"gl_FragColor = linearToOutputTexel( gl_FragColor );",
				encodings_pars_fragment:
					"vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
				envmap_fragment:
					"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
				envmap_common_pars_fragment:
					"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
				envmap_pars_fragment:
					"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
				envmap_pars_vertex:
					"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
				envmap_physical_pars_fragment:
					"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec;\n\t\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\t\treflectVec = reflect( - viewDir, normal );\n\t\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\t#else\n\t\t\t\treflectVec = refract( - viewDir, normal, refractionRatio );\n\t\t\t#endif\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
				envmap_vertex:
					"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
				fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
				fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
				fog_fragment:
					"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
				fog_pars_fragment:
					"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
				gradientmap_pars_fragment:
					"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
				lightmap_fragment:
					"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tlightMapIrradiance *= PI;\n\t#endif\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
				lightmap_pars_fragment:
					"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
				lights_lambert_vertex:
					"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
				lights_pars_begin:
					"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
				lights_toon_fragment:
					"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
				lights_toon_pars_fragment:
					"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
				lights_phong_fragment:
					"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
				lights_phong_pars_fragment:
					"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
				lights_physical_fragment:
					"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
				lights_physical_pars_fragment:
					"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
				lights_fragment_begin:
					"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
				lights_fragment_maps:
					"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
				lights_fragment_end:
					"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
				logdepthbuf_fragment:
					"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
				logdepthbuf_pars_fragment:
					"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
				logdepthbuf_pars_vertex:
					"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
				logdepthbuf_vertex:
					"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
				map_fragment:
					"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
				map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
				map_particle_fragment:
					"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
				map_particle_pars_fragment:
					"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
				metalnessmap_fragment:
					"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
				metalnessmap_pars_fragment:
					"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
				morphnormal_vertex:
					"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
				morphtarget_pars_vertex:
					"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform vec2 morphTargetsTextureSize;\n\t\tvec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {\n\t\t\tfloat texelIndex = float( vertexIndex * stride + offset );\n\t\t\tfloat y = floor( texelIndex / morphTargetsTextureSize.x );\n\t\t\tfloat x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tvec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );\n\t\t\treturn texture( morphTargetsTexture, morphUV ).xyz;\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
				morphtarget_vertex:
					"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\t#ifndef USE_MORPHNORMALS\n\t\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];\n\t\t\t#else\n\t\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];\n\t\t\t#endif\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
				normal_fragment_begin:
					"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
				normal_fragment_maps:
					"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
				normal_pars_fragment:
					"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
				normal_pars_vertex:
					"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
				normal_vertex:
					"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
				normalmap_pars_fragment:
					"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
				clearcoat_normal_fragment_begin:
					"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
				clearcoat_normal_fragment_maps:
					"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
				clearcoat_pars_fragment:
					"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
				output_fragment:
					"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
				packing:
					"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
				premultiplied_alpha_fragment:
					"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
				project_vertex:
					"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
				dithering_fragment:
					"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
				dithering_pars_fragment:
					"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
				roughnessmap_fragment:
					"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
				roughnessmap_pars_fragment:
					"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
				shadowmap_pars_fragment:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
				shadowmap_pars_vertex:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
				shadowmap_vertex:
					"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
				shadowmask_pars_fragment:
					"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
				skinbase_vertex:
					"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
				skinning_pars_vertex:
					"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
				skinning_vertex:
					"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
				skinnormal_vertex:
					"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
				specularmap_fragment:
					"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
				specularmap_pars_fragment:
					"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
				tonemapping_fragment:
					"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
				tonemapping_pars_fragment:
					"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
				transmission_fragment:
					"#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
				transmission_pars_fragment:
					"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
				uv_pars_fragment:
					"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
				uv_pars_vertex:
					"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
				uv_vertex:
					"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
				uv2_pars_fragment:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
				uv2_pars_vertex:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
				uv2_vertex:
					"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
				worldpos_vertex:
					"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
				background_vert:
					"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
				background_frag:
					"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				cube_vert:
					"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
				cube_frag:
					"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				depth_vert:
					"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
				depth_frag:
					"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
				distanceRGBA_vert:
					"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
				distanceRGBA_frag:
					"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
				equirect_vert:
					"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
				equirect_frag:
					"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
				linedashed_vert:
					"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
				linedashed_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				meshbasic_vert:
					"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
				meshbasic_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshlambert_vert:
					"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshlambert_frag:
					"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshmatcap_vert:
					"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
				meshmatcap_frag:
					"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshnormal_vert:
					"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
				meshnormal_frag:
					"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
				meshphong_vert:
					"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshphong_frag:
					"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshphysical_vert:
					"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
				meshphysical_frag:
					"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				meshtoon_vert:
					"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				meshtoon_frag:
					"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
				points_vert:
					"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
				points_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
				shadow_vert:
					"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
				shadow_frag:
					"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
				sprite_vert:
					"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
				sprite_frag:
					"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
			},
			bi = {
				common: {
					diffuse: { value: new Ut(16777215) },
					opacity: { value: 1 },
					map: { value: null },
					uvTransform: { value: new Rt() },
					uv2Transform: { value: new Rt() },
					alphaMap: { value: null },
					alphaTest: { value: 0 },
				},
				specularmap: { specularMap: { value: null } },
				envmap: {
					envMap: { value: null },
					flipEnvMap: { value: -1 },
					reflectivity: { value: 1 },
					ior: { value: 1.5 },
					refractionRatio: { value: 0.98 },
				},
				aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
				lightmap: {
					lightMap: { value: null },
					lightMapIntensity: { value: 1 },
				},
				emissivemap: { emissiveMap: { value: null } },
				bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
				normalmap: {
					normalMap: { value: null },
					normalScale: { value: new At(1, 1) },
				},
				displacementmap: {
					displacementMap: { value: null },
					displacementScale: { value: 1 },
					displacementBias: { value: 0 },
				},
				roughnessmap: { roughnessMap: { value: null } },
				metalnessmap: { metalnessMap: { value: null } },
				gradientmap: { gradientMap: { value: null } },
				fog: {
					fogDensity: { value: 25e-5 },
					fogNear: { value: 1 },
					fogFar: { value: 2e3 },
					fogColor: { value: new Ut(16777215) },
				},
				lights: {
					ambientLightColor: { value: [] },
					lightProbe: { value: [] },
					directionalLights: {
						value: [],
						properties: { direction: {}, color: {} },
					},
					directionalLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
						},
					},
					directionalShadowMap: { value: [] },
					directionalShadowMatrix: { value: [] },
					spotLights: {
						value: [],
						properties: {
							color: {},
							position: {},
							direction: {},
							distance: {},
							coneCos: {},
							penumbraCos: {},
							decay: {},
						},
					},
					spotLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
						},
					},
					spotShadowMap: { value: [] },
					spotShadowMatrix: { value: [] },
					pointLights: {
						value: [],
						properties: { color: {}, position: {}, decay: {}, distance: {} },
					},
					pointLightShadows: {
						value: [],
						properties: {
							shadowBias: {},
							shadowNormalBias: {},
							shadowRadius: {},
							shadowMapSize: {},
							shadowCameraNear: {},
							shadowCameraFar: {},
						},
					},
					pointShadowMap: { value: [] },
					pointShadowMatrix: { value: [] },
					hemisphereLights: {
						value: [],
						properties: { direction: {}, skyColor: {}, groundColor: {} },
					},
					rectAreaLights: {
						value: [],
						properties: { color: {}, position: {}, width: {}, height: {} },
					},
					ltc_1: { value: null },
					ltc_2: { value: null },
				},
				points: {
					diffuse: { value: new Ut(16777215) },
					opacity: { value: 1 },
					size: { value: 1 },
					scale: { value: 1 },
					map: { value: null },
					alphaMap: { value: null },
					alphaTest: { value: 0 },
					uvTransform: { value: new Rt() },
				},
				sprite: {
					diffuse: { value: new Ut(16777215) },
					opacity: { value: 1 },
					center: { value: new At(0.5, 0.5) },
					rotation: { value: 0 },
					map: { value: null },
					alphaMap: { value: null },
					alphaTest: { value: 0 },
					uvTransform: { value: new Rt() },
				},
			},
			wi = {
				basic: {
					uniforms: ni([
						bi.common,
						bi.specularmap,
						bi.envmap,
						bi.aomap,
						bi.lightmap,
						bi.fog,
					]),
					vertexShader: Mi.meshbasic_vert,
					fragmentShader: Mi.meshbasic_frag,
				},
				lambert: {
					uniforms: ni([
						bi.common,
						bi.specularmap,
						bi.envmap,
						bi.aomap,
						bi.lightmap,
						bi.emissivemap,
						bi.fog,
						bi.lights,
						{ emissive: { value: new Ut(0) } },
					]),
					vertexShader: Mi.meshlambert_vert,
					fragmentShader: Mi.meshlambert_frag,
				},
				phong: {
					uniforms: ni([
						bi.common,
						bi.specularmap,
						bi.envmap,
						bi.aomap,
						bi.lightmap,
						bi.emissivemap,
						bi.bumpmap,
						bi.normalmap,
						bi.displacementmap,
						bi.fog,
						bi.lights,
						{
							emissive: { value: new Ut(0) },
							specular: { value: new Ut(1118481) },
							shininess: { value: 30 },
						},
					]),
					vertexShader: Mi.meshphong_vert,
					fragmentShader: Mi.meshphong_frag,
				},
				standard: {
					uniforms: ni([
						bi.common,
						bi.envmap,
						bi.aomap,
						bi.lightmap,
						bi.emissivemap,
						bi.bumpmap,
						bi.normalmap,
						bi.displacementmap,
						bi.roughnessmap,
						bi.metalnessmap,
						bi.fog,
						bi.lights,
						{
							emissive: { value: new Ut(0) },
							roughness: { value: 1 },
							metalness: { value: 0 },
							envMapIntensity: { value: 1 },
						},
					]),
					vertexShader: Mi.meshphysical_vert,
					fragmentShader: Mi.meshphysical_frag,
				},
				toon: {
					uniforms: ni([
						bi.common,
						bi.aomap,
						bi.lightmap,
						bi.emissivemap,
						bi.bumpmap,
						bi.normalmap,
						bi.displacementmap,
						bi.gradientmap,
						bi.fog,
						bi.lights,
						{ emissive: { value: new Ut(0) } },
					]),
					vertexShader: Mi.meshtoon_vert,
					fragmentShader: Mi.meshtoon_frag,
				},
				matcap: {
					uniforms: ni([
						bi.common,
						bi.bumpmap,
						bi.normalmap,
						bi.displacementmap,
						bi.fog,
						{ matcap: { value: null } },
					]),
					vertexShader: Mi.meshmatcap_vert,
					fragmentShader: Mi.meshmatcap_frag,
				},
				points: {
					uniforms: ni([bi.points, bi.fog]),
					vertexShader: Mi.points_vert,
					fragmentShader: Mi.points_frag,
				},
				dashed: {
					uniforms: ni([
						bi.common,
						bi.fog,
						{
							scale: { value: 1 },
							dashSize: { value: 1 },
							totalSize: { value: 2 },
						},
					]),
					vertexShader: Mi.linedashed_vert,
					fragmentShader: Mi.linedashed_frag,
				},
				depth: {
					uniforms: ni([bi.common, bi.displacementmap]),
					vertexShader: Mi.depth_vert,
					fragmentShader: Mi.depth_frag,
				},
				normal: {
					uniforms: ni([
						bi.common,
						bi.bumpmap,
						bi.normalmap,
						bi.displacementmap,
						{ opacity: { value: 1 } },
					]),
					vertexShader: Mi.meshnormal_vert,
					fragmentShader: Mi.meshnormal_frag,
				},
				sprite: {
					uniforms: ni([bi.sprite, bi.fog]),
					vertexShader: Mi.sprite_vert,
					fragmentShader: Mi.sprite_frag,
				},
				background: {
					uniforms: { uvTransform: { value: new Rt() }, t2D: { value: null } },
					vertexShader: Mi.background_vert,
					fragmentShader: Mi.background_frag,
				},
				cube: {
					uniforms: ni([bi.envmap, { opacity: { value: 1 } }]),
					vertexShader: Mi.cube_vert,
					fragmentShader: Mi.cube_frag,
				},
				equirect: {
					uniforms: { tEquirect: { value: null } },
					vertexShader: Mi.equirect_vert,
					fragmentShader: Mi.equirect_frag,
				},
				distanceRGBA: {
					uniforms: ni([
						bi.common,
						bi.displacementmap,
						{
							referencePosition: { value: new Zt() },
							nearDistance: { value: 1 },
							farDistance: { value: 1e3 },
						},
					]),
					vertexShader: Mi.distanceRGBA_vert,
					fragmentShader: Mi.distanceRGBA_frag,
				},
				shadow: {
					uniforms: ni([
						bi.lights,
						bi.fog,
						{ color: { value: new Ut(0) }, opacity: { value: 1 } },
					]),
					vertexShader: Mi.shadow_vert,
					fragmentShader: Mi.shadow_frag,
				},
			};
		function Si(t, e, n, i, r, s) {
			const a = new Ut(0);
			let o,
				c,
				h = !0 === r ? 0 : 1,
				u = null,
				d = 0,
				p = null;
			function m(t, e) {
				n.buffers.color.setClear(t.r, t.g, t.b, e, s);
			}
			return {
				getClearColor: function () {
					return a;
				},
				setClearColor: function (t, e = 1) {
					a.set(t), (h = e), m(a, h);
				},
				getClearAlpha: function () {
					return h;
				},
				setClearAlpha: function (t) {
					(h = t), m(a, h);
				},
				render: function (n, r) {
					let s = !1,
						f = !0 === r.isScene ? r.background : null;
					f && f.isTexture && (f = e.get(f));
					const g = t.xr,
						v = g.getSession && g.getSession();
					v && "additive" === v.environmentBlendMode && (f = null),
						null === f ? m(a, h) : f && f.isColor && (m(f, 1), (s = !0)),
						(t.autoClear || s) &&
							t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
						f && (f.isCubeTexture || f.mapping === l)
							? (void 0 === c &&
									((c = new Qn(
										new ti(1, 1, 1),
										new ri({
											name: "BackgroundCubeMaterial",
											uniforms: ei(wi.cube.uniforms),
											vertexShader: wi.cube.vertexShader,
											fragmentShader: wi.cube.fragmentShader,
											side: 1,
											depthTest: !1,
											depthWrite: !1,
											fog: !1,
										})
									)),
									c.geometry.deleteAttribute("normal"),
									c.geometry.deleteAttribute("uv"),
									(c.onBeforeRender = function (t, e, n) {
										this.matrixWorld.copyPosition(n.matrixWorld);
									}),
									Object.defineProperty(c.material, "envMap", {
										get: function () {
											return this.uniforms.envMap.value;
										},
									}),
									i.update(c)),
							  (c.material.uniforms.envMap.value = f),
							  (c.material.uniforms.flipEnvMap.value =
									f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1),
							  (u === f && d === f.version && p === t.toneMapping) ||
									((c.material.needsUpdate = !0),
									(u = f),
									(d = f.version),
									(p = t.toneMapping)),
							  n.unshift(c, c.geometry, c.material, 0, 0, null))
							: f &&
							  f.isTexture &&
							  (void 0 === o &&
									((o = new Qn(
										new _i(2, 2),
										new ri({
											name: "BackgroundMaterial",
											uniforms: ei(wi.background.uniforms),
											vertexShader: wi.background.vertexShader,
											fragmentShader: wi.background.fragmentShader,
											side: 0,
											depthTest: !1,
											depthWrite: !1,
											fog: !1,
										})
									)),
									o.geometry.deleteAttribute("normal"),
									Object.defineProperty(o.material, "map", {
										get: function () {
											return this.uniforms.t2D.value;
										},
									}),
									i.update(o)),
							  (o.material.uniforms.t2D.value = f),
							  !0 === f.matrixAutoUpdate && f.updateMatrix(),
							  o.material.uniforms.uvTransform.value.copy(f.matrix),
							  (u === f && d === f.version && p === t.toneMapping) ||
									((o.material.needsUpdate = !0),
									(u = f),
									(d = f.version),
									(p = t.toneMapping)),
							  n.unshift(o, o.geometry, o.material, 0, 0, null));
				},
			};
		}
		function Ti(t, e, n, i) {
			const r = t.getParameter(34921),
				s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
				a = i.isWebGL2 || null !== s,
				o = {},
				l = d(null);
			let c = l;
			function h(e) {
				return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
			}
			function u(e) {
				return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
			}
			function d(t) {
				const e = [],
					n = [],
					i = [];
				for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
				return {
					geometry: null,
					program: null,
					wireframe: !1,
					newAttributes: e,
					enabledAttributes: n,
					attributeDivisors: i,
					object: t,
					attributes: {},
					index: null,
				};
			}
			function p() {
				const t = c.newAttributes;
				for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
			}
			function m(t) {
				f(t, 0);
			}
			function f(n, r) {
				const s = c.newAttributes,
					a = c.enabledAttributes,
					o = c.attributeDivisors;
				if (
					((s[n] = 1),
					0 === a[n] && (t.enableVertexAttribArray(n), (a[n] = 1)),
					o[n] !== r)
				) {
					(i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
						i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
					](n, r),
						(o[n] = r);
				}
			}
			function g() {
				const e = c.newAttributes,
					n = c.enabledAttributes;
				for (let i = 0, r = n.length; i < r; i++)
					n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
			}
			function v(e, n, r, s, a, o) {
				!0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
					? t.vertexAttribPointer(e, n, r, s, a, o)
					: t.vertexAttribIPointer(e, n, r, a, o);
			}
			function y() {
				x(), c !== l && ((c = l), h(c.object));
			}
			function x() {
				(l.geometry = null), (l.program = null), (l.wireframe = !1);
			}
			return {
				setup: function (r, l, u, y, x) {
					let _ = !1;
					if (a) {
						const e = (function (e, n, r) {
							const a = !0 === r.wireframe;
							let l = o[e.id];
							void 0 === l && ((l = {}), (o[e.id] = l));
							let c = l[n.id];
							void 0 === c && ((c = {}), (l[n.id] = c));
							let h = c[a];
							void 0 === h &&
								((h = d(
									i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()
								)),
								(c[a] = h));
							return h;
						})(y, u, l);
						c !== e && ((c = e), h(c.object)),
							(_ = (function (t, e) {
								const n = c.attributes,
									i = t.attributes;
								let r = 0;
								for (const t in i) {
									const e = n[t],
										s = i[t];
									if (void 0 === e) return !0;
									if (e.attribute !== s) return !0;
									if (e.data !== s.data) return !0;
									r++;
								}
								return c.attributesNum !== r || c.index !== e;
							})(y, x)),
							_ &&
								(function (t, e) {
									const n = {},
										i = t.attributes;
									let r = 0;
									for (const t in i) {
										const e = i[t],
											s = {};
										(s.attribute = e),
											e.data && (s.data = e.data),
											(n[t] = s),
											r++;
									}
									(c.attributes = n), (c.attributesNum = r), (c.index = e);
								})(y, x);
					} else {
						const t = !0 === l.wireframe;
						(c.geometry === y.id && c.program === u.id && c.wireframe === t) ||
							((c.geometry = y.id),
							(c.program = u.id),
							(c.wireframe = t),
							(_ = !0));
					}
					!0 === r.isInstancedMesh && (_ = !0),
						null !== x && n.update(x, 34963),
						_ &&
							(!(function (r, s, a, o) {
								if (
									!1 === i.isWebGL2 &&
									(r.isInstancedMesh || o.isInstancedBufferGeometry) &&
									null === e.get("ANGLE_instanced_arrays")
								)
									return;
								p();
								const l = o.attributes,
									c = a.getAttributes(),
									h = s.defaultAttributeValues;
								for (const e in c) {
									const i = c[e];
									if (i.location >= 0) {
										let s = l[e];
										if (
											(void 0 === s &&
												("instanceMatrix" === e &&
													r.instanceMatrix &&
													(s = r.instanceMatrix),
												"instanceColor" === e &&
													r.instanceColor &&
													(s = r.instanceColor)),
											void 0 !== s)
										) {
											const e = s.normalized,
												a = s.itemSize,
												l = n.get(s);
											if (void 0 === l) continue;
											const c = l.buffer,
												h = l.type,
												u = l.bytesPerElement;
											if (s.isInterleavedBufferAttribute) {
												const n = s.data,
													l = n.stride,
													d = s.offset;
												if (n && n.isInstancedInterleavedBuffer) {
													for (let t = 0; t < i.locationSize; t++)
														f(i.location + t, n.meshPerAttribute);
													!0 !== r.isInstancedMesh &&
														void 0 === o._maxInstanceCount &&
														(o._maxInstanceCount =
															n.meshPerAttribute * n.count);
												} else
													for (let t = 0; t < i.locationSize; t++)
														m(i.location + t);
												t.bindBuffer(34962, c);
												for (let t = 0; t < i.locationSize; t++)
													v(
														i.location + t,
														a / i.locationSize,
														h,
														e,
														l * u,
														(d + (a / i.locationSize) * t) * u
													);
											} else {
												if (s.isInstancedBufferAttribute) {
													for (let t = 0; t < i.locationSize; t++)
														f(i.location + t, s.meshPerAttribute);
													!0 !== r.isInstancedMesh &&
														void 0 === o._maxInstanceCount &&
														(o._maxInstanceCount =
															s.meshPerAttribute * s.count);
												} else
													for (let t = 0; t < i.locationSize; t++)
														m(i.location + t);
												t.bindBuffer(34962, c);
												for (let t = 0; t < i.locationSize; t++)
													v(
														i.location + t,
														a / i.locationSize,
														h,
														e,
														a * u,
														(a / i.locationSize) * t * u
													);
											}
										} else if (void 0 !== h) {
											const n = h[e];
											if (void 0 !== n)
												switch (n.length) {
													case 2:
														t.vertexAttrib2fv(i.location, n);
														break;
													case 3:
														t.vertexAttrib3fv(i.location, n);
														break;
													case 4:
														t.vertexAttrib4fv(i.location, n);
														break;
													default:
														t.vertexAttrib1fv(i.location, n);
												}
										}
									}
								}
								g();
							})(r, l, u, y),
							null !== x && t.bindBuffer(34963, n.get(x).buffer));
				},
				reset: y,
				resetDefaultState: x,
				dispose: function () {
					y();
					for (const t in o) {
						const e = o[t];
						for (const t in e) {
							const n = e[t];
							for (const t in n) u(n[t].object), delete n[t];
							delete e[t];
						}
						delete o[t];
					}
				},
				releaseStatesOfGeometry: function (t) {
					if (void 0 === o[t.id]) return;
					const e = o[t.id];
					for (const t in e) {
						const n = e[t];
						for (const t in n) u(n[t].object), delete n[t];
						delete e[t];
					}
					delete o[t.id];
				},
				releaseStatesOfProgram: function (t) {
					for (const e in o) {
						const n = o[e];
						if (void 0 === n[t.id]) continue;
						const i = n[t.id];
						for (const t in i) u(i[t].object), delete i[t];
						delete n[t.id];
					}
				},
				initAttributes: p,
				enableAttribute: m,
				disableUnusedAttributes: g,
			};
		}
		function Ei(t, e, n, i) {
			const r = i.isWebGL2;
			let s;
			(this.setMode = function (t) {
				s = t;
			}),
				(this.render = function (e, i) {
					t.drawArrays(s, e, i), n.update(i, s, 1);
				}),
				(this.renderInstances = function (i, a, o) {
					if (0 === o) return;
					let l, c;
					if (r) (l = t), (c = "drawArraysInstanced");
					else if (
						((l = e.get("ANGLE_instanced_arrays")),
						(c = "drawArraysInstancedANGLE"),
						null === l)
					)
						return void console.error(
							"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
						);
					l[c](s, i, a, o), n.update(a, s, o);
				});
		}
		function Ai(t, e, n) {
			let i;
			function r(e) {
				if ("highp" === e) {
					if (
						t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
						t.getShaderPrecisionFormat(35632, 36338).precision > 0
					)
						return "highp";
					e = "mediump";
				}
				return "mediump" === e &&
					t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
					t.getShaderPrecisionFormat(35632, 36337).precision > 0
					? "mediump"
					: "lowp";
			}
			const s =
				("undefined" != typeof WebGL2RenderingContext &&
					t instanceof WebGL2RenderingContext) ||
				("undefined" != typeof WebGL2ComputeRenderingContext &&
					t instanceof WebGL2ComputeRenderingContext);
			let a = void 0 !== n.precision ? n.precision : "highp";
			const o = r(a);
			o !== a &&
				(console.warn(
					"THREE.WebGLRenderer:",
					a,
					"not supported, using",
					o,
					"instead."
				),
				(a = o));
			const l = s || e.has("WEBGL_draw_buffers"),
				c = !0 === n.logarithmicDepthBuffer,
				h = t.getParameter(34930),
				u = t.getParameter(35660),
				d = t.getParameter(3379),
				p = t.getParameter(34076),
				m = t.getParameter(34921),
				f = t.getParameter(36347),
				g = t.getParameter(36348),
				v = t.getParameter(36349),
				y = u > 0,
				x = s || e.has("OES_texture_float");
			return {
				isWebGL2: s,
				drawBuffers: l,
				getMaxAnisotropy: function () {
					if (void 0 !== i) return i;
					if (!0 === e.has("EXT_texture_filter_anisotropic")) {
						const n = e.get("EXT_texture_filter_anisotropic");
						i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
					} else i = 0;
					return i;
				},
				getMaxPrecision: r,
				precision: a,
				logarithmicDepthBuffer: c,
				maxTextures: h,
				maxVertexTextures: u,
				maxTextureSize: d,
				maxCubemapSize: p,
				maxAttributes: m,
				maxVertexUniforms: f,
				maxVaryings: g,
				maxFragmentUniforms: v,
				vertexTextures: y,
				floatFragmentTextures: x,
				floatVertexTextures: y && x,
				maxSamples: s ? t.getParameter(36183) : 0,
			};
		}
		function Ri(t) {
			const e = this;
			let n = null,
				i = 0,
				r = !1,
				s = !1;
			const a = new mi(),
				o = new Rt(),
				l = { value: null, needsUpdate: !1 };
			function c() {
				l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
					(e.numPlanes = i),
					(e.numIntersection = 0);
			}
			function h(t, n, i, r) {
				const s = null !== t ? t.length : 0;
				let c = null;
				if (0 !== s) {
					if (((c = l.value), !0 !== r || null === c)) {
						const e = i + 4 * s,
							r = n.matrixWorldInverse;
						o.getNormalMatrix(r),
							(null === c || c.length < e) && (c = new Float32Array(e));
						for (let e = 0, n = i; e !== s; ++e, n += 4)
							a.copy(t[e]).applyMatrix4(r, o),
								a.normal.toArray(c, n),
								(c[n + 3] = a.constant);
					}
					(l.value = c), (l.needsUpdate = !0);
				}
				return (e.numPlanes = s), (e.numIntersection = 0), c;
			}
			(this.uniform = l),
				(this.numPlanes = 0),
				(this.numIntersection = 0),
				(this.init = function (t, e, s) {
					const a = 0 !== t.length || e || 0 !== i || r;
					return (r = e), (n = h(t, s, 0)), (i = t.length), a;
				}),
				(this.beginShadows = function () {
					(s = !0), h(null);
				}),
				(this.endShadows = function () {
					(s = !1), c();
				}),
				(this.setState = function (e, a, o) {
					const u = e.clippingPlanes,
						d = e.clipIntersection,
						p = e.clipShadows,
						m = t.get(e);
					if (!r || null === u || 0 === u.length || (s && !p))
						s ? h(null) : c();
					else {
						const t = s ? 0 : i,
							e = 4 * t;
						let r = m.clippingState || null;
						(l.value = r), (r = h(u, a, e, o));
						for (let t = 0; t !== e; ++t) r[t] = n[t];
						(m.clippingState = r),
							(this.numIntersection = d ? this.numPlanes : 0),
							(this.numPlanes += t);
					}
				});
		}
		function Li(t) {
			let e = new WeakMap();
			function n(t, e) {
				return e === a ? (t.mapping = r) : e === o && (t.mapping = s), t;
			}
			function i(t) {
				const n = t.target;
				n.removeEventListener("dispose", i);
				const r = e.get(n);
				void 0 !== r && (e.delete(n), r.dispose());
			}
			return {
				get: function (r) {
					if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
						const s = r.mapping;
						if (s === a || s === o) {
							if (e.has(r)) {
								return n(e.get(r).texture, r.mapping);
							}
							{
								const s = r.image;
								if (s && s.height > 0) {
									const a = new hi(s.height / 2);
									return (
										a.fromEquirectangularTexture(t, r),
										e.set(r, a),
										r.addEventListener("dispose", i),
										n(a.texture, r.mapping)
									);
								}
								return null;
							}
						}
					}
					return r;
				},
				dispose: function () {
					e = new WeakMap();
				},
			};
		}
		wi.physical = {
			uniforms: ni([
				wi.standard.uniforms,
				{
					clearcoat: { value: 0 },
					clearcoatMap: { value: null },
					clearcoatRoughness: { value: 0 },
					clearcoatRoughnessMap: { value: null },
					clearcoatNormalScale: { value: new At(1, 1) },
					clearcoatNormalMap: { value: null },
					sheen: { value: 0 },
					sheenColor: { value: new Ut(0) },
					sheenColorMap: { value: null },
					sheenRoughness: { value: 1 },
					sheenRoughnessMap: { value: null },
					transmission: { value: 0 },
					transmissionMap: { value: null },
					transmissionSamplerSize: { value: new At() },
					transmissionSamplerMap: { value: null },
					thickness: { value: 0 },
					thicknessMap: { value: null },
					attenuationDistance: { value: 0 },
					attenuationColor: { value: new Ut(0) },
					specularIntensity: { value: 1 },
					specularIntensityMap: { value: null },
					specularColor: { value: new Ut(1, 1, 1) },
					specularColorMap: { value: null },
				},
			]),
			vertexShader: Mi.meshphysical_vert,
			fragmentShader: Mi.meshphysical_frag,
		};
		class Ci extends si {
			constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
				super(),
					(this.type = "OrthographicCamera"),
					(this.zoom = 1),
					(this.view = null),
					(this.left = t),
					(this.right = e),
					(this.top = n),
					(this.bottom = i),
					(this.near = r),
					(this.far = s),
					this.updateProjectionMatrix();
			}
			copy(t, e) {
				return (
					super.copy(t, e),
					(this.left = t.left),
					(this.right = t.right),
					(this.top = t.top),
					(this.bottom = t.bottom),
					(this.near = t.near),
					(this.far = t.far),
					(this.zoom = t.zoom),
					(this.view = null === t.view ? null : Object.assign({}, t.view)),
					this
				);
			}
			setViewOffset(t, e, n, i, r, s) {
				null === this.view &&
					(this.view = {
						enabled: !0,
						fullWidth: 1,
						fullHeight: 1,
						offsetX: 0,
						offsetY: 0,
						width: 1,
						height: 1,
					}),
					(this.view.enabled = !0),
					(this.view.fullWidth = t),
					(this.view.fullHeight = e),
					(this.view.offsetX = n),
					(this.view.offsetY = i),
					(this.view.width = r),
					(this.view.height = s),
					this.updateProjectionMatrix();
			}
			clearViewOffset() {
				null !== this.view && (this.view.enabled = !1),
					this.updateProjectionMatrix();
			}
			updateProjectionMatrix() {
				const t = (this.right - this.left) / (2 * this.zoom),
					e = (this.top - this.bottom) / (2 * this.zoom),
					n = (this.right + this.left) / 2,
					i = (this.top + this.bottom) / 2;
				let r = n - t,
					s = n + t,
					a = i + e,
					o = i - e;
				if (null !== this.view && this.view.enabled) {
					const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
						e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
					(r += t * this.view.offsetX),
						(s = r + t * this.view.width),
						(a -= e * this.view.offsetY),
						(o = a - e * this.view.height);
				}
				this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
					this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					(e.object.zoom = this.zoom),
					(e.object.left = this.left),
					(e.object.right = this.right),
					(e.object.top = this.top),
					(e.object.bottom = this.bottom),
					(e.object.near = this.near),
					(e.object.far = this.far),
					null !== this.view && (e.object.view = Object.assign({}, this.view)),
					e
				);
			}
		}
		Ci.prototype.isOrthographicCamera = !0;
		class Pi extends ri {
			constructor(t) {
				super(t), (this.type = "RawShaderMaterial");
			}
		}
		Pi.prototype.isRawShaderMaterial = !0;
		const Di = Math.pow(2, 8),
			Ii = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
			Ni = 5 + Ii.length,
			Bi = 20,
			zi = new Ci(),
			{ _lodPlanes: Oi, _sizeLods: Fi, _sigmas: Ui } = qi(),
			Hi = new Ut();
		let Gi = null;
		const ki = (1 + Math.sqrt(5)) / 2,
			Vi = 1 / ki,
			Wi = [
				new Zt(1, 1, 1),
				new Zt(-1, 1, 1),
				new Zt(1, 1, -1),
				new Zt(-1, 1, -1),
				new Zt(0, ki, Vi),
				new Zt(0, ki, -Vi),
				new Zt(Vi, 0, ki),
				new Zt(-Vi, 0, ki),
				new Zt(ki, Vi, 0),
				new Zt(-ki, Vi, 0),
			];
		class ji {
			constructor(t) {
				(this._renderer = t),
					(this._pingPongRenderTarget = null),
					(this._blurMaterial = (function (t) {
						const e = new Float32Array(t),
							n = new Zt(0, 1, 0);
						return new Pi({
							name: "SphericalGaussianBlur",
							defines: { n: t },
							uniforms: {
								envMap: { value: null },
								samples: { value: 1 },
								weights: { value: e },
								latitudinal: { value: !1 },
								dTheta: { value: 0 },
								mipInt: { value: 0 },
								poleAxis: { value: n },
							},
							vertexShader: Ki(),
							fragmentShader:
								"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
							blending: 0,
							depthTest: !1,
							depthWrite: !1,
						});
					})(Bi)),
					(this._equirectShader = null),
					(this._cubemapShader = null),
					this._compileMaterial(this._blurMaterial);
			}
			fromScene(t, e = 0, n = 0.1, i = 100) {
				Gi = this._renderer.getRenderTarget();
				const r = this._allocateTargets();
				return (
					this._sceneToCubeUV(t, n, i, r),
					e > 0 && this._blur(r, 0, 0, e),
					this._applyPMREM(r),
					this._cleanup(r),
					r
				);
			}
			fromEquirectangular(t, e = null) {
				return this._fromTexture(t, e);
			}
			fromCubemap(t, e = null) {
				return this._fromTexture(t, e);
			}
			compileCubemapShader() {
				null === this._cubemapShader &&
					((this._cubemapShader = Zi()),
					this._compileMaterial(this._cubemapShader));
			}
			compileEquirectangularShader() {
				null === this._equirectShader &&
					((this._equirectShader = Yi()),
					this._compileMaterial(this._equirectShader));
			}
			dispose() {
				this._blurMaterial.dispose(),
					null !== this._pingPongRenderTarget &&
						this._pingPongRenderTarget.dispose(),
					null !== this._cubemapShader && this._cubemapShader.dispose(),
					null !== this._equirectShader && this._equirectShader.dispose();
				for (let t = 0; t < Oi.length; t++) Oi[t].dispose();
			}
			_cleanup(t) {
				this._renderer.setRenderTarget(Gi),
					(t.scissorTest = !1),
					Ji(t, 0, 0, t.width, t.height);
			}
			_fromTexture(t, e) {
				Gi = this._renderer.getRenderTarget();
				const n = e || this._allocateTargets(t);
				return (
					this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
				);
			}
			_allocateTargets(t) {
				const e = {
						magFilter: g,
						minFilter: g,
						generateMipmaps: !1,
						type: w,
						format: T,
						encoding: ot,
						depthBuffer: !1,
					},
					n = Xi(e);
				return (
					(n.depthBuffer = !t),
					null === this._pingPongRenderTarget &&
						(this._pingPongRenderTarget = Xi(e)),
					n
				);
			}
			_compileMaterial(t) {
				const e = new Qn(Oi[0], t);
				this._renderer.compile(e, zi);
			}
			_sceneToCubeUV(t, e, n, i) {
				const r = new ai(90, 1, e, n),
					s = [1, -1, 1, 1, 1, 1],
					a = [1, 1, 1, -1, -1, -1],
					o = this._renderer,
					l = o.autoClear,
					c = o.toneMapping;
				o.getClearColor(Hi), (o.toneMapping = 0), (o.autoClear = !1);
				const h = new pn({
						name: "PMREM.Background",
						side: 1,
						depthWrite: !1,
						depthTest: !1,
					}),
					u = new Qn(new ti(), h);
				let d = !1;
				const p = t.background;
				p
					? p.isColor && (h.color.copy(p), (t.background = null), (d = !0))
					: (h.color.copy(Hi), (d = !0));
				for (let e = 0; e < 6; e++) {
					const n = e % 3;
					0 === n
						? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0))
						: 1 === n
						? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0))
						: (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e])),
						Ji(i, n * Di, e > 2 ? Di : 0, Di, Di),
						o.setRenderTarget(i),
						d && o.render(u, r),
						o.render(t, r);
				}
				u.geometry.dispose(),
					u.material.dispose(),
					(o.toneMapping = c),
					(o.autoClear = l),
					(t.background = p);
			}
			_textureToCubeUV(t, e) {
				const n = this._renderer,
					i = t.mapping === r || t.mapping === s;
				i
					? (null === this._cubemapShader && (this._cubemapShader = Zi()),
					  (this._cubemapShader.uniforms.flipEnvMap.value =
							!1 === t.isRenderTargetTexture ? -1 : 1))
					: null === this._equirectShader && (this._equirectShader = Yi());
				const a = i ? this._cubemapShader : this._equirectShader,
					o = new Qn(Oi[0], a),
					l = a.uniforms;
				(l.envMap.value = t),
					i || l.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
					Ji(e, 0, 0, 3 * Di, 2 * Di),
					n.setRenderTarget(e),
					n.render(o, zi);
			}
			_applyPMREM(t) {
				const e = this._renderer,
					n = e.autoClear;
				e.autoClear = !1;
				for (let e = 1; e < Ni; e++) {
					const n = Math.sqrt(Ui[e] * Ui[e] - Ui[e - 1] * Ui[e - 1]),
						i = Wi[(e - 1) % Wi.length];
					this._blur(t, e - 1, e, n, i);
				}
				e.autoClear = n;
			}
			_blur(t, e, n, i, r) {
				const s = this._pingPongRenderTarget;
				this._halfBlur(t, s, e, n, i, "latitudinal", r),
					this._halfBlur(s, t, n, n, i, "longitudinal", r);
			}
			_halfBlur(t, e, n, i, r, s, a) {
				const o = this._renderer,
					l = this._blurMaterial;
				"latitudinal" !== s &&
					"longitudinal" !== s &&
					console.error(
						"blur direction must be either latitudinal or longitudinal!"
					);
				const c = new Qn(Oi[i], l),
					h = l.uniforms,
					u = Fi[n] - 1,
					d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
					p = r / d,
					m = isFinite(r) ? 1 + Math.floor(3 * p) : Bi;
				m > Bi &&
					console.warn(
						`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`
					);
				const f = [];
				let g = 0;
				for (let t = 0; t < Bi; ++t) {
					const e = t / p,
						n = Math.exp((-e * e) / 2);
					f.push(n), 0 === t ? (g += n) : t < m && (g += 2 * n);
				}
				for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
				(h.envMap.value = t.texture),
					(h.samples.value = m),
					(h.weights.value = f),
					(h.latitudinal.value = "latitudinal" === s),
					a && (h.poleAxis.value = a),
					(h.dTheta.value = d),
					(h.mipInt.value = 8 - n);
				const v = Fi[i];
				Ji(
					e,
					3 * Math.max(0, Di - 2 * v),
					(0 === i ? 0 : 2 * Di) + 2 * v * (i > 4 ? i - 8 + 4 : 0),
					3 * v,
					2 * v
				),
					o.setRenderTarget(e),
					o.render(c, zi);
			}
		}
		function qi() {
			const t = [],
				e = [],
				n = [];
			let i = 8;
			for (let r = 0; r < Ni; r++) {
				const s = Math.pow(2, i);
				e.push(s);
				let a = 1 / s;
				r > 4 ? (a = Ii[r - 8 + 4 - 1]) : 0 === r && (a = 0), n.push(a);
				const o = 1 / (s - 1),
					l = -o / 2,
					c = 1 + o / 2,
					h = [l, l, c, l, c, c, l, l, c, c, l, c],
					u = 6,
					d = 6,
					p = 3,
					m = 2,
					f = 1,
					g = new Float32Array(p * d * u),
					v = new Float32Array(m * d * u),
					y = new Float32Array(f * d * u);
				for (let t = 0; t < u; t++) {
					const e = ((t % 3) * 2) / 3 - 1,
						n = t > 2 ? 0 : -1,
						i = [
							e,
							n,
							0,
							e + 2 / 3,
							n,
							0,
							e + 2 / 3,
							n + 1,
							0,
							e,
							n,
							0,
							e + 2 / 3,
							n + 1,
							0,
							e,
							n + 1,
							0,
						];
					g.set(i, p * d * t), v.set(h, m * d * t);
					const r = [t, t, t, t, t, t];
					y.set(r, f * d * t);
				}
				const x = new Nn();
				x.setAttribute("position", new gn(g, p)),
					x.setAttribute("uv", new gn(v, m)),
					x.setAttribute("faceIndex", new gn(y, f)),
					t.push(x),
					i > 4 && i--;
			}
			return { _lodPlanes: t, _sizeLods: e, _sigmas: n };
		}
		function Xi(t) {
			const e = new qt(3 * Di, 3 * Di, t);
			return (
				(e.texture.mapping = l),
				(e.texture.name = "PMREM.cubeUv"),
				(e.scissorTest = !0),
				e
			);
		}
		function Ji(t, e, n, i, r) {
			t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
		}
		function Yi() {
			const t = new At(1, 1);
			return new Pi({
				name: "EquirectangularToCubeUV",
				uniforms: { envMap: { value: null }, texelSize: { value: t } },
				vertexShader: Ki(),
				fragmentShader:
					"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = texture2D ( envMap, uv ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = texture2D ( envMap, uv ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = texture2D ( envMap, uv ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = texture2D ( envMap, uv ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t}\n\t\t",
				blending: 0,
				depthTest: !1,
				depthWrite: !1,
			});
		}
		function Zi() {
			return new Pi({
				name: "CubemapToCubeUV",
				uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
				vertexShader: Ki(),
				fragmentShader:
					"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
				blending: 0,
				depthTest: !1,
				depthWrite: !1,
			});
		}
		function Ki() {
			return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
		}
		function Qi(t) {
			let e = new WeakMap(),
				n = null;
			function i(t) {
				const n = t.target;
				n.removeEventListener("dispose", i);
				const r = e.get(n);
				void 0 !== r && (e.delete(n), r.dispose());
			}
			return {
				get: function (l) {
					if (l && l.isTexture) {
						const c = l.mapping,
							h = c === a || c === o,
							u = c === r || c === s;
						if (h || u) {
							if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
								l.needsPMREMUpdate = !1;
								let i = e.get(l);
								return (
									null === n && (n = new ji(t)),
									(i = h ? n.fromEquirectangular(l, i) : n.fromCubemap(l, i)),
									e.set(l, i),
									i.texture
								);
							}
							if (e.has(l)) return e.get(l).texture;
							{
								const r = l.image;
								if (
									(h && r && r.height > 0) ||
									(u &&
										r &&
										(function (t) {
											let e = 0;
											const n = 6;
											for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
											return e === n;
										})(r))
								) {
									null === n && (n = new ji(t));
									const r = h ? n.fromEquirectangular(l) : n.fromCubemap(l);
									return (
										e.set(l, r), l.addEventListener("dispose", i), r.texture
									);
								}
								return null;
							}
						}
					}
					return l;
				},
				dispose: function () {
					(e = new WeakMap()), null !== n && (n.dispose(), (n = null));
				},
			};
		}
		function $i(t) {
			const e = {};
			function n(n) {
				if (void 0 !== e[n]) return e[n];
				let i;
				switch (n) {
					case "WEBGL_depth_texture":
						i =
							t.getExtension("WEBGL_depth_texture") ||
							t.getExtension("MOZ_WEBGL_depth_texture") ||
							t.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						i =
							t.getExtension("EXT_texture_filter_anisotropic") ||
							t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
							t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						i =
							t.getExtension("WEBGL_compressed_texture_s3tc") ||
							t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
							t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						i =
							t.getExtension("WEBGL_compressed_texture_pvrtc") ||
							t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					default:
						i = t.getExtension(n);
				}
				return (e[n] = i), i;
			}
			return {
				has: function (t) {
					return null !== n(t);
				},
				init: function (t) {
					t.isWebGL2
						? n("EXT_color_buffer_float")
						: (n("WEBGL_depth_texture"),
						  n("OES_texture_float"),
						  n("OES_texture_half_float"),
						  n("OES_texture_half_float_linear"),
						  n("OES_standard_derivatives"),
						  n("OES_element_index_uint"),
						  n("OES_vertex_array_object"),
						  n("ANGLE_instanced_arrays")),
						n("OES_texture_float_linear"),
						n("EXT_color_buffer_half_float"),
						n("WEBGL_multisampled_render_to_texture");
				},
				get: function (t) {
					const e = n(t);
					return (
						null === e &&
							console.warn(
								"THREE.WebGLRenderer: " + t + " extension not supported."
							),
						e
					);
				},
			};
		}
		function tr(t, e, n, i) {
			const r = {},
				s = new WeakMap();
			function a(t) {
				const o = t.target;
				null !== o.index && e.remove(o.index);
				for (const t in o.attributes) e.remove(o.attributes[t]);
				o.removeEventListener("dispose", a), delete r[o.id];
				const l = s.get(o);
				l && (e.remove(l), s.delete(o)),
					i.releaseStatesOfGeometry(o),
					!0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
					n.memory.geometries--;
			}
			function o(t) {
				const n = [],
					i = t.index,
					r = t.attributes.position;
				let a = 0;
				if (null !== i) {
					const t = i.array;
					a = i.version;
					for (let e = 0, i = t.length; e < i; e += 3) {
						const i = t[e + 0],
							r = t[e + 1],
							s = t[e + 2];
						n.push(i, r, r, s, s, i);
					}
				} else {
					const t = r.array;
					a = r.version;
					for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
						const t = e + 0,
							i = e + 1,
							r = e + 2;
						n.push(t, i, i, r, r, t);
					}
				}
				const o = new (Lt(n) ? wn : Mn)(n, 1);
				o.version = a;
				const l = s.get(t);
				l && e.remove(l), s.set(t, o);
			}
			return {
				get: function (t, e) {
					return (
						!0 === r[e.id] ||
							(e.addEventListener("dispose", a),
							(r[e.id] = !0),
							n.memory.geometries++),
						e
					);
				},
				update: function (t) {
					const n = t.attributes;
					for (const t in n) e.update(n[t], 34962);
					const i = t.morphAttributes;
					for (const t in i) {
						const n = i[t];
						for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
					}
				},
				getWireframeAttribute: function (t) {
					const e = s.get(t);
					if (e) {
						const n = t.index;
						null !== n && e.version < n.version && o(t);
					} else o(t);
					return s.get(t);
				},
			};
		}
		function er(t, e, n, i) {
			const r = i.isWebGL2;
			let s, a, o;
			(this.setMode = function (t) {
				s = t;
			}),
				(this.setIndex = function (t) {
					(a = t.type), (o = t.bytesPerElement);
				}),
				(this.render = function (e, i) {
					t.drawElements(s, i, a, e * o), n.update(i, s, 1);
				}),
				(this.renderInstances = function (i, l, c) {
					if (0 === c) return;
					let h, u;
					if (r) (h = t), (u = "drawElementsInstanced");
					else if (
						((h = e.get("ANGLE_instanced_arrays")),
						(u = "drawElementsInstancedANGLE"),
						null === h)
					)
						return void console.error(
							"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
						);
					h[u](s, l, a, i * o, c), n.update(l, s, c);
				});
		}
		function nr(t) {
			const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
			return {
				memory: { geometries: 0, textures: 0 },
				render: e,
				programs: null,
				autoReset: !0,
				reset: function () {
					e.frame++,
						(e.calls = 0),
						(e.triangles = 0),
						(e.points = 0),
						(e.lines = 0);
				},
				update: function (t, n, i) {
					switch ((e.calls++, n)) {
						case 4:
							e.triangles += i * (t / 3);
							break;
						case 1:
							e.lines += i * (t / 2);
							break;
						case 3:
							e.lines += i * (t - 1);
							break;
						case 2:
							e.lines += i * t;
							break;
						case 0:
							e.points += i * t;
							break;
						default:
							console.error("THREE.WebGLInfo: Unknown draw mode:", n);
					}
				},
			};
		}
		class ir extends Vt {
			constructor(t = null, e = 1, n = 1, i = 1) {
				super(null),
					(this.image = { data: t, width: e, height: n, depth: i }),
					(this.magFilter = p),
					(this.minFilter = p),
					(this.wrapR = u),
					(this.generateMipmaps = !1),
					(this.flipY = !1),
					(this.unpackAlignment = 1);
			}
		}
		function rr(t, e) {
			return t[0] - e[0];
		}
		function sr(t, e) {
			return Math.abs(e[1]) - Math.abs(t[1]);
		}
		function ar(t, e) {
			let n = 1;
			const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
			i instanceof Int8Array
				? (n = 127)
				: i instanceof Int16Array
				? (n = 32767)
				: i instanceof Int32Array
				? (n = 2147483647)
				: console.error(
						"THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
						i
				  ),
				t.divideScalar(n);
		}
		function or(t, e, n) {
			const i = {},
				r = new Float32Array(8),
				s = new WeakMap(),
				a = new Zt(),
				o = [];
			for (let t = 0; t < 8; t++) o[t] = [t, 0];
			return {
				update: function (l, c, h, u) {
					const d = l.morphTargetInfluences;
					if (!0 === e.isWebGL2) {
						const i = c.morphAttributes.position.length;
						let r = s.get(c);
						if (void 0 === r || r.count !== i) {
							void 0 !== r && r.texture.dispose();
							const t = void 0 !== c.morphAttributes.normal,
								n = c.morphAttributes.position,
								o = c.morphAttributes.normal || [],
								l = !0 === t ? 2 : 1;
							let h = c.attributes.position.count * l,
								u = 1;
							h > e.maxTextureSize &&
								((u = Math.ceil(h / e.maxTextureSize)), (h = e.maxTextureSize));
							const d = new Float32Array(h * u * 4 * i),
								p = new ir(d, h, u, i);
							(p.format = T), (p.type = b), (p.needsUpdate = !0);
							const m = 4 * l;
							for (let e = 0; e < i; e++) {
								const i = n[e],
									r = o[e],
									s = h * u * 4 * e;
								for (let e = 0; e < i.count; e++) {
									a.fromBufferAttribute(i, e), !0 === i.normalized && ar(a, i);
									const n = e * m;
									(d[s + n + 0] = a.x),
										(d[s + n + 1] = a.y),
										(d[s + n + 2] = a.z),
										(d[s + n + 3] = 0),
										!0 === t &&
											(a.fromBufferAttribute(r, e),
											!0 === r.normalized && ar(a, r),
											(d[s + n + 4] = a.x),
											(d[s + n + 5] = a.y),
											(d[s + n + 6] = a.z),
											(d[s + n + 7] = 0));
								}
							}
							function f() {
								p.dispose(), s.delete(c), c.removeEventListener("dispose", f);
							}
							(r = { count: i, texture: p, size: new At(h, u) }),
								s.set(c, r),
								c.addEventListener("dispose", f);
						}
						let o = 0;
						for (let t = 0; t < d.length; t++) o += d[t];
						const l = c.morphTargetsRelative ? 1 : 1 - o;
						u.getUniforms().setValue(t, "morphTargetBaseInfluence", l),
							u.getUniforms().setValue(t, "morphTargetInfluences", d),
							u.getUniforms().setValue(t, "morphTargetsTexture", r.texture, n),
							u.getUniforms().setValue(t, "morphTargetsTextureSize", r.size);
					} else {
						const e = void 0 === d ? 0 : d.length;
						let n = i[c.id];
						if (void 0 === n || n.length !== e) {
							n = [];
							for (let t = 0; t < e; t++) n[t] = [t, 0];
							i[c.id] = n;
						}
						for (let t = 0; t < e; t++) {
							const e = n[t];
							(e[0] = t), (e[1] = d[t]);
						}
						n.sort(sr);
						for (let t = 0; t < 8; t++)
							t < e && n[t][1]
								? ((o[t][0] = n[t][0]), (o[t][1] = n[t][1]))
								: ((o[t][0] = Number.MAX_SAFE_INTEGER), (o[t][1] = 0));
						o.sort(rr);
						const s = c.morphAttributes.position,
							a = c.morphAttributes.normal;
						let l = 0;
						for (let t = 0; t < 8; t++) {
							const e = o[t],
								n = e[0],
								i = e[1];
							n !== Number.MAX_SAFE_INTEGER && i
								? (s &&
										c.getAttribute("morphTarget" + t) !== s[n] &&
										c.setAttribute("morphTarget" + t, s[n]),
								  a &&
										c.getAttribute("morphNormal" + t) !== a[n] &&
										c.setAttribute("morphNormal" + t, a[n]),
								  (r[t] = i),
								  (l += i))
								: (s &&
										!0 === c.hasAttribute("morphTarget" + t) &&
										c.deleteAttribute("morphTarget" + t),
								  a &&
										!0 === c.hasAttribute("morphNormal" + t) &&
										c.deleteAttribute("morphNormal" + t),
								  (r[t] = 0));
						}
						const h = c.morphTargetsRelative ? 1 : 1 - l;
						u.getUniforms().setValue(t, "morphTargetBaseInfluence", h),
							u.getUniforms().setValue(t, "morphTargetInfluences", r);
					}
				},
			};
		}
		function lr(t, e, n, i) {
			let r = new WeakMap();
			function s(t) {
				const e = t.target;
				e.removeEventListener("dispose", s),
					n.remove(e.instanceMatrix),
					null !== e.instanceColor && n.remove(e.instanceColor);
			}
			return {
				update: function (t) {
					const a = i.render.frame,
						o = t.geometry,
						l = e.get(t, o);
					return (
						r.get(l) !== a && (e.update(l), r.set(l, a)),
						t.isInstancedMesh &&
							(!1 === t.hasEventListener("dispose", s) &&
								t.addEventListener("dispose", s),
							n.update(t.instanceMatrix, 34962),
							null !== t.instanceColor && n.update(t.instanceColor, 34962)),
						l
					);
				},
				dispose: function () {
					r = new WeakMap();
				},
			};
		}
		ir.prototype.isDataTexture2DArray = !0;
		class cr extends Vt {
			constructor(t = null, e = 1, n = 1, i = 1) {
				super(null),
					(this.image = { data: t, width: e, height: n, depth: i }),
					(this.magFilter = p),
					(this.minFilter = p),
					(this.wrapR = u),
					(this.generateMipmaps = !1),
					(this.flipY = !1),
					(this.unpackAlignment = 1);
			}
		}
		cr.prototype.isDataTexture3D = !0;
		const hr = new Vt(),
			ur = new ir(),
			dr = new cr(),
			pr = new ci(),
			mr = [],
			fr = [],
			gr = new Float32Array(16),
			vr = new Float32Array(9),
			yr = new Float32Array(4);
		function xr(t, e, n) {
			const i = t[0];
			if (i <= 0 || i > 0) return t;
			const r = e * n;
			let s = mr[r];
			if ((void 0 === s && ((s = new Float32Array(r)), (mr[r] = s)), 0 !== e)) {
				i.toArray(s, 0);
				for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
			}
			return s;
		}
		function _r(t, e) {
			if (t.length !== e.length) return !1;
			for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
			return !0;
		}
		function Mr(t, e) {
			for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
		}
		function br(t, e) {
			let n = fr[e];
			void 0 === n && ((n = new Int32Array(e)), (fr[e] = n));
			for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
			return n;
		}
		function wr(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
		}
		function Sr(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y) ||
					(t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
			else {
				if (_r(n, e)) return;
				t.uniform2fv(this.addr, e), Mr(n, e);
			}
		}
		function Tr(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
					(t.uniform3f(this.addr, e.x, e.y, e.z),
					(n[0] = e.x),
					(n[1] = e.y),
					(n[2] = e.z));
			else if (void 0 !== e.r)
				(n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
					(t.uniform3f(this.addr, e.r, e.g, e.b),
					(n[0] = e.r),
					(n[1] = e.g),
					(n[2] = e.b));
			else {
				if (_r(n, e)) return;
				t.uniform3fv(this.addr, e), Mr(n, e);
			}
		}
		function Er(t, e) {
			const n = this.cache;
			if (void 0 !== e.x)
				(n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
					(t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
					(n[0] = e.x),
					(n[1] = e.y),
					(n[2] = e.z),
					(n[3] = e.w));
			else {
				if (_r(n, e)) return;
				t.uniform4fv(this.addr, e), Mr(n, e);
			}
		}
		function Ar(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (_r(n, e)) return;
				t.uniformMatrix2fv(this.addr, !1, e), Mr(n, e);
			} else {
				if (_r(n, i)) return;
				yr.set(i), t.uniformMatrix2fv(this.addr, !1, yr), Mr(n, i);
			}
		}
		function Rr(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (_r(n, e)) return;
				t.uniformMatrix3fv(this.addr, !1, e), Mr(n, e);
			} else {
				if (_r(n, i)) return;
				vr.set(i), t.uniformMatrix3fv(this.addr, !1, vr), Mr(n, i);
			}
		}
		function Lr(t, e) {
			const n = this.cache,
				i = e.elements;
			if (void 0 === i) {
				if (_r(n, e)) return;
				t.uniformMatrix4fv(this.addr, !1, e), Mr(n, e);
			} else {
				if (_r(n, i)) return;
				gr.set(i), t.uniformMatrix4fv(this.addr, !1, gr), Mr(n, i);
			}
		}
		function Cr(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
		}
		function Pr(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform2iv(this.addr, e), Mr(n, e));
		}
		function Dr(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform3iv(this.addr, e), Mr(n, e));
		}
		function Ir(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform4iv(this.addr, e), Mr(n, e));
		}
		function Nr(t, e) {
			const n = this.cache;
			n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
		}
		function Br(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform2uiv(this.addr, e), Mr(n, e));
		}
		function zr(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform3uiv(this.addr, e), Mr(n, e));
		}
		function Or(t, e) {
			const n = this.cache;
			_r(n, e) || (t.uniform4uiv(this.addr, e), Mr(n, e));
		}
		function Fr(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.safeSetTexture2D(e || hr, r);
		}
		function Ur(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.setTexture3D(e || dr, r);
		}
		function Hr(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.safeSetTextureCube(e || pr, r);
		}
		function Gr(t, e, n) {
			const i = this.cache,
				r = n.allocateTextureUnit();
			i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
				n.setTexture2DArray(e || ur, r);
		}
		function kr(t, e) {
			t.uniform1fv(this.addr, e);
		}
		function Vr(t, e) {
			const n = xr(e, this.size, 2);
			t.uniform2fv(this.addr, n);
		}
		function Wr(t, e) {
			const n = xr(e, this.size, 3);
			t.uniform3fv(this.addr, n);
		}
		function jr(t, e) {
			const n = xr(e, this.size, 4);
			t.uniform4fv(this.addr, n);
		}
		function qr(t, e) {
			const n = xr(e, this.size, 4);
			t.uniformMatrix2fv(this.addr, !1, n);
		}
		function Xr(t, e) {
			const n = xr(e, this.size, 9);
			t.uniformMatrix3fv(this.addr, !1, n);
		}
		function Jr(t, e) {
			const n = xr(e, this.size, 16);
			t.uniformMatrix4fv(this.addr, !1, n);
		}
		function Yr(t, e) {
			t.uniform1iv(this.addr, e);
		}
		function Zr(t, e) {
			t.uniform2iv(this.addr, e);
		}
		function Kr(t, e) {
			t.uniform3iv(this.addr, e);
		}
		function Qr(t, e) {
			t.uniform4iv(this.addr, e);
		}
		function $r(t, e) {
			t.uniform1uiv(this.addr, e);
		}
		function ts(t, e) {
			t.uniform2uiv(this.addr, e);
		}
		function es(t, e) {
			t.uniform3uiv(this.addr, e);
		}
		function ns(t, e) {
			t.uniform4uiv(this.addr, e);
		}
		function is(t, e, n) {
			const i = e.length,
				r = br(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || hr, r[t]);
		}
		function rs(t, e, n) {
			const i = e.length,
				r = br(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || dr, r[t]);
		}
		function ss(t, e, n) {
			const i = e.length,
				r = br(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || pr, r[t]);
		}
		function as(t, e, n) {
			const i = e.length,
				r = br(n, i);
			t.uniform1iv(this.addr, r);
			for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || ur, r[t]);
		}
		function os(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return wr;
						case 35664:
							return Sr;
						case 35665:
							return Tr;
						case 35666:
							return Er;
						case 35674:
							return Ar;
						case 35675:
							return Rr;
						case 35676:
							return Lr;
						case 5124:
						case 35670:
							return Cr;
						case 35667:
						case 35671:
							return Pr;
						case 35668:
						case 35672:
							return Dr;
						case 35669:
						case 35673:
							return Ir;
						case 5125:
							return Nr;
						case 36294:
							return Br;
						case 36295:
							return zr;
						case 36296:
							return Or;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return Fr;
						case 35679:
						case 36299:
						case 36307:
							return Ur;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return Hr;
						case 36289:
						case 36303:
						case 36311:
						case 36292:
							return Gr;
					}
				})(e.type));
		}
		function ls(t, e, n) {
			(this.id = t),
				(this.addr = n),
				(this.cache = []),
				(this.size = e.size),
				(this.setValue = (function (t) {
					switch (t) {
						case 5126:
							return kr;
						case 35664:
							return Vr;
						case 35665:
							return Wr;
						case 35666:
							return jr;
						case 35674:
							return qr;
						case 35675:
							return Xr;
						case 35676:
							return Jr;
						case 5124:
						case 35670:
							return Yr;
						case 35667:
						case 35671:
							return Zr;
						case 35668:
						case 35672:
							return Kr;
						case 35669:
						case 35673:
							return Qr;
						case 5125:
							return $r;
						case 36294:
							return ts;
						case 36295:
							return es;
						case 36296:
							return ns;
						case 35678:
						case 36198:
						case 36298:
						case 36306:
						case 35682:
							return is;
						case 35679:
						case 36299:
						case 36307:
							return rs;
						case 35680:
						case 36300:
						case 36308:
						case 36293:
							return ss;
						case 36289:
						case 36303:
						case 36311:
						case 36292:
							return as;
					}
				})(e.type));
		}
		function cs(t) {
			(this.id = t), (this.seq = []), (this.map = {});
		}
		(ls.prototype.updateCache = function (t) {
			const e = this.cache;
			t instanceof Float32Array &&
				e.length !== t.length &&
				(this.cache = new Float32Array(t.length)),
				Mr(e, t);
		}),
			(cs.prototype.setValue = function (t, e, n) {
				const i = this.seq;
				for (let r = 0, s = i.length; r !== s; ++r) {
					const s = i[r];
					s.setValue(t, e[s.id], n);
				}
			});
		const hs = /(\w+)(\])?(\[|\.)?/g;
		function us(t, e) {
			t.seq.push(e), (t.map[e.id] = e);
		}
		function ds(t, e, n) {
			const i = t.name,
				r = i.length;
			for (hs.lastIndex = 0; ; ) {
				const s = hs.exec(i),
					a = hs.lastIndex;
				let o = s[1];
				const l = "]" === s[2],
					c = s[3];
				if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
					us(n, void 0 === c ? new os(o, t, e) : new ls(o, t, e));
					break;
				}
				{
					let t = n.map[o];
					void 0 === t && ((t = new cs(o)), us(n, t)), (n = t);
				}
			}
		}
		function ps(t, e) {
			(this.seq = []), (this.map = {});
			const n = t.getProgramParameter(e, 35718);
			for (let i = 0; i < n; ++i) {
				const n = t.getActiveUniform(e, i);
				ds(n, t.getUniformLocation(e, n.name), this);
			}
		}
		function ms(t, e, n) {
			const i = t.createShader(e);
			return t.shaderSource(i, n), t.compileShader(i), i;
		}
		(ps.prototype.setValue = function (t, e, n, i) {
			const r = this.map[e];
			void 0 !== r && r.setValue(t, n, i);
		}),
			(ps.prototype.setOptional = function (t, e, n) {
				const i = e[n];
				void 0 !== i && this.setValue(t, n, i);
			}),
			(ps.upload = function (t, e, n, i) {
				for (let r = 0, s = e.length; r !== s; ++r) {
					const s = e[r],
						a = n[s.id];
					!1 !== a.needsUpdate && s.setValue(t, a.value, i);
				}
			}),
			(ps.seqWithValue = function (t, e) {
				const n = [];
				for (let i = 0, r = t.length; i !== r; ++i) {
					const r = t[i];
					r.id in e && n.push(r);
				}
				return n;
			});
		let fs = 0;
		function gs(t, e, n) {
			const i = t.getShaderParameter(e, 35713),
				r = t.getShaderInfoLog(e).trim();
			return i && "" === r
				? ""
				: n.toUpperCase() +
						"\n\n" +
						r +
						"\n\n" +
						(function (t) {
							const e = t.split("\n");
							for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
							return e.join("\n");
						})(t.getShaderSource(e));
		}
		function vs(t, e) {
			const n = (function (t) {
				switch (t) {
					case ot:
						return ["Linear", "( value )"];
					case lt:
						return ["sRGB", "( value )"];
					default:
						return (
							console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
							["Linear", "( value )"]
						);
				}
			})(e);
			return (
				"vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
			);
		}
		function ys(t, e) {
			let n;
			switch (e) {
				case 1:
					n = "Linear";
					break;
				case 2:
					n = "Reinhard";
					break;
				case 3:
					n = "OptimizedCineon";
					break;
				case 4:
					n = "ACESFilmic";
					break;
				case 5:
					n = "Custom";
					break;
				default:
					console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
						(n = "Linear");
			}
			return (
				"vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
			);
		}
		function xs(t) {
			return "" !== t;
		}
		function _s(t, e) {
			return t
				.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
				.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
				.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
				.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
				.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
				.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
				.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
				.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
		}
		function Ms(t, e) {
			return t
				.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
				.replace(
					/UNION_CLIPPING_PLANES/g,
					e.numClippingPlanes - e.numClipIntersection
				);
		}
		const bs = /^[ \t]*#include +<([\w\d./]+)>/gm;
		function ws(t) {
			return t.replace(bs, Ss);
		}
		function Ss(t, e) {
			const n = Mi[e];
			if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
			return ws(n);
		}
		const Ts =
				/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
			Es =
				/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
		function As(t) {
			return t.replace(Es, Ls).replace(Ts, Rs);
		}
		function Rs(t, e, n, i) {
			return (
				console.warn(
					"WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
				),
				Ls(t, e, n, i)
			);
		}
		function Ls(t, e, n, i) {
			let r = "";
			for (let t = parseInt(e); t < parseInt(n); t++)
				r += i
					.replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
					.replace(/UNROLLED_LOOP_INDEX/g, t);
			return r;
		}
		function Cs(t) {
			let e =
				"precision " +
				t.precision +
				" float;\nprecision " +
				t.precision +
				" int;";
			return (
				"highp" === t.precision
					? (e += "\n#define HIGH_PRECISION")
					: "mediump" === t.precision
					? (e += "\n#define MEDIUM_PRECISION")
					: "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
				e
			);
		}
		function Ps(t, e, n, i) {
			const a = t.getContext(),
				o = n.defines;
			let h = n.vertexShader,
				u = n.fragmentShader;
			const d = (function (t) {
					let e = "SHADOWMAP_TYPE_BASIC";
					return (
						1 === t.shadowMapType
							? (e = "SHADOWMAP_TYPE_PCF")
							: 2 === t.shadowMapType
							? (e = "SHADOWMAP_TYPE_PCF_SOFT")
							: 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
						e
					);
				})(n),
				p = (function (t) {
					let e = "ENVMAP_TYPE_CUBE";
					if (t.envMap)
						switch (t.envMapMode) {
							case r:
							case s:
								e = "ENVMAP_TYPE_CUBE";
								break;
							case l:
							case c:
								e = "ENVMAP_TYPE_CUBE_UV";
						}
					return e;
				})(n),
				m = (function (t) {
					let e = "ENVMAP_MODE_REFLECTION";
					if (t.envMap)
						switch (t.envMapMode) {
							case s:
							case c:
								e = "ENVMAP_MODE_REFRACTION";
						}
					return e;
				})(n),
				f = (function (t) {
					let e = "ENVMAP_BLENDING_NONE";
					if (t.envMap)
						switch (t.combine) {
							case 0:
								e = "ENVMAP_BLENDING_MULTIPLY";
								break;
							case 1:
								e = "ENVMAP_BLENDING_MIX";
								break;
							case 2:
								e = "ENVMAP_BLENDING_ADD";
						}
					return e;
				})(n),
				g = n.isWebGL2
					? ""
					: (function (t) {
							return [
								t.extensionDerivatives ||
								t.envMapCubeUV ||
								t.bumpMap ||
								t.tangentSpaceNormalMap ||
								t.clearcoatNormalMap ||
								t.flatShading ||
								"physical" === t.shaderID
									? "#extension GL_OES_standard_derivatives : enable"
									: "",
								(t.extensionFragDepth || t.logarithmicDepthBuffer) &&
								t.rendererExtensionFragDepth
									? "#extension GL_EXT_frag_depth : enable"
									: "",
								t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
									? "#extension GL_EXT_draw_buffers : require"
									: "",
								(t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
								t.rendererExtensionShaderTextureLod
									? "#extension GL_EXT_shader_texture_lod : enable"
									: "",
							]
								.filter(xs)
								.join("\n");
					  })(n),
				v = (function (t) {
					const e = [];
					for (const n in t) {
						const i = t[n];
						!1 !== i && e.push("#define " + n + " " + i);
					}
					return e.join("\n");
				})(o),
				y = a.createProgram();
			let x,
				_,
				M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
			n.isRawShaderMaterial
				? ((x = [v].filter(xs).join("\n")),
				  x.length > 0 && (x += "\n"),
				  (_ = [g, v].filter(xs).join("\n")),
				  _.length > 0 && (_ += "\n"))
				: ((x = [
						Cs(n),
						"#define SHADER_NAME " + n.shaderName,
						v,
						n.instancing ? "#define USE_INSTANCING" : "",
						n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
						n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
						"#define MAX_BONES " + n.maxBones,
						n.useFog && n.fog ? "#define USE_FOG" : "",
						n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
						n.map ? "#define USE_MAP" : "",
						n.envMap ? "#define USE_ENVMAP" : "",
						n.envMap ? "#define " + m : "",
						n.lightMap ? "#define USE_LIGHTMAP" : "",
						n.aoMap ? "#define USE_AOMAP" : "",
						n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
						n.bumpMap ? "#define USE_BUMPMAP" : "",
						n.normalMap ? "#define USE_NORMALMAP" : "",
						n.normalMap && n.objectSpaceNormalMap
							? "#define OBJECTSPACE_NORMALMAP"
							: "",
						n.normalMap && n.tangentSpaceNormalMap
							? "#define TANGENTSPACE_NORMALMAP"
							: "",
						n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
						n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
						n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
						n.displacementMap && n.supportsVertexTextures
							? "#define USE_DISPLACEMENTMAP"
							: "",
						n.specularMap ? "#define USE_SPECULARMAP" : "",
						n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
						n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
						n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
						n.metalnessMap ? "#define USE_METALNESSMAP" : "",
						n.alphaMap ? "#define USE_ALPHAMAP" : "",
						n.transmission ? "#define USE_TRANSMISSION" : "",
						n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
						n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
						n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
						n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
						n.vertexTangents ? "#define USE_TANGENT" : "",
						n.vertexColors ? "#define USE_COLOR" : "",
						n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
						n.vertexUvs ? "#define USE_UV" : "",
						n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
						n.flatShading ? "#define FLAT_SHADED" : "",
						n.skinning ? "#define USE_SKINNING" : "",
						n.useVertexTexture ? "#define BONE_TEXTURE" : "",
						n.morphTargets ? "#define USE_MORPHTARGETS" : "",
						n.morphNormals && !1 === n.flatShading
							? "#define USE_MORPHNORMALS"
							: "",
						n.morphTargets && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
						n.morphTargets && n.isWebGL2
							? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
							: "",
						n.doubleSided ? "#define DOUBLE_SIDED" : "",
						n.flipSided ? "#define FLIP_SIDED" : "",
						n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
						n.shadowMapEnabled ? "#define " + d : "",
						n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
						n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
							? "#define USE_LOGDEPTHBUF_EXT"
							: "",
						"uniform mat4 modelMatrix;",
						"uniform mat4 modelViewMatrix;",
						"uniform mat4 projectionMatrix;",
						"uniform mat4 viewMatrix;",
						"uniform mat3 normalMatrix;",
						"uniform vec3 cameraPosition;",
						"uniform bool isOrthographic;",
						"#ifdef USE_INSTANCING",
						"\tattribute mat4 instanceMatrix;",
						"#endif",
						"#ifdef USE_INSTANCING_COLOR",
						"\tattribute vec3 instanceColor;",
						"#endif",
						"attribute vec3 position;",
						"attribute vec3 normal;",
						"attribute vec2 uv;",
						"#ifdef USE_TANGENT",
						"\tattribute vec4 tangent;",
						"#endif",
						"#if defined( USE_COLOR_ALPHA )",
						"\tattribute vec4 color;",
						"#elif defined( USE_COLOR )",
						"\tattribute vec3 color;",
						"#endif",
						"#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
						"\tattribute vec3 morphTarget0;",
						"\tattribute vec3 morphTarget1;",
						"\tattribute vec3 morphTarget2;",
						"\tattribute vec3 morphTarget3;",
						"\t#ifdef USE_MORPHNORMALS",
						"\t\tattribute vec3 morphNormal0;",
						"\t\tattribute vec3 morphNormal1;",
						"\t\tattribute vec3 morphNormal2;",
						"\t\tattribute vec3 morphNormal3;",
						"\t#else",
						"\t\tattribute vec3 morphTarget4;",
						"\t\tattribute vec3 morphTarget5;",
						"\t\tattribute vec3 morphTarget6;",
						"\t\tattribute vec3 morphTarget7;",
						"\t#endif",
						"#endif",
						"#ifdef USE_SKINNING",
						"\tattribute vec4 skinIndex;",
						"\tattribute vec4 skinWeight;",
						"#endif",
						"\n",
				  ]
						.filter(xs)
						.join("\n")),
				  (_ = [
						g,
						Cs(n),
						"#define SHADER_NAME " + n.shaderName,
						v,
						n.useFog && n.fog ? "#define USE_FOG" : "",
						n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
						n.map ? "#define USE_MAP" : "",
						n.matcap ? "#define USE_MATCAP" : "",
						n.envMap ? "#define USE_ENVMAP" : "",
						n.envMap ? "#define " + p : "",
						n.envMap ? "#define " + m : "",
						n.envMap ? "#define " + f : "",
						n.lightMap ? "#define USE_LIGHTMAP" : "",
						n.aoMap ? "#define USE_AOMAP" : "",
						n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
						n.bumpMap ? "#define USE_BUMPMAP" : "",
						n.normalMap ? "#define USE_NORMALMAP" : "",
						n.normalMap && n.objectSpaceNormalMap
							? "#define OBJECTSPACE_NORMALMAP"
							: "",
						n.normalMap && n.tangentSpaceNormalMap
							? "#define TANGENTSPACE_NORMALMAP"
							: "",
						n.clearcoat ? "#define USE_CLEARCOAT" : "",
						n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
						n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
						n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
						n.specularMap ? "#define USE_SPECULARMAP" : "",
						n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
						n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
						n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
						n.metalnessMap ? "#define USE_METALNESSMAP" : "",
						n.alphaMap ? "#define USE_ALPHAMAP" : "",
						n.alphaTest ? "#define USE_ALPHATEST" : "",
						n.sheen ? "#define USE_SHEEN" : "",
						n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
						n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
						n.transmission ? "#define USE_TRANSMISSION" : "",
						n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
						n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
						n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
						n.vertexTangents ? "#define USE_TANGENT" : "",
						n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
						n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
						n.vertexUvs ? "#define USE_UV" : "",
						n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
						n.gradientMap ? "#define USE_GRADIENTMAP" : "",
						n.flatShading ? "#define FLAT_SHADED" : "",
						n.doubleSided ? "#define DOUBLE_SIDED" : "",
						n.flipSided ? "#define FLIP_SIDED" : "",
						n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
						n.shadowMapEnabled ? "#define " + d : "",
						n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
						n.physicallyCorrectLights
							? "#define PHYSICALLY_CORRECT_LIGHTS"
							: "",
						n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
						n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
							? "#define USE_LOGDEPTHBUF_EXT"
							: "",
						(n.extensionShaderTextureLOD || n.envMap) &&
						n.rendererExtensionShaderTextureLod
							? "#define TEXTURE_LOD_EXT"
							: "",
						"uniform mat4 viewMatrix;",
						"uniform vec3 cameraPosition;",
						"uniform bool isOrthographic;",
						0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
						0 !== n.toneMapping ? Mi.tonemapping_pars_fragment : "",
						0 !== n.toneMapping ? ys("toneMapping", n.toneMapping) : "",
						n.dithering ? "#define DITHERING" : "",
						n.alphaWrite ? "" : "#define OPAQUE",
						Mi.encodings_pars_fragment,
						vs("linearToOutputTexel", n.outputEncoding),
						n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
						"\n",
				  ]
						.filter(xs)
						.join("\n"))),
				(h = ws(h)),
				(h = _s(h, n)),
				(h = Ms(h, n)),
				(u = ws(u)),
				(u = _s(u, n)),
				(u = Ms(u, n)),
				(h = As(h)),
				(u = As(u)),
				n.isWebGL2 &&
					!0 !== n.isRawShaderMaterial &&
					((M = "#version 300 es\n"),
					(x =
						[
							"precision mediump sampler2DArray;",
							"#define attribute in",
							"#define varying out",
							"#define texture2D texture",
						].join("\n") +
						"\n" +
						x),
					(_ =
						[
							"#define varying in",
							n.glslVersion === dt
								? ""
								: "layout(location = 0) out highp vec4 pc_fragColor;",
							n.glslVersion === dt ? "" : "#define gl_FragColor pc_fragColor",
							"#define gl_FragDepthEXT gl_FragDepth",
							"#define texture2D texture",
							"#define textureCube texture",
							"#define texture2DProj textureProj",
							"#define texture2DLodEXT textureLod",
							"#define texture2DProjLodEXT textureProjLod",
							"#define textureCubeLodEXT textureLod",
							"#define texture2DGradEXT textureGrad",
							"#define texture2DProjGradEXT textureProjGrad",
							"#define textureCubeGradEXT textureGrad",
						].join("\n") +
						"\n" +
						_));
			const b = M + _ + u,
				w = ms(a, 35633, M + x + h),
				S = ms(a, 35632, b);
			if (
				(a.attachShader(y, w),
				a.attachShader(y, S),
				void 0 !== n.index0AttributeName
					? a.bindAttribLocation(y, 0, n.index0AttributeName)
					: !0 === n.morphTargets && a.bindAttribLocation(y, 0, "position"),
				a.linkProgram(y),
				t.debug.checkShaderErrors)
			) {
				const t = a.getProgramInfoLog(y).trim(),
					e = a.getShaderInfoLog(w).trim(),
					n = a.getShaderInfoLog(S).trim();
				let i = !0,
					r = !0;
				if (!1 === a.getProgramParameter(y, 35714)) {
					i = !1;
					const e = gs(a, w, "vertex"),
						n = gs(a, S, "fragment");
					console.error(
						"THREE.WebGLProgram: Shader Error " +
							a.getError() +
							" - VALIDATE_STATUS " +
							a.getProgramParameter(y, 35715) +
							"\n\nProgram Info Log: " +
							t +
							"\n" +
							e +
							"\n" +
							n
					);
				} else
					"" !== t
						? console.warn("THREE.WebGLProgram: Program Info Log:", t)
						: ("" !== e && "" !== n) || (r = !1);
				r &&
					(this.diagnostics = {
						runnable: i,
						programLog: t,
						vertexShader: { log: e, prefix: x },
						fragmentShader: { log: n, prefix: _ },
					});
			}
			let T, E;
			return (
				a.deleteShader(w),
				a.deleteShader(S),
				(this.getUniforms = function () {
					return void 0 === T && (T = new ps(a, y)), T;
				}),
				(this.getAttributes = function () {
					return (
						void 0 === E &&
							(E = (function (t, e) {
								const n = {},
									i = t.getProgramParameter(e, 35721);
								for (let r = 0; r < i; r++) {
									const i = t.getActiveAttrib(e, r),
										s = i.name;
									let a = 1;
									35674 === i.type && (a = 2),
										35675 === i.type && (a = 3),
										35676 === i.type && (a = 4),
										(n[s] = {
											type: i.type,
											location: t.getAttribLocation(e, s),
											locationSize: a,
										});
								}
								return n;
							})(a, y)),
						E
					);
				}),
				(this.destroy = function () {
					i.releaseStatesOfProgram(this),
						a.deleteProgram(y),
						(this.program = void 0);
				}),
				(this.name = n.shaderName),
				(this.id = fs++),
				(this.cacheKey = e),
				(this.usedTimes = 1),
				(this.program = y),
				(this.vertexShader = w),
				(this.fragmentShader = S),
				this
			);
		}
		let Ds = 0;
		class Is {
			constructor() {
				(this.shaderCache = new Map()), (this.materialCache = new Map());
			}
			update(t) {
				const e = t.vertexShader,
					n = t.fragmentShader,
					i = this._getShaderStage(e),
					r = this._getShaderStage(n),
					s = this._getShaderCacheForMaterial(t);
				return (
					!1 === s.has(i) && (s.add(i), i.usedTimes++),
					!1 === s.has(r) && (s.add(r), r.usedTimes++),
					this
				);
			}
			remove(t) {
				const e = this.materialCache.get(t);
				for (const t of e)
					t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t);
				return this.materialCache.delete(t), this;
			}
			getVertexShaderID(t) {
				return this._getShaderStage(t.vertexShader).id;
			}
			getFragmentShaderID(t) {
				return this._getShaderStage(t.fragmentShader).id;
			}
			dispose() {
				this.shaderCache.clear(), this.materialCache.clear();
			}
			_getShaderCacheForMaterial(t) {
				const e = this.materialCache;
				return !1 === e.has(t) && e.set(t, new Set()), e.get(t);
			}
			_getShaderStage(t) {
				const e = this.shaderCache;
				if (!1 === e.has(t)) {
					const n = new Ns();
					e.set(t, n);
				}
				return e.get(t);
			}
		}
		class Ns {
			constructor() {
				(this.id = Ds++), (this.usedTimes = 0);
			}
		}
		function Bs(t, e, n, i, r, s, a) {
			const o = new Fe(),
				h = new Is(),
				u = [],
				d = r.isWebGL2,
				p = r.logarithmicDepthBuffer,
				m = r.floatVertexTextures,
				f = r.maxVertexUniforms,
				g = r.vertexTextures;
			let v = r.precision;
			const y = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "toon",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				MeshMatcapMaterial: "matcap",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow",
				SpriteMaterial: "sprite",
			};
			return {
				getParameters: function (s, o, u, x, _) {
					const M = x.fog,
						b = s.isMeshStandardMaterial ? x.environment : null,
						w = (s.isMeshStandardMaterial ? n : e).get(s.envMap || b),
						S = y[s.type],
						T = _.isSkinnedMesh
							? (function (t) {
									const e = t.skeleton.bones;
									if (m) return 1024;
									{
										const t = f,
											n = Math.floor((t - 20) / 4),
											i = Math.min(n, e.length);
										return i < e.length
											? (console.warn(
													"THREE.WebGLRenderer: Skeleton has " +
														e.length +
														" bones. This GPU supports " +
														i +
														"."
											  ),
											  0)
											: i;
									}
							  })(_)
							: 0;
					let E, A, R, L;
					if (
						(null !== s.precision &&
							((v = r.getMaxPrecision(s.precision)),
							v !== s.precision &&
								console.warn(
									"THREE.WebGLProgram.getParameters:",
									s.precision,
									"not supported, using",
									v,
									"instead."
								)),
						S)
					) {
						const t = wi[S];
						(E = t.vertexShader), (A = t.fragmentShader);
					} else
						(E = s.vertexShader),
							(A = s.fragmentShader),
							h.update(s),
							(R = h.getVertexShaderID(s)),
							(L = h.getFragmentShaderID(s));
					const C = t.getRenderTarget(),
						P = s.alphaTest > 0,
						D = s.clearcoat > 0;
					return {
						isWebGL2: d,
						shaderID: S,
						shaderName: s.type,
						vertexShader: E,
						fragmentShader: A,
						defines: s.defines,
						customVertexShaderID: R,
						customFragmentShaderID: L,
						isRawShaderMaterial: !0 === s.isRawShaderMaterial,
						glslVersion: s.glslVersion,
						precision: v,
						instancing: !0 === _.isInstancedMesh,
						instancingColor:
							!0 === _.isInstancedMesh && null !== _.instanceColor,
						supportsVertexTextures: g,
						outputEncoding:
							null === C
								? t.outputEncoding
								: !0 === C.isXRRenderTarget
								? C.texture.encoding
								: ot,
						map: !!s.map,
						matcap: !!s.matcap,
						envMap: !!w,
						envMapMode: w && w.mapping,
						envMapCubeUV: !!w && (w.mapping === l || w.mapping === c),
						lightMap: !!s.lightMap,
						aoMap: !!s.aoMap,
						emissiveMap: !!s.emissiveMap,
						bumpMap: !!s.bumpMap,
						normalMap: !!s.normalMap,
						objectSpaceNormalMap: 1 === s.normalMapType,
						tangentSpaceNormalMap: 0 === s.normalMapType,
						decodeVideoTexture:
							!!s.map && !0 === s.map.isVideoTexture && s.map.encoding === lt,
						clearcoat: D,
						clearcoatMap: D && !!s.clearcoatMap,
						clearcoatRoughnessMap: D && !!s.clearcoatRoughnessMap,
						clearcoatNormalMap: D && !!s.clearcoatNormalMap,
						displacementMap: !!s.displacementMap,
						roughnessMap: !!s.roughnessMap,
						metalnessMap: !!s.metalnessMap,
						specularMap: !!s.specularMap,
						specularIntensityMap: !!s.specularIntensityMap,
						specularColorMap: !!s.specularColorMap,
						alphaMap: !!s.alphaMap,
						alphaTest: P,
						alphaWrite: s.alphaWrite || s.transparent,
						gradientMap: !!s.gradientMap,
						sheen: s.sheen > 0,
						sheenColorMap: !!s.sheenColorMap,
						sheenRoughnessMap: !!s.sheenRoughnessMap,
						transmission: s.transmission > 0,
						transmissionMap: !!s.transmissionMap,
						thicknessMap: !!s.thicknessMap,
						combine: s.combine,
						vertexTangents:
							!!s.normalMap && !!_.geometry && !!_.geometry.attributes.tangent,
						vertexColors: s.vertexColors,
						vertexAlphas:
							!0 === s.vertexColors &&
							!!_.geometry &&
							!!_.geometry.attributes.color &&
							4 === _.geometry.attributes.color.itemSize,
						vertexUvs: !!(
							s.map ||
							s.bumpMap ||
							s.normalMap ||
							s.specularMap ||
							s.alphaMap ||
							s.emissiveMap ||
							s.roughnessMap ||
							s.metalnessMap ||
							s.clearcoatMap ||
							s.clearcoatRoughnessMap ||
							s.clearcoatNormalMap ||
							s.displacementMap ||
							s.transmissionMap ||
							s.thicknessMap ||
							s.specularIntensityMap ||
							s.specularColorMap ||
							s.sheenColorMap ||
							s.sheenRoughnessMap
						),
						uvsVertexOnly: !(
							s.map ||
							s.bumpMap ||
							s.normalMap ||
							s.specularMap ||
							s.alphaMap ||
							s.emissiveMap ||
							s.roughnessMap ||
							s.metalnessMap ||
							s.clearcoatNormalMap ||
							s.transmission > 0 ||
							s.transmissionMap ||
							s.thicknessMap ||
							s.specularIntensityMap ||
							s.specularColorMap ||
							s.sheen > 0 ||
							s.sheenColorMap ||
							s.sheenRoughnessMap ||
							!s.displacementMap
						),
						fog: !!M,
						useFog: s.fog,
						fogExp2: M && M.isFogExp2,
						flatShading: !!s.flatShading,
						sizeAttenuation: s.sizeAttenuation,
						logarithmicDepthBuffer: p,
						skinning: !0 === _.isSkinnedMesh && T > 0,
						maxBones: T,
						useVertexTexture: m,
						morphTargets: !!_.geometry && !!_.geometry.morphAttributes.position,
						morphNormals: !!_.geometry && !!_.geometry.morphAttributes.normal,
						morphTargetsCount:
							_.geometry && _.geometry.morphAttributes.position
								? _.geometry.morphAttributes.position.length
								: 0,
						numDirLights: o.directional.length,
						numPointLights: o.point.length,
						numSpotLights: o.spot.length,
						numRectAreaLights: o.rectArea.length,
						numHemiLights: o.hemi.length,
						numDirLightShadows: o.directionalShadowMap.length,
						numPointLightShadows: o.pointShadowMap.length,
						numSpotLightShadows: o.spotShadowMap.length,
						numClippingPlanes: a.numPlanes,
						numClipIntersection: a.numIntersection,
						dithering: s.dithering,
						shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
						shadowMapType: t.shadowMap.type,
						toneMapping: s.toneMapped ? t.toneMapping : 0,
						physicallyCorrectLights: t.physicallyCorrectLights,
						premultipliedAlpha: s.premultipliedAlpha,
						doubleSided: 2 === s.side,
						flipSided: 1 === s.side,
						depthPacking: void 0 !== s.depthPacking && s.depthPacking,
						index0AttributeName: s.index0AttributeName,
						extensionDerivatives: s.extensions && s.extensions.derivatives,
						extensionFragDepth: s.extensions && s.extensions.fragDepth,
						extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
						extensionShaderTextureLOD:
							s.extensions && s.extensions.shaderTextureLOD,
						rendererExtensionFragDepth: d || i.has("EXT_frag_depth"),
						rendererExtensionDrawBuffers: d || i.has("WEBGL_draw_buffers"),
						rendererExtensionShaderTextureLod:
							d || i.has("EXT_shader_texture_lod"),
						customProgramCacheKey: s.customProgramCacheKey(),
					};
				},
				getProgramCacheKey: function (e) {
					const n = [];
					if (
						(e.shaderID
							? n.push(e.shaderID)
							: (n.push(e.customVertexShaderID),
							  n.push(e.customFragmentShaderID)),
						void 0 !== e.defines)
					)
						for (const t in e.defines) n.push(t), n.push(e.defines[t]);
					return (
						!1 === e.isRawShaderMaterial &&
							(!(function (t, e) {
								t.push(e.precision),
									t.push(e.outputEncoding),
									t.push(e.envMapMode),
									t.push(e.combine),
									t.push(e.vertexUvs),
									t.push(e.fogExp2),
									t.push(e.sizeAttenuation),
									t.push(e.maxBones),
									t.push(e.morphTargetsCount),
									t.push(e.numDirLights),
									t.push(e.numPointLights),
									t.push(e.numSpotLights),
									t.push(e.numHemiLights),
									t.push(e.numRectAreaLights),
									t.push(e.numDirLightShadows),
									t.push(e.numPointLightShadows),
									t.push(e.numSpotLightShadows),
									t.push(e.shadowMapType),
									t.push(e.toneMapping),
									t.push(e.numClippingPlanes),
									t.push(e.numClipIntersection),
									t.push(e.alphaWrite);
							})(n, e),
							(function (t, e) {
								o.disableAll(), e.isWebGL2 && o.enable(0);
								e.supportsVertexTextures && o.enable(1);
								e.instancing && o.enable(2);
								e.instancingColor && o.enable(3);
								e.map && o.enable(4);
								e.matcap && o.enable(5);
								e.envMap && o.enable(6);
								e.envMapCubeUV && o.enable(7);
								e.lightMap && o.enable(8);
								e.aoMap && o.enable(9);
								e.emissiveMap && o.enable(10);
								e.bumpMap && o.enable(11);
								e.normalMap && o.enable(12);
								e.objectSpaceNormalMap && o.enable(13);
								e.tangentSpaceNormalMap && o.enable(14);
								e.clearcoat && o.enable(15);
								e.clearcoatMap && o.enable(16);
								e.clearcoatRoughnessMap && o.enable(17);
								e.clearcoatNormalMap && o.enable(18);
								e.displacementMap && o.enable(19);
								e.specularMap && o.enable(20);
								e.roughnessMap && o.enable(21);
								e.metalnessMap && o.enable(22);
								e.gradientMap && o.enable(23);
								e.alphaMap && o.enable(24);
								e.alphaTest && o.enable(25);
								e.vertexColors && o.enable(26);
								e.vertexAlphas && o.enable(27);
								e.vertexUvs && o.enable(28);
								e.vertexTangents && o.enable(29);
								e.uvsVertexOnly && o.enable(30);
								e.fog && o.enable(31);
								t.push(o.mask), o.disableAll(), e.useFog && o.enable(0);
								e.flatShading && o.enable(1);
								e.logarithmicDepthBuffer && o.enable(2);
								e.skinning && o.enable(3);
								e.useVertexTexture && o.enable(4);
								e.morphTargets && o.enable(5);
								e.morphNormals && o.enable(6);
								e.premultipliedAlpha && o.enable(7);
								e.shadowMapEnabled && o.enable(8);
								e.physicallyCorrectLights && o.enable(9);
								e.doubleSided && o.enable(10);
								e.flipSided && o.enable(11);
								e.depthPacking && o.enable(12);
								e.dithering && o.enable(13);
								e.specularIntensityMap && o.enable(14);
								e.specularColorMap && o.enable(15);
								e.transmission && o.enable(16);
								e.transmissionMap && o.enable(17);
								e.thicknessMap && o.enable(18);
								e.sheen && o.enable(19);
								e.sheenColorMap && o.enable(20);
								e.sheenRoughnessMap && o.enable(21);
								e.decodeVideoTexture && o.enable(22);
								t.push(o.mask);
							})(n, e),
							n.push(t.outputEncoding)),
						n.push(e.customProgramCacheKey),
						n.join()
					);
				},
				getUniforms: function (t) {
					const e = y[t.type];
					let n;
					if (e) {
						const t = wi[e];
						n = ii.clone(t.uniforms);
					} else n = t.uniforms;
					return n;
				},
				acquireProgram: function (e, n) {
					let i;
					for (let t = 0, e = u.length; t < e; t++) {
						const e = u[t];
						if (e.cacheKey === n) {
							(i = e), ++i.usedTimes;
							break;
						}
					}
					return void 0 === i && ((i = new Ps(t, n, e, s)), u.push(i)), i;
				},
				releaseProgram: function (t) {
					if (0 == --t.usedTimes) {
						const e = u.indexOf(t);
						(u[e] = u[u.length - 1]), u.pop(), t.destroy();
					}
				},
				releaseShaderCache: function (t) {
					h.remove(t);
				},
				programs: u,
				dispose: function () {
					h.dispose();
				},
			};
		}
		function zs() {
			let t = new WeakMap();
			return {
				get: function (e) {
					let n = t.get(e);
					return void 0 === n && ((n = {}), t.set(e, n)), n;
				},
				remove: function (e) {
					t.delete(e);
				},
				update: function (e, n, i) {
					t.get(e)[n] = i;
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function Os(t, e) {
			return t.groupOrder !== e.groupOrder
				? t.groupOrder - e.groupOrder
				: t.renderOrder !== e.renderOrder
				? t.renderOrder - e.renderOrder
				: t.material.id !== e.material.id
				? t.material.id - e.material.id
				: t.z !== e.z
				? t.z - e.z
				: t.id - e.id;
		}
		function Fs(t, e) {
			return t.groupOrder !== e.groupOrder
				? t.groupOrder - e.groupOrder
				: t.renderOrder !== e.renderOrder
				? t.renderOrder - e.renderOrder
				: t.z !== e.z
				? e.z - t.z
				: t.id - e.id;
		}
		function Us() {
			const t = [];
			let e = 0;
			const n = [],
				i = [],
				r = [];
			function s(n, i, r, s, a, o) {
				let l = t[e];
				return (
					void 0 === l
						? ((l = {
								id: n.id,
								object: n,
								geometry: i,
								material: r,
								groupOrder: s,
								renderOrder: n.renderOrder,
								z: a,
								group: o,
						  }),
						  (t[e] = l))
						: ((l.id = n.id),
						  (l.object = n),
						  (l.geometry = i),
						  (l.material = r),
						  (l.groupOrder = s),
						  (l.renderOrder = n.renderOrder),
						  (l.z = a),
						  (l.group = o)),
					e++,
					l
				);
			}
			return {
				opaque: n,
				transmissive: i,
				transparent: r,
				init: function () {
					(e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
				},
				push: function (t, e, a, o, l, c) {
					const h = s(t, e, a, o, l, c);
					a.transmission > 0
						? i.push(h)
						: !0 === a.transparent
						? r.push(h)
						: n.push(h);
				},
				unshift: function (t, e, a, o, l, c) {
					const h = s(t, e, a, o, l, c);
					a.transmission > 0
						? i.unshift(h)
						: !0 === a.transparent
						? r.unshift(h)
						: n.unshift(h);
				},
				finish: function () {
					for (let n = e, i = t.length; n < i; n++) {
						const e = t[n];
						if (null === e.id) break;
						(e.id = null),
							(e.object = null),
							(e.geometry = null),
							(e.material = null),
							(e.group = null);
					}
				},
				sort: function (t, e) {
					n.length > 1 && n.sort(t || Os),
						i.length > 1 && i.sort(e || Fs),
						r.length > 1 && r.sort(e || Fs);
				},
			};
		}
		function Hs() {
			let t = new WeakMap();
			return {
				get: function (e, n) {
					let i;
					return (
						!1 === t.has(e)
							? ((i = new Us()), t.set(e, [i]))
							: n >= t.get(e).length
							? ((i = new Us()), t.get(e).push(i))
							: (i = t.get(e)[n]),
						i
					);
				},
				dispose: function () {
					t = new WeakMap();
				},
			};
		}
		function Gs() {
			const t = {};
			return {
				get: function (e) {
					if (void 0 !== t[e.id]) return t[e.id];
					let n;
					switch (e.type) {
						case "DirectionalLight":
							n = { direction: new Zt(), color: new Ut() };
							break;
						case "SpotLight":
							n = {
								position: new Zt(),
								direction: new Zt(),
								color: new Ut(),
								distance: 0,
								coneCos: 0,
								penumbraCos: 0,
								decay: 0,
							};
							break;
						case "PointLight":
							n = {
								position: new Zt(),
								color: new Ut(),
								distance: 0,
								decay: 0,
							};
							break;
						case "HemisphereLight":
							n = {
								direction: new Zt(),
								skyColor: new Ut(),
								groundColor: new Ut(),
							};
							break;
						case "RectAreaLight":
							n = {
								color: new Ut(),
								position: new Zt(),
								halfWidth: new Zt(),
								halfHeight: new Zt(),
							};
					}
					return (t[e.id] = n), n;
				},
			};
		}
		let ks = 0;
		function Vs(t, e) {
			return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
		}
		function Ws(t, e) {
			const n = new Gs(),
				i = (function () {
					const t = {};
					return {
						get: function (e) {
							if (void 0 !== t[e.id]) return t[e.id];
							let n;
							switch (e.type) {
								case "DirectionalLight":
								case "SpotLight":
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new At(),
									};
									break;
								case "PointLight":
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new At(),
										shadowCameraNear: 1,
										shadowCameraFar: 1e3,
									};
							}
							return (t[e.id] = n), n;
						},
					};
				})(),
				r = {
					version: 0,
					hash: {
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						numDirectionalShadows: -1,
						numPointShadows: -1,
						numSpotShadows: -1,
					},
					ambient: [0, 0, 0],
					probe: [],
					directional: [],
					directionalShadow: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadow: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					rectAreaLTC1: null,
					rectAreaLTC2: null,
					point: [],
					pointShadow: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: [],
				};
			for (let t = 0; t < 9; t++) r.probe.push(new Zt());
			const s = new Zt(),
				a = new Ae(),
				o = new Ae();
			return {
				setup: function (s, a) {
					let o = 0,
						l = 0,
						c = 0;
					for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
					let h = 0,
						u = 0,
						d = 0,
						p = 0,
						m = 0,
						f = 0,
						g = 0,
						v = 0;
					s.sort(Vs);
					const y = !0 !== a ? Math.PI : 1;
					for (let t = 0, e = s.length; t < e; t++) {
						const e = s[t],
							a = e.color,
							x = e.intensity,
							_ = e.distance,
							M = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
						if (e.isAmbientLight)
							(o += a.r * x * y), (l += a.g * x * y), (c += a.b * x * y);
						else if (e.isLightProbe)
							for (let t = 0; t < 9; t++)
								r.probe[t].addScaledVector(e.sh.coefficients[t], x);
						else if (e.isDirectionalLight) {
							const t = n.get(e);
							if (
								(t.color.copy(e.color).multiplyScalar(e.intensity * y),
								e.castShadow)
							) {
								const t = e.shadow,
									n = i.get(e);
								(n.shadowBias = t.bias),
									(n.shadowNormalBias = t.normalBias),
									(n.shadowRadius = t.radius),
									(n.shadowMapSize = t.mapSize),
									(r.directionalShadow[h] = n),
									(r.directionalShadowMap[h] = M),
									(r.directionalShadowMatrix[h] = e.shadow.matrix),
									f++;
							}
							(r.directional[h] = t), h++;
						} else if (e.isSpotLight) {
							const t = n.get(e);
							if (
								(t.position.setFromMatrixPosition(e.matrixWorld),
								t.color.copy(a).multiplyScalar(x * y),
								(t.distance = _),
								(t.coneCos = Math.cos(e.angle)),
								(t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
								(t.decay = e.decay),
								e.castShadow)
							) {
								const t = e.shadow,
									n = i.get(e);
								(n.shadowBias = t.bias),
									(n.shadowNormalBias = t.normalBias),
									(n.shadowRadius = t.radius),
									(n.shadowMapSize = t.mapSize),
									(r.spotShadow[d] = n),
									(r.spotShadowMap[d] = M),
									(r.spotShadowMatrix[d] = e.shadow.matrix),
									v++;
							}
							(r.spot[d] = t), d++;
						} else if (e.isRectAreaLight) {
							const t = n.get(e);
							t.color.copy(a).multiplyScalar(x),
								t.halfWidth.set(0.5 * e.width, 0, 0),
								t.halfHeight.set(0, 0.5 * e.height, 0),
								(r.rectArea[p] = t),
								p++;
						} else if (e.isPointLight) {
							const t = n.get(e);
							if (
								(t.color.copy(e.color).multiplyScalar(e.intensity * y),
								(t.distance = e.distance),
								(t.decay = e.decay),
								e.castShadow)
							) {
								const t = e.shadow,
									n = i.get(e);
								(n.shadowBias = t.bias),
									(n.shadowNormalBias = t.normalBias),
									(n.shadowRadius = t.radius),
									(n.shadowMapSize = t.mapSize),
									(n.shadowCameraNear = t.camera.near),
									(n.shadowCameraFar = t.camera.far),
									(r.pointShadow[u] = n),
									(r.pointShadowMap[u] = M),
									(r.pointShadowMatrix[u] = e.shadow.matrix),
									g++;
							}
							(r.point[u] = t), u++;
						} else if (e.isHemisphereLight) {
							const t = n.get(e);
							t.skyColor.copy(e.color).multiplyScalar(x * y),
								t.groundColor.copy(e.groundColor).multiplyScalar(x * y),
								(r.hemi[m] = t),
								m++;
						}
					}
					p > 0 &&
						(e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
							? ((r.rectAreaLTC1 = bi.LTC_FLOAT_1),
							  (r.rectAreaLTC2 = bi.LTC_FLOAT_2))
							: !0 === t.has("OES_texture_half_float_linear")
							? ((r.rectAreaLTC1 = bi.LTC_HALF_1),
							  (r.rectAreaLTC2 = bi.LTC_HALF_2))
							: console.error(
									"THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
							  )),
						(r.ambient[0] = o),
						(r.ambient[1] = l),
						(r.ambient[2] = c);
					const x = r.hash;
					(x.directionalLength === h &&
						x.pointLength === u &&
						x.spotLength === d &&
						x.rectAreaLength === p &&
						x.hemiLength === m &&
						x.numDirectionalShadows === f &&
						x.numPointShadows === g &&
						x.numSpotShadows === v) ||
						((r.directional.length = h),
						(r.spot.length = d),
						(r.rectArea.length = p),
						(r.point.length = u),
						(r.hemi.length = m),
						(r.directionalShadow.length = f),
						(r.directionalShadowMap.length = f),
						(r.pointShadow.length = g),
						(r.pointShadowMap.length = g),
						(r.spotShadow.length = v),
						(r.spotShadowMap.length = v),
						(r.directionalShadowMatrix.length = f),
						(r.pointShadowMatrix.length = g),
						(r.spotShadowMatrix.length = v),
						(x.directionalLength = h),
						(x.pointLength = u),
						(x.spotLength = d),
						(x.rectAreaLength = p),
						(x.hemiLength = m),
						(x.numDirectionalShadows = f),
						(x.numPointShadows = g),
						(x.numSpotShadows = v),
						(r.version = ks++));
				},
				setupView: function (t, e) {
					let n = 0,
						i = 0,
						l = 0,
						c = 0,
						h = 0;
					const u = e.matrixWorldInverse;
					for (let e = 0, d = t.length; e < d; e++) {
						const d = t[e];
						if (d.isDirectionalLight) {
							const t = r.directional[n];
							t.direction.setFromMatrixPosition(d.matrixWorld),
								s.setFromMatrixPosition(d.target.matrixWorld),
								t.direction.sub(s),
								t.direction.transformDirection(u),
								n++;
						} else if (d.isSpotLight) {
							const t = r.spot[l];
							t.position.setFromMatrixPosition(d.matrixWorld),
								t.position.applyMatrix4(u),
								t.direction.setFromMatrixPosition(d.matrixWorld),
								s.setFromMatrixPosition(d.target.matrixWorld),
								t.direction.sub(s),
								t.direction.transformDirection(u),
								l++;
						} else if (d.isRectAreaLight) {
							const t = r.rectArea[c];
							t.position.setFromMatrixPosition(d.matrixWorld),
								t.position.applyMatrix4(u),
								o.identity(),
								a.copy(d.matrixWorld),
								a.premultiply(u),
								o.extractRotation(a),
								t.halfWidth.set(0.5 * d.width, 0, 0),
								t.halfHeight.set(0, 0.5 * d.height, 0),
								t.halfWidth.applyMatrix4(o),
								t.halfHeight.applyMatrix4(o),
								c++;
						} else if (d.isPointLight) {
							const t = r.point[i];
							t.position.setFromMatrixPosition(d.matrixWorld),
								t.position.applyMatrix4(u),
								i++;
						} else if (d.isHemisphereLight) {
							const t = r.hemi[h];
							t.direction.setFromMatrixPosition(d.matrixWorld),
								t.direction.transformDirection(u),
								t.direction.normalize(),
								h++;
						}
					}
				},
				state: r,
			};
		}
		function js(t, e) {
			const n = new Ws(t, e),
				i = [],
				r = [];
			return {
				init: function () {
					(i.length = 0), (r.length = 0);
				},
				state: { lightsArray: i, shadowsArray: r, lights: n },
				setupLights: function (t) {
					n.setup(i, t);
				},
				setupLightsView: function (t) {
					n.setupView(i, t);
				},
				pushLight: function (t) {
					i.push(t);
				},
				pushShadow: function (t) {
					r.push(t);
				},
			};
		}
		function qs(t, e) {
			let n = new WeakMap();
			return {
				get: function (i, r = 0) {
					let s;
					return (
						!1 === n.has(i)
							? ((s = new js(t, e)), n.set(i, [s]))
							: r >= n.get(i).length
							? ((s = new js(t, e)), n.get(i).push(s))
							: (s = n.get(i)[r]),
						s
					);
				},
				dispose: function () {
					n = new WeakMap();
				},
			};
		}
		class Xs extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshDepthMaterial"),
					(this.depthPacking = 3200),
					(this.map = null),
					(this.alphaMap = null),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.fog = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.depthPacking = t.depthPacking),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					this
				);
			}
		}
		Xs.prototype.isMeshDepthMaterial = !0;
		class Js extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshDistanceMaterial"),
					(this.referencePosition = new Zt()),
					(this.nearDistance = 1),
					(this.farDistance = 1e3),
					(this.map = null),
					(this.alphaMap = null),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.fog = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.referencePosition.copy(t.referencePosition),
					(this.nearDistance = t.nearDistance),
					(this.farDistance = t.farDistance),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					this
				);
			}
		}
		Js.prototype.isMeshDistanceMaterial = !0;
		function Ys(t, e, n) {
			let i = new vi();
			const r = new At(),
				s = new At(),
				a = new jt(),
				o = new Xs({ depthPacking: 3201 }),
				l = new Js(),
				c = {},
				h = n.maxTextureSize,
				u = { 0: 1, 1: 0, 2: 2 },
				d = new ri({
					defines: { VSM_SAMPLES: 8 },
					uniforms: {
						shadow_pass: { value: null },
						resolution: { value: new At() },
						radius: { value: 4 },
					},
					vertexShader:
						"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
					fragmentShader:
						"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
				}),
				m = d.clone();
			m.defines.HORIZONTAL_PASS = 1;
			const f = new Nn();
			f.setAttribute(
				"position",
				new gn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
			);
			const v = new Qn(f, d),
				y = this;
			function x(n, i) {
				const r = e.update(v);
				d.defines.VSM_SAMPLES !== n.blurSamples &&
					((d.defines.VSM_SAMPLES = n.blurSamples),
					(m.defines.VSM_SAMPLES = n.blurSamples),
					(d.needsUpdate = !0),
					(m.needsUpdate = !0)),
					(d.uniforms.shadow_pass.value = n.map.texture),
					(d.uniforms.resolution.value = n.mapSize),
					(d.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.mapPass),
					t.clear(),
					t.renderBufferDirect(i, null, r, d, v, null),
					(m.uniforms.shadow_pass.value = n.mapPass.texture),
					(m.uniforms.resolution.value = n.mapSize),
					(m.uniforms.radius.value = n.radius),
					t.setRenderTarget(n.map),
					t.clear(),
					t.renderBufferDirect(i, null, r, m, v, null);
			}
			function _(e, n, i, r, s, a, h) {
				let d = null;
				const p =
					!0 === r.isPointLight
						? e.customDistanceMaterial
						: e.customDepthMaterial;
				if (
					((d = void 0 !== p ? p : !0 === r.isPointLight ? l : o),
					(t.localClippingEnabled &&
						!0 === i.clipShadows &&
						0 !== i.clippingPlanes.length) ||
						(i.displacementMap && 0 !== i.displacementScale) ||
						(i.alphaMap && i.alphaTest > 0))
				) {
					const t = d.uuid,
						e = i.uuid;
					let n = c[t];
					void 0 === n && ((n = {}), (c[t] = n));
					let r = n[e];
					void 0 === r && ((r = d.clone()), (n[e] = r)), (d = r);
				}
				return (
					(d.visible = i.visible),
					(d.wireframe = i.wireframe),
					(d.side =
						3 === h
							? null !== i.shadowSide
								? i.shadowSide
								: i.side
							: null !== i.shadowSide
							? i.shadowSide
							: u[i.side]),
					(d.alphaMap = i.alphaMap),
					(d.alphaTest = i.alphaTest),
					(d.clipShadows = i.clipShadows),
					(d.clippingPlanes = i.clippingPlanes),
					(d.clipIntersection = i.clipIntersection),
					(d.displacementMap = i.displacementMap),
					(d.displacementScale = i.displacementScale),
					(d.displacementBias = i.displacementBias),
					(d.wireframeLinewidth = i.wireframeLinewidth),
					(d.linewidth = i.linewidth),
					!0 === r.isPointLight &&
						!0 === d.isMeshDistanceMaterial &&
						(d.referencePosition.setFromMatrixPosition(r.matrixWorld),
						(d.nearDistance = s),
						(d.farDistance = a)),
					d
				);
			}
			function M(n, r, s, a, o) {
				if (!1 === n.visible) return;
				if (
					n.layers.test(r.layers) &&
					(n.isMesh || n.isLine || n.isPoints) &&
					(n.castShadow || (n.receiveShadow && 3 === o)) &&
					(!n.frustumCulled || i.intersectsObject(n))
				) {
					n.modelViewMatrix.multiplyMatrices(
						s.matrixWorldInverse,
						n.matrixWorld
					);
					const i = e.update(n),
						r = n.material;
					if (Array.isArray(r)) {
						const e = i.groups;
						for (let l = 0, c = e.length; l < c; l++) {
							const c = e[l],
								h = r[c.materialIndex];
							if (h && h.visible) {
								const e = _(n, 0, h, a, s.near, s.far, o);
								t.renderBufferDirect(s, null, i, e, n, c);
							}
						}
					} else if (r.visible) {
						const e = _(n, 0, r, a, s.near, s.far, o);
						t.renderBufferDirect(s, null, i, e, n, null);
					}
				}
				const l = n.children;
				for (let t = 0, e = l.length; t < e; t++) M(l[t], r, s, a, o);
			}
			(this.enabled = !1),
				(this.autoUpdate = !0),
				(this.needsUpdate = !1),
				(this.type = 1),
				(this.render = function (e, n, o) {
					if (!1 === y.enabled) return;
					if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
					if (0 === e.length) return;
					const l = t.getRenderTarget(),
						c = t.getActiveCubeFace(),
						u = t.getActiveMipmapLevel(),
						d = t.state;
					d.setBlending(0),
						d.buffers.color.setClear(1, 1, 1, 1),
						d.buffers.depth.setTest(!0),
						d.setScissorTest(!1);
					for (let l = 0, c = e.length; l < c; l++) {
						const c = e[l],
							u = c.shadow;
						if (void 0 === u) {
							console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
							continue;
						}
						if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
						r.copy(u.mapSize);
						const m = u.getFrameExtents();
						if (
							(r.multiply(m),
							s.copy(u.mapSize),
							(r.x > h || r.y > h) &&
								(r.x > h &&
									((s.x = Math.floor(h / m.x)),
									(r.x = s.x * m.x),
									(u.mapSize.x = s.x)),
								r.y > h &&
									((s.y = Math.floor(h / m.y)),
									(r.y = s.y * m.y),
									(u.mapSize.y = s.y))),
							null === u.map && !u.isPointLightShadow && 3 === this.type)
						) {
							const t = { minFilter: g, magFilter: g, format: T };
							(u.map = new qt(r.x, r.y, t)),
								(u.map.texture.name = c.name + ".shadowMap"),
								(u.mapPass = new qt(r.x, r.y, t)),
								u.camera.updateProjectionMatrix();
						}
						if (null === u.map) {
							const t = { minFilter: p, magFilter: p, format: T };
							(u.map = new qt(r.x, r.y, t)),
								(u.map.texture.name = c.name + ".shadowMap"),
								u.camera.updateProjectionMatrix();
						}
						t.setRenderTarget(u.map), t.clear();
						const f = u.getViewportCount();
						for (let t = 0; t < f; t++) {
							const e = u.getViewport(t);
							a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
								d.viewport(a),
								u.updateMatrices(c, t),
								(i = u.getFrustum()),
								M(n, o, u.camera, c, this.type);
						}
						u.isPointLightShadow || 3 !== this.type || x(u, o),
							(u.needsUpdate = !1);
					}
					(y.needsUpdate = !1), t.setRenderTarget(l, c, u);
				});
		}
		function Zs(t, e, i) {
			const r = i.isWebGL2;
			const s = new (function () {
					let e = !1;
					const n = new jt();
					let i = null;
					const r = new jt(0, 0, 0, 0);
					return {
						setMask: function (n) {
							i === n || e || (t.colorMask(n, n, n, n), (i = n));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e, i, s, a, o) {
							!0 === o && ((e *= a), (i *= a), (s *= a)),
								n.set(e, i, s, a),
								!1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
						},
						reset: function () {
							(e = !1), (i = null), r.set(-1, 0, 0, 0);
						},
					};
				})(),
				a = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null;
					return {
						setTest: function (t) {
							t ? U(2929) : H(2929);
						},
						setMask: function (i) {
							n === i || e || (t.depthMask(i), (n = i));
						},
						setFunc: function (e) {
							if (i !== e) {
								if (e)
									switch (e) {
										case 0:
											t.depthFunc(512);
											break;
										case 1:
											t.depthFunc(519);
											break;
										case 2:
											t.depthFunc(513);
											break;
										case 3:
										default:
											t.depthFunc(515);
											break;
										case 4:
											t.depthFunc(514);
											break;
										case 5:
											t.depthFunc(518);
											break;
										case 6:
											t.depthFunc(516);
											break;
										case 7:
											t.depthFunc(517);
									}
								else t.depthFunc(515);
								i = e;
							}
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							r !== e && (t.clearDepth(e), (r = e));
						},
						reset: function () {
							(e = !1), (n = null), (i = null), (r = null);
						},
					};
				})(),
				o = new (function () {
					let e = !1,
						n = null,
						i = null,
						r = null,
						s = null,
						a = null,
						o = null,
						l = null,
						c = null;
					return {
						setTest: function (t) {
							e || (t ? U(2960) : H(2960));
						},
						setMask: function (i) {
							n === i || e || (t.stencilMask(i), (n = i));
						},
						setFunc: function (e, n, a) {
							(i === e && r === n && s === a) ||
								(t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
						},
						setOp: function (e, n, i) {
							(a === e && o === n && l === i) ||
								(t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
						},
						setLocked: function (t) {
							e = t;
						},
						setClear: function (e) {
							c !== e && (t.clearStencil(e), (c = e));
						},
						reset: function () {
							(e = !1),
								(n = null),
								(i = null),
								(r = null),
								(s = null),
								(a = null),
								(o = null),
								(l = null),
								(c = null);
						},
					};
				})();
			let l = {},
				c = {},
				h = new WeakMap(),
				u = [],
				d = null,
				p = !1,
				m = null,
				f = null,
				g = null,
				v = null,
				y = null,
				x = null,
				_ = null,
				M = !1,
				b = null,
				w = null,
				S = null,
				T = null,
				E = null;
			const A = t.getParameter(35661);
			let R = !1,
				L = 0;
			const C = t.getParameter(7938);
			-1 !== C.indexOf("WebGL")
				? ((L = parseFloat(/^WebGL (\d)/.exec(C)[1])), (R = L >= 1))
				: -1 !== C.indexOf("OpenGL ES") &&
				  ((L = parseFloat(/^OpenGL ES (\d)/.exec(C)[1])), (R = L >= 2));
			let P = null,
				D = {};
			const I = t.getParameter(3088),
				N = t.getParameter(2978),
				B = new jt().fromArray(I),
				z = new jt().fromArray(N);
			function O(e, n, i) {
				const r = new Uint8Array(4),
					s = t.createTexture();
				t.bindTexture(e, s),
					t.texParameteri(e, 10241, 9728),
					t.texParameteri(e, 10240, 9728);
				for (let e = 0; e < i; e++)
					t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
				return s;
			}
			const F = {};
			function U(e) {
				!0 !== l[e] && (t.enable(e), (l[e] = !0));
			}
			function H(e) {
				!1 !== l[e] && (t.disable(e), (l[e] = !1));
			}
			(F[3553] = O(3553, 3553, 1)),
				(F[34067] = O(34067, 34069, 6)),
				s.setClear(0, 0, 0, 1),
				a.setClear(1),
				o.setClear(0),
				U(2929),
				a.setFunc(3),
				W(!1),
				j(1),
				U(2884),
				V(0);
			const G = { [n]: 32774, 101: 32778, 102: 32779 };
			if (r) (G[103] = 32775), (G[104] = 32776);
			else {
				const t = e.get("EXT_blend_minmax");
				null !== t && ((G[103] = t.MIN_EXT), (G[104] = t.MAX_EXT));
			}
			const k = {
				200: 0,
				201: 1,
				202: 768,
				204: 770,
				210: 776,
				208: 774,
				206: 772,
				203: 769,
				205: 771,
				209: 775,
				207: 773,
			};
			function V(e, i, r, s, a, o, l, c) {
				if (0 !== e) {
					if ((!1 === p && (U(3042), (p = !0)), 5 === e))
						(a = a || i),
							(o = o || r),
							(l = l || s),
							(i === f && a === y) ||
								(t.blendEquationSeparate(G[i], G[a]), (f = i), (y = a)),
							(r === g && s === v && o === x && l === _) ||
								(t.blendFuncSeparate(k[r], k[s], k[o], k[l]),
								(g = r),
								(v = s),
								(x = o),
								(_ = l)),
							(m = e),
							(M = null);
					else if (e !== m || c !== M) {
						if (
							((f === n && y === n) ||
								(t.blendEquation(32774), (f = n), (y = n)),
							c)
						)
							switch (e) {
								case 1:
									t.blendFuncSeparate(1, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(1, 1);
									break;
								case 3:
									t.blendFuncSeparate(0, 769, 0, 1);
									break;
								case 4:
									t.blendFuncSeparate(0, 768, 0, 770);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", e);
							}
						else
							switch (e) {
								case 1:
									t.blendFuncSeparate(770, 771, 1, 771);
									break;
								case 2:
									t.blendFunc(770, 1);
									break;
								case 3:
									t.blendFuncSeparate(0, 769, 0, 1);
									break;
								case 4:
									t.blendFunc(0, 768);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", e);
							}
						(g = null), (v = null), (x = null), (_ = null), (m = e), (M = c);
					}
				} else !0 === p && (H(3042), (p = !1));
			}
			function W(e) {
				b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (b = e));
			}
			function j(e) {
				0 !== e
					? (U(2884),
					  e !== w &&
							(1 === e
								? t.cullFace(1029)
								: 2 === e
								? t.cullFace(1028)
								: t.cullFace(1032)))
					: H(2884),
					(w = e);
			}
			function q(e, n, i) {
				e
					? (U(32823),
					  (T === n && E === i) || (t.polygonOffset(n, i), (T = n), (E = i)))
					: H(32823);
			}
			function X(e) {
				void 0 === e && (e = 33984 + A - 1),
					P !== e && (t.activeTexture(e), (P = e));
			}
			return {
				buffers: { color: s, depth: a, stencil: o },
				enable: U,
				disable: H,
				bindFramebuffer: function (e, n) {
					return (
						c[e] !== n &&
						(t.bindFramebuffer(e, n),
						(c[e] = n),
						r && (36009 === e && (c[36160] = n), 36160 === e && (c[36009] = n)),
						!0)
					);
				},
				drawBuffers: function (n, r) {
					let s = u,
						a = !1;
					if (n)
						if (
							((s = h.get(r)),
							void 0 === s && ((s = []), h.set(r, s)),
							n.isWebGLMultipleRenderTargets)
						) {
							const t = n.texture;
							if (s.length !== t.length || 36064 !== s[0]) {
								for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
								(s.length = t.length), (a = !0);
							}
						} else 36064 !== s[0] && ((s[0] = 36064), (a = !0));
					else 1029 !== s[0] && ((s[0] = 1029), (a = !0));
					a &&
						(i.isWebGL2
							? t.drawBuffers(s)
							: e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
				},
				useProgram: function (e) {
					return d !== e && (t.useProgram(e), (d = e), !0);
				},
				setBlending: V,
				setMaterial: function (t, e) {
					2 === t.side ? H(2884) : U(2884);
					let n = 1 === t.side;
					e && (n = !n),
						W(n),
						1 === t.blending && !1 === t.transparent
							? V(0)
							: V(
									t.blending,
									t.blendEquation,
									t.blendSrc,
									t.blendDst,
									t.blendEquationAlpha,
									t.blendSrcAlpha,
									t.blendDstAlpha,
									t.premultipliedAlpha
							  ),
						a.setFunc(t.depthFunc),
						a.setTest(t.depthTest),
						a.setMask(t.depthWrite),
						s.setMask(t.colorWrite);
					const i = t.stencilWrite;
					o.setTest(i),
						i &&
							(o.setMask(t.stencilWriteMask),
							o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
							o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
						q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
						!0 === t.alphaToCoverage ? U(32926) : H(32926);
				},
				setFlipSided: W,
				setCullFace: j,
				setLineWidth: function (e) {
					e !== S && (R && t.lineWidth(e), (S = e));
				},
				setPolygonOffset: q,
				setScissorTest: function (t) {
					t ? U(3089) : H(3089);
				},
				activeTexture: X,
				bindTexture: function (e, n) {
					null === P && X();
					let i = D[P];
					void 0 === i && ((i = { type: void 0, texture: void 0 }), (D[P] = i)),
						(i.type === e && i.texture === n) ||
							(t.bindTexture(e, n || F[e]), (i.type = e), (i.texture = n));
				},
				unbindTexture: function () {
					const e = D[P];
					void 0 !== e &&
						void 0 !== e.type &&
						(t.bindTexture(e.type, null),
						(e.type = void 0),
						(e.texture = void 0));
				},
				compressedTexImage2D: function () {
					try {
						t.compressedTexImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texImage2D: function () {
					try {
						t.texImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texImage3D: function () {
					try {
						t.texImage3D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texStorage2D: function () {
					try {
						t.texStorage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texStorage3D: function () {
					try {
						t.texStorage3D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texSubImage2D: function () {
					try {
						t.texSubImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				texSubImage3D: function () {
					try {
						t.texSubImage3D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				compressedTexSubImage2D: function () {
					try {
						t.compressedTexSubImage2D.apply(t, arguments);
					} catch (t) {
						console.error("THREE.WebGLState:", t);
					}
				},
				scissor: function (e) {
					!1 === B.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), B.copy(e));
				},
				viewport: function (e) {
					!1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
				},
				reset: function () {
					t.disable(3042),
						t.disable(2884),
						t.disable(2929),
						t.disable(32823),
						t.disable(3089),
						t.disable(2960),
						t.disable(32926),
						t.blendEquation(32774),
						t.blendFunc(1, 0),
						t.blendFuncSeparate(1, 0, 1, 0),
						t.colorMask(!0, !0, !0, !0),
						t.clearColor(0, 0, 0, 0),
						t.depthMask(!0),
						t.depthFunc(513),
						t.clearDepth(1),
						t.stencilMask(4294967295),
						t.stencilFunc(519, 0, 4294967295),
						t.stencilOp(7680, 7680, 7680),
						t.clearStencil(0),
						t.cullFace(1029),
						t.frontFace(2305),
						t.polygonOffset(0, 0),
						t.activeTexture(33984),
						t.bindFramebuffer(36160, null),
						!0 === r &&
							(t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)),
						t.useProgram(null),
						t.lineWidth(1),
						t.scissor(0, 0, t.canvas.width, t.canvas.height),
						t.viewport(0, 0, t.canvas.width, t.canvas.height),
						(l = {}),
						(P = null),
						(D = {}),
						(c = {}),
						(h = new WeakMap()),
						(u = []),
						(d = null),
						(p = !1),
						(m = null),
						(f = null),
						(g = null),
						(v = null),
						(y = null),
						(x = null),
						(_ = null),
						(M = !1),
						(b = null),
						(w = null),
						(S = null),
						(T = null),
						(E = null),
						B.set(0, 0, t.canvas.width, t.canvas.height),
						z.set(0, 0, t.canvas.width, t.canvas.height),
						s.reset(),
						a.reset(),
						o.reset();
				},
			};
		}
		function Ks(t, e, n, i, r, s, a) {
			const o = r.isWebGL2,
				l = r.maxTextures,
				c = r.maxCubemapSize,
				R = r.maxTextureSize,
				L = r.maxSamples,
				C = e.has("WEBGL_multisampled_render_to_texture")
					? e.get("WEBGL_multisampled_render_to_texture")
					: void 0,
				P = new WeakMap();
			let D,
				I = !1;
			try {
				I =
					"undefined" != typeof OffscreenCanvas &&
					null !== new OffscreenCanvas(1, 1).getContext("2d");
			} catch (t) {}
			function N(t, e) {
				return I ? new OffscreenCanvas(t, e) : Dt("canvas");
			}
			function B(t, e, n, i) {
				let r = 1;
				if (
					((t.width > i || t.height > i) &&
						(r = i / Math.max(t.width, t.height)),
					r < 1 || !0 === e)
				) {
					if (
						("undefined" != typeof HTMLImageElement &&
							t instanceof HTMLImageElement) ||
						("undefined" != typeof HTMLCanvasElement &&
							t instanceof HTMLCanvasElement) ||
						("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
					) {
						const i = e ? Tt : Math.floor,
							s = i(r * t.width),
							a = i(r * t.height);
						void 0 === D && (D = N(s, a));
						const o = n ? N(s, a) : D;
						(o.width = s), (o.height = a);
						return (
							o.getContext("2d").drawImage(t, 0, 0, s, a),
							console.warn(
								"THREE.WebGLRenderer: Texture has been resized from (" +
									t.width +
									"x" +
									t.height +
									") to (" +
									s +
									"x" +
									a +
									")."
							),
							o
						);
					}
					return (
						"data" in t &&
							console.warn(
								"THREE.WebGLRenderer: Image in DataTexture is too big (" +
									t.width +
									"x" +
									t.height +
									")."
							),
						t
					);
				}
				return t;
			}
			function z(t) {
				return wt(t.width) && wt(t.height);
			}
			function O(t, e) {
				return t.generateMipmaps && e && t.minFilter !== p && t.minFilter !== g;
			}
			function F(e) {
				t.generateMipmap(e);
			}
			function U(n, i, r, s, a = !1) {
				if (!1 === o) return i;
				if (null !== n) {
					if (void 0 !== t[n]) return t[n];
					console.warn(
						"THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
							n +
							"'"
					);
				}
				let l = i;
				return (
					6403 === i &&
						(5126 === r && (l = 33326),
						5131 === r && (l = 33325),
						5121 === r && (l = 33321)),
					33319 === i &&
						(5126 === r && (l = 33328),
						5131 === r && (l = 33327),
						5121 === r && (l = 33323)),
					6408 === i &&
						(5126 === r && (l = 34836),
						5131 === r && (l = 34842),
						5121 === r && (l = s === lt && !1 === a ? 35907 : 32856),
						32819 === r && (l = 32854),
						32820 === r && (l = 32855)),
					(33325 !== l &&
						33326 !== l &&
						33327 !== l &&
						33328 !== l &&
						34842 !== l &&
						34836 !== l) ||
						e.get("EXT_color_buffer_float"),
					l
				);
			}
			function H(t, e, n) {
				return !0 === O(t, n) ||
					(t.isFramebufferTexture && t.minFilter !== p && t.minFilter !== g)
					? Math.log2(Math.max(e.width, e.height)) + 1
					: void 0 !== t.mipmaps && t.mipmaps.length > 0
					? t.mipmaps.length
					: t.isCompressedTexture && Array.isArray(t.image)
					? e.mipmaps.length
					: 1;
			}
			function G(t) {
				return t === p || t === m || t === f ? 9728 : 9729;
			}
			function k(e) {
				const n = e.target;
				n.removeEventListener("dispose", k),
					(function (e) {
						const n = i.get(e);
						if (void 0 === n.__webglInit) return;
						t.deleteTexture(n.__webglTexture), i.remove(e);
					})(n),
					n.isVideoTexture && P.delete(n),
					a.memory.textures--;
			}
			function V(e) {
				const n = e.target;
				n.removeEventListener("dispose", V),
					(function (e) {
						const n = e.texture,
							r = i.get(e),
							s = i.get(n);
						if (!e) return;
						void 0 !== s.__webglTexture &&
							(t.deleteTexture(s.__webglTexture), a.memory.textures--);
						e.depthTexture && e.depthTexture.dispose();
						if (e.isWebGLCubeRenderTarget)
							for (let e = 0; e < 6; e++)
								t.deleteFramebuffer(r.__webglFramebuffer[e]),
									r.__webglDepthbuffer &&
										t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
						else
							t.deleteFramebuffer(r.__webglFramebuffer),
								r.__webglDepthbuffer &&
									t.deleteRenderbuffer(r.__webglDepthbuffer),
								r.__webglMultisampledFramebuffer &&
									t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
								r.__webglColorRenderbuffer &&
									t.deleteRenderbuffer(r.__webglColorRenderbuffer),
								r.__webglDepthRenderbuffer &&
									t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
						if (e.isWebGLMultipleRenderTargets)
							for (let e = 0, r = n.length; e < r; e++) {
								const r = i.get(n[e]);
								r.__webglTexture &&
									(t.deleteTexture(r.__webglTexture), a.memory.textures--),
									i.remove(n[e]);
							}
						i.remove(n), i.remove(e);
					})(n);
			}
			let W = 0;
			function j(t, e) {
				const r = i.get(t);
				if (
					(t.isVideoTexture &&
						(function (t) {
							const e = a.render.frame;
							P.get(t) !== e && (P.set(t, e), t.update());
						})(t),
					t.version > 0 && r.__version !== t.version)
				) {
					const n = t.image;
					if (void 0 === n)
						console.warn(
							"THREE.WebGLRenderer: Texture marked for update but image is undefined"
						);
					else {
						if (!1 !== n.complete) return void K(r, t, e);
						console.warn(
							"THREE.WebGLRenderer: Texture marked for update but image is incomplete"
						);
					}
				}
				n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
			}
			function q(e, r) {
				const a = i.get(e);
				e.version > 0 && a.__version !== e.version
					? (function (e, i, r) {
							if (6 !== i.image.length) return;
							Z(e, i),
								n.activeTexture(33984 + r),
								n.bindTexture(34067, e.__webglTexture),
								t.pixelStorei(37440, i.flipY),
								t.pixelStorei(37441, i.premultiplyAlpha),
								t.pixelStorei(3317, i.unpackAlignment),
								t.pixelStorei(37443, 0);
							const a =
									i &&
									(i.isCompressedTexture || i.image[0].isCompressedTexture),
								l = i.image[0] && i.image[0].isDataTexture,
								h = [];
							for (let t = 0; t < 6; t++)
								(h[t] =
									a || l
										? l
											? i.image[t].image
											: i.image[t]
										: B(i.image[t], !1, !0, c)),
									(h[t] = nt(i, h[t]));
							const u = h[0],
								d = z(u) || o,
								p = s.convert(i.format, i.encoding),
								m = s.convert(i.type),
								f = U(i.internalFormat, p, m, i.encoding),
								g = o && !0 !== i.isVideoTexture,
								v = void 0 === e.__version;
							let y,
								x = H(i, u, d);
							if ((Y(34067, i, d), a)) {
								g && v && n.texStorage2D(34067, x, f, u.width, u.height);
								for (let t = 0; t < 6; t++) {
									y = h[t].mipmaps;
									for (let e = 0; e < y.length; e++) {
										const r = y[e];
										i.format !== T
											? null !== p
												? g
													? n.compressedTexSubImage2D(
															34069 + t,
															e,
															0,
															0,
															r.width,
															r.height,
															p,
															r.data
													  )
													: n.compressedTexImage2D(
															34069 + t,
															e,
															f,
															r.width,
															r.height,
															0,
															r.data
													  )
												: console.warn(
														"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
												  )
											: g
											? n.texSubImage2D(
													34069 + t,
													e,
													0,
													0,
													r.width,
													r.height,
													p,
													m,
													r.data
											  )
											: n.texImage2D(
													34069 + t,
													e,
													f,
													r.width,
													r.height,
													0,
													p,
													m,
													r.data
											  );
									}
								}
							} else {
								(y = i.mipmaps),
									g &&
										v &&
										(y.length > 0 && x++,
										n.texStorage2D(34067, x, f, h[0].width, h[0].height));
								for (let t = 0; t < 6; t++)
									if (l) {
										g
											? n.texSubImage2D(
													34069 + t,
													0,
													0,
													0,
													h[t].width,
													h[t].height,
													p,
													m,
													h[t].data
											  )
											: n.texImage2D(
													34069 + t,
													0,
													f,
													h[t].width,
													h[t].height,
													0,
													p,
													m,
													h[t].data
											  );
										for (let e = 0; e < y.length; e++) {
											const i = y[e].image[t].image;
											g
												? n.texSubImage2D(
														34069 + t,
														e + 1,
														0,
														0,
														i.width,
														i.height,
														p,
														m,
														i.data
												  )
												: n.texImage2D(
														34069 + t,
														e + 1,
														f,
														i.width,
														i.height,
														0,
														p,
														m,
														i.data
												  );
										}
									} else {
										g
											? n.texSubImage2D(34069 + t, 0, 0, 0, p, m, h[t])
											: n.texImage2D(34069 + t, 0, f, p, m, h[t]);
										for (let e = 0; e < y.length; e++) {
											const i = y[e];
											g
												? n.texSubImage2D(
														34069 + t,
														e + 1,
														0,
														0,
														p,
														m,
														i.image[t]
												  )
												: n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t]);
										}
									}
							}
							O(i, d) && F(34067);
							(e.__version = i.version), i.onUpdate && i.onUpdate(i);
					  })(a, e, r)
					: (n.activeTexture(33984 + r),
					  n.bindTexture(34067, a.__webglTexture));
			}
			const X = { [h]: 10497, [u]: 33071, [d]: 33648 },
				J = {
					[p]: 9728,
					[m]: 9984,
					[f]: 9986,
					[g]: 9729,
					[v]: 9985,
					[y]: 9987,
				};
			function Y(n, s, a) {
				if (
					(a
						? (t.texParameteri(n, 10242, X[s.wrapS]),
						  t.texParameteri(n, 10243, X[s.wrapT]),
						  (32879 !== n && 35866 !== n) ||
								t.texParameteri(n, 32882, X[s.wrapR]),
						  t.texParameteri(n, 10240, J[s.magFilter]),
						  t.texParameteri(n, 10241, J[s.minFilter]))
						: (t.texParameteri(n, 10242, 33071),
						  t.texParameteri(n, 10243, 33071),
						  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
						  (s.wrapS === u && s.wrapT === u) ||
								console.warn(
									"THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
								),
						  t.texParameteri(n, 10240, G(s.magFilter)),
						  t.texParameteri(n, 10241, G(s.minFilter)),
						  s.minFilter !== p &&
								s.minFilter !== g &&
								console.warn(
									"THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
								)),
					!0 === e.has("EXT_texture_filter_anisotropic"))
				) {
					const a = e.get("EXT_texture_filter_anisotropic");
					if (s.type === b && !1 === e.has("OES_texture_float_linear")) return;
					if (
						!1 === o &&
						s.type === w &&
						!1 === e.has("OES_texture_half_float_linear")
					)
						return;
					(s.anisotropy > 1 || i.get(s).__currentAnisotropy) &&
						(t.texParameterf(
							n,
							a.TEXTURE_MAX_ANISOTROPY_EXT,
							Math.min(s.anisotropy, r.getMaxAnisotropy())
						),
						(i.get(s).__currentAnisotropy = s.anisotropy));
				}
			}
			function Z(e, n) {
				void 0 === e.__webglInit &&
					((e.__webglInit = !0),
					n.addEventListener("dispose", k),
					(e.__webglTexture = t.createTexture()),
					a.memory.textures++);
			}
			function K(e, i, r) {
				let a = 3553;
				i.isDataTexture2DArray && (a = 35866),
					i.isDataTexture3D && (a = 32879),
					Z(e, i),
					n.activeTexture(33984 + r),
					n.bindTexture(a, e.__webglTexture),
					t.pixelStorei(37440, i.flipY),
					t.pixelStorei(37441, i.premultiplyAlpha),
					t.pixelStorei(3317, i.unpackAlignment),
					t.pixelStorei(37443, 0);
				const l =
					(function (t) {
						return (
							!o &&
							(t.wrapS !== u ||
								t.wrapT !== u ||
								(t.minFilter !== p && t.minFilter !== g))
						);
					})(i) && !1 === z(i.image);
				let c = B(i.image, l, !1, R);
				c = nt(i, c);
				const h = z(c) || o,
					d = s.convert(i.format, i.encoding);
				let m,
					f = s.convert(i.type),
					v = U(i.internalFormat, d, f, i.encoding, i.isVideoTexture);
				Y(a, i, h);
				const y = i.mipmaps,
					x = o && !0 !== i.isVideoTexture,
					w = void 0 === e.__version,
					L = H(i, c, h);
				if (i.isDepthTexture)
					(v = 6402),
						o
							? (v =
									i.type === b
										? 36012
										: i.type === M
										? 33190
										: i.type === S
										? 35056
										: 33189)
							: i.type === b &&
							  console.error(
									"WebGLRenderer: Floating point depth texture requires WebGL2."
							  ),
						i.format === E &&
							6402 === v &&
							i.type !== _ &&
							i.type !== M &&
							(console.warn(
								"THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
							),
							(i.type = _),
							(f = s.convert(i.type))),
						i.format === A &&
							6402 === v &&
							((v = 34041),
							i.type !== S &&
								(console.warn(
									"THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
								),
								(i.type = S),
								(f = s.convert(i.type)))),
						x && w
							? n.texStorage2D(3553, 1, v, c.width, c.height)
							: n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, null);
				else if (i.isDataTexture)
					if (y.length > 0 && h) {
						x && w && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
						for (let t = 0, e = y.length; t < e; t++)
							(m = y[t]),
								x
									? n.texSubImage2D(
											3553,
											0,
											0,
											0,
											m.width,
											m.height,
											d,
											f,
											m.data
									  )
									: n.texImage2D(
											3553,
											t,
											v,
											m.width,
											m.height,
											0,
											d,
											f,
											m.data
									  );
						i.generateMipmaps = !1;
					} else
						x
							? (w && n.texStorage2D(3553, L, v, c.width, c.height),
							  n.texSubImage2D(3553, 0, 0, 0, c.width, c.height, d, f, c.data))
							: n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, c.data);
				else if (i.isCompressedTexture) {
					x && w && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
					for (let t = 0, e = y.length; t < e; t++)
						(m = y[t]),
							i.format !== T
								? null !== d
									? x
										? n.compressedTexSubImage2D(
												3553,
												t,
												0,
												0,
												m.width,
												m.height,
												d,
												m.data
										  )
										: n.compressedTexImage2D(
												3553,
												t,
												v,
												m.width,
												m.height,
												0,
												m.data
										  )
									: console.warn(
											"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
									  )
								: x
								? n.texSubImage2D(
										3553,
										t,
										0,
										0,
										m.width,
										m.height,
										d,
										f,
										m.data
								  )
								: n.texImage2D(3553, t, v, m.width, m.height, 0, d, f, m.data);
				} else if (i.isDataTexture2DArray)
					x
						? (w && n.texStorage3D(35866, L, v, c.width, c.height, c.depth),
						  n.texSubImage3D(
								35866,
								0,
								0,
								0,
								0,
								c.width,
								c.height,
								c.depth,
								d,
								f,
								c.data
						  ))
						: n.texImage3D(
								35866,
								0,
								v,
								c.width,
								c.height,
								c.depth,
								0,
								d,
								f,
								c.data
						  );
				else if (i.isDataTexture3D)
					x
						? (w && n.texStorage3D(32879, L, v, c.width, c.height, c.depth),
						  n.texSubImage3D(
								32879,
								0,
								0,
								0,
								0,
								c.width,
								c.height,
								c.depth,
								d,
								f,
								c.data
						  ))
						: n.texImage3D(
								32879,
								0,
								v,
								c.width,
								c.height,
								c.depth,
								0,
								d,
								f,
								c.data
						  );
				else if (i.isFramebufferTexture)
					x && w
						? n.texStorage2D(3553, L, v, c.width, c.height)
						: n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, null);
				else if (y.length > 0 && h) {
					x && w && n.texStorage2D(3553, L, v, y[0].width, y[0].height);
					for (let t = 0, e = y.length; t < e; t++)
						(m = y[t]),
							x
								? n.texSubImage2D(3553, t, 0, 0, d, f, m)
								: n.texImage2D(3553, t, v, d, f, m);
					i.generateMipmaps = !1;
				} else
					x
						? (w && n.texStorage2D(3553, L, v, c.width, c.height),
						  n.texSubImage2D(3553, 0, 0, 0, d, f, c))
						: n.texImage2D(3553, 0, v, d, f, c);
				O(i, h) && F(a), (e.__version = i.version), i.onUpdate && i.onUpdate(i);
			}
			function Q(e, r, a, o, l) {
				const c = s.convert(a.format, a.encoding),
					h = s.convert(a.type),
					u = U(a.internalFormat, c, h, a.encoding);
				i.get(r).__hasExternalTextures ||
					(32879 === l || 35866 === l
						? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
						: n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
					n.bindFramebuffer(36160, e),
					r.useRenderToTexture
						? C.framebufferTexture2DMultisampleEXT(
								36160,
								o,
								l,
								i.get(a).__webglTexture,
								0,
								et(r)
						  )
						: t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0),
					n.bindFramebuffer(36160, null);
			}
			function $(e, n, i) {
				if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
					let r = 33189;
					if (i || n.useRenderToTexture) {
						const e = n.depthTexture;
						e &&
							e.isDepthTexture &&
							(e.type === b ? (r = 36012) : e.type === M && (r = 33190));
						const i = et(n);
						n.useRenderToTexture
							? C.renderbufferStorageMultisampleEXT(
									36161,
									i,
									r,
									n.width,
									n.height
							  )
							: t.renderbufferStorageMultisample(
									36161,
									i,
									r,
									n.width,
									n.height
							  );
					} else t.renderbufferStorage(36161, r, n.width, n.height);
					t.framebufferRenderbuffer(36160, 36096, 36161, e);
				} else if (n.depthBuffer && n.stencilBuffer) {
					const r = et(n);
					i && n.useRenderbuffer
						? t.renderbufferStorageMultisample(
								36161,
								r,
								35056,
								n.width,
								n.height
						  )
						: n.useRenderToTexture
						? C.renderbufferStorageMultisampleEXT(
								36161,
								r,
								35056,
								n.width,
								n.height
						  )
						: t.renderbufferStorage(36161, 34041, n.width, n.height),
						t.framebufferRenderbuffer(36160, 33306, 36161, e);
				} else {
					const e =
							!0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
						r = s.convert(e.format, e.encoding),
						a = s.convert(e.type),
						o = U(e.internalFormat, r, a, e.encoding),
						l = et(n);
					i && n.useRenderbuffer
						? t.renderbufferStorageMultisample(36161, l, o, n.width, n.height)
						: n.useRenderToTexture
						? C.renderbufferStorageMultisampleEXT(
								36161,
								l,
								o,
								n.width,
								n.height
						  )
						: t.renderbufferStorage(36161, o, n.width, n.height);
				}
				t.bindRenderbuffer(36161, null);
			}
			function tt(e) {
				const r = i.get(e),
					s = !0 === e.isWebGLCubeRenderTarget;
				if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
					if (s)
						throw new Error(
							"target.depthTexture not supported in Cube render targets"
						);
					!(function (e, r) {
						if (r && r.isWebGLCubeRenderTarget)
							throw new Error(
								"Depth Texture with cube render targets is not supported"
							);
						if (
							(n.bindFramebuffer(36160, e),
							!r.depthTexture || !r.depthTexture.isDepthTexture)
						)
							throw new Error(
								"renderTarget.depthTexture must be an instance of THREE.DepthTexture"
							);
						(i.get(r.depthTexture).__webglTexture &&
							r.depthTexture.image.width === r.width &&
							r.depthTexture.image.height === r.height) ||
							((r.depthTexture.image.width = r.width),
							(r.depthTexture.image.height = r.height),
							(r.depthTexture.needsUpdate = !0)),
							j(r.depthTexture, 0);
						const s = i.get(r.depthTexture).__webglTexture,
							a = et(r);
						if (r.depthTexture.format === E)
							r.useRenderToTexture
								? C.framebufferTexture2DMultisampleEXT(
										36160,
										36096,
										3553,
										s,
										0,
										a
								  )
								: t.framebufferTexture2D(36160, 36096, 3553, s, 0);
						else {
							if (r.depthTexture.format !== A)
								throw new Error("Unknown depthTexture format");
							r.useRenderToTexture
								? C.framebufferTexture2DMultisampleEXT(
										36160,
										33306,
										3553,
										s,
										0,
										a
								  )
								: t.framebufferTexture2D(36160, 33306, 3553, s, 0);
						}
					})(r.__webglFramebuffer, e);
				} else if (s) {
					r.__webglDepthbuffer = [];
					for (let i = 0; i < 6; i++)
						n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
							(r.__webglDepthbuffer[i] = t.createRenderbuffer()),
							$(r.__webglDepthbuffer[i], e, !1);
				} else
					n.bindFramebuffer(36160, r.__webglFramebuffer),
						(r.__webglDepthbuffer = t.createRenderbuffer()),
						$(r.__webglDepthbuffer, e, !1);
				n.bindFramebuffer(36160, null);
			}
			function et(t) {
				return o && (t.useRenderbuffer || t.useRenderToTexture)
					? Math.min(L, t.samples)
					: 0;
			}
			function nt(t, n) {
				const i = t.encoding,
					r = t.format,
					s = t.type;
				return (
					!0 === t.isCompressedTexture ||
						!0 === t.isVideoTexture ||
						t.format === pt ||
						(i !== ot &&
							(i === lt
								? !1 === o
									? !0 === e.has("EXT_sRGB") && r === T
										? ((t.format = pt),
										  (t.minFilter = g),
										  (t.generateMipmaps = !1))
										: (n = Gt.sRGBToLinear(n))
									: (r === T && s === x) ||
									  console.warn(
											"THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
									  )
								: console.error(
										"THREE.WebGLTextures: Unsupported texture encoding:",
										i
								  ))),
					n
				);
			}
			let it = !1,
				rt = !1;
			(this.allocateTextureUnit = function () {
				const t = W;
				return (
					t >= l &&
						console.warn(
							"THREE.WebGLTextures: Trying to use " +
								t +
								" texture units while this GPU supports only " +
								l
						),
					(W += 1),
					t
				);
			}),
				(this.resetTextureUnits = function () {
					W = 0;
				}),
				(this.setTexture2D = j),
				(this.setTexture2DArray = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version
						? K(r, t, e)
						: (n.activeTexture(33984 + e),
						  n.bindTexture(35866, r.__webglTexture));
				}),
				(this.setTexture3D = function (t, e) {
					const r = i.get(t);
					t.version > 0 && r.__version !== t.version
						? K(r, t, e)
						: (n.activeTexture(33984 + e),
						  n.bindTexture(32879, r.__webglTexture));
				}),
				(this.setTextureCube = q),
				(this.rebindTextures = function (t, e, n) {
					const r = i.get(t);
					void 0 !== e && Q(r.__webglFramebuffer, t, t.texture, 36064, 3553),
						void 0 !== n && tt(t);
				}),
				(this.setupRenderTarget = function (e) {
					const l = e.texture,
						c = i.get(e),
						h = i.get(l);
					e.addEventListener("dispose", V),
						!0 !== e.isWebGLMultipleRenderTargets &&
							(void 0 === h.__webglTexture &&
								(h.__webglTexture = t.createTexture()),
							(h.__version = l.version),
							a.memory.textures++);
					const u = !0 === e.isWebGLCubeRenderTarget,
						d = !0 === e.isWebGLMultipleRenderTargets,
						p = l.isDataTexture3D || l.isDataTexture2DArray,
						m = z(e) || o;
					if (u) {
						c.__webglFramebuffer = [];
						for (let e = 0; e < 6; e++)
							c.__webglFramebuffer[e] = t.createFramebuffer();
					} else if (((c.__webglFramebuffer = t.createFramebuffer()), d))
						if (r.drawBuffers) {
							const n = e.texture;
							for (let e = 0, r = n.length; e < r; e++) {
								const r = i.get(n[e]);
								void 0 === r.__webglTexture &&
									((r.__webglTexture = t.createTexture()), a.memory.textures++);
							}
						} else
							console.warn(
								"THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
							);
					else if (e.useRenderbuffer)
						if (o) {
							(c.__webglMultisampledFramebuffer = t.createFramebuffer()),
								(c.__webglColorRenderbuffer = t.createRenderbuffer()),
								t.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
							const i = s.convert(l.format, l.encoding),
								r = s.convert(l.type),
								a = U(l.internalFormat, i, r, l.encoding),
								o = et(e);
							t.renderbufferStorageMultisample(36161, o, a, e.width, e.height),
								n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer),
								t.framebufferRenderbuffer(
									36160,
									36064,
									36161,
									c.__webglColorRenderbuffer
								),
								t.bindRenderbuffer(36161, null),
								e.depthBuffer &&
									((c.__webglDepthRenderbuffer = t.createRenderbuffer()),
									$(c.__webglDepthRenderbuffer, e, !0)),
								n.bindFramebuffer(36160, null);
						} else
							console.warn(
								"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
							);
					if (u) {
						n.bindTexture(34067, h.__webglTexture), Y(34067, l, m);
						for (let t = 0; t < 6; t++)
							Q(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
						O(l, m) && F(34067), n.unbindTexture();
					} else if (d) {
						const t = e.texture;
						for (let r = 0, s = t.length; r < s; r++) {
							const s = t[r],
								a = i.get(s);
							n.bindTexture(3553, a.__webglTexture),
								Y(3553, s, m),
								Q(c.__webglFramebuffer, e, s, 36064 + r, 3553),
								O(s, m) && F(3553);
						}
						n.unbindTexture();
					} else {
						let t = 3553;
						if (p)
							if (o) {
								t = l.isDataTexture3D ? 32879 : 35866;
							} else
								console.warn(
									"THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2."
								);
						n.bindTexture(t, h.__webglTexture),
							Y(t, l, m),
							Q(c.__webglFramebuffer, e, l, 36064, t),
							O(l, m) && F(t),
							n.unbindTexture();
					}
					e.depthBuffer && tt(e);
				}),
				(this.updateRenderTargetMipmap = function (t) {
					const e = z(t) || o,
						r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
					for (let s = 0, a = r.length; s < a; s++) {
						const a = r[s];
						if (O(a, e)) {
							const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
								r = i.get(a).__webglTexture;
							n.bindTexture(e, r), F(e), n.unbindTexture();
						}
					}
				}),
				(this.updateMultisampleRenderTarget = function (e) {
					if (e.useRenderbuffer)
						if (o) {
							const r = e.width,
								s = e.height;
							let a = 16384;
							const o = [36064],
								l = e.stencilBuffer ? 33306 : 36096;
							e.depthBuffer && o.push(l),
								e.ignoreDepthForMultisampleCopy ||
									(e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024));
							const c = i.get(e);
							n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer),
								n.bindFramebuffer(36009, c.__webglFramebuffer),
								e.ignoreDepthForMultisampleCopy &&
									(t.invalidateFramebuffer(36008, [l]),
									t.invalidateFramebuffer(36009, [l])),
								t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
								t.invalidateFramebuffer(36008, o),
								n.bindFramebuffer(36008, null),
								n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
						} else
							console.warn(
								"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
							);
				}),
				(this.setupDepthRenderbuffer = tt),
				(this.setupFrameBufferTexture = Q),
				(this.safeSetTexture2D = function (t, e) {
					t &&
						t.isWebGLRenderTarget &&
						(!1 === it &&
							(console.warn(
								"THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
							),
							(it = !0)),
						(t = t.texture)),
						j(t, e);
				}),
				(this.safeSetTextureCube = function (t, e) {
					t &&
						t.isWebGLCubeRenderTarget &&
						(!1 === rt &&
							(console.warn(
								"THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
							),
							(rt = !0)),
						(t = t.texture)),
						q(t, e);
				});
		}
		function Qs(t, e, n) {
			const i = n.isWebGL2;
			return {
				convert: function (t, n = null) {
					let r;
					if (t === x) return 5121;
					if (1017 === t) return 32819;
					if (1018 === t) return 32820;
					if (1010 === t) return 5120;
					if (1011 === t) return 5122;
					if (t === _) return 5123;
					if (1013 === t) return 5124;
					if (t === M) return 5125;
					if (t === b) return 5126;
					if (t === w)
						return i
							? 5131
							: ((r = e.get("OES_texture_half_float")),
							  null !== r ? r.HALF_FLOAT_OES : null);
					if (1021 === t) return 6406;
					if (t === T) return 6408;
					if (1024 === t) return 6409;
					if (1025 === t) return 6410;
					if (t === E) return 6402;
					if (t === A) return 34041;
					if (1028 === t) return 6403;
					if (t === pt)
						return (
							(r = e.get("EXT_sRGB")), null !== r ? r.SRGB_ALPHA_EXT : null
						);
					if (1029 === t) return 36244;
					if (1030 === t) return 33319;
					if (1031 === t) return 33320;
					if (1033 === t) return 36249;
					if (t === R || t === L || t === C || t === P)
						if (n === lt) {
							if (
								((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === r)
							)
								return null;
							if (t === R) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
							if (t === L) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
							if (t === C) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
							if (t === P) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
						} else {
							if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
								return null;
							if (t === R) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
							if (t === L) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
							if (t === C) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
							if (t === P) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
						}
					if (t === D || t === I || t === N || t === B) {
						if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
							return null;
						if (t === D) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
						if (t === I) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
						if (t === N) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
						if (t === B) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
					}
					if (36196 === t)
						return (
							(r = e.get("WEBGL_compressed_texture_etc1")),
							null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null
						);
					if (t === z || t === O) {
						if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
							return null;
						if (t === z)
							return n === lt
								? r.COMPRESSED_SRGB8_ETC2
								: r.COMPRESSED_RGB8_ETC2;
						if (t === O)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
								: r.COMPRESSED_RGBA8_ETC2_EAC;
					}
					if (
						t === F ||
						t === U ||
						t === H ||
						t === G ||
						t === k ||
						t === V ||
						t === W ||
						t === j ||
						t === q ||
						t === X ||
						t === J ||
						t === Y ||
						t === Z ||
						t === K
					) {
						if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
							return null;
						if (t === F)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
								: r.COMPRESSED_RGBA_ASTC_4x4_KHR;
						if (t === U)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
								: r.COMPRESSED_RGBA_ASTC_5x4_KHR;
						if (t === H)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
								: r.COMPRESSED_RGBA_ASTC_5x5_KHR;
						if (t === G)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
								: r.COMPRESSED_RGBA_ASTC_6x5_KHR;
						if (t === k)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
								: r.COMPRESSED_RGBA_ASTC_6x6_KHR;
						if (t === V)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
								: r.COMPRESSED_RGBA_ASTC_8x5_KHR;
						if (t === W)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
								: r.COMPRESSED_RGBA_ASTC_8x6_KHR;
						if (t === j)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
								: r.COMPRESSED_RGBA_ASTC_8x8_KHR;
						if (t === q)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
								: r.COMPRESSED_RGBA_ASTC_10x5_KHR;
						if (t === X)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
								: r.COMPRESSED_RGBA_ASTC_10x6_KHR;
						if (t === J)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
								: r.COMPRESSED_RGBA_ASTC_10x8_KHR;
						if (t === Y)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
								: r.COMPRESSED_RGBA_ASTC_10x10_KHR;
						if (t === Z)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
								: r.COMPRESSED_RGBA_ASTC_12x10_KHR;
						if (t === K)
							return n === lt
								? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
								: r.COMPRESSED_RGBA_ASTC_12x12_KHR;
					}
					if (t === Q) {
						if (((r = e.get("EXT_texture_compression_bptc")), null === r))
							return null;
						if (t === Q)
							return n === lt
								? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
								: r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
					}
					return t === S
						? i
							? 34042
							: ((r = e.get("WEBGL_depth_texture")),
							  null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null)
						: void 0;
				},
			};
		}
		class $s extends ai {
			constructor(t = []) {
				super(), (this.cameras = t);
			}
		}
		$s.prototype.isArrayCamera = !0;
		class ta extends Qe {
			constructor() {
				super(), (this.type = "Group");
			}
		}
		ta.prototype.isGroup = !0;
		const ea = { type: "move" };
		class na {
			constructor() {
				(this._targetRay = null), (this._grip = null), (this._hand = null);
			}
			getHandSpace() {
				return (
					null === this._hand &&
						((this._hand = new ta()),
						(this._hand.matrixAutoUpdate = !1),
						(this._hand.visible = !1),
						(this._hand.joints = {}),
						(this._hand.inputState = { pinching: !1 })),
					this._hand
				);
			}
			getTargetRaySpace() {
				return (
					null === this._targetRay &&
						((this._targetRay = new ta()),
						(this._targetRay.matrixAutoUpdate = !1),
						(this._targetRay.visible = !1),
						(this._targetRay.hasLinearVelocity = !1),
						(this._targetRay.linearVelocity = new Zt()),
						(this._targetRay.hasAngularVelocity = !1),
						(this._targetRay.angularVelocity = new Zt())),
					this._targetRay
				);
			}
			getGripSpace() {
				return (
					null === this._grip &&
						((this._grip = new ta()),
						(this._grip.matrixAutoUpdate = !1),
						(this._grip.visible = !1),
						(this._grip.hasLinearVelocity = !1),
						(this._grip.linearVelocity = new Zt()),
						(this._grip.hasAngularVelocity = !1),
						(this._grip.angularVelocity = new Zt())),
					this._grip
				);
			}
			dispatchEvent(t) {
				return (
					null !== this._targetRay && this._targetRay.dispatchEvent(t),
					null !== this._grip && this._grip.dispatchEvent(t),
					null !== this._hand && this._hand.dispatchEvent(t),
					this
				);
			}
			disconnect(t) {
				return (
					this.dispatchEvent({ type: "disconnected", data: t }),
					null !== this._targetRay && (this._targetRay.visible = !1),
					null !== this._grip && (this._grip.visible = !1),
					null !== this._hand && (this._hand.visible = !1),
					this
				);
			}
			update(t, e, n) {
				let i = null,
					r = null,
					s = null;
				const a = this._targetRay,
					o = this._grip,
					l = this._hand;
				if (t && "visible-blurred" !== e.session.visibilityState)
					if (
						(null !== a &&
							((i = e.getPose(t.targetRaySpace, n)),
							null !== i &&
								(a.matrix.fromArray(i.transform.matrix),
								a.matrix.decompose(a.position, a.rotation, a.scale),
								i.linearVelocity
									? ((a.hasLinearVelocity = !0),
									  a.linearVelocity.copy(i.linearVelocity))
									: (a.hasLinearVelocity = !1),
								i.angularVelocity
									? ((a.hasAngularVelocity = !0),
									  a.angularVelocity.copy(i.angularVelocity))
									: (a.hasAngularVelocity = !1),
								this.dispatchEvent(ea))),
						l && t.hand)
					) {
						s = !0;
						for (const i of t.hand.values()) {
							const t = e.getJointPose(i, n);
							if (void 0 === l.joints[i.jointName]) {
								const t = new ta();
								(t.matrixAutoUpdate = !1),
									(t.visible = !1),
									(l.joints[i.jointName] = t),
									l.add(t);
							}
							const r = l.joints[i.jointName];
							null !== t &&
								(r.matrix.fromArray(t.transform.matrix),
								r.matrix.decompose(r.position, r.rotation, r.scale),
								(r.jointRadius = t.radius)),
								(r.visible = null !== t);
						}
						const i = l.joints["index-finger-tip"],
							r = l.joints["thumb-tip"],
							a = i.position.distanceTo(r.position),
							o = 0.02,
							c = 0.005;
						l.inputState.pinching && a > o + c
							? ((l.inputState.pinching = !1),
							  this.dispatchEvent({
									type: "pinchend",
									handedness: t.handedness,
									target: this,
							  }))
							: !l.inputState.pinching &&
							  a <= o - c &&
							  ((l.inputState.pinching = !0),
							  this.dispatchEvent({
									type: "pinchstart",
									handedness: t.handedness,
									target: this,
							  }));
					} else
						null !== o &&
							t.gripSpace &&
							((r = e.getPose(t.gripSpace, n)),
							null !== r &&
								(o.matrix.fromArray(r.transform.matrix),
								o.matrix.decompose(o.position, o.rotation, o.scale),
								r.linearVelocity
									? ((o.hasLinearVelocity = !0),
									  o.linearVelocity.copy(r.linearVelocity))
									: (o.hasLinearVelocity = !1),
								r.angularVelocity
									? ((o.hasAngularVelocity = !0),
									  o.angularVelocity.copy(r.angularVelocity))
									: (o.hasAngularVelocity = !1)));
				return (
					null !== a && (a.visible = null !== i),
					null !== o && (o.visible = null !== r),
					null !== l && (l.visible = null !== s),
					this
				);
			}
		}
		class ia extends Vt {
			constructor(t, e, n, i, r, s, a, o, l, c) {
				if ((c = void 0 !== c ? c : E) !== E && c !== A)
					throw new Error(
						"DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
					);
				void 0 === n && c === E && (n = _),
					void 0 === n && c === A && (n = S),
					super(null, i, r, s, a, o, c, n, l),
					(this.image = { width: t, height: e }),
					(this.magFilter = void 0 !== a ? a : p),
					(this.minFilter = void 0 !== o ? o : p),
					(this.flipY = !1),
					(this.generateMipmaps = !1);
			}
		}
		ia.prototype.isDepthTexture = !0;
		class ra extends mt {
			constructor(t, e) {
				super();
				const n = this;
				let i = null,
					r = 1,
					s = null,
					a = "local-floor";
				const o = t.extensions.has("WEBGL_multisampled_render_to_texture");
				let l = null,
					c = null,
					h = null,
					u = null,
					d = !1,
					p = null;
				const m = e.getContextAttributes();
				let f = null,
					g = null;
				const v = [],
					y = new Map(),
					M = new ai();
				M.layers.enable(1), (M.viewport = new jt());
				const b = new ai();
				b.layers.enable(2), (b.viewport = new jt());
				const w = [M, b],
					R = new $s();
				R.layers.enable(1), R.layers.enable(2);
				let L = null,
					C = null;
				function P(t) {
					const e = y.get(t.inputSource);
					e && e.dispatchEvent({ type: t.type, data: t.inputSource });
				}
				function D() {
					y.forEach(function (t, e) {
						t.disconnect(e);
					}),
						y.clear(),
						(L = null),
						(C = null),
						t.setRenderTarget(f),
						(u = null),
						(h = null),
						(c = null),
						(i = null),
						(g = null),
						F.stop(),
						(n.isPresenting = !1),
						n.dispatchEvent({ type: "sessionend" });
				}
				function I(t) {
					const e = i.inputSources;
					for (let t = 0; t < v.length; t++) y.set(e[t], v[t]);
					for (let e = 0; e < t.removed.length; e++) {
						const n = t.removed[e],
							i = y.get(n);
						i &&
							(i.dispatchEvent({ type: "disconnected", data: n }), y.delete(n));
					}
					for (let e = 0; e < t.added.length; e++) {
						const n = t.added[e],
							i = y.get(n);
						i && i.dispatchEvent({ type: "connected", data: n });
					}
				}
				(this.cameraAutoUpdate = !0),
					(this.enabled = !1),
					(this.isPresenting = !1),
					(this.getController = function (t) {
						let e = v[t];
						return (
							void 0 === e && ((e = new na()), (v[t] = e)),
							e.getTargetRaySpace()
						);
					}),
					(this.getControllerGrip = function (t) {
						let e = v[t];
						return (
							void 0 === e && ((e = new na()), (v[t] = e)), e.getGripSpace()
						);
					}),
					(this.getHand = function (t) {
						let e = v[t];
						return (
							void 0 === e && ((e = new na()), (v[t] = e)), e.getHandSpace()
						);
					}),
					(this.setFramebufferScaleFactor = function (t) {
						(r = t),
							!0 === n.isPresenting &&
								console.warn(
									"THREE.WebXRManager: Cannot change framebuffer scale while presenting."
								);
					}),
					(this.setReferenceSpaceType = function (t) {
						(a = t),
							!0 === n.isPresenting &&
								console.warn(
									"THREE.WebXRManager: Cannot change reference space type while presenting."
								);
					}),
					(this.getReferenceSpace = function () {
						return s;
					}),
					(this.getBaseLayer = function () {
						return null !== h ? h : u;
					}),
					(this.getBinding = function () {
						return c;
					}),
					(this.getFrame = function () {
						return p;
					}),
					(this.getSession = function () {
						return i;
					}),
					(this.setSession = async function (l) {
						if (((i = l), null !== i)) {
							if (
								((f = t.getRenderTarget()),
								i.addEventListener("select", P),
								i.addEventListener("selectstart", P),
								i.addEventListener("selectend", P),
								i.addEventListener("squeeze", P),
								i.addEventListener("squeezestart", P),
								i.addEventListener("squeezeend", P),
								i.addEventListener("end", D),
								i.addEventListener("inputsourceschange", I),
								!0 !== m.xrCompatible && (await e.makeXRCompatible()),
								void 0 === i.renderState.layers ||
									!1 === t.capabilities.isWebGL2)
							) {
								const n = {
									antialias: void 0 !== i.renderState.layers || m.antialias,
									alpha: m.alpha,
									depth: m.depth,
									stencil: m.stencil,
									framebufferScaleFactor: r,
								};
								(u = new XRWebGLLayer(i, e, n)),
									i.updateRenderState({ baseLayer: u }),
									(g = new qt(u.framebufferWidth, u.framebufferHeight, {
										format: T,
										type: x,
										encoding: t.outputEncoding,
									}));
							} else {
								d = m.antialias;
								let n = null,
									s = null,
									a = null;
								m.depth &&
									((a = m.stencil ? 35056 : 33190),
									(n = m.stencil ? A : E),
									(s = m.stencil ? S : _));
								const l = {
									colorFormat: t.outputEncoding === lt ? 35907 : 32856,
									depthFormat: a,
									scaleFactor: r,
								};
								(c = new XRWebGLBinding(i, e)),
									(h = c.createProjectionLayer(l)),
									i.updateRenderState({ layers: [h] }),
									(g = d
										? new Jt(h.textureWidth, h.textureHeight, {
												format: T,
												type: x,
												depthTexture: new ia(
													h.textureWidth,
													h.textureHeight,
													s,
													void 0,
													void 0,
													void 0,
													void 0,
													void 0,
													void 0,
													n
												),
												stencilBuffer: m.stencil,
												ignoreDepth: h.ignoreDepthValues,
												useRenderToTexture: o,
												encoding: t.outputEncoding,
										  })
										: new qt(h.textureWidth, h.textureHeight, {
												format: T,
												type: x,
												depthTexture: new ia(
													h.textureWidth,
													h.textureHeight,
													s,
													void 0,
													void 0,
													void 0,
													void 0,
													void 0,
													void 0,
													n
												),
												stencilBuffer: m.stencil,
												ignoreDepth: h.ignoreDepthValues,
												encoding: t.outputEncoding,
										  }));
							}
							(g.isXRRenderTarget = !0),
								this.setFoveation(1),
								(s = await i.requestReferenceSpace(a)),
								F.setContext(i),
								F.start(),
								(n.isPresenting = !0),
								n.dispatchEvent({ type: "sessionstart" });
						}
					});
				const N = new Zt(),
					B = new Zt();
				function z(t, e) {
					null === e
						? t.matrixWorld.copy(t.matrix)
						: t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
						t.matrixWorldInverse.copy(t.matrixWorld).invert();
				}
				(this.updateCamera = function (t) {
					if (null === i) return;
					(R.near = b.near = M.near = t.near),
						(R.far = b.far = M.far = t.far),
						(L === R.near && C === R.far) ||
							(i.updateRenderState({ depthNear: R.near, depthFar: R.far }),
							(L = R.near),
							(C = R.far));
					const e = t.parent,
						n = R.cameras;
					z(R, e);
					for (let t = 0; t < n.length; t++) z(n[t], e);
					R.matrixWorld.decompose(R.position, R.quaternion, R.scale),
						t.position.copy(R.position),
						t.quaternion.copy(R.quaternion),
						t.scale.copy(R.scale),
						t.matrix.copy(R.matrix),
						t.matrixWorld.copy(R.matrixWorld);
					const r = t.children;
					for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
					2 === n.length
						? (function (t, e, n) {
								N.setFromMatrixPosition(e.matrixWorld),
									B.setFromMatrixPosition(n.matrixWorld);
								const i = N.distanceTo(B),
									r = e.projectionMatrix.elements,
									s = n.projectionMatrix.elements,
									a = r[14] / (r[10] - 1),
									o = r[14] / (r[10] + 1),
									l = (r[9] + 1) / r[5],
									c = (r[9] - 1) / r[5],
									h = (r[8] - 1) / r[0],
									u = (s[8] + 1) / s[0],
									d = a * h,
									p = a * u,
									m = i / (-h + u),
									f = m * -h;
								e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
									t.translateX(f),
									t.translateZ(m),
									t.matrixWorld.compose(t.position, t.quaternion, t.scale),
									t.matrixWorldInverse.copy(t.matrixWorld).invert();
								const g = a + m,
									v = o + m,
									y = d - f,
									x = p + (i - f),
									_ = ((l * o) / v) * g,
									M = ((c * o) / v) * g;
								t.projectionMatrix.makePerspective(y, x, _, M, g, v);
						  })(R, M, b)
						: R.projectionMatrix.copy(M.projectionMatrix);
				}),
					(this.getCamera = function () {
						return R;
					}),
					(this.getFoveation = function () {
						return null !== h
							? h.fixedFoveation
							: null !== u
							? u.fixedFoveation
							: void 0;
					}),
					(this.setFoveation = function (t) {
						null !== h && (h.fixedFoveation = t),
							null !== u &&
								void 0 !== u.fixedFoveation &&
								(u.fixedFoveation = t);
					});
				let O = null;
				const F = new yi();
				F.setAnimationLoop(function (e, n) {
					if (((l = n.getViewerPose(s)), (p = n), null !== l)) {
						const e = l.views;
						null !== u &&
							(t.setRenderTargetFramebuffer(g, u.framebuffer),
							t.setRenderTarget(g));
						let n = !1;
						e.length !== R.cameras.length && ((R.cameras.length = 0), (n = !0));
						for (let i = 0; i < e.length; i++) {
							const r = e[i];
							let s = null;
							if (null !== u) s = u.getViewport(r);
							else {
								const e = c.getViewSubImage(h, r);
								(s = e.viewport),
									0 === i &&
										(t.setRenderTargetTextures(
											g,
											e.colorTexture,
											h.ignoreDepthValues ? void 0 : e.depthStencilTexture
										),
										t.setRenderTarget(g));
							}
							const a = w[i];
							a.matrix.fromArray(r.transform.matrix),
								a.projectionMatrix.fromArray(r.projectionMatrix),
								a.viewport.set(s.x, s.y, s.width, s.height),
								0 === i && R.matrix.copy(a.matrix),
								!0 === n && R.cameras.push(a);
						}
					}
					const r = i.inputSources;
					for (let t = 0; t < v.length; t++) {
						const e = v[t],
							i = r[t];
						e.update(i, n, s);
					}
					O && O(e, n), (p = null);
				}),
					(this.setAnimationLoop = function (t) {
						O = t;
					}),
					(this.dispose = function () {});
			}
		}
		function sa(t) {
			function e(e, n) {
				(e.opacity.value = n.opacity),
					n.color && e.diffuse.value.copy(n.color),
					n.emissive &&
						e.emissive.value
							.copy(n.emissive)
							.multiplyScalar(n.emissiveIntensity),
					n.map && (e.map.value = n.map),
					n.alphaMap && (e.alphaMap.value = n.alphaMap),
					n.specularMap && (e.specularMap.value = n.specularMap),
					n.alphaTest > 0 && (e.alphaTest.value = n.alphaTest);
				const i = t.get(n).envMap;
				let r, s;
				i &&
					((e.envMap.value = i),
					(e.flipEnvMap.value =
						i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
					(e.reflectivity.value = n.reflectivity),
					(e.ior.value = n.ior),
					(e.refractionRatio.value = n.refractionRatio)),
					n.lightMap &&
						((e.lightMap.value = n.lightMap),
						(e.lightMapIntensity.value = n.lightMapIntensity)),
					n.aoMap &&
						((e.aoMap.value = n.aoMap),
						(e.aoMapIntensity.value = n.aoMapIntensity)),
					n.map
						? (r = n.map)
						: n.specularMap
						? (r = n.specularMap)
						: n.displacementMap
						? (r = n.displacementMap)
						: n.normalMap
						? (r = n.normalMap)
						: n.bumpMap
						? (r = n.bumpMap)
						: n.roughnessMap
						? (r = n.roughnessMap)
						: n.metalnessMap
						? (r = n.metalnessMap)
						: n.alphaMap
						? (r = n.alphaMap)
						: n.emissiveMap
						? (r = n.emissiveMap)
						: n.clearcoatMap
						? (r = n.clearcoatMap)
						: n.clearcoatNormalMap
						? (r = n.clearcoatNormalMap)
						: n.clearcoatRoughnessMap
						? (r = n.clearcoatRoughnessMap)
						: n.specularIntensityMap
						? (r = n.specularIntensityMap)
						: n.specularColorMap
						? (r = n.specularColorMap)
						: n.transmissionMap
						? (r = n.transmissionMap)
						: n.thicknessMap
						? (r = n.thicknessMap)
						: n.sheenColorMap
						? (r = n.sheenColorMap)
						: n.sheenRoughnessMap && (r = n.sheenRoughnessMap),
					void 0 !== r &&
						(r.isWebGLRenderTarget && (r = r.texture),
						!0 === r.matrixAutoUpdate && r.updateMatrix(),
						e.uvTransform.value.copy(r.matrix)),
					n.aoMap ? (s = n.aoMap) : n.lightMap && (s = n.lightMap),
					void 0 !== s &&
						(s.isWebGLRenderTarget && (s = s.texture),
						!0 === s.matrixAutoUpdate && s.updateMatrix(),
						e.uv2Transform.value.copy(s.matrix));
			}
			function n(e, n) {
				(e.roughness.value = n.roughness),
					(e.metalness.value = n.metalness),
					n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
					n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
					n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
					n.bumpMap &&
						((e.bumpMap.value = n.bumpMap),
						(e.bumpScale.value = n.bumpScale),
						1 === n.side && (e.bumpScale.value *= -1)),
					n.normalMap &&
						((e.normalMap.value = n.normalMap),
						e.normalScale.value.copy(n.normalScale),
						1 === n.side && e.normalScale.value.negate()),
					n.displacementMap &&
						((e.displacementMap.value = n.displacementMap),
						(e.displacementScale.value = n.displacementScale),
						(e.displacementBias.value = n.displacementBias));
				t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
			}
			return {
				refreshFogUniforms: function (t, e) {
					t.fogColor.value.copy(e.color),
						e.isFog
							? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
							: e.isFogExp2 && (t.fogDensity.value = e.density);
				},
				refreshMaterialUniforms: function (t, i, r, s, a) {
					i.isMeshBasicMaterial
						? e(t, i)
						: i.isMeshLambertMaterial
						? (e(t, i),
						  (function (t, e) {
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
						  })(t, i))
						: i.isMeshToonMaterial
						? (e(t, i),
						  (function (t, e) {
								e.gradientMap && (t.gradientMap.value = e.gradientMap);
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshPhongMaterial
						? (e(t, i),
						  (function (t, e) {
								t.specular.value.copy(e.specular),
									(t.shininess.value = Math.max(e.shininess, 1e-4)),
									e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshStandardMaterial
						? (e(t, i),
						  i.isMeshPhysicalMaterial
								? (function (t, e, i) {
										n(t, e),
											(t.ior.value = e.ior),
											e.sheen > 0 &&
												(t.sheenColor.value
													.copy(e.sheenColor)
													.multiplyScalar(e.sheen),
												(t.sheenRoughness.value = e.sheenRoughness),
												e.sheenColorMap &&
													(t.sheenColorMap.value = e.sheenColorMap),
												e.sheenRoughnessMap &&
													(t.sheenRoughnessMap.value = e.sheenRoughnessMap));
										e.clearcoat > 0 &&
											((t.clearcoat.value = e.clearcoat),
											(t.clearcoatRoughness.value = e.clearcoatRoughness),
											e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
											e.clearcoatRoughnessMap &&
												(t.clearcoatRoughnessMap.value =
													e.clearcoatRoughnessMap),
											e.clearcoatNormalMap &&
												(t.clearcoatNormalScale.value.copy(
													e.clearcoatNormalScale
												),
												(t.clearcoatNormalMap.value = e.clearcoatNormalMap),
												1 === e.side && t.clearcoatNormalScale.value.negate()));
										e.transmission > 0 &&
											((t.transmission.value = e.transmission),
											(t.transmissionSamplerMap.value = i.texture),
											t.transmissionSamplerSize.value.set(i.width, i.height),
											e.transmissionMap &&
												(t.transmissionMap.value = e.transmissionMap),
											(t.thickness.value = e.thickness),
											e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
											(t.attenuationDistance.value = e.attenuationDistance),
											t.attenuationColor.value.copy(e.attenuationColor));
										(t.specularIntensity.value = e.specularIntensity),
											t.specularColor.value.copy(e.specularColor),
											e.specularIntensityMap &&
												(t.specularIntensityMap.value = e.specularIntensityMap);
										e.specularColorMap &&
											(t.specularColorMap.value = e.specularColorMap);
								  })(t, i, a)
								: n(t, i))
						: i.isMeshMatcapMaterial
						? (e(t, i),
						  (function (t, e) {
								e.matcap && (t.matcap.value = e.matcap);
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDepthMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isMeshDistanceMaterial
						? (e(t, i),
						  (function (t, e) {
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
								t.referencePosition.value.copy(e.referencePosition),
									(t.nearDistance.value = e.nearDistance),
									(t.farDistance.value = e.farDistance);
						  })(t, i))
						: i.isMeshNormalMaterial
						? (e(t, i),
						  (function (t, e) {
								e.bumpMap &&
									((t.bumpMap.value = e.bumpMap),
									(t.bumpScale.value = e.bumpScale),
									1 === e.side && (t.bumpScale.value *= -1));
								e.normalMap &&
									((t.normalMap.value = e.normalMap),
									t.normalScale.value.copy(e.normalScale),
									1 === e.side && t.normalScale.value.negate());
								e.displacementMap &&
									((t.displacementMap.value = e.displacementMap),
									(t.displacementScale.value = e.displacementScale),
									(t.displacementBias.value = e.displacementBias));
						  })(t, i))
						: i.isLineBasicMaterial
						? ((function (t, e) {
								t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
						  })(t, i),
						  i.isLineDashedMaterial &&
								(function (t, e) {
									(t.dashSize.value = e.dashSize),
										(t.totalSize.value = e.dashSize + e.gapSize),
										(t.scale.value = e.scale);
								})(t, i))
						: i.isPointsMaterial
						? (function (t, e, n, i) {
								t.diffuse.value.copy(e.color),
									(t.opacity.value = e.opacity),
									(t.size.value = e.size * n),
									(t.scale.value = 0.5 * i),
									e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
								let r;
								e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
								void 0 !== r &&
									(!0 === r.matrixAutoUpdate && r.updateMatrix(),
									t.uvTransform.value.copy(r.matrix));
						  })(t, i, r, s)
						: i.isSpriteMaterial
						? (function (t, e) {
								t.diffuse.value.copy(e.color),
									(t.opacity.value = e.opacity),
									(t.rotation.value = e.rotation),
									e.map && (t.map.value = e.map);
								e.alphaMap && (t.alphaMap.value = e.alphaMap);
								e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
								let n;
								e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
								void 0 !== n &&
									(!0 === n.matrixAutoUpdate && n.updateMatrix(),
									t.uvTransform.value.copy(n.matrix));
						  })(t, i)
						: i.isShadowMaterial
						? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
						: i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
				},
			};
		}
		function aa(t = {}) {
			const e =
					void 0 !== t.canvas
						? t.canvas
						: (function () {
								const t = Dt("canvas");
								return (t.style.display = "block"), t;
						  })(),
				n = void 0 !== t.context ? t.context : null,
				i = void 0 !== t.alpha && t.alpha,
				r = void 0 === t.depth || t.depth,
				s = void 0 === t.stencil || t.stencil,
				a = void 0 !== t.antialias && t.antialias,
				o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
				l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
				c = void 0 !== t.powerPreference ? t.powerPreference : "default",
				h =
					void 0 !== t.failIfMajorPerformanceCaveat &&
					t.failIfMajorPerformanceCaveat;
			let d = null,
				m = null;
			const f = [],
				g = [];
			(this.domElement = e),
				(this.debug = { checkShaderErrors: !0 }),
				(this.autoClear = !0),
				(this.autoClearColor = !0),
				(this.autoClearDepth = !0),
				(this.autoClearStencil = !0),
				(this.sortObjects = !0),
				(this.clippingPlanes = []),
				(this.localClippingEnabled = !1),
				(this.outputEncoding = ot),
				(this.physicallyCorrectLights = !1),
				(this.toneMapping = 0),
				(this.toneMappingExposure = 1);
			const v = this;
			let _ = !1,
				M = 0,
				S = 0,
				E = null,
				A = -1,
				R = null;
			const L = new jt(),
				C = new jt();
			let P = null,
				D = e.width,
				I = e.height,
				N = 1,
				B = null,
				z = null;
			const O = new jt(0, 0, D, I),
				F = new jt(0, 0, D, I);
			let U = !1;
			const H = new vi();
			let G = !1,
				k = !1,
				V = null;
			const W = new Ae(),
				j = new Zt(),
				q = {
					background: null,
					fog: null,
					environment: null,
					overrideMaterial: null,
					isScene: !0,
				};
			function X() {
				return null === E ? N : 1;
			}
			let J,
				Y,
				Z,
				K,
				Q,
				$,
				tt,
				et,
				nt,
				it,
				rt,
				st,
				at,
				lt,
				ct,
				ht,
				ut,
				dt,
				pt,
				mt,
				ft,
				gt,
				vt,
				yt = n;
			function xt(t, n) {
				for (let i = 0; i < t.length; i++) {
					const r = t[i],
						s = e.getContext(r, n);
					if (null !== s) return s;
				}
				return null;
			}
			try {
				const t = {
					alpha: !0,
					depth: r,
					stencil: s,
					antialias: a,
					premultipliedAlpha: o,
					preserveDrawingBuffer: l,
					powerPreference: c,
					failIfMajorPerformanceCaveat: h,
				};
				if (
					("setAttribute" in e &&
						e.setAttribute("data-engine", "three.js r137"),
					e.addEventListener("webglcontextlost", bt, !1),
					e.addEventListener("webglcontextrestored", wt, !1),
					null === yt)
				) {
					const e = ["webgl2", "webgl", "experimental-webgl"];
					if (
						(!0 === v.isWebGL1Renderer && e.shift(),
						(yt = xt(e, t)),
						null === yt)
					)
						throw xt(e)
							? new Error(
									"Error creating WebGL context with your selected attributes."
							  )
							: new Error("Error creating WebGL context.");
				}
				void 0 === yt.getShaderPrecisionFormat &&
					(yt.getShaderPrecisionFormat = function () {
						return { rangeMin: 1, rangeMax: 1, precision: 1 };
					});
			} catch (t) {
				throw (console.error("THREE.WebGLRenderer: " + t.message), t);
			}
			function _t() {
				(J = new $i(yt)),
					(Y = new Ai(yt, J, t)),
					J.init(Y),
					(gt = new Qs(yt, J, Y)),
					(Z = new Zs(yt, J, Y)),
					(K = new nr(yt)),
					(Q = new zs()),
					($ = new Ks(yt, J, Z, Q, Y, gt, K)),
					(tt = new Li(v)),
					(et = new Qi(v)),
					(nt = new xi(yt, Y)),
					(vt = new Ti(yt, J, nt, Y)),
					(it = new tr(yt, nt, K, vt)),
					(rt = new lr(yt, it, nt, K)),
					(pt = new or(yt, Y, $)),
					(ht = new Ri(Q)),
					(st = new Bs(v, tt, et, J, Y, vt, ht)),
					(at = new sa(Q)),
					(lt = new Hs()),
					(ct = new qs(J, Y)),
					(dt = new Si(v, tt, Z, rt, i, o)),
					(ut = new Ys(v, rt, Y)),
					(mt = new Ei(yt, J, K, Y)),
					(ft = new er(yt, J, K, Y)),
					(K.programs = st.programs),
					(v.capabilities = Y),
					(v.extensions = J),
					(v.properties = Q),
					(v.renderLists = lt),
					(v.shadowMap = ut),
					(v.state = Z),
					(v.info = K);
			}
			_t();
			const Mt = new ra(v, yt);
			function bt(t) {
				t.preventDefault(),
					console.log("THREE.WebGLRenderer: Context Lost."),
					(_ = !0);
			}
			function wt() {
				console.log("THREE.WebGLRenderer: Context Restored."), (_ = !1);
				const t = K.autoReset,
					e = ut.enabled,
					n = ut.autoUpdate,
					i = ut.needsUpdate,
					r = ut.type;
				_t(),
					(K.autoReset = t),
					(ut.enabled = e),
					(ut.autoUpdate = n),
					(ut.needsUpdate = i),
					(ut.type = r);
			}
			function St(t) {
				const e = t.target;
				e.removeEventListener("dispose", St),
					(function (t) {
						(function (t) {
							const e = Q.get(t).programs;
							void 0 !== e &&
								(e.forEach(function (t) {
									st.releaseProgram(t);
								}),
								t.isShaderMaterial && st.releaseShaderCache(t));
						})(t),
							Q.remove(t);
					})(e);
			}
			(this.xr = Mt),
				(this.getContext = function () {
					return yt;
				}),
				(this.getContextAttributes = function () {
					return yt.getContextAttributes();
				}),
				(this.forceContextLoss = function () {
					const t = J.get("WEBGL_lose_context");
					t && t.loseContext();
				}),
				(this.forceContextRestore = function () {
					const t = J.get("WEBGL_lose_context");
					t && t.restoreContext();
				}),
				(this.getPixelRatio = function () {
					return N;
				}),
				(this.setPixelRatio = function (t) {
					void 0 !== t && ((N = t), this.setSize(D, I, !1));
				}),
				(this.getSize = function (t) {
					return t.set(D, I);
				}),
				(this.setSize = function (t, n, i) {
					Mt.isPresenting
						? console.warn(
								"THREE.WebGLRenderer: Can't change size while VR device is presenting."
						  )
						: ((D = t),
						  (I = n),
						  (e.width = Math.floor(t * N)),
						  (e.height = Math.floor(n * N)),
						  !1 !== i &&
								((e.style.width = t + "px"), (e.style.height = n + "px")),
						  this.setViewport(0, 0, t, n));
				}),
				(this.getDrawingBufferSize = function (t) {
					return t.set(D * N, I * N).floor();
				}),
				(this.setDrawingBufferSize = function (t, n, i) {
					(D = t),
						(I = n),
						(N = i),
						(e.width = Math.floor(t * i)),
						(e.height = Math.floor(n * i)),
						this.setViewport(0, 0, t, n);
				}),
				(this.getCurrentViewport = function (t) {
					return t.copy(L);
				}),
				(this.getViewport = function (t) {
					return t.copy(O);
				}),
				(this.setViewport = function (t, e, n, i) {
					t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i),
						Z.viewport(L.copy(O).multiplyScalar(N).floor());
				}),
				(this.getScissor = function (t) {
					return t.copy(F);
				}),
				(this.setScissor = function (t, e, n, i) {
					t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i),
						Z.scissor(C.copy(F).multiplyScalar(N).floor());
				}),
				(this.getScissorTest = function () {
					return U;
				}),
				(this.setScissorTest = function (t) {
					Z.setScissorTest((U = t));
				}),
				(this.setOpaqueSort = function (t) {
					B = t;
				}),
				(this.setTransparentSort = function (t) {
					z = t;
				}),
				(this.getClearColor = function (t) {
					return t.copy(dt.getClearColor());
				}),
				(this.setClearColor = function () {
					dt.setClearColor.apply(dt, arguments);
				}),
				(this.getClearAlpha = function () {
					return dt.getClearAlpha();
				}),
				(this.setClearAlpha = function () {
					dt.setClearAlpha.apply(dt, arguments);
				}),
				(this.clear = function (t, e, n) {
					let i = 0;
					(void 0 === t || t) && (i |= 16384),
						(void 0 === e || e) && (i |= 256),
						(void 0 === n || n) && (i |= 1024),
						yt.clear(i);
				}),
				(this.clearColor = function () {
					this.clear(!0, !1, !1);
				}),
				(this.clearDepth = function () {
					this.clear(!1, !0, !1);
				}),
				(this.clearStencil = function () {
					this.clear(!1, !1, !0);
				}),
				(this.dispose = function () {
					e.removeEventListener("webglcontextlost", bt, !1),
						e.removeEventListener("webglcontextrestored", wt, !1),
						lt.dispose(),
						ct.dispose(),
						Q.dispose(),
						tt.dispose(),
						et.dispose(),
						rt.dispose(),
						vt.dispose(),
						st.dispose(),
						Mt.dispose(),
						Mt.removeEventListener("sessionstart", Et),
						Mt.removeEventListener("sessionend", At),
						V && (V.dispose(), (V = null)),
						Rt.stop();
				}),
				(this.renderBufferDirect = function (t, e, n, i, r, s) {
					null === e && (e = q);
					const a = r.isMesh && r.matrixWorld.determinant() < 0,
						o = (function (t, e, n, i, r) {
							!0 !== e.isScene && (e = q);
							$.resetTextureUnits();
							const s = e.fog,
								a = i.isMeshStandardMaterial ? e.environment : null,
								o =
									null === E
										? v.outputEncoding
										: !0 === E.isXRRenderTarget
										? E.texture.encoding
										: ot,
								l = (i.isMeshStandardMaterial ? et : tt).get(i.envMap || a),
								c =
									!0 === i.vertexColors &&
									!!n.attributes.color &&
									4 === n.attributes.color.itemSize,
								h = !!i.normalMap && !!n.attributes.tangent,
								u = !!n.morphAttributes.position,
								d = !!n.morphAttributes.normal,
								p = n.morphAttributes.position
									? n.morphAttributes.position.length
									: 0,
								f = i.toneMapped ? v.toneMapping : 0,
								g = Q.get(i),
								y = m.state.lights;
							if (!0 === G && (!0 === k || t !== R)) {
								const e = t === R && i.id === A;
								ht.setState(i, t, e);
							}
							let x = !1;
							i.version === g.__version
								? (g.needsLights && g.lightsStateVersion !== y.state.version) ||
								  g.outputEncoding !== o ||
								  (r.isInstancedMesh && !1 === g.instancing)
									? (x = !0)
									: r.isInstancedMesh || !0 !== g.instancing
									? r.isSkinnedMesh && !1 === g.skinning
										? (x = !0)
										: r.isSkinnedMesh || !0 !== g.skinning
										? g.envMap !== l || (i.fog && g.fog !== s)
											? (x = !0)
											: void 0 === g.numClippingPlanes ||
											  (g.numClippingPlanes === ht.numPlanes &&
													g.numIntersection === ht.numIntersection)
											? (g.vertexAlphas !== c ||
													g.vertexTangents !== h ||
													g.morphTargets !== u ||
													g.morphNormals !== d ||
													g.toneMapping !== f ||
													(!0 === Y.isWebGL2 && g.morphTargetsCount !== p)) &&
											  (x = !0)
											: (x = !0)
										: (x = !0)
									: (x = !0)
								: ((x = !0), (g.__version = i.version));
							let _ = g.currentProgram;
							!0 === x && (_ = Nt(i, e, r));
							let M = !1,
								b = !1,
								w = !1;
							const S = _.getUniforms(),
								T = g.uniforms;
							Z.useProgram(_.program) && ((M = !0), (b = !0), (w = !0));
							i.id !== A && ((A = i.id), (b = !0));
							if (M || R !== t) {
								if (
									(S.setValue(yt, "projectionMatrix", t.projectionMatrix),
									Y.logarithmicDepthBuffer &&
										S.setValue(
											yt,
											"logDepthBufFC",
											2 / (Math.log(t.far + 1) / Math.LN2)
										),
									R !== t && ((R = t), (b = !0), (w = !0)),
									i.isShaderMaterial ||
										i.isMeshPhongMaterial ||
										i.isMeshToonMaterial ||
										i.isMeshStandardMaterial ||
										i.envMap)
								) {
									const e = S.map.cameraPosition;
									void 0 !== e &&
										e.setValue(yt, j.setFromMatrixPosition(t.matrixWorld));
								}
								(i.isMeshPhongMaterial ||
									i.isMeshToonMaterial ||
									i.isMeshLambertMaterial ||
									i.isMeshBasicMaterial ||
									i.isMeshStandardMaterial ||
									i.isShaderMaterial) &&
									S.setValue(
										yt,
										"isOrthographic",
										!0 === t.isOrthographicCamera
									),
									(i.isMeshPhongMaterial ||
										i.isMeshToonMaterial ||
										i.isMeshLambertMaterial ||
										i.isMeshBasicMaterial ||
										i.isMeshStandardMaterial ||
										i.isShaderMaterial ||
										i.isShadowMaterial ||
										r.isSkinnedMesh) &&
										S.setValue(yt, "viewMatrix", t.matrixWorldInverse);
							}
							if (r.isSkinnedMesh) {
								S.setOptional(yt, r, "bindMatrix"),
									S.setOptional(yt, r, "bindMatrixInverse");
								const t = r.skeleton;
								t &&
									(Y.floatVertexTextures
										? (null === t.boneTexture && t.computeBoneTexture(),
										  S.setValue(yt, "boneTexture", t.boneTexture, $),
										  S.setValue(yt, "boneTextureSize", t.boneTextureSize))
										: S.setOptional(yt, t, "boneMatrices"));
							}
							!n ||
								(void 0 === n.morphAttributes.position &&
									void 0 === n.morphAttributes.normal) ||
								pt.update(r, n, i, _);
							(b || g.receiveShadow !== r.receiveShadow) &&
								((g.receiveShadow = r.receiveShadow),
								S.setValue(yt, "receiveShadow", r.receiveShadow));
							b &&
								(S.setValue(yt, "toneMappingExposure", v.toneMappingExposure),
								g.needsLights &&
									((C = w),
									((L = T).ambientLightColor.needsUpdate = C),
									(L.lightProbe.needsUpdate = C),
									(L.directionalLights.needsUpdate = C),
									(L.directionalLightShadows.needsUpdate = C),
									(L.pointLights.needsUpdate = C),
									(L.pointLightShadows.needsUpdate = C),
									(L.spotLights.needsUpdate = C),
									(L.spotLightShadows.needsUpdate = C),
									(L.rectAreaLights.needsUpdate = C),
									(L.hemisphereLights.needsUpdate = C)),
								s && i.fog && at.refreshFogUniforms(T, s),
								at.refreshMaterialUniforms(T, i, N, I, V),
								ps.upload(yt, g.uniformsList, T, $));
							var L, C;
							i.isShaderMaterial &&
								!0 === i.uniformsNeedUpdate &&
								(ps.upload(yt, g.uniformsList, T, $),
								(i.uniformsNeedUpdate = !1));
							i.isSpriteMaterial && S.setValue(yt, "center", r.center);
							return (
								S.setValue(yt, "modelViewMatrix", r.modelViewMatrix),
								S.setValue(yt, "normalMatrix", r.normalMatrix),
								S.setValue(yt, "modelMatrix", r.matrixWorld),
								_
							);
						})(t, e, n, i, r);
					Z.setMaterial(i, a);
					let l = n.index;
					const c = n.attributes.position;
					if (null === l) {
						if (void 0 === c || 0 === c.count) return;
					} else if (0 === l.count) return;
					let h,
						u = 1;
					!0 === i.wireframe && ((l = it.getWireframeAttribute(n)), (u = 2)),
						vt.setup(r, i, o, n, l);
					let d = mt;
					null !== l && ((h = nt.get(l)), (d = ft), d.setIndex(h));
					const p = null !== l ? l.count : c.count,
						f = n.drawRange.start * u,
						g = n.drawRange.count * u,
						y = null !== s ? s.start * u : 0,
						x = null !== s ? s.count * u : 1 / 0,
						_ = Math.max(f, y),
						M = Math.min(p, f + g, y + x) - 1,
						b = Math.max(0, M - _ + 1);
					if (0 !== b) {
						if (r.isMesh)
							!0 === i.wireframe
								? (Z.setLineWidth(i.wireframeLinewidth * X()), d.setMode(1))
								: d.setMode(4);
						else if (r.isLine) {
							let t = i.linewidth;
							void 0 === t && (t = 1),
								Z.setLineWidth(t * X()),
								r.isLineSegments
									? d.setMode(1)
									: r.isLineLoop
									? d.setMode(2)
									: d.setMode(3);
						} else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
						if (r.isInstancedMesh) d.renderInstances(_, b, r.count);
						else if (n.isInstancedBufferGeometry) {
							const t = Math.min(n.instanceCount, n._maxInstanceCount);
							d.renderInstances(_, b, t);
						} else d.render(_, b);
					}
				}),
				(this.compile = function (t, e) {
					(m = ct.get(t)),
						m.init(),
						g.push(m),
						t.traverseVisible(function (t) {
							t.isLight &&
								t.layers.test(e.layers) &&
								(m.pushLight(t), t.castShadow && m.pushShadow(t));
						}),
						m.setupLights(v.physicallyCorrectLights),
						t.traverse(function (e) {
							const n = e.material;
							if (n)
								if (Array.isArray(n))
									for (let i = 0; i < n.length; i++) {
										Nt(n[i], t, e);
									}
								else Nt(n, t, e);
						}),
						g.pop(),
						(m = null);
				});
			let Tt = null;
			function Et() {
				Rt.stop();
			}
			function At() {
				Rt.start();
			}
			const Rt = new yi();
			function Lt(t, e, n, i) {
				if (!1 === t.visible) return;
				if (t.layers.test(e.layers))
					if (t.isGroup) n = t.renderOrder;
					else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
					else if (t.isLight) m.pushLight(t), t.castShadow && m.pushShadow(t);
					else if (t.isSprite) {
						if (!t.frustumCulled || H.intersectsSprite(t)) {
							i && j.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
							const e = rt.update(t),
								r = t.material;
							r.visible && d.push(t, e, r, n, j.z, null);
						}
					} else if (
						(t.isMesh || t.isLine || t.isPoints) &&
						(t.isSkinnedMesh &&
							t.skeleton.frame !== K.render.frame &&
							(t.skeleton.update(), (t.skeleton.frame = K.render.frame)),
						!t.frustumCulled || H.intersectsObject(t))
					) {
						i && j.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
						const e = rt.update(t),
							r = t.material;
						if (Array.isArray(r)) {
							const i = e.groups;
							for (let s = 0, a = i.length; s < a; s++) {
								const a = i[s],
									o = r[a.materialIndex];
								o && o.visible && d.push(t, e, o, n, j.z, a);
							}
						} else r.visible && d.push(t, e, r, n, j.z, null);
					}
				const r = t.children;
				for (let t = 0, s = r.length; t < s; t++) Lt(r[t], e, n, i);
			}
			function Ct(t, e, n, i) {
				const r = t.opaque,
					s = t.transmissive,
					o = t.transparent;
				m.setupLightsView(n),
					s.length > 0 &&
						(function (t, e, n) {
							if (null === V) {
								const t = !0 === a && !0 === Y.isWebGL2;
								V = new (t ? Jt : qt)(1024, 1024, {
									generateMipmaps: !0,
									type: null !== gt.convert(w) ? w : x,
									minFilter: y,
									magFilter: p,
									wrapS: u,
									wrapT: u,
									useRenderToTexture: J.has(
										"WEBGL_multisampled_render_to_texture"
									),
								});
							}
							const i = v.getRenderTarget();
							v.setRenderTarget(V), v.clear();
							const r = v.toneMapping;
							(v.toneMapping = 0),
								Pt(t, e, n),
								(v.toneMapping = r),
								$.updateMultisampleRenderTarget(V),
								$.updateRenderTargetMipmap(V),
								v.setRenderTarget(i);
						})(r, e, n),
					i && Z.viewport(L.copy(i)),
					r.length > 0 && Pt(r, e, n),
					s.length > 0 && Pt(s, e, n),
					o.length > 0 && Pt(o, e, n);
			}
			function Pt(t, e, n) {
				const i = !0 === e.isScene ? e.overrideMaterial : null;
				for (let r = 0, s = t.length; r < s; r++) {
					const s = t[r],
						a = s.object,
						o = s.geometry,
						l = null === i ? s.material : i,
						c = s.group;
					a.layers.test(n.layers) && It(a, e, n, o, l, c);
				}
			}
			function It(t, e, n, i, r, s) {
				t.onBeforeRender(v, e, n, i, r, s),
					t.modelViewMatrix.multiplyMatrices(
						n.matrixWorldInverse,
						t.matrixWorld
					),
					t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
					r.onBeforeRender(v, e, n, i, t, s),
					!0 === r.transparent && 2 === r.side
						? ((r.side = 1),
						  (r.needsUpdate = !0),
						  v.renderBufferDirect(n, e, i, r, t, s),
						  (r.side = 0),
						  (r.needsUpdate = !0),
						  v.renderBufferDirect(n, e, i, r, t, s),
						  (r.side = 2))
						: v.renderBufferDirect(n, e, i, r, t, s),
					t.onAfterRender(v, e, n, i, r, s);
			}
			function Nt(t, e, n) {
				!0 !== e.isScene && (e = q);
				const i = Q.get(t),
					r = m.state.lights,
					s = m.state.shadowsArray,
					a = r.state.version,
					o = st.getParameters(t, r.state, s, e, n),
					l = st.getProgramCacheKey(o);
				let c = i.programs;
				(i.environment = t.isMeshStandardMaterial ? e.environment : null),
					(i.fog = e.fog),
					(i.envMap = (t.isMeshStandardMaterial ? et : tt).get(
						t.envMap || i.environment
					)),
					void 0 === c &&
						(t.addEventListener("dispose", St),
						(c = new Map()),
						(i.programs = c));
				let h = c.get(l);
				if (void 0 !== h) {
					if (i.currentProgram === h && i.lightsStateVersion === a)
						return Bt(t, o), h;
				} else (o.uniforms = st.getUniforms(t)), t.onBuild(n, o, v), t.onBeforeCompile(o, v), (h = st.acquireProgram(o, l)), c.set(l, h), (i.uniforms = o.uniforms);
				const u = i.uniforms;
				((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
					(u.clippingPlanes = ht.uniform),
					Bt(t, o),
					(i.needsLights = (function (t) {
						return (
							t.isMeshLambertMaterial ||
							t.isMeshToonMaterial ||
							t.isMeshPhongMaterial ||
							t.isMeshStandardMaterial ||
							t.isShadowMaterial ||
							(t.isShaderMaterial && !0 === t.lights)
						);
					})(t)),
					(i.lightsStateVersion = a),
					i.needsLights &&
						((u.ambientLightColor.value = r.state.ambient),
						(u.lightProbe.value = r.state.probe),
						(u.directionalLights.value = r.state.directional),
						(u.directionalLightShadows.value = r.state.directionalShadow),
						(u.spotLights.value = r.state.spot),
						(u.spotLightShadows.value = r.state.spotShadow),
						(u.rectAreaLights.value = r.state.rectArea),
						(u.ltc_1.value = r.state.rectAreaLTC1),
						(u.ltc_2.value = r.state.rectAreaLTC2),
						(u.pointLights.value = r.state.point),
						(u.pointLightShadows.value = r.state.pointShadow),
						(u.hemisphereLights.value = r.state.hemi),
						(u.directionalShadowMap.value = r.state.directionalShadowMap),
						(u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
						(u.spotShadowMap.value = r.state.spotShadowMap),
						(u.spotShadowMatrix.value = r.state.spotShadowMatrix),
						(u.pointShadowMap.value = r.state.pointShadowMap),
						(u.pointShadowMatrix.value = r.state.pointShadowMatrix));
				const d = h.getUniforms(),
					p = ps.seqWithValue(d.seq, u);
				return (i.currentProgram = h), (i.uniformsList = p), h;
			}
			function Bt(t, e) {
				const n = Q.get(t);
				(n.outputEncoding = e.outputEncoding),
					(n.instancing = e.instancing),
					(n.skinning = e.skinning),
					(n.morphTargets = e.morphTargets),
					(n.morphNormals = e.morphNormals),
					(n.morphTargetsCount = e.morphTargetsCount),
					(n.numClippingPlanes = e.numClippingPlanes),
					(n.numIntersection = e.numClipIntersection),
					(n.vertexAlphas = e.vertexAlphas),
					(n.vertexTangents = e.vertexTangents),
					(n.toneMapping = e.toneMapping);
			}
			Rt.setAnimationLoop(function (t) {
				Tt && Tt(t);
			}),
				"undefined" != typeof window && Rt.setContext(window),
				(this.setAnimationLoop = function (t) {
					(Tt = t), Mt.setAnimationLoop(t), null === t ? Rt.stop() : Rt.start();
				}),
				Mt.addEventListener("sessionstart", Et),
				Mt.addEventListener("sessionend", At),
				(this.render = function (t, e) {
					if (void 0 !== e && !0 !== e.isCamera)
						return void console.error(
							"THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
						);
					if (!0 === _) return;
					!0 === t.autoUpdate && t.updateMatrixWorld(),
						null === e.parent && e.updateMatrixWorld(),
						!0 === Mt.enabled &&
							!0 === Mt.isPresenting &&
							(!0 === Mt.cameraAutoUpdate && Mt.updateCamera(e),
							(e = Mt.getCamera())),
						!0 === t.isScene && t.onBeforeRender(v, t, e, E),
						(m = ct.get(t, g.length)),
						m.init(),
						g.push(m),
						W.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
						H.setFromProjectionMatrix(W),
						(k = this.localClippingEnabled),
						(G = ht.init(this.clippingPlanes, k, e)),
						(d = lt.get(t, f.length)),
						d.init(),
						f.push(d),
						Lt(t, e, 0, v.sortObjects),
						d.finish(),
						!0 === v.sortObjects && d.sort(B, z),
						!0 === G && ht.beginShadows();
					const n = m.state.shadowsArray;
					if (
						(ut.render(n, t, e),
						!0 === G && ht.endShadows(),
						!0 === this.info.autoReset && this.info.reset(),
						dt.render(d, t),
						m.setupLights(v.physicallyCorrectLights),
						e.isArrayCamera)
					) {
						const n = e.cameras;
						for (let e = 0, i = n.length; e < i; e++) {
							const i = n[e];
							Ct(d, t, i, i.viewport);
						}
					} else Ct(d, t, e);
					null !== E &&
						($.updateMultisampleRenderTarget(E), $.updateRenderTargetMipmap(E)),
						!0 === t.isScene && t.onAfterRender(v, t, e),
						Z.buffers.depth.setTest(!0),
						Z.buffers.depth.setMask(!0),
						Z.buffers.color.setMask(!0),
						Z.setPolygonOffset(!1),
						vt.resetDefaultState(),
						(A = -1),
						(R = null),
						g.pop(),
						(m = g.length > 0 ? g[g.length - 1] : null),
						f.pop(),
						(d = f.length > 0 ? f[f.length - 1] : null);
				}),
				(this.getActiveCubeFace = function () {
					return M;
				}),
				(this.getActiveMipmapLevel = function () {
					return S;
				}),
				(this.getRenderTarget = function () {
					return E;
				}),
				(this.setRenderTargetTextures = function (t, e, n) {
					(Q.get(t.texture).__webglTexture = e),
						(Q.get(t.depthTexture).__webglTexture = n);
					const i = Q.get(t);
					(i.__hasExternalTextures = !0),
						i.__hasExternalTextures &&
							((i.__autoAllocateDepthBuffer = void 0 === n),
							i.__autoAllocateDepthBuffer ||
								(t.useRenderToTexture &&
									(console.warn(
										"render-to-texture extension was disabled because an external texture was provided"
									),
									(t.useRenderToTexture = !1),
									(t.useRenderbuffer = !0))));
				}),
				(this.setRenderTargetFramebuffer = function (t, e) {
					const n = Q.get(t);
					(n.__webglFramebuffer = e),
						(n.__useDefaultFramebuffer = void 0 === e);
				}),
				(this.setRenderTarget = function (t, e = 0, n = 0) {
					(E = t), (M = e), (S = n);
					let i = !0;
					if (t) {
						const e = Q.get(t);
						void 0 !== e.__useDefaultFramebuffer
							? (Z.bindFramebuffer(36160, null), (i = !1))
							: void 0 === e.__webglFramebuffer
							? $.setupRenderTarget(t)
							: e.__hasExternalTextures &&
							  $.rebindTextures(
									t,
									Q.get(t.texture).__webglTexture,
									Q.get(t.depthTexture).__webglTexture
							  );
					}
					let r = null,
						s = !1,
						a = !1;
					if (t) {
						const n = t.texture;
						(n.isDataTexture3D || n.isDataTexture2DArray) && (a = !0);
						const i = Q.get(t).__webglFramebuffer;
						t.isWebGLCubeRenderTarget
							? ((r = i[e]), (s = !0))
							: (r = t.useRenderbuffer
									? Q.get(t).__webglMultisampledFramebuffer
									: i),
							L.copy(t.viewport),
							C.copy(t.scissor),
							(P = t.scissorTest);
					} else
						L.copy(O).multiplyScalar(N).floor(),
							C.copy(F).multiplyScalar(N).floor(),
							(P = U);
					if (
						(Z.bindFramebuffer(36160, r) &&
							Y.drawBuffers &&
							i &&
							Z.drawBuffers(t, r),
						Z.viewport(L),
						Z.scissor(C),
						Z.setScissorTest(P),
						s)
					) {
						const i = Q.get(t.texture);
						yt.framebufferTexture2D(
							36160,
							36064,
							34069 + e,
							i.__webglTexture,
							n
						);
					} else if (a) {
						const i = Q.get(t.texture),
							r = e || 0;
						yt.framebufferTextureLayer(
							36160,
							36064,
							i.__webglTexture,
							n || 0,
							r
						);
					}
					A = -1;
				}),
				(this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
					if (!t || !t.isWebGLRenderTarget)
						return void console.error(
							"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
						);
					let o = Q.get(t).__webglFramebuffer;
					if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
						Z.bindFramebuffer(36160, o);
						try {
							const a = t.texture,
								o = a.format,
								l = a.type;
							if (o !== T && gt.convert(o) !== yt.getParameter(35739))
								return void console.error(
									"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
								);
							const c =
								l === w &&
								(J.has("EXT_color_buffer_half_float") ||
									(Y.isWebGL2 && J.has("EXT_color_buffer_float")));
							if (
								!(
									l === x ||
									gt.convert(l) === yt.getParameter(35738) ||
									(l === b &&
										(Y.isWebGL2 ||
											J.has("OES_texture_float") ||
											J.has("WEBGL_color_buffer_float"))) ||
									c
								)
							)
								return void console.error(
									"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
								);
							36053 === yt.checkFramebufferStatus(36160)
								? e >= 0 &&
								  e <= t.width - i &&
								  n >= 0 &&
								  n <= t.height - r &&
								  yt.readPixels(e, n, i, r, gt.convert(o), gt.convert(l), s)
								: console.error(
										"THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
								  );
						} finally {
							const t = null !== E ? Q.get(E).__webglFramebuffer : null;
							Z.bindFramebuffer(36160, t);
						}
					}
				}),
				(this.copyFramebufferToTexture = function (t, e, n = 0) {
					if (!0 !== e.isFramebufferTexture)
						return void console.error(
							"THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
						);
					const i = Math.pow(2, -n),
						r = Math.floor(e.image.width * i),
						s = Math.floor(e.image.height * i);
					$.setTexture2D(e, 0),
						yt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s),
						Z.unbindTexture();
				}),
				(this.copyTextureToTexture = function (t, e, n, i = 0) {
					const r = e.image.width,
						s = e.image.height,
						a = gt.convert(n.format),
						o = gt.convert(n.type);
					$.setTexture2D(n, 0),
						yt.pixelStorei(37440, n.flipY),
						yt.pixelStorei(37441, n.premultiplyAlpha),
						yt.pixelStorei(3317, n.unpackAlignment),
						e.isDataTexture
							? yt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data)
							: e.isCompressedTexture
							? yt.compressedTexSubImage2D(
									3553,
									i,
									t.x,
									t.y,
									e.mipmaps[0].width,
									e.mipmaps[0].height,
									a,
									e.mipmaps[0].data
							  )
							: yt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
						0 === i && n.generateMipmaps && yt.generateMipmap(3553),
						Z.unbindTexture();
				}),
				(this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
					if (v.isWebGL1Renderer)
						return void console.warn(
							"THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
						);
					const s = t.max.x - t.min.x + 1,
						a = t.max.y - t.min.y + 1,
						o = t.max.z - t.min.z + 1,
						l = gt.convert(i.format),
						c = gt.convert(i.type);
					let h;
					if (i.isDataTexture3D) $.setTexture3D(i, 0), (h = 32879);
					else {
						if (!i.isDataTexture2DArray)
							return void console.warn(
								"THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
							);
						$.setTexture2DArray(i, 0), (h = 35866);
					}
					yt.pixelStorei(37440, i.flipY),
						yt.pixelStorei(37441, i.premultiplyAlpha),
						yt.pixelStorei(3317, i.unpackAlignment);
					const u = yt.getParameter(3314),
						d = yt.getParameter(32878),
						p = yt.getParameter(3316),
						m = yt.getParameter(3315),
						f = yt.getParameter(32877),
						g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
					yt.pixelStorei(3314, g.width),
						yt.pixelStorei(32878, g.height),
						yt.pixelStorei(3316, t.min.x),
						yt.pixelStorei(3315, t.min.y),
						yt.pixelStorei(32877, t.min.z),
						n.isDataTexture || n.isDataTexture3D
							? yt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data)
							: n.isCompressedTexture
							? (console.warn(
									"THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
							  ),
							  yt.compressedTexSubImage3D(
									h,
									r,
									e.x,
									e.y,
									e.z,
									s,
									a,
									o,
									l,
									g.data
							  ))
							: yt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g),
						yt.pixelStorei(3314, u),
						yt.pixelStorei(32878, d),
						yt.pixelStorei(3316, p),
						yt.pixelStorei(3315, m),
						yt.pixelStorei(32877, f),
						0 === r && i.generateMipmaps && yt.generateMipmap(h),
						Z.unbindTexture();
				}),
				(this.initTexture = function (t) {
					$.setTexture2D(t, 0), Z.unbindTexture();
				}),
				(this.resetState = function () {
					(M = 0), (S = 0), (E = null), Z.reset(), vt.reset();
				}),
				"undefined" != typeof __INTERNAL_THREE_DEVTOOLS__ &&
					__INTERNAL_THREE_DEVTOOLS__.dispatchEvent(
						new CustomEvent("observe", { detail: this })
					);
		}
		aa.prototype.isWebGLRenderer = !0;
		class oa extends aa {}
		oa.prototype.isWebGL1Renderer = !0;
		class la {
			constructor(t, e = 25e-5) {
				(this.name = ""), (this.color = new Ut(t)), (this.density = e);
			}
			clone() {
				return new la(this.color, this.density);
			}
			toJSON() {
				return {
					type: "FogExp2",
					color: this.color.getHex(),
					density: this.density,
				};
			}
		}
		la.prototype.isFogExp2 = !0;
		class ca {
			constructor(t, e = 1, n = 1e3) {
				(this.name = ""),
					(this.color = new Ut(t)),
					(this.near = e),
					(this.far = n);
			}
			clone() {
				return new ca(this.color, this.near, this.far);
			}
			toJSON() {
				return {
					type: "Fog",
					color: this.color.getHex(),
					near: this.near,
					far: this.far,
				};
			}
		}
		ca.prototype.isFog = !0;
		class ha extends Qe {
			constructor() {
				super(),
					(this.type = "Scene"),
					(this.background = null),
					(this.environment = null),
					(this.fog = null),
					(this.overrideMaterial = null),
					(this.autoUpdate = !0),
					"undefined" != typeof __INTERNAL_THREE_DEVTOOLS__ &&
						__INTERNAL_THREE_DEVTOOLS__.dispatchEvent(
							new CustomEvent("observe", { detail: this })
						);
			}
			copy(t, e) {
				return (
					super.copy(t, e),
					null !== t.background && (this.background = t.background.clone()),
					null !== t.environment && (this.environment = t.environment.clone()),
					null !== t.fog && (this.fog = t.fog.clone()),
					null !== t.overrideMaterial &&
						(this.overrideMaterial = t.overrideMaterial.clone()),
					(this.autoUpdate = t.autoUpdate),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					this
				);
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
			}
		}
		ha.prototype.isScene = !0;
		class ua {
			constructor(t, e) {
				(this.array = t),
					(this.stride = e),
					(this.count = void 0 !== t ? t.length / e : 0),
					(this.usage = ht),
					(this.updateRange = { offset: 0, count: -1 }),
					(this.version = 0),
					(this.uuid = xt());
			}
			onUploadCallback() {}
			set needsUpdate(t) {
				!0 === t && this.version++;
			}
			setUsage(t) {
				return (this.usage = t), this;
			}
			copy(t) {
				return (
					(this.array = new t.array.constructor(t.array)),
					(this.count = t.count),
					(this.stride = t.stride),
					(this.usage = t.usage),
					this
				);
			}
			copyAt(t, e, n) {
				(t *= this.stride), (n *= e.stride);
				for (let i = 0, r = this.stride; i < r; i++)
					this.array[t + i] = e.array[n + i];
				return this;
			}
			set(t, e = 0) {
				return this.array.set(t, e), this;
			}
			clone(t) {
				void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
					void 0 === this.array.buffer._uuid &&
						(this.array.buffer._uuid = xt()),
					void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
						(t.arrayBuffers[this.array.buffer._uuid] =
							this.array.slice(0).buffer);
				const e = new this.array.constructor(
						t.arrayBuffers[this.array.buffer._uuid]
					),
					n = new this.constructor(e, this.stride);
				return n.setUsage(this.usage), n;
			}
			onUpload(t) {
				return (this.onUploadCallback = t), this;
			}
			toJSON(t) {
				return (
					void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
					void 0 === this.array.buffer._uuid &&
						(this.array.buffer._uuid = xt()),
					void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
						(t.arrayBuffers[this.array.buffer._uuid] =
							Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
					{
						uuid: this.uuid,
						buffer: this.array.buffer._uuid,
						type: this.array.constructor.name,
						stride: this.stride,
					}
				);
			}
		}
		ua.prototype.isInterleavedBuffer = !0;
		const da = new Zt();
		class pa {
			constructor(t, e, n, i = !1) {
				(this.name = ""),
					(this.data = t),
					(this.itemSize = e),
					(this.offset = n),
					(this.normalized = !0 === i);
			}
			get count() {
				return this.data.count;
			}
			get array() {
				return this.data.array;
			}
			set needsUpdate(t) {
				this.data.needsUpdate = t;
			}
			applyMatrix4(t) {
				for (let e = 0, n = this.data.count; e < n; e++)
					(da.x = this.getX(e)),
						(da.y = this.getY(e)),
						(da.z = this.getZ(e)),
						da.applyMatrix4(t),
						this.setXYZ(e, da.x, da.y, da.z);
				return this;
			}
			applyNormalMatrix(t) {
				for (let e = 0, n = this.count; e < n; e++)
					(da.x = this.getX(e)),
						(da.y = this.getY(e)),
						(da.z = this.getZ(e)),
						da.applyNormalMatrix(t),
						this.setXYZ(e, da.x, da.y, da.z);
				return this;
			}
			transformDirection(t) {
				for (let e = 0, n = this.count; e < n; e++)
					(da.x = this.getX(e)),
						(da.y = this.getY(e)),
						(da.z = this.getZ(e)),
						da.transformDirection(t),
						this.setXYZ(e, da.x, da.y, da.z);
				return this;
			}
			setX(t, e) {
				return (this.data.array[t * this.data.stride + this.offset] = e), this;
			}
			setY(t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 1] = e), this
				);
			}
			setZ(t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 2] = e), this
				);
			}
			setW(t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 3] = e), this
				);
			}
			getX(t) {
				return this.data.array[t * this.data.stride + this.offset];
			}
			getY(t) {
				return this.data.array[t * this.data.stride + this.offset + 1];
			}
			getZ(t) {
				return this.data.array[t * this.data.stride + this.offset + 2];
			}
			getW(t) {
				return this.data.array[t * this.data.stride + this.offset + 3];
			}
			setXY(t, e, n) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					this
				);
			}
			setXYZ(t, e, n, i) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					(this.data.array[t + 2] = i),
					this
				);
			}
			setXYZW(t, e, n, i, r) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					(this.data.array[t + 2] = i),
					(this.data.array[t + 3] = r),
					this
				);
			}
			clone(t) {
				if (void 0 === t) {
					console.log(
						"THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
					);
					const t = [];
					for (let e = 0; e < this.count; e++) {
						const n = e * this.data.stride + this.offset;
						for (let e = 0; e < this.itemSize; e++)
							t.push(this.data.array[n + e]);
					}
					return new gn(
						new this.array.constructor(t),
						this.itemSize,
						this.normalized
					);
				}
				return (
					void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
					void 0 === t.interleavedBuffers[this.data.uuid] &&
						(t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
					new pa(
						t.interleavedBuffers[this.data.uuid],
						this.itemSize,
						this.offset,
						this.normalized
					)
				);
			}
			toJSON(t) {
				if (void 0 === t) {
					console.log(
						"THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
					);
					const t = [];
					for (let e = 0; e < this.count; e++) {
						const n = e * this.data.stride + this.offset;
						for (let e = 0; e < this.itemSize; e++)
							t.push(this.data.array[n + e]);
					}
					return {
						itemSize: this.itemSize,
						type: this.array.constructor.name,
						array: t,
						normalized: this.normalized,
					};
				}
				return (
					void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
					void 0 === t.interleavedBuffers[this.data.uuid] &&
						(t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
					{
						isInterleavedBufferAttribute: !0,
						itemSize: this.itemSize,
						data: this.data.uuid,
						offset: this.offset,
						normalized: this.normalized,
					}
				);
			}
		}
		pa.prototype.isInterleavedBufferAttribute = !0;
		class ma extends dn {
			constructor(t) {
				super(),
					(this.type = "SpriteMaterial"),
					(this.color = new Ut(16777215)),
					(this.map = null),
					(this.alphaMap = null),
					(this.rotation = 0),
					(this.sizeAttenuation = !0),
					(this.transparent = !0),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.rotation = t.rotation),
					(this.sizeAttenuation = t.sizeAttenuation),
					this
				);
			}
		}
		let fa;
		ma.prototype.isSpriteMaterial = !0;
		const ga = new Zt(),
			va = new Zt(),
			ya = new Zt(),
			xa = new At(),
			_a = new At(),
			Ma = new Ae(),
			ba = new Zt(),
			wa = new Zt(),
			Sa = new Zt(),
			Ta = new At(),
			Ea = new At(),
			Aa = new At();
		class Ra extends Qe {
			constructor(t) {
				if ((super(), (this.type = "Sprite"), void 0 === fa)) {
					fa = new Nn();
					const t = new Float32Array([
							-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
							0.5, 0, 0, 1,
						]),
						e = new ua(t, 5);
					fa.setIndex([0, 1, 2, 0, 2, 3]),
						fa.setAttribute("position", new pa(e, 3, 0, !1)),
						fa.setAttribute("uv", new pa(e, 2, 3, !1));
				}
				(this.geometry = fa),
					(this.material = void 0 !== t ? t : new ma()),
					(this.center = new At(0.5, 0.5));
			}
			raycast(t, e) {
				null === t.camera &&
					console.error(
						'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
					),
					va.setFromMatrixScale(this.matrixWorld),
					Ma.copy(t.camera.matrixWorld),
					this.modelViewMatrix.multiplyMatrices(
						t.camera.matrixWorldInverse,
						this.matrixWorld
					),
					ya.setFromMatrixPosition(this.modelViewMatrix),
					t.camera.isPerspectiveCamera &&
						!1 === this.material.sizeAttenuation &&
						va.multiplyScalar(-ya.z);
				const n = this.material.rotation;
				let i, r;
				0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
				const s = this.center;
				La(ba.set(-0.5, -0.5, 0), ya, s, va, i, r),
					La(wa.set(0.5, -0.5, 0), ya, s, va, i, r),
					La(Sa.set(0.5, 0.5, 0), ya, s, va, i, r),
					Ta.set(0, 0),
					Ea.set(1, 0),
					Aa.set(1, 1);
				let a = t.ray.intersectTriangle(ba, wa, Sa, !1, ga);
				if (
					null === a &&
					(La(wa.set(-0.5, 0.5, 0), ya, s, va, i, r),
					Ea.set(0, 1),
					(a = t.ray.intersectTriangle(ba, Sa, wa, !1, ga)),
					null === a)
				)
					return;
				const o = t.ray.origin.distanceTo(ga);
				o < t.near ||
					o > t.far ||
					e.push({
						distance: o,
						point: ga.clone(),
						uv: hn.getUV(ga, ba, wa, Sa, Ta, Ea, Aa, new At()),
						face: null,
						object: this,
					});
			}
			copy(t) {
				return (
					super.copy(t),
					void 0 !== t.center && this.center.copy(t.center),
					(this.material = t.material),
					this
				);
			}
		}
		function La(t, e, n, i, r, s) {
			xa.subVectors(t, n).addScalar(0.5).multiply(i),
				void 0 !== r
					? ((_a.x = s * xa.x - r * xa.y), (_a.y = r * xa.x + s * xa.y))
					: _a.copy(xa),
				t.copy(e),
				(t.x += _a.x),
				(t.y += _a.y),
				t.applyMatrix4(Ma);
		}
		Ra.prototype.isSprite = !0;
		const Ca = new Zt(),
			Pa = new Zt();
		class Da extends Qe {
			constructor() {
				super(),
					(this._currentLevel = 0),
					(this.type = "LOD"),
					Object.defineProperties(this, {
						levels: { enumerable: !0, value: [] },
						isLOD: { value: !0 },
					}),
					(this.autoUpdate = !0);
			}
			copy(t) {
				super.copy(t, !1);
				const e = t.levels;
				for (let t = 0, n = e.length; t < n; t++) {
					const n = e[t];
					this.addLevel(n.object.clone(), n.distance);
				}
				return (this.autoUpdate = t.autoUpdate), this;
			}
			addLevel(t, e = 0) {
				e = Math.abs(e);
				const n = this.levels;
				let i;
				for (i = 0; i < n.length && !(e < n[i].distance); i++);
				return n.splice(i, 0, { distance: e, object: t }), this.add(t), this;
			}
			getCurrentLevel() {
				return this._currentLevel;
			}
			getObjectForDistance(t) {
				const e = this.levels;
				if (e.length > 0) {
					let n, i;
					for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
					return e[n - 1].object;
				}
				return null;
			}
			raycast(t, e) {
				if (this.levels.length > 0) {
					Ca.setFromMatrixPosition(this.matrixWorld);
					const n = t.ray.origin.distanceTo(Ca);
					this.getObjectForDistance(n).raycast(t, e);
				}
			}
			update(t) {
				const e = this.levels;
				if (e.length > 1) {
					Ca.setFromMatrixPosition(t.matrixWorld),
						Pa.setFromMatrixPosition(this.matrixWorld);
					const n = Ca.distanceTo(Pa) / t.zoom;
					let i, r;
					for (
						e[0].object.visible = !0, i = 1, r = e.length;
						i < r && n >= e[i].distance;
						i++
					)
						(e[i - 1].object.visible = !1), (e[i].object.visible = !0);
					for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1;
				}
			}
			toJSON(t) {
				const e = super.toJSON(t);
				!1 === this.autoUpdate && (e.object.autoUpdate = !1),
					(e.object.levels = []);
				const n = this.levels;
				for (let t = 0, i = n.length; t < i; t++) {
					const i = n[t];
					e.object.levels.push({ object: i.object.uuid, distance: i.distance });
				}
				return e;
			}
		}
		const Ia = new Zt(),
			Na = new jt(),
			Ba = new jt(),
			za = new Zt(),
			Oa = new Ae();
		class Fa extends Qn {
			constructor(t, e) {
				super(t, e),
					(this.type = "SkinnedMesh"),
					(this.bindMode = "attached"),
					(this.bindMatrix = new Ae()),
					(this.bindMatrixInverse = new Ae());
			}
			copy(t) {
				return (
					super.copy(t),
					(this.bindMode = t.bindMode),
					this.bindMatrix.copy(t.bindMatrix),
					this.bindMatrixInverse.copy(t.bindMatrixInverse),
					(this.skeleton = t.skeleton),
					this
				);
			}
			bind(t, e) {
				(this.skeleton = t),
					void 0 === e &&
						(this.updateMatrixWorld(!0),
						this.skeleton.calculateInverses(),
						(e = this.matrixWorld)),
					this.bindMatrix.copy(e),
					this.bindMatrixInverse.copy(e).invert();
			}
			pose() {
				this.skeleton.pose();
			}
			normalizeSkinWeights() {
				const t = new jt(),
					e = this.geometry.attributes.skinWeight;
				for (let n = 0, i = e.count; n < i; n++) {
					(t.x = e.getX(n)),
						(t.y = e.getY(n)),
						(t.z = e.getZ(n)),
						(t.w = e.getW(n));
					const i = 1 / t.manhattanLength();
					i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
						e.setXYZW(n, t.x, t.y, t.z, t.w);
				}
			}
			updateMatrixWorld(t) {
				super.updateMatrixWorld(t),
					"attached" === this.bindMode
						? this.bindMatrixInverse.copy(this.matrixWorld).invert()
						: "detached" === this.bindMode
						? this.bindMatrixInverse.copy(this.bindMatrix).invert()
						: console.warn(
								"THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
						  );
			}
			boneTransform(t, e) {
				const n = this.skeleton,
					i = this.geometry;
				Na.fromBufferAttribute(i.attributes.skinIndex, t),
					Ba.fromBufferAttribute(i.attributes.skinWeight, t),
					Ia.copy(e).applyMatrix4(this.bindMatrix),
					e.set(0, 0, 0);
				for (let t = 0; t < 4; t++) {
					const i = Ba.getComponent(t);
					if (0 !== i) {
						const r = Na.getComponent(t);
						Oa.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
							e.addScaledVector(za.copy(Ia).applyMatrix4(Oa), i);
					}
				}
				return e.applyMatrix4(this.bindMatrixInverse);
			}
		}
		Fa.prototype.isSkinnedMesh = !0;
		class Ua extends Qe {
			constructor() {
				super(), (this.type = "Bone");
			}
		}
		Ua.prototype.isBone = !0;
		class Ha extends Vt {
			constructor(
				t = null,
				e = 1,
				n = 1,
				i,
				r,
				s,
				a,
				o,
				l = 1003,
				c = 1003,
				h,
				u
			) {
				super(null, s, a, o, l, c, i, r, h, u),
					(this.image = { data: t, width: e, height: n }),
					(this.magFilter = l),
					(this.minFilter = c),
					(this.generateMipmaps = !1),
					(this.flipY = !1),
					(this.unpackAlignment = 1);
			}
		}
		Ha.prototype.isDataTexture = !0;
		const Ga = new Ae(),
			ka = new Ae();
		class Va {
			constructor(t = [], e = []) {
				(this.uuid = xt()),
					(this.bones = t.slice(0)),
					(this.boneInverses = e),
					(this.boneMatrices = null),
					(this.boneTexture = null),
					(this.boneTextureSize = 0),
					(this.frame = -1),
					this.init();
			}
			init() {
				const t = this.bones,
					e = this.boneInverses;
				if (
					((this.boneMatrices = new Float32Array(16 * t.length)),
					0 === e.length)
				)
					this.calculateInverses();
				else if (t.length !== e.length) {
					console.warn(
						"THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
					),
						(this.boneInverses = []);
					for (let t = 0, e = this.bones.length; t < e; t++)
						this.boneInverses.push(new Ae());
				}
			}
			calculateInverses() {
				this.boneInverses.length = 0;
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = new Ae();
					this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(),
						this.boneInverses.push(e);
				}
			}
			pose() {
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e && e.matrixWorld.copy(this.boneInverses[t]).invert();
				}
				for (let t = 0, e = this.bones.length; t < e; t++) {
					const e = this.bones[t];
					e &&
						(e.parent && e.parent.isBone
							? (e.matrix.copy(e.parent.matrixWorld).invert(),
							  e.matrix.multiply(e.matrixWorld))
							: e.matrix.copy(e.matrixWorld),
						e.matrix.decompose(e.position, e.quaternion, e.scale));
				}
			}
			update() {
				const t = this.bones,
					e = this.boneInverses,
					n = this.boneMatrices,
					i = this.boneTexture;
				for (let i = 0, r = t.length; i < r; i++) {
					const r = t[i] ? t[i].matrixWorld : ka;
					Ga.multiplyMatrices(r, e[i]), Ga.toArray(n, 16 * i);
				}
				null !== i && (i.needsUpdate = !0);
			}
			clone() {
				return new Va(this.bones, this.boneInverses);
			}
			computeBoneTexture() {
				let t = Math.sqrt(4 * this.bones.length);
				(t = St(t)), (t = Math.max(t, 4));
				const e = new Float32Array(t * t * 4);
				e.set(this.boneMatrices);
				const n = new Ha(e, t, t, T, b);
				return (
					(n.needsUpdate = !0),
					(this.boneMatrices = e),
					(this.boneTexture = n),
					(this.boneTextureSize = t),
					this
				);
			}
			getBoneByName(t) {
				for (let e = 0, n = this.bones.length; e < n; e++) {
					const n = this.bones[e];
					if (n.name === t) return n;
				}
			}
			dispose() {
				null !== this.boneTexture &&
					(this.boneTexture.dispose(), (this.boneTexture = null));
			}
			fromJSON(t, e) {
				this.uuid = t.uuid;
				for (let n = 0, i = t.bones.length; n < i; n++) {
					const i = t.bones[n];
					let r = e[i];
					void 0 === r &&
						(console.warn("THREE.Skeleton: No bone found with UUID:", i),
						(r = new Ua())),
						this.bones.push(r),
						this.boneInverses.push(new Ae().fromArray(t.boneInverses[n]));
				}
				return this.init(), this;
			}
			toJSON() {
				const t = {
					metadata: {
						version: 4.5,
						type: "Skeleton",
						generator: "Skeleton.toJSON",
					},
					bones: [],
					boneInverses: [],
				};
				t.uuid = this.uuid;
				const e = this.bones,
					n = this.boneInverses;
				for (let i = 0, r = e.length; i < r; i++) {
					const r = e[i];
					t.bones.push(r.uuid);
					const s = n[i];
					t.boneInverses.push(s.toArray());
				}
				return t;
			}
		}
		class Wa extends gn {
			constructor(t, e, n, i = 1) {
				"number" == typeof n &&
					((i = n),
					(n = !1),
					console.error(
						"THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
					)),
					super(t, e, n),
					(this.meshPerAttribute = i);
			}
			copy(t) {
				return (
					super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.meshPerAttribute = this.meshPerAttribute),
					(t.isInstancedBufferAttribute = !0),
					t
				);
			}
		}
		Wa.prototype.isInstancedBufferAttribute = !0;
		const ja = new Ae(),
			qa = new Ae(),
			Xa = [],
			Ja = new Qn();
		class Ya extends Qn {
			constructor(t, e, n) {
				super(t, e),
					(this.instanceMatrix = new Wa(new Float32Array(16 * n), 16)),
					(this.instanceColor = null),
					(this.count = n),
					(this.frustumCulled = !1);
			}
			copy(t) {
				return (
					super.copy(t),
					this.instanceMatrix.copy(t.instanceMatrix),
					null !== t.instanceColor &&
						(this.instanceColor = t.instanceColor.clone()),
					(this.count = t.count),
					this
				);
			}
			getColorAt(t, e) {
				e.fromArray(this.instanceColor.array, 3 * t);
			}
			getMatrixAt(t, e) {
				e.fromArray(this.instanceMatrix.array, 16 * t);
			}
			raycast(t, e) {
				const n = this.matrixWorld,
					i = this.count;
				if (
					((Ja.geometry = this.geometry),
					(Ja.material = this.material),
					void 0 !== Ja.material)
				)
					for (let r = 0; r < i; r++) {
						this.getMatrixAt(r, ja),
							qa.multiplyMatrices(n, ja),
							(Ja.matrixWorld = qa),
							Ja.raycast(t, Xa);
						for (let t = 0, n = Xa.length; t < n; t++) {
							const n = Xa[t];
							(n.instanceId = r), (n.object = this), e.push(n);
						}
						Xa.length = 0;
					}
			}
			setColorAt(t, e) {
				null === this.instanceColor &&
					(this.instanceColor = new Wa(
						new Float32Array(3 * this.instanceMatrix.count),
						3
					)),
					e.toArray(this.instanceColor.array, 3 * t);
			}
			setMatrixAt(t, e) {
				e.toArray(this.instanceMatrix.array, 16 * t);
			}
			updateMorphTargets() {}
			dispose() {
				this.dispatchEvent({ type: "dispose" });
			}
		}
		Ya.prototype.isInstancedMesh = !0;
		class Za extends dn {
			constructor(t) {
				super(),
					(this.type = "LineBasicMaterial"),
					(this.color = new Ut(16777215)),
					(this.linewidth = 1),
					(this.linecap = "round"),
					(this.linejoin = "round"),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.linewidth = t.linewidth),
					(this.linecap = t.linecap),
					(this.linejoin = t.linejoin),
					this
				);
			}
		}
		Za.prototype.isLineBasicMaterial = !0;
		const Ka = new Zt(),
			Qa = new Zt(),
			$a = new Ae(),
			to = new Ee(),
			eo = new ye();
		class no extends Qe {
			constructor(t = new Nn(), e = new Za()) {
				super(),
					(this.type = "Line"),
					(this.geometry = t),
					(this.material = e),
					this.updateMorphTargets();
			}
			copy(t) {
				return (
					super.copy(t),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			}
			computeLineDistances() {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [0];
						for (let t = 1, i = e.count; t < i; t++)
							Ka.fromBufferAttribute(e, t - 1),
								Qa.fromBufferAttribute(e, t),
								(n[t] = n[t - 1]),
								(n[t] += Ka.distanceTo(Qa));
						t.setAttribute("lineDistance", new Tn(n, 1));
					} else
						console.warn(
							"THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
						);
				else
					t.isGeometry &&
						console.error(
							"THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				return this;
			}
			raycast(t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Line.threshold,
					s = n.drawRange;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					eo.copy(n.boundingSphere),
					eo.applyMatrix4(i),
					(eo.radius += r),
					!1 === t.ray.intersectsSphere(eo))
				)
					return;
				$a.copy(i).invert(), to.copy(t.ray).applyMatrix4($a);
				const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a,
					l = new Zt(),
					c = new Zt(),
					h = new Zt(),
					u = new Zt(),
					d = this.isLineSegments ? 2 : 1;
				if (n.isBufferGeometry) {
					const i = n.index,
						r = n.attributes.position;
					if (null !== i) {
						for (
							let n = Math.max(0, s.start),
								a = Math.min(i.count, s.start + s.count) - 1;
							n < a;
							n += d
						) {
							const s = i.getX(n),
								a = i.getX(n + 1);
							l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
							if (to.distanceSqToSegment(l, c, u, h) > o) continue;
							u.applyMatrix4(this.matrixWorld);
							const d = t.ray.origin.distanceTo(u);
							d < t.near ||
								d > t.far ||
								e.push({
									distance: d,
									point: h.clone().applyMatrix4(this.matrixWorld),
									index: n,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
					} else {
						for (
							let n = Math.max(0, s.start),
								i = Math.min(r.count, s.start + s.count) - 1;
							n < i;
							n += d
						) {
							l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
							if (to.distanceSqToSegment(l, c, u, h) > o) continue;
							u.applyMatrix4(this.matrixWorld);
							const i = t.ray.origin.distanceTo(u);
							i < t.near ||
								i > t.far ||
								e.push({
									distance: i,
									point: h.clone().applyMatrix4(this.matrixWorld),
									index: n,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
					}
				} else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
			}
			updateMorphTargets() {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			}
		}
		no.prototype.isLine = !0;
		const io = new Zt(),
			ro = new Zt();
		class so extends no {
			constructor(t, e) {
				super(t, e), (this.type = "LineSegments");
			}
			computeLineDistances() {
				const t = this.geometry;
				if (t.isBufferGeometry)
					if (null === t.index) {
						const e = t.attributes.position,
							n = [];
						for (let t = 0, i = e.count; t < i; t += 2)
							io.fromBufferAttribute(e, t),
								ro.fromBufferAttribute(e, t + 1),
								(n[t] = 0 === t ? 0 : n[t - 1]),
								(n[t + 1] = n[t] + io.distanceTo(ro));
						t.setAttribute("lineDistance", new Tn(n, 1));
					} else
						console.warn(
							"THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
						);
				else
					t.isGeometry &&
						console.error(
							"THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				return this;
			}
		}
		so.prototype.isLineSegments = !0;
		class ao extends no {
			constructor(t, e) {
				super(t, e), (this.type = "LineLoop");
			}
		}
		ao.prototype.isLineLoop = !0;
		class oo extends dn {
			constructor(t) {
				super(),
					(this.type = "PointsMaterial"),
					(this.color = new Ut(16777215)),
					(this.map = null),
					(this.alphaMap = null),
					(this.size = 1),
					(this.sizeAttenuation = !0),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.alphaMap = t.alphaMap),
					(this.size = t.size),
					(this.sizeAttenuation = t.sizeAttenuation),
					this
				);
			}
		}
		oo.prototype.isPointsMaterial = !0;
		const lo = new Ae(),
			co = new Ee(),
			ho = new ye(),
			uo = new Zt();
		class po extends Qe {
			constructor(t = new Nn(), e = new oo()) {
				super(),
					(this.type = "Points"),
					(this.geometry = t),
					(this.material = e),
					this.updateMorphTargets();
			}
			copy(t) {
				return (
					super.copy(t),
					(this.material = t.material),
					(this.geometry = t.geometry),
					this
				);
			}
			raycast(t, e) {
				const n = this.geometry,
					i = this.matrixWorld,
					r = t.params.Points.threshold,
					s = n.drawRange;
				if (
					(null === n.boundingSphere && n.computeBoundingSphere(),
					ho.copy(n.boundingSphere),
					ho.applyMatrix4(i),
					(ho.radius += r),
					!1 === t.ray.intersectsSphere(ho))
				)
					return;
				lo.copy(i).invert(), co.copy(t.ray).applyMatrix4(lo);
				const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a;
				if (n.isBufferGeometry) {
					const r = n.index,
						a = n.attributes.position;
					if (null !== r) {
						for (
							let n = Math.max(0, s.start),
								l = Math.min(r.count, s.start + s.count);
							n < l;
							n++
						) {
							const s = r.getX(n);
							uo.fromBufferAttribute(a, s), mo(uo, s, o, i, t, e, this);
						}
					} else {
						for (
							let n = Math.max(0, s.start),
								r = Math.min(a.count, s.start + s.count);
							n < r;
							n++
						)
							uo.fromBufferAttribute(a, n), mo(uo, n, o, i, t, e, this);
					}
				} else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
			}
			updateMorphTargets() {
				const t = this.geometry;
				if (t.isBufferGeometry) {
					const e = t.morphAttributes,
						n = Object.keys(e);
					if (n.length > 0) {
						const t = e[n[0]];
						if (void 0 !== t) {
							(this.morphTargetInfluences = []),
								(this.morphTargetDictionary = {});
							for (let e = 0, n = t.length; e < n; e++) {
								const n = t[e].name || String(e);
								this.morphTargetInfluences.push(0),
									(this.morphTargetDictionary[n] = e);
							}
						}
					}
				} else {
					const e = t.morphTargets;
					void 0 !== e &&
						e.length > 0 &&
						console.error(
							"THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
						);
				}
			}
		}
		function mo(t, e, n, i, r, s, a) {
			const o = co.distanceSqToPoint(t);
			if (o < n) {
				const n = new Zt();
				co.closestPointToPoint(t, n), n.applyMatrix4(i);
				const l = r.ray.origin.distanceTo(n);
				if (l < r.near || l > r.far) return;
				s.push({
					distance: l,
					distanceToRay: Math.sqrt(o),
					point: n,
					index: e,
					face: null,
					object: a,
				});
			}
		}
		po.prototype.isPoints = !0;
		class fo extends Vt {
			constructor(t, e, n, i, r, s, a, o, l) {
				super(t, e, n, i, r, s, a, o, l),
					(this.minFilter = void 0 !== s ? s : g),
					(this.magFilter = void 0 !== r ? r : g),
					(this.generateMipmaps = !1);
				const c = this;
				"requestVideoFrameCallback" in t &&
					t.requestVideoFrameCallback(function e() {
						(c.needsUpdate = !0), t.requestVideoFrameCallback(e);
					});
			}
			clone() {
				return new this.constructor(this.image).copy(this);
			}
			update() {
				const t = this.image;
				!1 === "requestVideoFrameCallback" in t &&
					t.readyState >= t.HAVE_CURRENT_DATA &&
					(this.needsUpdate = !0);
			}
		}
		fo.prototype.isVideoTexture = !0;
		class go extends Vt {
			constructor(t, e, n) {
				super({ width: t, height: e }),
					(this.format = n),
					(this.magFilter = p),
					(this.minFilter = p),
					(this.generateMipmaps = !1),
					(this.needsUpdate = !0);
			}
		}
		go.prototype.isFramebufferTexture = !0;
		class vo extends Vt {
			constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
				super(null, s, a, o, l, c, i, r, h, u),
					(this.image = { width: e, height: n }),
					(this.mipmaps = t),
					(this.flipY = !1),
					(this.generateMipmaps = !1);
			}
		}
		vo.prototype.isCompressedTexture = !0;
		class yo extends Vt {
			constructor(t, e, n, i, r, s, a, o, l) {
				super(t, e, n, i, r, s, a, o, l), (this.needsUpdate = !0);
			}
		}
		yo.prototype.isCanvasTexture = !0;
		class xo extends Nn {
			constructor(t = 1, e = 8, n = 0, i = 2 * Math.PI) {
				super(),
					(this.type = "CircleGeometry"),
					(this.parameters = {
						radius: t,
						segments: e,
						thetaStart: n,
						thetaLength: i,
					}),
					(e = Math.max(3, e));
				const r = [],
					s = [],
					a = [],
					o = [],
					l = new Zt(),
					c = new At();
				s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
				for (let r = 0, h = 3; r <= e; r++, h += 3) {
					const u = n + (r / e) * i;
					(l.x = t * Math.cos(u)),
						(l.y = t * Math.sin(u)),
						s.push(l.x, l.y, l.z),
						a.push(0, 0, 1),
						(c.x = (s[h] / t + 1) / 2),
						(c.y = (s[h + 1] / t + 1) / 2),
						o.push(c.x, c.y);
				}
				for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
				this.setIndex(r),
					this.setAttribute("position", new Tn(s, 3)),
					this.setAttribute("normal", new Tn(a, 3)),
					this.setAttribute("uv", new Tn(o, 2));
			}
			static fromJSON(t) {
				return new xo(t.radius, t.segments, t.thetaStart, t.thetaLength);
			}
		}
		class _o extends Nn {
			constructor(
				t = 1,
				e = 1,
				n = 1,
				i = 8,
				r = 1,
				s = !1,
				a = 0,
				o = 2 * Math.PI
			) {
				super(),
					(this.type = "CylinderGeometry"),
					(this.parameters = {
						radiusTop: t,
						radiusBottom: e,
						height: n,
						radialSegments: i,
						heightSegments: r,
						openEnded: s,
						thetaStart: a,
						thetaLength: o,
					});
				const l = this;
				(i = Math.floor(i)), (r = Math.floor(r));
				const c = [],
					h = [],
					u = [],
					d = [];
				let p = 0;
				const m = [],
					f = n / 2;
				let g = 0;
				function v(n) {
					const r = p,
						s = new At(),
						m = new Zt();
					let v = 0;
					const y = !0 === n ? t : e,
						x = !0 === n ? 1 : -1;
					for (let t = 1; t <= i; t++)
						h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
					const _ = p;
					for (let t = 0; t <= i; t++) {
						const e = (t / i) * o + a,
							n = Math.cos(e),
							r = Math.sin(e);
						(m.x = y * r),
							(m.y = f * x),
							(m.z = y * n),
							h.push(m.x, m.y, m.z),
							u.push(0, x, 0),
							(s.x = 0.5 * n + 0.5),
							(s.y = 0.5 * r * x + 0.5),
							d.push(s.x, s.y),
							p++;
					}
					for (let t = 0; t < i; t++) {
						const e = r + t,
							i = _ + t;
						!0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (v += 3);
					}
					l.addGroup(g, v, !0 === n ? 1 : 2), (g += v);
				}
				!(function () {
					const s = new Zt(),
						v = new Zt();
					let y = 0;
					const x = (e - t) / n;
					for (let l = 0; l <= r; l++) {
						const c = [],
							g = l / r,
							y = g * (e - t) + t;
						for (let t = 0; t <= i; t++) {
							const e = t / i,
								r = e * o + a,
								l = Math.sin(r),
								m = Math.cos(r);
							(v.x = y * l),
								(v.y = -g * n + f),
								(v.z = y * m),
								h.push(v.x, v.y, v.z),
								s.set(l, x, m).normalize(),
								u.push(s.x, s.y, s.z),
								d.push(e, 1 - g),
								c.push(p++);
						}
						m.push(c);
					}
					for (let t = 0; t < i; t++)
						for (let e = 0; e < r; e++) {
							const n = m[e][t],
								i = m[e + 1][t],
								r = m[e + 1][t + 1],
								s = m[e][t + 1];
							c.push(n, i, s), c.push(i, r, s), (y += 6);
						}
					l.addGroup(g, y, 0), (g += y);
				})(),
					!1 === s && (t > 0 && v(!0), e > 0 && v(!1)),
					this.setIndex(c),
					this.setAttribute("position", new Tn(h, 3)),
					this.setAttribute("normal", new Tn(u, 3)),
					this.setAttribute("uv", new Tn(d, 2));
			}
			static fromJSON(t) {
				return new _o(
					t.radiusTop,
					t.radiusBottom,
					t.height,
					t.radialSegments,
					t.heightSegments,
					t.openEnded,
					t.thetaStart,
					t.thetaLength
				);
			}
		}
		class Mo extends _o {
			constructor(t = 1, e = 1, n = 8, i = 1, r = !1, s = 0, a = 2 * Math.PI) {
				super(0, t, e, n, i, r, s, a),
					(this.type = "ConeGeometry"),
					(this.parameters = {
						radius: t,
						height: e,
						radialSegments: n,
						heightSegments: i,
						openEnded: r,
						thetaStart: s,
						thetaLength: a,
					});
			}
			static fromJSON(t) {
				return new Mo(
					t.radius,
					t.height,
					t.radialSegments,
					t.heightSegments,
					t.openEnded,
					t.thetaStart,
					t.thetaLength
				);
			}
		}
		class bo extends Nn {
			constructor(t = [], e = [], n = 1, i = 0) {
				super(),
					(this.type = "PolyhedronGeometry"),
					(this.parameters = { vertices: t, indices: e, radius: n, detail: i });
				const r = [],
					s = [];
				function a(t, e, n, i) {
					const r = i + 1,
						s = [];
					for (let i = 0; i <= r; i++) {
						s[i] = [];
						const a = t.clone().lerp(n, i / r),
							o = e.clone().lerp(n, i / r),
							l = r - i;
						for (let t = 0; t <= l; t++)
							s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l);
					}
					for (let t = 0; t < r; t++)
						for (let e = 0; e < 2 * (r - t) - 1; e++) {
							const n = Math.floor(e / 2);
							e % 2 == 0
								? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n]))
								: (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]));
						}
				}
				function o(t) {
					r.push(t.x, t.y, t.z);
				}
				function l(e, n) {
					const i = 3 * e;
					(n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
				}
				function c(t, e, n, i) {
					i < 0 && 1 === t.x && (s[e] = t.x - 1),
						0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + 0.5);
				}
				function h(t) {
					return Math.atan2(t.z, -t.x);
				}
				!(function (t) {
					const n = new Zt(),
						i = new Zt(),
						r = new Zt();
					for (let s = 0; s < e.length; s += 3)
						l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t);
				})(i),
					(function (t) {
						const e = new Zt();
						for (let n = 0; n < r.length; n += 3)
							(e.x = r[n + 0]),
								(e.y = r[n + 1]),
								(e.z = r[n + 2]),
								e.normalize().multiplyScalar(t),
								(r[n + 0] = e.x),
								(r[n + 1] = e.y),
								(r[n + 2] = e.z);
					})(n),
					(function () {
						const t = new Zt();
						for (let n = 0; n < r.length; n += 3) {
							(t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
							const i = h(t) / 2 / Math.PI + 0.5,
								a =
									((e = t),
									Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
										0.5);
							s.push(i, 1 - a);
						}
						var e;
						(function () {
							const t = new Zt(),
								e = new Zt(),
								n = new Zt(),
								i = new Zt(),
								a = new At(),
								o = new At(),
								l = new At();
							for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
								t.set(r[u + 0], r[u + 1], r[u + 2]),
									e.set(r[u + 3], r[u + 4], r[u + 5]),
									n.set(r[u + 6], r[u + 7], r[u + 8]),
									a.set(s[d + 0], s[d + 1]),
									o.set(s[d + 2], s[d + 3]),
									l.set(s[d + 4], s[d + 5]),
									i.copy(t).add(e).add(n).divideScalar(3);
								const p = h(i);
								c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
							}
						})(),
							(function () {
								for (let t = 0; t < s.length; t += 6) {
									const e = s[t + 0],
										n = s[t + 2],
										i = s[t + 4],
										r = Math.max(e, n, i),
										a = Math.min(e, n, i);
									r > 0.9 &&
										a < 0.1 &&
										(e < 0.2 && (s[t + 0] += 1),
										n < 0.2 && (s[t + 2] += 1),
										i < 0.2 && (s[t + 4] += 1));
								}
							})();
					})(),
					this.setAttribute("position", new Tn(r, 3)),
					this.setAttribute("normal", new Tn(r.slice(), 3)),
					this.setAttribute("uv", new Tn(s, 2)),
					0 === i ? this.computeVertexNormals() : this.normalizeNormals();
			}
			static fromJSON(t) {
				return new bo(t.vertices, t.indices, t.radius, t.details);
			}
		}
		class wo extends bo {
			constructor(t = 1, e = 0) {
				const n = (1 + Math.sqrt(5)) / 2,
					i = 1 / n;
				super(
					[
						-1,
						-1,
						-1,
						-1,
						-1,
						1,
						-1,
						1,
						-1,
						-1,
						1,
						1,
						1,
						-1,
						-1,
						1,
						-1,
						1,
						1,
						1,
						-1,
						1,
						1,
						1,
						0,
						-i,
						-n,
						0,
						-i,
						n,
						0,
						i,
						-n,
						0,
						i,
						n,
						-i,
						-n,
						0,
						-i,
						n,
						0,
						i,
						-n,
						0,
						i,
						n,
						0,
						-n,
						0,
						-i,
						n,
						0,
						-i,
						-n,
						0,
						i,
						n,
						0,
						i,
					],
					[
						3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
						8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0,
						1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18,
						3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4,
						0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4,
						17, 1, 12, 14, 1, 14, 5, 1, 5, 9,
					],
					t,
					e
				),
					(this.type = "DodecahedronGeometry"),
					(this.parameters = { radius: t, detail: e });
			}
			static fromJSON(t) {
				return new wo(t.radius, t.detail);
			}
		}
		const So = new Zt(),
			To = new Zt(),
			Eo = new Zt(),
			Ao = new hn();
		class Ro extends Nn {
			constructor(t = null, e = 1) {
				if (
					(super(),
					(this.type = "EdgesGeometry"),
					(this.parameters = { geometry: t, thresholdAngle: e }),
					null !== t)
				) {
					const n = 4,
						i = Math.pow(10, n),
						r = Math.cos(vt * e),
						s = t.getIndex(),
						a = t.getAttribute("position"),
						o = s ? s.count : a.count,
						l = [0, 0, 0],
						c = ["a", "b", "c"],
						h = new Array(3),
						u = {},
						d = [];
					for (let t = 0; t < o; t += 3) {
						s
							? ((l[0] = s.getX(t)),
							  (l[1] = s.getX(t + 1)),
							  (l[2] = s.getX(t + 2)))
							: ((l[0] = t), (l[1] = t + 1), (l[2] = t + 2));
						const { a: e, b: n, c: o } = Ao;
						if (
							(e.fromBufferAttribute(a, l[0]),
							n.fromBufferAttribute(a, l[1]),
							o.fromBufferAttribute(a, l[2]),
							Ao.getNormal(Eo),
							(h[0] = `${Math.round(e.x * i)},${Math.round(
								e.y * i
							)},${Math.round(e.z * i)}`),
							(h[1] = `${Math.round(n.x * i)},${Math.round(
								n.y * i
							)},${Math.round(n.z * i)}`),
							(h[2] = `${Math.round(o.x * i)},${Math.round(
								o.y * i
							)},${Math.round(o.z * i)}`),
							h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0])
						)
							for (let t = 0; t < 3; t++) {
								const e = (t + 1) % 3,
									n = h[t],
									i = h[e],
									s = Ao[c[t]],
									a = Ao[c[e]],
									o = `${n}_${i}`,
									p = `${i}_${n}`;
								p in u && u[p]
									? (Eo.dot(u[p].normal) <= r &&
											(d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)),
									  (u[p] = null))
									: o in u ||
									  (u[o] = { index0: l[t], index1: l[e], normal: Eo.clone() });
							}
					}
					for (const t in u)
						if (u[t]) {
							const { index0: e, index1: n } = u[t];
							So.fromBufferAttribute(a, e),
								To.fromBufferAttribute(a, n),
								d.push(So.x, So.y, So.z),
								d.push(To.x, To.y, To.z);
						}
					this.setAttribute("position", new Tn(d, 3));
				}
			}
		}
		class Lo {
			constructor() {
				(this.type = "Curve"), (this.arcLengthDivisions = 200);
			}
			getPoint() {
				return console.warn("THREE.Curve: .getPoint() not implemented."), null;
			}
			getPointAt(t, e) {
				const n = this.getUtoTmapping(t);
				return this.getPoint(n, e);
			}
			getPoints(t = 5) {
				const e = [];
				for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
				return e;
			}
			getSpacedPoints(t = 5) {
				const e = [];
				for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
				return e;
			}
			getLength() {
				const t = this.getLengths();
				return t[t.length - 1];
			}
			getLengths(t = this.arcLengthDivisions) {
				if (
					this.cacheArcLengths &&
					this.cacheArcLengths.length === t + 1 &&
					!this.needsUpdate
				)
					return this.cacheArcLengths;
				this.needsUpdate = !1;
				const e = [];
				let n,
					i = this.getPoint(0),
					r = 0;
				e.push(0);
				for (let s = 1; s <= t; s++)
					(n = this.getPoint(s / t)),
						(r += n.distanceTo(i)),
						e.push(r),
						(i = n);
				return (this.cacheArcLengths = e), e;
			}
			updateArcLengths() {
				(this.needsUpdate = !0), this.getLengths();
			}
			getUtoTmapping(t, e) {
				const n = this.getLengths();
				let i = 0;
				const r = n.length;
				let s;
				s = e || t * n[r - 1];
				let a,
					o = 0,
					l = r - 1;
				for (; o <= l; )
					if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0))
						o = i + 1;
					else {
						if (!(a > 0)) {
							l = i;
							break;
						}
						l = i - 1;
					}
				if (((i = l), n[i] === s)) return i / (r - 1);
				const c = n[i];
				return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
			}
			getTangent(t, e) {
				const n = 1e-4;
				let i = t - n,
					r = t + n;
				i < 0 && (i = 0), r > 1 && (r = 1);
				const s = this.getPoint(i),
					a = this.getPoint(r),
					o = e || (s.isVector2 ? new At() : new Zt());
				return o.copy(a).sub(s).normalize(), o;
			}
			getTangentAt(t, e) {
				const n = this.getUtoTmapping(t);
				return this.getTangent(n, e);
			}
			computeFrenetFrames(t, e) {
				const n = new Zt(),
					i = [],
					r = [],
					s = [],
					a = new Zt(),
					o = new Ae();
				for (let e = 0; e <= t; e++) {
					const n = e / t;
					i[e] = this.getTangentAt(n, new Zt());
				}
				(r[0] = new Zt()), (s[0] = new Zt());
				let l = Number.MAX_VALUE;
				const c = Math.abs(i[0].x),
					h = Math.abs(i[0].y),
					u = Math.abs(i[0].z);
				c <= l && ((l = c), n.set(1, 0, 0)),
					h <= l && ((l = h), n.set(0, 1, 0)),
					u <= l && n.set(0, 0, 1),
					a.crossVectors(i[0], n).normalize(),
					r[0].crossVectors(i[0], a),
					s[0].crossVectors(i[0], r[0]);
				for (let e = 1; e <= t; e++) {
					if (
						((r[e] = r[e - 1].clone()),
						(s[e] = s[e - 1].clone()),
						a.crossVectors(i[e - 1], i[e]),
						a.length() > Number.EPSILON)
					) {
						a.normalize();
						const t = Math.acos(_t(i[e - 1].dot(i[e]), -1, 1));
						r[e].applyMatrix4(o.makeRotationAxis(a, t));
					}
					s[e].crossVectors(i[e], r[e]);
				}
				if (!0 === e) {
					let e = Math.acos(_t(r[0].dot(r[t]), -1, 1));
					(e /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
					for (let n = 1; n <= t; n++)
						r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
							s[n].crossVectors(i[n], r[n]);
				}
				return { tangents: i, normals: r, binormals: s };
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return (this.arcLengthDivisions = t.arcLengthDivisions), this;
			}
			toJSON() {
				const t = {
					metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
				};
				return (
					(t.arcLengthDivisions = this.arcLengthDivisions),
					(t.type = this.type),
					t
				);
			}
			fromJSON(t) {
				return (this.arcLengthDivisions = t.arcLengthDivisions), this;
			}
		}
		class Co extends Lo {
			constructor(
				t = 0,
				e = 0,
				n = 1,
				i = 1,
				r = 0,
				s = 2 * Math.PI,
				a = !1,
				o = 0
			) {
				super(),
					(this.type = "EllipseCurve"),
					(this.aX = t),
					(this.aY = e),
					(this.xRadius = n),
					(this.yRadius = i),
					(this.aStartAngle = r),
					(this.aEndAngle = s),
					(this.aClockwise = a),
					(this.aRotation = o);
			}
			getPoint(t, e) {
				const n = e || new At(),
					i = 2 * Math.PI;
				let r = this.aEndAngle - this.aStartAngle;
				const s = Math.abs(r) < Number.EPSILON;
				for (; r < 0; ) r += i;
				for (; r > i; ) r -= i;
				r < Number.EPSILON && (r = s ? 0 : i),
					!0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
				const a = this.aStartAngle + t * r;
				let o = this.aX + this.xRadius * Math.cos(a),
					l = this.aY + this.yRadius * Math.sin(a);
				if (0 !== this.aRotation) {
					const t = Math.cos(this.aRotation),
						e = Math.sin(this.aRotation),
						n = o - this.aX,
						i = l - this.aY;
					(o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
				}
				return n.set(o, l);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.aX = this.aX),
					(t.aY = this.aY),
					(t.xRadius = this.xRadius),
					(t.yRadius = this.yRadius),
					(t.aStartAngle = this.aStartAngle),
					(t.aEndAngle = this.aEndAngle),
					(t.aClockwise = this.aClockwise),
					(t.aRotation = this.aRotation),
					t
				);
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					(this.aX = t.aX),
					(this.aY = t.aY),
					(this.xRadius = t.xRadius),
					(this.yRadius = t.yRadius),
					(this.aStartAngle = t.aStartAngle),
					(this.aEndAngle = t.aEndAngle),
					(this.aClockwise = t.aClockwise),
					(this.aRotation = t.aRotation),
					this
				);
			}
		}
		Co.prototype.isEllipseCurve = !0;
		class Po extends Co {
			constructor(t, e, n, i, r, s) {
				super(t, e, n, n, i, r, s), (this.type = "ArcCurve");
			}
		}
		function Do() {
			let t = 0,
				e = 0,
				n = 0,
				i = 0;
			function r(r, s, a, o) {
				(t = r),
					(e = a),
					(n = -3 * r + 3 * s - 2 * a - o),
					(i = 2 * r - 2 * s + a + o);
			}
			return {
				initCatmullRom: function (t, e, n, i, s) {
					r(e, n, s * (n - t), s * (i - e));
				},
				initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
					let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
						c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
					(l *= a), (c *= a), r(e, n, l, c);
				},
				calc: function (r) {
					const s = r * r;
					return t + e * r + n * s + i * (s * r);
				},
			};
		}
		Po.prototype.isArcCurve = !0;
		const Io = new Zt(),
			No = new Do(),
			Bo = new Do(),
			zo = new Do();
		class Oo extends Lo {
			constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
				super(),
					(this.type = "CatmullRomCurve3"),
					(this.points = t),
					(this.closed = e),
					(this.curveType = n),
					(this.tension = i);
			}
			getPoint(t, e = new Zt()) {
				const n = e,
					i = this.points,
					r = i.length,
					s = (r - (this.closed ? 0 : 1)) * t;
				let a,
					o,
					l = Math.floor(s),
					c = s - l;
				this.closed
					? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
					: 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
					this.closed || l > 0
						? (a = i[(l - 1) % r])
						: (Io.subVectors(i[0], i[1]).add(i[0]), (a = Io));
				const h = i[l % r],
					u = i[(l + 1) % r];
				if (
					(this.closed || l + 2 < r
						? (o = i[(l + 2) % r])
						: (Io.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = Io)),
					"centripetal" === this.curveType || "chordal" === this.curveType)
				) {
					const t = "chordal" === this.curveType ? 0.5 : 0.25;
					let e = Math.pow(a.distanceToSquared(h), t),
						n = Math.pow(h.distanceToSquared(u), t),
						i = Math.pow(u.distanceToSquared(o), t);
					n < 1e-4 && (n = 1),
						e < 1e-4 && (e = n),
						i < 1e-4 && (i = n),
						No.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
						Bo.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
						zo.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
				} else "catmullrom" === this.curveType && (No.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Bo.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), zo.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
				return n.set(No.calc(c), Bo.calc(c), zo.calc(c)), n;
			}
			copy(t) {
				super.copy(t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return (
					(this.closed = t.closed),
					(this.curveType = t.curveType),
					(this.tension = t.tension),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return (
					(t.closed = this.closed),
					(t.curveType = this.curveType),
					(t.tension = this.tension),
					t
				);
			}
			fromJSON(t) {
				super.fromJSON(t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new Zt().fromArray(n));
				}
				return (
					(this.closed = t.closed),
					(this.curveType = t.curveType),
					(this.tension = t.tension),
					this
				);
			}
		}
		function Fo(t, e, n, i, r) {
			const s = 0.5 * (i - e),
				a = 0.5 * (r - n),
				o = t * t;
			return (
				(2 * n - 2 * i + s + a) * (t * o) +
				(-3 * n + 3 * i - 2 * s - a) * o +
				s * t +
				n
			);
		}
		function Uo(t, e, n, i) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * e;
				})(t, e) +
				(function (t, e) {
					return 2 * (1 - t) * t * e;
				})(t, n) +
				(function (t, e) {
					return t * t * e;
				})(t, i)
			);
		}
		function Ho(t, e, n, i, r) {
			return (
				(function (t, e) {
					const n = 1 - t;
					return n * n * n * e;
				})(t, e) +
				(function (t, e) {
					const n = 1 - t;
					return 3 * n * n * t * e;
				})(t, n) +
				(function (t, e) {
					return 3 * (1 - t) * t * t * e;
				})(t, i) +
				(function (t, e) {
					return t * t * t * e;
				})(t, r)
			);
		}
		Oo.prototype.isCatmullRomCurve3 = !0;
		class Go extends Lo {
			constructor(t = new At(), e = new At(), n = new At(), i = new At()) {
				super(),
					(this.type = "CubicBezierCurve"),
					(this.v0 = t),
					(this.v1 = e),
					(this.v2 = n),
					(this.v3 = i);
			}
			getPoint(t, e = new At()) {
				const n = e,
					i = this.v0,
					r = this.v1,
					s = this.v2,
					a = this.v3;
				return n.set(Ho(t, i.x, r.x, s.x, a.x), Ho(t, i.y, r.y, s.y, a.y)), n;
			}
			copy(t) {
				return (
					super.copy(t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this.v3.copy(t.v3),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					(t.v3 = this.v3.toArray()),
					t
				);
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this.v3.fromArray(t.v3),
					this
				);
			}
		}
		Go.prototype.isCubicBezierCurve = !0;
		class ko extends Lo {
			constructor(t = new Zt(), e = new Zt(), n = new Zt(), i = new Zt()) {
				super(),
					(this.type = "CubicBezierCurve3"),
					(this.v0 = t),
					(this.v1 = e),
					(this.v2 = n),
					(this.v3 = i);
			}
			getPoint(t, e = new Zt()) {
				const n = e,
					i = this.v0,
					r = this.v1,
					s = this.v2,
					a = this.v3;
				return (
					n.set(
						Ho(t, i.x, r.x, s.x, a.x),
						Ho(t, i.y, r.y, s.y, a.y),
						Ho(t, i.z, r.z, s.z, a.z)
					),
					n
				);
			}
			copy(t) {
				return (
					super.copy(t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this.v3.copy(t.v3),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					(t.v3 = this.v3.toArray()),
					t
				);
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this.v3.fromArray(t.v3),
					this
				);
			}
		}
		ko.prototype.isCubicBezierCurve3 = !0;
		class Vo extends Lo {
			constructor(t = new At(), e = new At()) {
				super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
			}
			getPoint(t, e = new At()) {
				const n = e;
				return (
					1 === t
						? n.copy(this.v2)
						: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
					n
				);
			}
			getPointAt(t, e) {
				return this.getPoint(t, e);
			}
			getTangent(t, e) {
				const n = e || new At();
				return n.copy(this.v2).sub(this.v1).normalize(), n;
			}
			copy(t) {
				return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}
			toJSON() {
				const t = super.toJSON();
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}
		}
		Vo.prototype.isLineCurve = !0;
		class Wo extends Lo {
			constructor(t = new Zt(), e = new Zt()) {
				super(),
					(this.type = "LineCurve3"),
					(this.isLineCurve3 = !0),
					(this.v1 = t),
					(this.v2 = e);
			}
			getPoint(t, e = new Zt()) {
				const n = e;
				return (
					1 === t
						? n.copy(this.v2)
						: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
					n
				);
			}
			getPointAt(t, e) {
				return this.getPoint(t, e);
			}
			copy(t) {
				return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
			}
			toJSON() {
				const t = super.toJSON();
				return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}
		}
		class jo extends Lo {
			constructor(t = new At(), e = new At(), n = new At()) {
				super(),
					(this.type = "QuadraticBezierCurve"),
					(this.v0 = t),
					(this.v1 = e),
					(this.v2 = n);
			}
			getPoint(t, e = new At()) {
				const n = e,
					i = this.v0,
					r = this.v1,
					s = this.v2;
				return n.set(Uo(t, i.x, r.x, s.x), Uo(t, i.y, r.y, s.y)), n;
			}
			copy(t) {
				return (
					super.copy(t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					t
				);
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}
		}
		jo.prototype.isQuadraticBezierCurve = !0;
		class qo extends Lo {
			constructor(t = new Zt(), e = new Zt(), n = new Zt()) {
				super(),
					(this.type = "QuadraticBezierCurve3"),
					(this.v0 = t),
					(this.v1 = e),
					(this.v2 = n);
			}
			getPoint(t, e = new Zt()) {
				const n = e,
					i = this.v0,
					r = this.v1,
					s = this.v2;
				return (
					n.set(
						Uo(t, i.x, r.x, s.x),
						Uo(t, i.y, r.y, s.y),
						Uo(t, i.z, r.z, s.z)
					),
					n
				);
			}
			copy(t) {
				return (
					super.copy(t),
					this.v0.copy(t.v0),
					this.v1.copy(t.v1),
					this.v2.copy(t.v2),
					this
				);
			}
			toJSON() {
				const t = super.toJSON();
				return (
					(t.v0 = this.v0.toArray()),
					(t.v1 = this.v1.toArray()),
					(t.v2 = this.v2.toArray()),
					t
				);
			}
			fromJSON(t) {
				return (
					super.fromJSON(t),
					this.v0.fromArray(t.v0),
					this.v1.fromArray(t.v1),
					this.v2.fromArray(t.v2),
					this
				);
			}
		}
		qo.prototype.isQuadraticBezierCurve3 = !0;
		class Xo extends Lo {
			constructor(t = []) {
				super(), (this.type = "SplineCurve"), (this.points = t);
			}
			getPoint(t, e = new At()) {
				const n = e,
					i = this.points,
					r = (i.length - 1) * t,
					s = Math.floor(r),
					a = r - s,
					o = i[0 === s ? s : s - 1],
					l = i[s],
					c = i[s > i.length - 2 ? i.length - 1 : s + 1],
					h = i[s > i.length - 3 ? i.length - 1 : s + 2];
				return n.set(Fo(a, o.x, l.x, c.x, h.x), Fo(a, o.y, l.y, c.y, h.y)), n;
			}
			copy(t) {
				super.copy(t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(n.clone());
				}
				return this;
			}
			toJSON() {
				const t = super.toJSON();
				t.points = [];
				for (let e = 0, n = this.points.length; e < n; e++) {
					const n = this.points[e];
					t.points.push(n.toArray());
				}
				return t;
			}
			fromJSON(t) {
				super.fromJSON(t), (this.points = []);
				for (let e = 0, n = t.points.length; e < n; e++) {
					const n = t.points[e];
					this.points.push(new At().fromArray(n));
				}
				return this;
			}
		}
		Xo.prototype.isSplineCurve = !0;
		var Jo = Object.freeze({
			__proto__: null,
			ArcCurve: Po,
			CatmullRomCurve3: Oo,
			CubicBezierCurve: Go,
			CubicBezierCurve3: ko,
			EllipseCurve: Co,
			LineCurve: Vo,
			LineCurve3: Wo,
			QuadraticBezierCurve: jo,
			QuadraticBezierCurve3: qo,
			SplineCurve: Xo,
		});
		class Yo extends Lo {
			constructor() {
				super(),
					(this.type = "CurvePath"),
					(this.curves = []),
					(this.autoClose = !1);
			}
			add(t) {
				this.curves.push(t);
			}
			closePath() {
				const t = this.curves[0].getPoint(0),
					e = this.curves[this.curves.length - 1].getPoint(1);
				t.equals(e) || this.curves.push(new Vo(e, t));
			}
			getPoint(t, e) {
				const n = t * this.getLength(),
					i = this.getCurveLengths();
				let r = 0;
				for (; r < i.length; ) {
					if (i[r] >= n) {
						const t = i[r] - n,
							s = this.curves[r],
							a = s.getLength(),
							o = 0 === a ? 0 : 1 - t / a;
						return s.getPointAt(o, e);
					}
					r++;
				}
				return null;
			}
			getLength() {
				const t = this.getCurveLengths();
				return t[t.length - 1];
			}
			updateArcLengths() {
				(this.needsUpdate = !0),
					(this.cacheLengths = null),
					this.getCurveLengths();
			}
			getCurveLengths() {
				if (
					this.cacheLengths &&
					this.cacheLengths.length === this.curves.length
				)
					return this.cacheLengths;
				const t = [];
				let e = 0;
				for (let n = 0, i = this.curves.length; n < i; n++)
					(e += this.curves[n].getLength()), t.push(e);
				return (this.cacheLengths = t), t;
			}
			getSpacedPoints(t = 40) {
				const e = [];
				for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
				return this.autoClose && e.push(e[0]), e;
			}
			getPoints(t = 12) {
				const e = [];
				let n;
				for (let i = 0, r = this.curves; i < r.length; i++) {
					const s = r[i],
						a =
							s && s.isEllipseCurve
								? 2 * t
								: s && (s.isLineCurve || s.isLineCurve3)
								? 1
								: s && s.isSplineCurve
								? t * s.points.length
								: t,
						o = s.getPoints(a);
					for (let t = 0; t < o.length; t++) {
						const i = o[t];
						(n && n.equals(i)) || (e.push(i), (n = i));
					}
				}
				return (
					this.autoClose &&
						e.length > 1 &&
						!e[e.length - 1].equals(e[0]) &&
						e.push(e[0]),
					e
				);
			}
			copy(t) {
				super.copy(t), (this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(n.clone());
				}
				return (this.autoClose = t.autoClose), this;
			}
			toJSON() {
				const t = super.toJSON();
				(t.autoClose = this.autoClose), (t.curves = []);
				for (let e = 0, n = this.curves.length; e < n; e++) {
					const n = this.curves[e];
					t.curves.push(n.toJSON());
				}
				return t;
			}
			fromJSON(t) {
				super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
				for (let e = 0, n = t.curves.length; e < n; e++) {
					const n = t.curves[e];
					this.curves.push(new Jo[n.type]().fromJSON(n));
				}
				return this;
			}
		}
		class Zo extends Yo {
			constructor(t) {
				super(),
					(this.type = "Path"),
					(this.currentPoint = new At()),
					t && this.setFromPoints(t);
			}
			setFromPoints(t) {
				this.moveTo(t[0].x, t[0].y);
				for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
				return this;
			}
			moveTo(t, e) {
				return this.currentPoint.set(t, e), this;
			}
			lineTo(t, e) {
				const n = new Vo(this.currentPoint.clone(), new At(t, e));
				return this.curves.push(n), this.currentPoint.set(t, e), this;
			}
			quadraticCurveTo(t, e, n, i) {
				const r = new jo(this.currentPoint.clone(), new At(t, e), new At(n, i));
				return this.curves.push(r), this.currentPoint.set(n, i), this;
			}
			bezierCurveTo(t, e, n, i, r, s) {
				const a = new Go(
					this.currentPoint.clone(),
					new At(t, e),
					new At(n, i),
					new At(r, s)
				);
				return this.curves.push(a), this.currentPoint.set(r, s), this;
			}
			splineThru(t) {
				const e = [this.currentPoint.clone()].concat(t),
					n = new Xo(e);
				return (
					this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
				);
			}
			arc(t, e, n, i, r, s) {
				const a = this.currentPoint.x,
					o = this.currentPoint.y;
				return this.absarc(t + a, e + o, n, i, r, s), this;
			}
			absarc(t, e, n, i, r, s) {
				return this.absellipse(t, e, n, n, i, r, s), this;
			}
			ellipse(t, e, n, i, r, s, a, o) {
				const l = this.currentPoint.x,
					c = this.currentPoint.y;
				return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
			}
			absellipse(t, e, n, i, r, s, a, o) {
				const l = new Co(t, e, n, i, r, s, a, o);
				if (this.curves.length > 0) {
					const t = l.getPoint(0);
					t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
				}
				this.curves.push(l);
				const c = l.getPoint(1);
				return this.currentPoint.copy(c), this;
			}
			copy(t) {
				return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
			}
			toJSON() {
				const t = super.toJSON();
				return (t.currentPoint = this.currentPoint.toArray()), t;
			}
			fromJSON(t) {
				return (
					super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
				);
			}
		}
		class Ko extends Zo {
			constructor(t) {
				super(t), (this.uuid = xt()), (this.type = "Shape"), (this.holes = []);
			}
			getPointsHoles(t) {
				const e = [];
				for (let n = 0, i = this.holes.length; n < i; n++)
					e[n] = this.holes[n].getPoints(t);
				return e;
			}
			extractPoints(t) {
				return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
			}
			copy(t) {
				super.copy(t), (this.holes = []);
				for (let e = 0, n = t.holes.length; e < n; e++) {
					const n = t.holes[e];
					this.holes.push(n.clone());
				}
				return this;
			}
			toJSON() {
				const t = super.toJSON();
				(t.uuid = this.uuid), (t.holes = []);
				for (let e = 0, n = this.holes.length; e < n; e++) {
					const n = this.holes[e];
					t.holes.push(n.toJSON());
				}
				return t;
			}
			fromJSON(t) {
				super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
				for (let e = 0, n = t.holes.length; e < n; e++) {
					const n = t.holes[e];
					this.holes.push(new Zo().fromJSON(n));
				}
				return this;
			}
		}
		const Qo = function (t, e, n = 2) {
			const i = e && e.length,
				r = i ? e[0] * n : t.length;
			let s = $o(t, 0, r, n, !0);
			const a = [];
			if (!s || s.next === s.prev) return a;
			let o, l, c, h, u, d, p;
			if (
				(i &&
					(s = (function (t, e, n, i) {
						const r = [];
						let s, a, o, l, c;
						for (s = 0, a = e.length; s < a; s++)
							(o = e[s] * i),
								(l = s < a - 1 ? e[s + 1] * i : t.length),
								(c = $o(t, o, l, i, !1)),
								c === c.next && (c.steiner = !0),
								r.push(hl(c));
						for (r.sort(al), s = 0; s < r.length; s++)
							ol(r[s], n), (n = tl(n, n.next));
						return n;
					})(t, e, s, n)),
				t.length > 80 * n)
			) {
				(o = c = t[0]), (l = h = t[1]);
				for (let e = n; e < r; e += n)
					(u = t[e]),
						(d = t[e + 1]),
						u < o && (o = u),
						d < l && (l = d),
						u > c && (c = u),
						d > h && (h = d);
				(p = Math.max(c - o, h - l)), (p = 0 !== p ? 1 / p : 0);
			}
			return el(s, a, n, o, l, p), a;
		};
		function $o(t, e, n, i, r) {
			let s, a;
			if (
				r ===
				(function (t, e, n, i) {
					let r = 0;
					for (let s = e, a = n - i; s < n; s += i)
						(r += (t[a] - t[s]) * (t[s + 1] + t[a + 1])), (a = s);
					return r;
				})(t, e, n, i) >
					0
			)
				for (s = e; s < n; s += i) a = _l(s, t[s], t[s + 1], a);
			else for (s = n - i; s >= e; s -= i) a = _l(s, t[s], t[s + 1], a);
			return a && ml(a, a.next) && (Ml(a), (a = a.next)), a;
		}
		function tl(t, e) {
			if (!t) return t;
			e || (e = t);
			let n,
				i = t;
			do {
				if (
					((n = !1),
					i.steiner || (!ml(i, i.next) && 0 !== pl(i.prev, i, i.next)))
				)
					i = i.next;
				else {
					if ((Ml(i), (i = e = i.prev), i === i.next)) break;
					n = !0;
				}
			} while (n || i !== e);
			return e;
		}
		function el(t, e, n, i, r, s, a) {
			if (!t) return;
			!a &&
				s &&
				(function (t, e, n, i) {
					let r = t;
					do {
						null === r.z && (r.z = cl(r.x, r.y, e, n, i)),
							(r.prevZ = r.prev),
							(r.nextZ = r.next),
							(r = r.next);
					} while (r !== t);
					(r.prevZ.nextZ = null),
						(r.prevZ = null),
						(function (t) {
							let e,
								n,
								i,
								r,
								s,
								a,
								o,
								l,
								c = 1;
							do {
								for (n = t, t = null, s = null, a = 0; n; ) {
									for (
										a++, i = n, o = 0, e = 0;
										e < c && (o++, (i = i.nextZ), i);
										e++
									);
									for (l = c; o > 0 || (l > 0 && i); )
										0 !== o && (0 === l || !i || n.z <= i.z)
											? ((r = n), (n = n.nextZ), o--)
											: ((r = i), (i = i.nextZ), l--),
											s ? (s.nextZ = r) : (t = r),
											(r.prevZ = s),
											(s = r);
									n = i;
								}
								(s.nextZ = null), (c *= 2);
							} while (a > 1);
						})(r);
				})(t, i, r, s);
			let o,
				l,
				c = t;
			for (; t.prev !== t.next; )
				if (((o = t.prev), (l = t.next), s ? il(t, i, r, s) : nl(t)))
					e.push(o.i / n),
						e.push(t.i / n),
						e.push(l.i / n),
						Ml(t),
						(t = l.next),
						(c = l.next);
				else if ((t = l) === c) {
					a
						? 1 === a
							? el((t = rl(tl(t), e, n)), e, n, i, r, s, 2)
							: 2 === a && sl(t, e, n, i, r, s)
						: el(tl(t), e, n, i, r, s, 1);
					break;
				}
		}
		function nl(t) {
			const e = t.prev,
				n = t,
				i = t.next;
			if (pl(e, n, i) >= 0) return !1;
			let r = t.next.next;
			for (; r !== t.prev; ) {
				if (
					ul(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) &&
					pl(r.prev, r, r.next) >= 0
				)
					return !1;
				r = r.next;
			}
			return !0;
		}
		function il(t, e, n, i) {
			const r = t.prev,
				s = t,
				a = t.next;
			if (pl(r, s, a) >= 0) return !1;
			const o = r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
				l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
				c = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
				h = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
				u = cl(o, l, e, n, i),
				d = cl(c, h, e, n, i);
			let p = t.prevZ,
				m = t.nextZ;
			for (; p && p.z >= u && m && m.z <= d; ) {
				if (
					p !== t.prev &&
					p !== t.next &&
					ul(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
					pl(p.prev, p, p.next) >= 0
				)
					return !1;
				if (
					((p = p.prevZ),
					m !== t.prev &&
						m !== t.next &&
						ul(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
						pl(m.prev, m, m.next) >= 0)
				)
					return !1;
				m = m.nextZ;
			}
			for (; p && p.z >= u; ) {
				if (
					p !== t.prev &&
					p !== t.next &&
					ul(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
					pl(p.prev, p, p.next) >= 0
				)
					return !1;
				p = p.prevZ;
			}
			for (; m && m.z <= d; ) {
				if (
					m !== t.prev &&
					m !== t.next &&
					ul(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
					pl(m.prev, m, m.next) >= 0
				)
					return !1;
				m = m.nextZ;
			}
			return !0;
		}
		function rl(t, e, n) {
			let i = t;
			do {
				const r = i.prev,
					s = i.next.next;
				!ml(r, s) &&
					fl(r, i, i.next, s) &&
					yl(r, s) &&
					yl(s, r) &&
					(e.push(r.i / n),
					e.push(i.i / n),
					e.push(s.i / n),
					Ml(i),
					Ml(i.next),
					(i = t = s)),
					(i = i.next);
			} while (i !== t);
			return tl(i);
		}
		function sl(t, e, n, i, r, s) {
			let a = t;
			do {
				let t = a.next.next;
				for (; t !== a.prev; ) {
					if (a.i !== t.i && dl(a, t)) {
						let o = xl(a, t);
						return (
							(a = tl(a, a.next)),
							(o = tl(o, o.next)),
							el(a, e, n, i, r, s),
							void el(o, e, n, i, r, s)
						);
					}
					t = t.next;
				}
				a = a.next;
			} while (a !== t);
		}
		function al(t, e) {
			return t.x - e.x;
		}
		function ol(t, e) {
			if (
				((e = (function (t, e) {
					let n = e;
					const i = t.x,
						r = t.y;
					let s,
						a = -1 / 0;
					do {
						if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
							const t = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
							if (t <= i && t > a) {
								if (((a = t), t === i)) {
									if (r === n.y) return n;
									if (r === n.next.y) return n.next;
								}
								s = n.x < n.next.x ? n : n.next;
							}
						}
						n = n.next;
					} while (n !== e);
					if (!s) return null;
					if (i === a) return s;
					const o = s,
						l = s.x,
						c = s.y;
					let h,
						u = 1 / 0;
					n = s;
					do {
						i >= n.x &&
							n.x >= l &&
							i !== n.x &&
							ul(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) &&
							((h = Math.abs(r - n.y) / (i - n.x)),
							yl(n, t) &&
								(h < u ||
									(h === u && (n.x > s.x || (n.x === s.x && ll(s, n))))) &&
								((s = n), (u = h))),
							(n = n.next);
					} while (n !== o);
					return s;
				})(t, e)),
				e)
			) {
				const n = xl(e, t);
				tl(e, e.next), tl(n, n.next);
			}
		}
		function ll(t, e) {
			return pl(t.prev, t, e.prev) < 0 && pl(e.next, t, t.next) < 0;
		}
		function cl(t, e, n, i, r) {
			return (
				(t =
					1431655765 &
					((t =
						858993459 &
						((t =
							252645135 &
							((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) |
								(t << 4))) |
							(t << 2))) |
						(t << 1))) |
				((e =
					1431655765 &
					((e =
						858993459 &
						((e =
							252645135 &
							((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) |
								(e << 4))) |
							(e << 2))) |
						(e << 1))) <<
					1)
			);
		}
		function hl(t) {
			let e = t,
				n = t;
			do {
				(e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
			} while (e !== t);
			return n;
		}
		function ul(t, e, n, i, r, s, a, o) {
			return (
				(r - a) * (e - o) - (t - a) * (s - o) >= 0 &&
				(t - a) * (i - o) - (n - a) * (e - o) >= 0 &&
				(n - a) * (s - o) - (r - a) * (i - o) >= 0
			);
		}
		function dl(t, e) {
			return (
				t.next.i !== e.i &&
				t.prev.i !== e.i &&
				!(function (t, e) {
					let n = t;
					do {
						if (
							n.i !== t.i &&
							n.next.i !== t.i &&
							n.i !== e.i &&
							n.next.i !== e.i &&
							fl(n, n.next, t, e)
						)
							return !0;
						n = n.next;
					} while (n !== t);
					return !1;
				})(t, e) &&
				((yl(t, e) &&
					yl(e, t) &&
					(function (t, e) {
						let n = t,
							i = !1;
						const r = (t.x + e.x) / 2,
							s = (t.y + e.y) / 2;
						do {
							n.y > s != n.next.y > s &&
								n.next.y !== n.y &&
								r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
								(i = !i),
								(n = n.next);
						} while (n !== t);
						return i;
					})(t, e) &&
					(pl(t.prev, t, e.prev) || pl(t, e.prev, e))) ||
					(ml(t, e) && pl(t.prev, t, t.next) > 0 && pl(e.prev, e, e.next) > 0))
			);
		}
		function pl(t, e, n) {
			return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
		}
		function ml(t, e) {
			return t.x === e.x && t.y === e.y;
		}
		function fl(t, e, n, i) {
			const r = vl(pl(t, e, n)),
				s = vl(pl(t, e, i)),
				a = vl(pl(n, i, t)),
				o = vl(pl(n, i, e));
			return (
				(r !== s && a !== o) ||
				!(0 !== r || !gl(t, n, e)) ||
				!(0 !== s || !gl(t, i, e)) ||
				!(0 !== a || !gl(n, t, i)) ||
				!(0 !== o || !gl(n, e, i))
			);
		}
		function gl(t, e, n) {
			return (
				e.x <= Math.max(t.x, n.x) &&
				e.x >= Math.min(t.x, n.x) &&
				e.y <= Math.max(t.y, n.y) &&
				e.y >= Math.min(t.y, n.y)
			);
		}
		function vl(t) {
			return t > 0 ? 1 : t < 0 ? -1 : 0;
		}
		function yl(t, e) {
			return pl(t.prev, t, t.next) < 0
				? pl(t, e, t.next) >= 0 && pl(t, t.prev, e) >= 0
				: pl(t, e, t.prev) < 0 || pl(t, t.next, e) < 0;
		}
		function xl(t, e) {
			const n = new bl(t.i, t.x, t.y),
				i = new bl(e.i, e.x, e.y),
				r = t.next,
				s = e.prev;
			return (
				(t.next = e),
				(e.prev = t),
				(n.next = r),
				(r.prev = n),
				(i.next = n),
				(n.prev = i),
				(s.next = i),
				(i.prev = s),
				i
			);
		}
		function _l(t, e, n, i) {
			const r = new bl(t, e, n);
			return (
				i
					? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
					: ((r.prev = r), (r.next = r)),
				r
			);
		}
		function Ml(t) {
			(t.next.prev = t.prev),
				(t.prev.next = t.next),
				t.prevZ && (t.prevZ.nextZ = t.nextZ),
				t.nextZ && (t.nextZ.prevZ = t.prevZ);
		}
		function bl(t, e, n) {
			(this.i = t),
				(this.x = e),
				(this.y = n),
				(this.prev = null),
				(this.next = null),
				(this.z = null),
				(this.prevZ = null),
				(this.nextZ = null),
				(this.steiner = !1);
		}
		class wl {
			static area(t) {
				const e = t.length;
				let n = 0;
				for (let i = e - 1, r = 0; r < e; i = r++)
					n += t[i].x * t[r].y - t[r].x * t[i].y;
				return 0.5 * n;
			}
			static isClockWise(t) {
				return wl.area(t) < 0;
			}
			static triangulateShape(t, e) {
				const n = [],
					i = [],
					r = [];
				Sl(t), Tl(n, t);
				let s = t.length;
				e.forEach(Sl);
				for (let t = 0; t < e.length; t++)
					i.push(s), (s += e[t].length), Tl(n, e[t]);
				const a = Qo(n, i);
				for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
				return r;
			}
		}
		function Sl(t) {
			const e = t.length;
			e > 2 && t[e - 1].equals(t[0]) && t.pop();
		}
		function Tl(t, e) {
			for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
		}
		class El extends Nn {
			constructor(
				t = new Ko([
					new At(0.5, 0.5),
					new At(-0.5, 0.5),
					new At(-0.5, -0.5),
					new At(0.5, -0.5),
				]),
				e = {}
			) {
				super(),
					(this.type = "ExtrudeGeometry"),
					(this.parameters = { shapes: t, options: e }),
					(t = Array.isArray(t) ? t : [t]);
				const n = this,
					i = [],
					r = [];
				for (let e = 0, n = t.length; e < n; e++) {
					s(t[e]);
				}
				function s(t) {
					const s = [],
						a = void 0 !== e.curveSegments ? e.curveSegments : 12,
						o = void 0 !== e.steps ? e.steps : 1;
					let l = void 0 !== e.depth ? e.depth : 1,
						c = void 0 === e.bevelEnabled || e.bevelEnabled,
						h = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2,
						u = void 0 !== e.bevelSize ? e.bevelSize : h - 0.1,
						d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
						p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
					const m = e.extrudePath,
						f = void 0 !== e.UVGenerator ? e.UVGenerator : Al;
					void 0 !== e.amount &&
						(console.warn(
							"THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
						),
						(l = e.amount));
					let g,
						v,
						y,
						x,
						_,
						M = !1;
					m &&
						((g = m.getSpacedPoints(o)),
						(M = !0),
						(c = !1),
						(v = m.computeFrenetFrames(o, !1)),
						(y = new Zt()),
						(x = new Zt()),
						(_ = new Zt())),
						c || ((p = 0), (h = 0), (u = 0), (d = 0));
					const b = t.extractPoints(a);
					let w = b.shape;
					const S = b.holes;
					if (!wl.isClockWise(w)) {
						w = w.reverse();
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							wl.isClockWise(e) && (S[t] = e.reverse());
						}
					}
					const T = wl.triangulateShape(w, S),
						E = w;
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						w = w.concat(e);
					}
					function A(t, e, n) {
						return (
							e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
							e.clone().multiplyScalar(n).add(t)
						);
					}
					const R = w.length,
						L = T.length;
					function C(t, e, n) {
						let i, r, s;
						const a = t.x - e.x,
							o = t.y - e.y,
							l = n.x - t.x,
							c = n.y - t.y,
							h = a * a + o * o,
							u = a * c - o * l;
						if (Math.abs(u) > Number.EPSILON) {
							const u = Math.sqrt(h),
								d = Math.sqrt(l * l + c * c),
								p = e.x - o / u,
								m = e.y + a / u,
								f =
									((n.x - c / d - p) * c - (n.y + l / d - m) * l) /
									(a * c - o * l);
							(i = p + a * f - t.x), (r = m + o * f - t.y);
							const g = i * i + r * r;
							if (g <= 2) return new At(i, r);
							s = Math.sqrt(g / 2);
						} else {
							let t = !1;
							a > Number.EPSILON
								? l > Number.EPSILON && (t = !0)
								: a < -Number.EPSILON
								? l < -Number.EPSILON && (t = !0)
								: Math.sign(o) === Math.sign(c) && (t = !0),
								t
									? ((i = -o), (r = a), (s = Math.sqrt(h)))
									: ((i = a), (r = o), (s = Math.sqrt(h / 2)));
						}
						return new At(i / s, r / s);
					}
					const P = [];
					for (
						let t = 0, e = E.length, n = e - 1, i = t + 1;
						t < e;
						t++, n++, i++
					)
						n === e && (n = 0),
							i === e && (i = 0),
							(P[t] = C(E[t], E[n], E[i]));
					const D = [];
					let I,
						N = P.concat();
					for (let t = 0, e = S.length; t < e; t++) {
						const e = S[t];
						I = [];
						for (
							let t = 0, n = e.length, i = n - 1, r = t + 1;
							t < n;
							t++, i++, r++
						)
							i === n && (i = 0),
								r === n && (r = 0),
								(I[t] = C(e[t], e[i], e[r]));
						D.push(I), (N = N.concat(I));
					}
					for (let t = 0; t < p; t++) {
						const e = t / p,
							n = h * Math.cos((e * Math.PI) / 2),
							i = u * Math.sin((e * Math.PI) / 2) + d;
						for (let t = 0, e = E.length; t < e; t++) {
							const e = A(E[t], P[t], i);
							O(e.x, e.y, -n);
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							I = D[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = A(e[t], I[t], i);
								O(r.x, r.y, -n);
							}
						}
					}
					const B = u + d;
					for (let t = 0; t < R; t++) {
						const e = c ? A(w[t], N[t], B) : w[t];
						M
							? (x.copy(v.normals[0]).multiplyScalar(e.x),
							  y.copy(v.binormals[0]).multiplyScalar(e.y),
							  _.copy(g[0]).add(x).add(y),
							  O(_.x, _.y, _.z))
							: O(e.x, e.y, 0);
					}
					for (let t = 1; t <= o; t++)
						for (let e = 0; e < R; e++) {
							const n = c ? A(w[e], N[e], B) : w[e];
							M
								? (x.copy(v.normals[t]).multiplyScalar(n.x),
								  y.copy(v.binormals[t]).multiplyScalar(n.y),
								  _.copy(g[t]).add(x).add(y),
								  O(_.x, _.y, _.z))
								: O(n.x, n.y, (l / o) * t);
						}
					for (let t = p - 1; t >= 0; t--) {
						const e = t / p,
							n = h * Math.cos((e * Math.PI) / 2),
							i = u * Math.sin((e * Math.PI) / 2) + d;
						for (let t = 0, e = E.length; t < e; t++) {
							const e = A(E[t], P[t], i);
							O(e.x, e.y, l + n);
						}
						for (let t = 0, e = S.length; t < e; t++) {
							const e = S[t];
							I = D[t];
							for (let t = 0, r = e.length; t < r; t++) {
								const r = A(e[t], I[t], i);
								M
									? O(r.x, r.y + g[o - 1].y, g[o - 1].x + n)
									: O(r.x, r.y, l + n);
							}
						}
					}
					function z(t, e) {
						let n = t.length;
						for (; --n >= 0; ) {
							const i = n;
							let r = n - 1;
							r < 0 && (r = t.length - 1);
							for (let t = 0, n = o + 2 * p; t < n; t++) {
								const n = R * t,
									s = R * (t + 1);
								U(e + i + n, e + r + n, e + r + s, e + i + s);
							}
						}
					}
					function O(t, e, n) {
						s.push(t), s.push(e), s.push(n);
					}
					function F(t, e, r) {
						H(t), H(e), H(r);
						const s = i.length / 3,
							a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
						G(a[0]), G(a[1]), G(a[2]);
					}
					function U(t, e, r, s) {
						H(t), H(e), H(s), H(e), H(r), H(s);
						const a = i.length / 3,
							o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
						G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
					}
					function H(t) {
						i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
					}
					function G(t) {
						r.push(t.x), r.push(t.y);
					}
					!(function () {
						const t = i.length / 3;
						if (c) {
							let t = 0,
								e = R * t;
							for (let t = 0; t < L; t++) {
								const n = T[t];
								F(n[2] + e, n[1] + e, n[0] + e);
							}
							(t = o + 2 * p), (e = R * t);
							for (let t = 0; t < L; t++) {
								const n = T[t];
								F(n[0] + e, n[1] + e, n[2] + e);
							}
						} else {
							for (let t = 0; t < L; t++) {
								const e = T[t];
								F(e[2], e[1], e[0]);
							}
							for (let t = 0; t < L; t++) {
								const e = T[t];
								F(e[0] + R * o, e[1] + R * o, e[2] + R * o);
							}
						}
						n.addGroup(t, i.length / 3 - t, 0);
					})(),
						(function () {
							const t = i.length / 3;
							let e = 0;
							z(E, e), (e += E.length);
							for (let t = 0, n = S.length; t < n; t++) {
								const n = S[t];
								z(n, e), (e += n.length);
							}
							n.addGroup(t, i.length / 3 - t, 1);
						})();
				}
				this.setAttribute("position", new Tn(i, 3)),
					this.setAttribute("uv", new Tn(r, 2)),
					this.computeVertexNormals();
			}
			toJSON() {
				const t = super.toJSON();
				return (function (t, e, n) {
					if (((n.shapes = []), Array.isArray(t)))
						for (let e = 0, i = t.length; e < i; e++) {
							const i = t[e];
							n.shapes.push(i.uuid);
						}
					else n.shapes.push(t.uuid);
					void 0 !== e.extrudePath &&
						(n.options.extrudePath = e.extrudePath.toJSON());
					return n;
				})(this.parameters.shapes, this.parameters.options, t);
			}
			static fromJSON(t, e) {
				const n = [];
				for (let i = 0, r = t.shapes.length; i < r; i++) {
					const r = e[t.shapes[i]];
					n.push(r);
				}
				const i = t.options.extrudePath;
				return (
					void 0 !== i &&
						(t.options.extrudePath = new Jo[i.type]().fromJSON(i)),
					new El(n, t.options)
				);
			}
		}
		const Al = {
			generateTopUV: function (t, e, n, i, r) {
				const s = e[3 * n],
					a = e[3 * n + 1],
					o = e[3 * i],
					l = e[3 * i + 1],
					c = e[3 * r],
					h = e[3 * r + 1];
				return [new At(s, a), new At(o, l), new At(c, h)];
			},
			generateSideWallUV: function (t, e, n, i, r, s) {
				const a = e[3 * n],
					o = e[3 * n + 1],
					l = e[3 * n + 2],
					c = e[3 * i],
					h = e[3 * i + 1],
					u = e[3 * i + 2],
					d = e[3 * r],
					p = e[3 * r + 1],
					m = e[3 * r + 2],
					f = e[3 * s],
					g = e[3 * s + 1],
					v = e[3 * s + 2];
				return Math.abs(o - h) < Math.abs(a - c)
					? [
							new At(a, 1 - l),
							new At(c, 1 - u),
							new At(d, 1 - m),
							new At(f, 1 - v),
					  ]
					: [
							new At(o, 1 - l),
							new At(h, 1 - u),
							new At(p, 1 - m),
							new At(g, 1 - v),
					  ];
			},
		};
		class Rl extends bo {
			constructor(t = 1, e = 0) {
				const n = (1 + Math.sqrt(5)) / 2;
				super(
					[
						-1,
						n,
						0,
						1,
						n,
						0,
						-1,
						-n,
						0,
						1,
						-n,
						0,
						0,
						-1,
						n,
						0,
						1,
						n,
						0,
						-1,
						-n,
						0,
						1,
						-n,
						n,
						0,
						-1,
						n,
						0,
						1,
						-n,
						0,
						-1,
						-n,
						0,
						1,
					],
					[
						0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
						11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
						8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
					],
					t,
					e
				),
					(this.type = "IcosahedronGeometry"),
					(this.parameters = { radius: t, detail: e });
			}
			static fromJSON(t) {
				return new Rl(t.radius, t.detail);
			}
		}
		class Ll extends Nn {
			constructor(
				t = [new At(0, 0.5), new At(0.5, 0), new At(0, -0.5)],
				e = 12,
				n = 0,
				i = 2 * Math.PI
			) {
				super(),
					(this.type = "LatheGeometry"),
					(this.parameters = {
						points: t,
						segments: e,
						phiStart: n,
						phiLength: i,
					}),
					(e = Math.floor(e)),
					(i = _t(i, 0, 2 * Math.PI));
				const r = [],
					s = [],
					a = [],
					o = [],
					l = [],
					c = 1 / e,
					h = new Zt(),
					u = new At(),
					d = new Zt(),
					p = new Zt(),
					m = new Zt();
				let f = 0,
					g = 0;
				for (let e = 0; e <= t.length - 1; e++)
					switch (e) {
						case 0:
							(f = t[e + 1].x - t[e].x),
								(g = t[e + 1].y - t[e].y),
								(d.x = 1 * g),
								(d.y = -f),
								(d.z = 0 * g),
								m.copy(d),
								d.normalize(),
								o.push(d.x, d.y, d.z);
							break;
						case t.length - 1:
							o.push(m.x, m.y, m.z);
							break;
						default:
							(f = t[e + 1].x - t[e].x),
								(g = t[e + 1].y - t[e].y),
								(d.x = 1 * g),
								(d.y = -f),
								(d.z = 0 * g),
								p.copy(d),
								(d.x += m.x),
								(d.y += m.y),
								(d.z += m.z),
								d.normalize(),
								o.push(d.x, d.y, d.z),
								m.copy(p);
					}
				for (let r = 0; r <= e; r++) {
					const d = n + r * c * i,
						p = Math.sin(d),
						m = Math.cos(d);
					for (let n = 0; n <= t.length - 1; n++) {
						(h.x = t[n].x * p),
							(h.y = t[n].y),
							(h.z = t[n].x * m),
							s.push(h.x, h.y, h.z),
							(u.x = r / e),
							(u.y = n / (t.length - 1)),
							a.push(u.x, u.y);
						const i = o[3 * n + 0] * p,
							c = o[3 * n + 1],
							d = o[3 * n + 0] * m;
						l.push(i, c, d);
					}
				}
				for (let n = 0; n < e; n++)
					for (let e = 0; e < t.length - 1; e++) {
						const i = e + n * t.length,
							s = i,
							a = i + t.length,
							o = i + t.length + 1,
							l = i + 1;
						r.push(s, a, l), r.push(o, l, a);
					}
				this.setIndex(r),
					this.setAttribute("position", new Tn(s, 3)),
					this.setAttribute("uv", new Tn(a, 2)),
					this.setAttribute("normal", new Tn(l, 3));
			}
			static fromJSON(t) {
				return new Ll(t.points, t.segments, t.phiStart, t.phiLength);
			}
		}
		class Cl extends bo {
			constructor(t = 1, e = 0) {
				super(
					[1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
					[
						0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
						2,
					],
					t,
					e
				),
					(this.type = "OctahedronGeometry"),
					(this.parameters = { radius: t, detail: e });
			}
			static fromJSON(t) {
				return new Cl(t.radius, t.detail);
			}
		}
		class Pl extends Nn {
			constructor(t = 0.5, e = 1, n = 8, i = 1, r = 0, s = 2 * Math.PI) {
				super(),
					(this.type = "RingGeometry"),
					(this.parameters = {
						innerRadius: t,
						outerRadius: e,
						thetaSegments: n,
						phiSegments: i,
						thetaStart: r,
						thetaLength: s,
					}),
					(n = Math.max(3, n));
				const a = [],
					o = [],
					l = [],
					c = [];
				let h = t;
				const u = (e - t) / (i = Math.max(1, i)),
					d = new Zt(),
					p = new At();
				for (let t = 0; t <= i; t++) {
					for (let t = 0; t <= n; t++) {
						const i = r + (t / n) * s;
						(d.x = h * Math.cos(i)),
							(d.y = h * Math.sin(i)),
							o.push(d.x, d.y, d.z),
							l.push(0, 0, 1),
							(p.x = (d.x / e + 1) / 2),
							(p.y = (d.y / e + 1) / 2),
							c.push(p.x, p.y);
					}
					h += u;
				}
				for (let t = 0; t < i; t++) {
					const e = t * (n + 1);
					for (let t = 0; t < n; t++) {
						const i = t + e,
							r = i,
							s = i + n + 1,
							o = i + n + 2,
							l = i + 1;
						a.push(r, s, l), a.push(s, o, l);
					}
				}
				this.setIndex(a),
					this.setAttribute("position", new Tn(o, 3)),
					this.setAttribute("normal", new Tn(l, 3)),
					this.setAttribute("uv", new Tn(c, 2));
			}
			static fromJSON(t) {
				return new Pl(
					t.innerRadius,
					t.outerRadius,
					t.thetaSegments,
					t.phiSegments,
					t.thetaStart,
					t.thetaLength
				);
			}
		}
		class Dl extends Nn {
			constructor(
				t = new Ko([new At(0, 0.5), new At(-0.5, -0.5), new At(0.5, -0.5)]),
				e = 12
			) {
				super(),
					(this.type = "ShapeGeometry"),
					(this.parameters = { shapes: t, curveSegments: e });
				const n = [],
					i = [],
					r = [],
					s = [];
				let a = 0,
					o = 0;
				if (!1 === Array.isArray(t)) l(t);
				else
					for (let e = 0; e < t.length; e++)
						l(t[e]), this.addGroup(a, o, e), (a += o), (o = 0);
				function l(t) {
					const a = i.length / 3,
						l = t.extractPoints(e);
					let c = l.shape;
					const h = l.holes;
					!1 === wl.isClockWise(c) && (c = c.reverse());
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						!0 === wl.isClockWise(e) && (h[t] = e.reverse());
					}
					const u = wl.triangulateShape(c, h);
					for (let t = 0, e = h.length; t < e; t++) {
						const e = h[t];
						c = c.concat(e);
					}
					for (let t = 0, e = c.length; t < e; t++) {
						const e = c[t];
						i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
					}
					for (let t = 0, e = u.length; t < e; t++) {
						const e = u[t],
							i = e[0] + a,
							r = e[1] + a,
							s = e[2] + a;
						n.push(i, r, s), (o += 3);
					}
				}
				this.setIndex(n),
					this.setAttribute("position", new Tn(i, 3)),
					this.setAttribute("normal", new Tn(r, 3)),
					this.setAttribute("uv", new Tn(s, 2));
			}
			toJSON() {
				const t = super.toJSON();
				return (function (t, e) {
					if (((e.shapes = []), Array.isArray(t)))
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n];
							e.shapes.push(i.uuid);
						}
					else e.shapes.push(t.uuid);
					return e;
				})(this.parameters.shapes, t);
			}
			static fromJSON(t, e) {
				const n = [];
				for (let i = 0, r = t.shapes.length; i < r; i++) {
					const r = e[t.shapes[i]];
					n.push(r);
				}
				return new Dl(n, t.curveSegments);
			}
		}
		class Il extends Nn {
			constructor(
				t = 1,
				e = 32,
				n = 16,
				i = 0,
				r = 2 * Math.PI,
				s = 0,
				a = Math.PI
			) {
				super(),
					(this.type = "SphereGeometry"),
					(this.parameters = {
						radius: t,
						widthSegments: e,
						heightSegments: n,
						phiStart: i,
						phiLength: r,
						thetaStart: s,
						thetaLength: a,
					}),
					(e = Math.max(3, Math.floor(e))),
					(n = Math.max(2, Math.floor(n)));
				const o = Math.min(s + a, Math.PI);
				let l = 0;
				const c = [],
					h = new Zt(),
					u = new Zt(),
					d = [],
					p = [],
					m = [],
					f = [];
				for (let d = 0; d <= n; d++) {
					const g = [],
						v = d / n;
					let y = 0;
					0 == d && 0 == s
						? (y = 0.5 / e)
						: d == n && o == Math.PI && (y = -0.5 / e);
					for (let n = 0; n <= e; n++) {
						const o = n / e;
						(h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a)),
							(h.y = t * Math.cos(s + v * a)),
							(h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a)),
							p.push(h.x, h.y, h.z),
							u.copy(h).normalize(),
							m.push(u.x, u.y, u.z),
							f.push(o + y, 1 - v),
							g.push(l++);
					}
					c.push(g);
				}
				for (let t = 0; t < n; t++)
					for (let i = 0; i < e; i++) {
						const e = c[t][i + 1],
							r = c[t][i],
							a = c[t + 1][i],
							l = c[t + 1][i + 1];
						(0 !== t || s > 0) && d.push(e, r, l),
							(t !== n - 1 || o < Math.PI) && d.push(r, a, l);
					}
				this.setIndex(d),
					this.setAttribute("position", new Tn(p, 3)),
					this.setAttribute("normal", new Tn(m, 3)),
					this.setAttribute("uv", new Tn(f, 2));
			}
			static fromJSON(t) {
				return new Il(
					t.radius,
					t.widthSegments,
					t.heightSegments,
					t.phiStart,
					t.phiLength,
					t.thetaStart,
					t.thetaLength
				);
			}
		}
		class Nl extends bo {
			constructor(t = 1, e = 0) {
				super(
					[1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
					[2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
					t,
					e
				),
					(this.type = "TetrahedronGeometry"),
					(this.parameters = { radius: t, detail: e });
			}
			static fromJSON(t) {
				return new Nl(t.radius, t.detail);
			}
		}
		class Bl extends Nn {
			constructor(t = 1, e = 0.4, n = 8, i = 6, r = 2 * Math.PI) {
				super(),
					(this.type = "TorusGeometry"),
					(this.parameters = {
						radius: t,
						tube: e,
						radialSegments: n,
						tubularSegments: i,
						arc: r,
					}),
					(n = Math.floor(n)),
					(i = Math.floor(i));
				const s = [],
					a = [],
					o = [],
					l = [],
					c = new Zt(),
					h = new Zt(),
					u = new Zt();
				for (let s = 0; s <= n; s++)
					for (let d = 0; d <= i; d++) {
						const p = (d / i) * r,
							m = (s / n) * Math.PI * 2;
						(h.x = (t + e * Math.cos(m)) * Math.cos(p)),
							(h.y = (t + e * Math.cos(m)) * Math.sin(p)),
							(h.z = e * Math.sin(m)),
							a.push(h.x, h.y, h.z),
							(c.x = t * Math.cos(p)),
							(c.y = t * Math.sin(p)),
							u.subVectors(h, c).normalize(),
							o.push(u.x, u.y, u.z),
							l.push(d / i),
							l.push(s / n);
					}
				for (let t = 1; t <= n; t++)
					for (let e = 1; e <= i; e++) {
						const n = (i + 1) * t + e - 1,
							r = (i + 1) * (t - 1) + e - 1,
							a = (i + 1) * (t - 1) + e,
							o = (i + 1) * t + e;
						s.push(n, r, o), s.push(r, a, o);
					}
				this.setIndex(s),
					this.setAttribute("position", new Tn(a, 3)),
					this.setAttribute("normal", new Tn(o, 3)),
					this.setAttribute("uv", new Tn(l, 2));
			}
			static fromJSON(t) {
				return new Bl(
					t.radius,
					t.tube,
					t.radialSegments,
					t.tubularSegments,
					t.arc
				);
			}
		}
		class zl extends Nn {
			constructor(t = 1, e = 0.4, n = 64, i = 8, r = 2, s = 3) {
				super(),
					(this.type = "TorusKnotGeometry"),
					(this.parameters = {
						radius: t,
						tube: e,
						tubularSegments: n,
						radialSegments: i,
						p: r,
						q: s,
					}),
					(n = Math.floor(n)),
					(i = Math.floor(i));
				const a = [],
					o = [],
					l = [],
					c = [],
					h = new Zt(),
					u = new Zt(),
					d = new Zt(),
					p = new Zt(),
					m = new Zt(),
					f = new Zt(),
					g = new Zt();
				for (let a = 0; a <= n; ++a) {
					const y = (a / n) * r * Math.PI * 2;
					v(y, r, s, t, d),
						v(y + 0.01, r, s, t, p),
						f.subVectors(p, d),
						g.addVectors(p, d),
						m.crossVectors(f, g),
						g.crossVectors(m, f),
						m.normalize(),
						g.normalize();
					for (let t = 0; t <= i; ++t) {
						const r = (t / i) * Math.PI * 2,
							s = -e * Math.cos(r),
							p = e * Math.sin(r);
						(h.x = d.x + (s * g.x + p * m.x)),
							(h.y = d.y + (s * g.y + p * m.y)),
							(h.z = d.z + (s * g.z + p * m.z)),
							o.push(h.x, h.y, h.z),
							u.subVectors(h, d).normalize(),
							l.push(u.x, u.y, u.z),
							c.push(a / n),
							c.push(t / i);
					}
				}
				for (let t = 1; t <= n; t++)
					for (let e = 1; e <= i; e++) {
						const n = (i + 1) * (t - 1) + (e - 1),
							r = (i + 1) * t + (e - 1),
							s = (i + 1) * t + e,
							o = (i + 1) * (t - 1) + e;
						a.push(n, r, o), a.push(r, s, o);
					}
				function v(t, e, n, i, r) {
					const s = Math.cos(t),
						a = Math.sin(t),
						o = (n / e) * t,
						l = Math.cos(o);
					(r.x = i * (2 + l) * 0.5 * s),
						(r.y = i * (2 + l) * a * 0.5),
						(r.z = i * Math.sin(o) * 0.5);
				}
				this.setIndex(a),
					this.setAttribute("position", new Tn(o, 3)),
					this.setAttribute("normal", new Tn(l, 3)),
					this.setAttribute("uv", new Tn(c, 2));
			}
			static fromJSON(t) {
				return new zl(
					t.radius,
					t.tube,
					t.tubularSegments,
					t.radialSegments,
					t.p,
					t.q
				);
			}
		}
		class Ol extends Nn {
			constructor(
				t = new qo(new Zt(-1, -1, 0), new Zt(-1, 1, 0), new Zt(1, 1, 0)),
				e = 64,
				n = 1,
				i = 8,
				r = !1
			) {
				super(),
					(this.type = "TubeGeometry"),
					(this.parameters = {
						path: t,
						tubularSegments: e,
						radius: n,
						radialSegments: i,
						closed: r,
					});
				const s = t.computeFrenetFrames(e, r);
				(this.tangents = s.tangents),
					(this.normals = s.normals),
					(this.binormals = s.binormals);
				const a = new Zt(),
					o = new Zt(),
					l = new At();
				let c = new Zt();
				const h = [],
					u = [],
					d = [],
					p = [];
				function m(r) {
					c = t.getPointAt(r / e, c);
					const l = s.normals[r],
						d = s.binormals[r];
					for (let t = 0; t <= i; t++) {
						const e = (t / i) * Math.PI * 2,
							r = Math.sin(e),
							s = -Math.cos(e);
						(o.x = s * l.x + r * d.x),
							(o.y = s * l.y + r * d.y),
							(o.z = s * l.z + r * d.z),
							o.normalize(),
							u.push(o.x, o.y, o.z),
							(a.x = c.x + n * o.x),
							(a.y = c.y + n * o.y),
							(a.z = c.z + n * o.z),
							h.push(a.x, a.y, a.z);
					}
				}
				!(function () {
					for (let t = 0; t < e; t++) m(t);
					m(!1 === r ? e : 0),
						(function () {
							for (let t = 0; t <= e; t++)
								for (let n = 0; n <= i; n++)
									(l.x = t / e), (l.y = n / i), d.push(l.x, l.y);
						})(),
						(function () {
							for (let t = 1; t <= e; t++)
								for (let e = 1; e <= i; e++) {
									const n = (i + 1) * (t - 1) + (e - 1),
										r = (i + 1) * t + (e - 1),
										s = (i + 1) * t + e,
										a = (i + 1) * (t - 1) + e;
									p.push(n, r, a), p.push(r, s, a);
								}
						})();
				})(),
					this.setIndex(p),
					this.setAttribute("position", new Tn(h, 3)),
					this.setAttribute("normal", new Tn(u, 3)),
					this.setAttribute("uv", new Tn(d, 2));
			}
			toJSON() {
				const t = super.toJSON();
				return (t.path = this.parameters.path.toJSON()), t;
			}
			static fromJSON(t) {
				return new Ol(
					new Jo[t.path.type]().fromJSON(t.path),
					t.tubularSegments,
					t.radius,
					t.radialSegments,
					t.closed
				);
			}
		}
		class Fl extends Nn {
			constructor(t = null) {
				if (
					(super(),
					(this.type = "WireframeGeometry"),
					(this.parameters = { geometry: t }),
					null !== t)
				) {
					const e = [],
						n = new Set(),
						i = new Zt(),
						r = new Zt();
					if (null !== t.index) {
						const s = t.attributes.position,
							a = t.index;
						let o = t.groups;
						0 === o.length &&
							(o = [{ start: 0, count: a.count, materialIndex: 0 }]);
						for (let t = 0, l = o.length; t < l; ++t) {
							const l = o[t],
								c = l.start;
							for (let t = c, o = c + l.count; t < o; t += 3)
								for (let o = 0; o < 3; o++) {
									const l = a.getX(t + o),
										c = a.getX(t + ((o + 1) % 3));
									i.fromBufferAttribute(s, l),
										r.fromBufferAttribute(s, c),
										!0 === Ul(i, r, n) &&
											(e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
								}
						}
					} else {
						const s = t.attributes.position;
						for (let t = 0, a = s.count / 3; t < a; t++)
							for (let a = 0; a < 3; a++) {
								const o = 3 * t + a,
									l = 3 * t + ((a + 1) % 3);
								i.fromBufferAttribute(s, o),
									r.fromBufferAttribute(s, l),
									!0 === Ul(i, r, n) &&
										(e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
							}
					}
					this.setAttribute("position", new Tn(e, 3));
				}
			}
		}
		function Ul(t, e, n) {
			const i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,
				r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
			return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i, r), !0);
		}
		var Hl = Object.freeze({
			__proto__: null,
			BoxGeometry: ti,
			BoxBufferGeometry: ti,
			CircleGeometry: xo,
			CircleBufferGeometry: xo,
			ConeGeometry: Mo,
			ConeBufferGeometry: Mo,
			CylinderGeometry: _o,
			CylinderBufferGeometry: _o,
			DodecahedronGeometry: wo,
			DodecahedronBufferGeometry: wo,
			EdgesGeometry: Ro,
			ExtrudeGeometry: El,
			ExtrudeBufferGeometry: El,
			IcosahedronGeometry: Rl,
			IcosahedronBufferGeometry: Rl,
			LatheGeometry: Ll,
			LatheBufferGeometry: Ll,
			OctahedronGeometry: Cl,
			OctahedronBufferGeometry: Cl,
			PlaneGeometry: _i,
			PlaneBufferGeometry: _i,
			PolyhedronGeometry: bo,
			PolyhedronBufferGeometry: bo,
			RingGeometry: Pl,
			RingBufferGeometry: Pl,
			ShapeGeometry: Dl,
			ShapeBufferGeometry: Dl,
			SphereGeometry: Il,
			SphereBufferGeometry: Il,
			TetrahedronGeometry: Nl,
			TetrahedronBufferGeometry: Nl,
			TorusGeometry: Bl,
			TorusBufferGeometry: Bl,
			TorusKnotGeometry: zl,
			TorusKnotBufferGeometry: zl,
			TubeGeometry: Ol,
			TubeBufferGeometry: Ol,
			WireframeGeometry: Fl,
		});
		class Gl extends dn {
			constructor(t) {
				super(),
					(this.type = "ShadowMaterial"),
					(this.color = new Ut(0)),
					(this.transparent = !0),
					this.setValues(t);
			}
			copy(t) {
				return super.copy(t), this.color.copy(t.color), this;
			}
		}
		Gl.prototype.isShadowMaterial = !0;
		class kl extends dn {
			constructor(t) {
				super(),
					(this.defines = { STANDARD: "" }),
					(this.type = "MeshStandardMaterial"),
					(this.color = new Ut(16777215)),
					(this.roughness = 1),
					(this.metalness = 0),
					(this.map = null),
					(this.lightMap = null),
					(this.lightMapIntensity = 1),
					(this.aoMap = null),
					(this.aoMapIntensity = 1),
					(this.emissive = new Ut(0)),
					(this.emissiveIntensity = 1),
					(this.emissiveMap = null),
					(this.bumpMap = null),
					(this.bumpScale = 1),
					(this.normalMap = null),
					(this.normalMapType = 0),
					(this.normalScale = new At(1, 1)),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.roughnessMap = null),
					(this.metalnessMap = null),
					(this.alphaMap = null),
					(this.envMap = null),
					(this.envMapIntensity = 1),
					(this.refractionRatio = 0.98),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.wireframeLinecap = "round"),
					(this.wireframeLinejoin = "round"),
					(this.flatShading = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.defines = { STANDARD: "" }),
					this.color.copy(t.color),
					(this.roughness = t.roughness),
					(this.metalness = t.metalness),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.roughnessMap = t.roughnessMap),
					(this.metalnessMap = t.metalnessMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.envMapIntensity = t.envMapIntensity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.flatShading = t.flatShading),
					this
				);
			}
		}
		kl.prototype.isMeshStandardMaterial = !0;
		class Vl extends kl {
			constructor(t) {
				super(),
					(this.defines = { STANDARD: "", PHYSICAL: "" }),
					(this.type = "MeshPhysicalMaterial"),
					(this.clearcoatMap = null),
					(this.clearcoatRoughness = 0),
					(this.clearcoatRoughnessMap = null),
					(this.clearcoatNormalScale = new At(1, 1)),
					(this.clearcoatNormalMap = null),
					(this.ior = 1.5),
					Object.defineProperty(this, "reflectivity", {
						get: function () {
							return _t((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
						},
						set: function (t) {
							this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
						},
					}),
					(this.sheenColor = new Ut(0)),
					(this.sheenColorMap = null),
					(this.sheenRoughness = 1),
					(this.sheenRoughnessMap = null),
					(this.transmissionMap = null),
					(this.thickness = 0),
					(this.thicknessMap = null),
					(this.attenuationDistance = 0),
					(this.attenuationColor = new Ut(1, 1, 1)),
					(this.specularIntensity = 1),
					(this.specularIntensityMap = null),
					(this.specularColor = new Ut(1, 1, 1)),
					(this.specularColorMap = null),
					(this._sheen = 0),
					(this._clearcoat = 0),
					(this._transmission = 0),
					this.setValues(t);
			}
			get sheen() {
				return this._sheen;
			}
			set sheen(t) {
				this._sheen > 0 != t > 0 && this.version++, (this._sheen = t);
			}
			get clearcoat() {
				return this._clearcoat;
			}
			set clearcoat(t) {
				this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t);
			}
			get transmission() {
				return this._transmission;
			}
			set transmission(t) {
				this._transmission > 0 != t > 0 && this.version++,
					(this._transmission = t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.defines = { STANDARD: "", PHYSICAL: "" }),
					(this.clearcoat = t.clearcoat),
					(this.clearcoatMap = t.clearcoatMap),
					(this.clearcoatRoughness = t.clearcoatRoughness),
					(this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
					(this.clearcoatNormalMap = t.clearcoatNormalMap),
					this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
					(this.ior = t.ior),
					(this.sheen = t.sheen),
					this.sheenColor.copy(t.sheenColor),
					(this.sheenColorMap = t.sheenColorMap),
					(this.sheenRoughness = t.sheenRoughness),
					(this.sheenRoughnessMap = t.sheenRoughnessMap),
					(this.transmission = t.transmission),
					(this.transmissionMap = t.transmissionMap),
					(this.thickness = t.thickness),
					(this.thicknessMap = t.thicknessMap),
					(this.attenuationDistance = t.attenuationDistance),
					this.attenuationColor.copy(t.attenuationColor),
					(this.specularIntensity = t.specularIntensity),
					(this.specularIntensityMap = t.specularIntensityMap),
					this.specularColor.copy(t.specularColor),
					(this.specularColorMap = t.specularColorMap),
					this
				);
			}
		}
		Vl.prototype.isMeshPhysicalMaterial = !0;
		class Wl extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshPhongMaterial"),
					(this.color = new Ut(16777215)),
					(this.specular = new Ut(1118481)),
					(this.shininess = 30),
					(this.map = null),
					(this.lightMap = null),
					(this.lightMapIntensity = 1),
					(this.aoMap = null),
					(this.aoMapIntensity = 1),
					(this.emissive = new Ut(0)),
					(this.emissiveIntensity = 1),
					(this.emissiveMap = null),
					(this.bumpMap = null),
					(this.bumpScale = 1),
					(this.normalMap = null),
					(this.normalMapType = 0),
					(this.normalScale = new At(1, 1)),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.specularMap = null),
					(this.alphaMap = null),
					(this.envMap = null),
					(this.combine = 0),
					(this.reflectivity = 1),
					(this.refractionRatio = 0.98),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.wireframeLinecap = "round"),
					(this.wireframeLinejoin = "round"),
					(this.flatShading = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					this.specular.copy(t.specular),
					(this.shininess = t.shininess),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					(this.flatShading = t.flatShading),
					this
				);
			}
		}
		Wl.prototype.isMeshPhongMaterial = !0;
		class jl extends dn {
			constructor(t) {
				super(),
					(this.defines = { TOON: "" }),
					(this.type = "MeshToonMaterial"),
					(this.color = new Ut(16777215)),
					(this.map = null),
					(this.gradientMap = null),
					(this.lightMap = null),
					(this.lightMapIntensity = 1),
					(this.aoMap = null),
					(this.aoMapIntensity = 1),
					(this.emissive = new Ut(0)),
					(this.emissiveIntensity = 1),
					(this.emissiveMap = null),
					(this.bumpMap = null),
					(this.bumpScale = 1),
					(this.normalMap = null),
					(this.normalMapType = 0),
					(this.normalScale = new At(1, 1)),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.alphaMap = null),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.wireframeLinecap = "round"),
					(this.wireframeLinejoin = "round"),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.gradientMap = t.gradientMap),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					this
				);
			}
		}
		jl.prototype.isMeshToonMaterial = !0;
		class ql extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshNormalMaterial"),
					(this.bumpMap = null),
					(this.bumpScale = 1),
					(this.normalMap = null),
					(this.normalMapType = 0),
					(this.normalScale = new At(1, 1)),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.fog = !1),
					(this.flatShading = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.flatShading = t.flatShading),
					this
				);
			}
		}
		ql.prototype.isMeshNormalMaterial = !0;
		class Xl extends dn {
			constructor(t) {
				super(),
					(this.type = "MeshLambertMaterial"),
					(this.color = new Ut(16777215)),
					(this.map = null),
					(this.lightMap = null),
					(this.lightMapIntensity = 1),
					(this.aoMap = null),
					(this.aoMapIntensity = 1),
					(this.emissive = new Ut(0)),
					(this.emissiveIntensity = 1),
					(this.emissiveMap = null),
					(this.specularMap = null),
					(this.alphaMap = null),
					(this.envMap = null),
					(this.combine = 0),
					(this.reflectivity = 1),
					(this.refractionRatio = 0.98),
					(this.wireframe = !1),
					(this.wireframeLinewidth = 1),
					(this.wireframeLinecap = "round"),
					(this.wireframeLinejoin = "round"),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.map = t.map),
					(this.lightMap = t.lightMap),
					(this.lightMapIntensity = t.lightMapIntensity),
					(this.aoMap = t.aoMap),
					(this.aoMapIntensity = t.aoMapIntensity),
					this.emissive.copy(t.emissive),
					(this.emissiveMap = t.emissiveMap),
					(this.emissiveIntensity = t.emissiveIntensity),
					(this.specularMap = t.specularMap),
					(this.alphaMap = t.alphaMap),
					(this.envMap = t.envMap),
					(this.combine = t.combine),
					(this.reflectivity = t.reflectivity),
					(this.refractionRatio = t.refractionRatio),
					(this.wireframe = t.wireframe),
					(this.wireframeLinewidth = t.wireframeLinewidth),
					(this.wireframeLinecap = t.wireframeLinecap),
					(this.wireframeLinejoin = t.wireframeLinejoin),
					this
				);
			}
		}
		Xl.prototype.isMeshLambertMaterial = !0;
		class Jl extends dn {
			constructor(t) {
				super(),
					(this.defines = { MATCAP: "" }),
					(this.type = "MeshMatcapMaterial"),
					(this.color = new Ut(16777215)),
					(this.matcap = null),
					(this.map = null),
					(this.bumpMap = null),
					(this.bumpScale = 1),
					(this.normalMap = null),
					(this.normalMapType = 0),
					(this.normalScale = new At(1, 1)),
					(this.displacementMap = null),
					(this.displacementScale = 1),
					(this.displacementBias = 0),
					(this.alphaMap = null),
					(this.flatShading = !1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.defines = { MATCAP: "" }),
					this.color.copy(t.color),
					(this.matcap = t.matcap),
					(this.map = t.map),
					(this.bumpMap = t.bumpMap),
					(this.bumpScale = t.bumpScale),
					(this.normalMap = t.normalMap),
					(this.normalMapType = t.normalMapType),
					this.normalScale.copy(t.normalScale),
					(this.displacementMap = t.displacementMap),
					(this.displacementScale = t.displacementScale),
					(this.displacementBias = t.displacementBias),
					(this.alphaMap = t.alphaMap),
					(this.flatShading = t.flatShading),
					this
				);
			}
		}
		Jl.prototype.isMeshMatcapMaterial = !0;
		class Yl extends Za {
			constructor(t) {
				super(),
					(this.type = "LineDashedMaterial"),
					(this.scale = 1),
					(this.dashSize = 3),
					(this.gapSize = 1),
					this.setValues(t);
			}
			copy(t) {
				return (
					super.copy(t),
					(this.scale = t.scale),
					(this.dashSize = t.dashSize),
					(this.gapSize = t.gapSize),
					this
				);
			}
		}
		Yl.prototype.isLineDashedMaterial = !0;
		var Zl = Object.freeze({
			__proto__: null,
			ShadowMaterial: Gl,
			SpriteMaterial: ma,
			RawShaderMaterial: Pi,
			ShaderMaterial: ri,
			PointsMaterial: oo,
			MeshPhysicalMaterial: Vl,
			MeshStandardMaterial: kl,
			MeshPhongMaterial: Wl,
			MeshToonMaterial: jl,
			MeshNormalMaterial: ql,
			MeshLambertMaterial: Xl,
			MeshDepthMaterial: Xs,
			MeshDistanceMaterial: Js,
			MeshBasicMaterial: pn,
			MeshMatcapMaterial: Jl,
			LineDashedMaterial: Yl,
			LineBasicMaterial: Za,
			Material: dn,
		});
		const Kl = {
			arraySlice: function (t, e, n) {
				return Kl.isTypedArray(t)
					? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
					: t.slice(e, n);
			},
			convertArray: function (t, e, n) {
				return !t || (!n && t.constructor === e)
					? t
					: "number" == typeof e.BYTES_PER_ELEMENT
					? new e(t)
					: Array.prototype.slice.call(t);
			},
			isTypedArray: function (t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView);
			},
			getKeyframeOrder: function (t) {
				const e = t.length,
					n = new Array(e);
				for (let t = 0; t !== e; ++t) n[t] = t;
				return (
					n.sort(function (e, n) {
						return t[e] - t[n];
					}),
					n
				);
			},
			sortedArray: function (t, e, n) {
				const i = t.length,
					r = new t.constructor(i);
				for (let s = 0, a = 0; a !== i; ++s) {
					const i = n[s] * e;
					for (let n = 0; n !== e; ++n) r[a++] = t[i + n];
				}
				return r;
			},
			flattenJSON: function (t, e, n, i) {
				let r = 1,
					s = t[0];
				for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
				if (void 0 === s) return;
				let a = s[i];
				if (void 0 !== a)
					if (Array.isArray(a))
						do {
							(a = s[i]),
								void 0 !== a && (e.push(s.time), n.push.apply(n, a)),
								(s = t[r++]);
						} while (void 0 !== s);
					else if (void 0 !== a.toArray)
						do {
							(a = s[i]),
								void 0 !== a && (e.push(s.time), a.toArray(n, n.length)),
								(s = t[r++]);
						} while (void 0 !== s);
					else
						do {
							(a = s[i]),
								void 0 !== a && (e.push(s.time), n.push(a)),
								(s = t[r++]);
						} while (void 0 !== s);
			},
			subclip: function (t, e, n, i, r = 30) {
				const s = t.clone();
				s.name = e;
				const a = [];
				for (let t = 0; t < s.tracks.length; ++t) {
					const e = s.tracks[t],
						o = e.getValueSize(),
						l = [],
						c = [];
					for (let t = 0; t < e.times.length; ++t) {
						const s = e.times[t] * r;
						if (!(s < n || s >= i)) {
							l.push(e.times[t]);
							for (let n = 0; n < o; ++n) c.push(e.values[t * o + n]);
						}
					}
					0 !== l.length &&
						((e.times = Kl.convertArray(l, e.times.constructor)),
						(e.values = Kl.convertArray(c, e.values.constructor)),
						a.push(e));
				}
				s.tracks = a;
				let o = 1 / 0;
				for (let t = 0; t < s.tracks.length; ++t)
					o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
				for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
				return s.resetDuration(), s;
			},
			makeClipAdditive: function (t, e = 0, n = t, i = 30) {
				i <= 0 && (i = 30);
				const r = n.tracks.length,
					s = e / i;
				for (let e = 0; e < r; ++e) {
					const i = n.tracks[e],
						r = i.ValueTypeName;
					if ("bool" === r || "string" === r) continue;
					const a = t.tracks.find(function (t) {
						return t.name === i.name && t.ValueTypeName === r;
					});
					if (void 0 === a) continue;
					let o = 0;
					const l = i.getValueSize();
					i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
						(o = l / 3);
					let c = 0;
					const h = a.getValueSize();
					a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
						(c = h / 3);
					const u = i.times.length - 1;
					let d;
					if (s <= i.times[0]) {
						const t = o,
							e = l - o;
						d = Kl.arraySlice(i.values, t, e);
					} else if (s >= i.times[u]) {
						const t = u * l + o,
							e = t + l - o;
						d = Kl.arraySlice(i.values, t, e);
					} else {
						const t = i.createInterpolant(),
							e = o,
							n = l - o;
						t.evaluate(s), (d = Kl.arraySlice(t.resultBuffer, e, n));
					}
					if ("quaternion" === r) {
						new Yt().fromArray(d).normalize().conjugate().toArray(d);
					}
					const p = a.times.length;
					for (let t = 0; t < p; ++t) {
						const e = t * h + c;
						if ("quaternion" === r)
							Yt.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
						else {
							const t = h - 2 * c;
							for (let n = 0; n < t; ++n) a.values[e + n] -= d[n];
						}
					}
				}
				return (t.blendMode = at), t;
			},
		};
		class Ql {
			constructor(t, e, n, i) {
				(this.parameterPositions = t),
					(this._cachedIndex = 0),
					(this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
					(this.sampleValues = e),
					(this.valueSize = n),
					(this.settings = null),
					(this.DefaultSettings_ = {});
			}
			evaluate(t) {
				const e = this.parameterPositions;
				let n = this._cachedIndex,
					i = e[n],
					r = e[n - 1];
				t: {
					e: {
						let s;
						n: {
							i: if (!(t < i)) {
								for (let s = n + 2; ; ) {
									if (void 0 === i) {
										if (t < r) break i;
										return (
											(n = e.length),
											(this._cachedIndex = n),
											this.afterEnd_(n - 1, t, r)
										);
									}
									if (n === s) break;
									if (((r = i), (i = e[++n]), t < i)) break e;
								}
								s = e.length;
								break n;
							}
							if (t >= r) break t;
							{
								const a = e[1];
								t < a && ((n = 2), (r = a));
								for (let s = n - 2; ; ) {
									if (void 0 === r)
										return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
									if (n === s) break;
									if (((i = r), (r = e[--n - 1]), t >= r)) break e;
								}
								(s = n), (n = 0);
							}
						}
						for (; n < s; ) {
							const i = (n + s) >>> 1;
							t < e[i] ? (s = i) : (n = i + 1);
						}
						if (((i = e[n]), (r = e[n - 1]), void 0 === r))
							return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
						if (void 0 === i)
							return (
								(n = e.length),
								(this._cachedIndex = n),
								this.afterEnd_(n - 1, r, t)
							);
					}
					(this._cachedIndex = n), this.intervalChanged_(n, r, i);
				}
				return this.interpolate_(n, r, t, i);
			}
			getSettings_() {
				return this.settings || this.DefaultSettings_;
			}
			copySampleValue_(t) {
				const e = this.resultBuffer,
					n = this.sampleValues,
					i = this.valueSize,
					r = t * i;
				for (let t = 0; t !== i; ++t) e[t] = n[r + t];
				return e;
			}
			interpolate_() {
				throw new Error("call to abstract method");
			}
			intervalChanged_() {}
		}
		(Ql.prototype.beforeStart_ = Ql.prototype.copySampleValue_),
			(Ql.prototype.afterEnd_ = Ql.prototype.copySampleValue_);
		class $l extends Ql {
			constructor(t, e, n, i) {
				super(t, e, n, i),
					(this._weightPrev = -0),
					(this._offsetPrev = -0),
					(this._weightNext = -0),
					(this._offsetNext = -0),
					(this.DefaultSettings_ = { endingStart: nt, endingEnd: nt });
			}
			intervalChanged_(t, e, n) {
				const i = this.parameterPositions;
				let r = t - 2,
					s = t + 1,
					a = i[r],
					o = i[s];
				if (void 0 === a)
					switch (this.getSettings_().endingStart) {
						case it:
							(r = t), (a = 2 * e - n);
							break;
						case rt:
							(r = i.length - 2), (a = e + i[r] - i[r + 1]);
							break;
						default:
							(r = t), (a = n);
					}
				if (void 0 === o)
					switch (this.getSettings_().endingEnd) {
						case it:
							(s = t), (o = 2 * n - e);
							break;
						case rt:
							(s = 1), (o = n + i[1] - i[0]);
							break;
						default:
							(s = t - 1), (o = e);
					}
				const l = 0.5 * (n - e),
					c = this.valueSize;
				(this._weightPrev = l / (e - a)),
					(this._weightNext = l / (o - n)),
					(this._offsetPrev = r * c),
					(this._offsetNext = s * c);
			}
			interpolate_(t, e, n, i) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = t * a,
					l = o - a,
					c = this._offsetPrev,
					h = this._offsetNext,
					u = this._weightPrev,
					d = this._weightNext,
					p = (n - e) / (i - e),
					m = p * p,
					f = m * p,
					g = -u * f + 2 * u * m - u * p,
					v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
					y = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
					x = d * f - d * m;
				for (let t = 0; t !== a; ++t)
					r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
				return r;
			}
		}
		class tc extends Ql {
			constructor(t, e, n, i) {
				super(t, e, n, i);
			}
			interpolate_(t, e, n, i) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = t * a,
					l = o - a,
					c = (n - e) / (i - e),
					h = 1 - c;
				for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
				return r;
			}
		}
		class ec extends Ql {
			constructor(t, e, n, i) {
				super(t, e, n, i);
			}
			interpolate_(t) {
				return this.copySampleValue_(t - 1);
			}
		}
		class nc {
			constructor(t, e, n, i) {
				if (void 0 === t)
					throw new Error("THREE.KeyframeTrack: track name is undefined");
				if (void 0 === e || 0 === e.length)
					throw new Error(
						"THREE.KeyframeTrack: no keyframes in track named " + t
					);
				(this.name = t),
					(this.times = Kl.convertArray(e, this.TimeBufferType)),
					(this.values = Kl.convertArray(n, this.ValueBufferType)),
					this.setInterpolation(i || this.DefaultInterpolation);
			}
			static toJSON(t) {
				const e = t.constructor;
				let n;
				if (e.toJSON !== this.toJSON) n = e.toJSON(t);
				else {
					n = {
						name: t.name,
						times: Kl.convertArray(t.times, Array),
						values: Kl.convertArray(t.values, Array),
					};
					const e = t.getInterpolation();
					e !== t.DefaultInterpolation && (n.interpolation = e);
				}
				return (n.type = t.ValueTypeName), n;
			}
			InterpolantFactoryMethodDiscrete(t) {
				return new ec(this.times, this.values, this.getValueSize(), t);
			}
			InterpolantFactoryMethodLinear(t) {
				return new tc(this.times, this.values, this.getValueSize(), t);
			}
			InterpolantFactoryMethodSmooth(t) {
				return new $l(this.times, this.values, this.getValueSize(), t);
			}
			setInterpolation(t) {
				let e;
				switch (t) {
					case $:
						e = this.InterpolantFactoryMethodDiscrete;
						break;
					case tt:
						e = this.InterpolantFactoryMethodLinear;
						break;
					case et:
						e = this.InterpolantFactoryMethodSmooth;
				}
				if (void 0 === e) {
					const e =
						"unsupported interpolation for " +
						this.ValueTypeName +
						" keyframe track named " +
						this.name;
					if (void 0 === this.createInterpolant) {
						if (t === this.DefaultInterpolation) throw new Error(e);
						this.setInterpolation(this.DefaultInterpolation);
					}
					return console.warn("THREE.KeyframeTrack:", e), this;
				}
				return (this.createInterpolant = e), this;
			}
			getInterpolation() {
				switch (this.createInterpolant) {
					case this.InterpolantFactoryMethodDiscrete:
						return $;
					case this.InterpolantFactoryMethodLinear:
						return tt;
					case this.InterpolantFactoryMethodSmooth:
						return et;
				}
			}
			getValueSize() {
				return this.values.length / this.times.length;
			}
			shift(t) {
				if (0 !== t) {
					const e = this.times;
					for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
				}
				return this;
			}
			scale(t) {
				if (1 !== t) {
					const e = this.times;
					for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
				}
				return this;
			}
			trim(t, e) {
				const n = this.times,
					i = n.length;
				let r = 0,
					s = i - 1;
				for (; r !== i && n[r] < t; ) ++r;
				for (; -1 !== s && n[s] > e; ) --s;
				if ((++s, 0 !== r || s !== i)) {
					r >= s && ((s = Math.max(s, 1)), (r = s - 1));
					const t = this.getValueSize();
					(this.times = Kl.arraySlice(n, r, s)),
						(this.values = Kl.arraySlice(this.values, r * t, s * t));
				}
				return this;
			}
			validate() {
				let t = !0;
				const e = this.getValueSize();
				e - Math.floor(e) != 0 &&
					(console.error(
						"THREE.KeyframeTrack: Invalid value size in track.",
						this
					),
					(t = !1));
				const n = this.times,
					i = this.values,
					r = n.length;
				0 === r &&
					(console.error("THREE.KeyframeTrack: Track is empty.", this),
					(t = !1));
				let s = null;
				for (let e = 0; e !== r; e++) {
					const i = n[e];
					if ("number" == typeof i && isNaN(i)) {
						console.error(
							"THREE.KeyframeTrack: Time is not a valid number.",
							this,
							e,
							i
						),
							(t = !1);
						break;
					}
					if (null !== s && s > i) {
						console.error(
							"THREE.KeyframeTrack: Out of order keys.",
							this,
							e,
							i,
							s
						),
							(t = !1);
						break;
					}
					s = i;
				}
				if (void 0 !== i && Kl.isTypedArray(i))
					for (let e = 0, n = i.length; e !== n; ++e) {
						const n = i[e];
						if (isNaN(n)) {
							console.error(
								"THREE.KeyframeTrack: Value is not a valid number.",
								this,
								e,
								n
							),
								(t = !1);
							break;
						}
					}
				return t;
			}
			optimize() {
				const t = Kl.arraySlice(this.times),
					e = Kl.arraySlice(this.values),
					n = this.getValueSize(),
					i = this.getInterpolation() === et,
					r = t.length - 1;
				let s = 1;
				for (let a = 1; a < r; ++a) {
					let r = !1;
					const o = t[a];
					if (o !== t[a + 1] && (1 !== a || o !== t[0]))
						if (i) r = !0;
						else {
							const t = a * n,
								i = t - n,
								s = t + n;
							for (let a = 0; a !== n; ++a) {
								const n = e[t + a];
								if (n !== e[i + a] || n !== e[s + a]) {
									r = !0;
									break;
								}
							}
						}
					if (r) {
						if (a !== s) {
							t[s] = t[a];
							const i = a * n,
								r = s * n;
							for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
						}
						++s;
					}
				}
				if (r > 0) {
					t[s] = t[r];
					for (let t = r * n, i = s * n, a = 0; a !== n; ++a)
						e[i + a] = e[t + a];
					++s;
				}
				return (
					s !== t.length
						? ((this.times = Kl.arraySlice(t, 0, s)),
						  (this.values = Kl.arraySlice(e, 0, s * n)))
						: ((this.times = t), (this.values = e)),
					this
				);
			}
			clone() {
				const t = Kl.arraySlice(this.times, 0),
					e = Kl.arraySlice(this.values, 0),
					n = new (0, this.constructor)(this.name, t, e);
				return (n.createInterpolant = this.createInterpolant), n;
			}
		}
		(nc.prototype.TimeBufferType = Float32Array),
			(nc.prototype.ValueBufferType = Float32Array),
			(nc.prototype.DefaultInterpolation = tt);
		class ic extends nc {}
		(ic.prototype.ValueTypeName = "bool"),
			(ic.prototype.ValueBufferType = Array),
			(ic.prototype.DefaultInterpolation = $),
			(ic.prototype.InterpolantFactoryMethodLinear = void 0),
			(ic.prototype.InterpolantFactoryMethodSmooth = void 0);
		class rc extends nc {}
		rc.prototype.ValueTypeName = "color";
		class sc extends nc {}
		sc.prototype.ValueTypeName = "number";
		class ac extends Ql {
			constructor(t, e, n, i) {
				super(t, e, n, i);
			}
			interpolate_(t, e, n, i) {
				const r = this.resultBuffer,
					s = this.sampleValues,
					a = this.valueSize,
					o = (n - e) / (i - e);
				let l = t * a;
				for (let t = l + a; l !== t; l += 4)
					Yt.slerpFlat(r, 0, s, l - a, s, l, o);
				return r;
			}
		}
		class oc extends nc {
			InterpolantFactoryMethodLinear(t) {
				return new ac(this.times, this.values, this.getValueSize(), t);
			}
		}
		(oc.prototype.ValueTypeName = "quaternion"),
			(oc.prototype.DefaultInterpolation = tt),
			(oc.prototype.InterpolantFactoryMethodSmooth = void 0);
		class lc extends nc {}
		(lc.prototype.ValueTypeName = "string"),
			(lc.prototype.ValueBufferType = Array),
			(lc.prototype.DefaultInterpolation = $),
			(lc.prototype.InterpolantFactoryMethodLinear = void 0),
			(lc.prototype.InterpolantFactoryMethodSmooth = void 0);
		class cc extends nc {}
		cc.prototype.ValueTypeName = "vector";
		class hc {
			constructor(t, e = -1, n, i = 2500) {
				(this.name = t),
					(this.tracks = n),
					(this.duration = e),
					(this.blendMode = i),
					(this.uuid = xt()),
					this.duration < 0 && this.resetDuration();
			}
			static parse(t) {
				const e = [],
					n = t.tracks,
					i = 1 / (t.fps || 1);
				for (let t = 0, r = n.length; t !== r; ++t) e.push(uc(n[t]).scale(i));
				const r = new this(t.name, t.duration, e, t.blendMode);
				return (r.uuid = t.uuid), r;
			}
			static toJSON(t) {
				const e = [],
					n = t.tracks,
					i = {
						name: t.name,
						duration: t.duration,
						tracks: e,
						uuid: t.uuid,
						blendMode: t.blendMode,
					};
				for (let t = 0, i = n.length; t !== i; ++t) e.push(nc.toJSON(n[t]));
				return i;
			}
			static CreateFromMorphTargetSequence(t, e, n, i) {
				const r = e.length,
					s = [];
				for (let t = 0; t < r; t++) {
					let a = [],
						o = [];
					a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
					const l = Kl.getKeyframeOrder(a);
					(a = Kl.sortedArray(a, 1, l)),
						(o = Kl.sortedArray(o, 1, l)),
						i || 0 !== a[0] || (a.push(r), o.push(o[0])),
						s.push(
							new sc(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(
								1 / n
							)
						);
				}
				return new this(t, -1, s);
			}
			static findByName(t, e) {
				let n = t;
				if (!Array.isArray(t)) {
					const e = t;
					n = (e.geometry && e.geometry.animations) || e.animations;
				}
				for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
				return null;
			}
			static CreateClipsFromMorphTargetSequences(t, e, n) {
				const i = {},
					r = /^([\w-]*?)([\d]+)$/;
				for (let e = 0, n = t.length; e < n; e++) {
					const n = t[e],
						s = n.name.match(r);
					if (s && s.length > 1) {
						const t = s[1];
						let e = i[t];
						e || (i[t] = e = []), e.push(n);
					}
				}
				const s = [];
				for (const t in i)
					s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
				return s;
			}
			static parseAnimation(t, e) {
				if (!t)
					return (
						console.error(
							"THREE.AnimationClip: No animation in JSONLoader data."
						),
						null
					);
				const n = function (t, e, n, i, r) {
						if (0 !== n.length) {
							const s = [],
								a = [];
							Kl.flattenJSON(n, s, a, i),
								0 !== s.length && r.push(new t(e, s, a));
						}
					},
					i = [],
					r = t.name || "default",
					s = t.fps || 30,
					a = t.blendMode;
				let o = t.length || -1;
				const l = t.hierarchy || [];
				for (let t = 0; t < l.length; t++) {
					const r = l[t].keys;
					if (r && 0 !== r.length)
						if (r[0].morphTargets) {
							const t = {};
							let e;
							for (e = 0; e < r.length; e++)
								if (r[e].morphTargets)
									for (let n = 0; n < r[e].morphTargets.length; n++)
										t[r[e].morphTargets[n]] = -1;
							for (const n in t) {
								const t = [],
									s = [];
								for (let i = 0; i !== r[e].morphTargets.length; ++i) {
									const i = r[e];
									t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
								}
								i.push(new sc(".morphTargetInfluence[" + n + "]", t, s));
							}
							o = t.length * (s || 1);
						} else {
							const s = ".bones[" + e[t].name + "]";
							n(cc, s + ".position", r, "pos", i),
								n(oc, s + ".quaternion", r, "rot", i),
								n(cc, s + ".scale", r, "scl", i);
						}
				}
				if (0 === i.length) return null;
				return new this(r, o, i, a);
			}
			resetDuration() {
				let t = 0;
				for (let e = 0, n = this.tracks.length; e !== n; ++e) {
					const n = this.tracks[e];
					t = Math.max(t, n.times[n.times.length - 1]);
				}
				return (this.duration = t), this;
			}
			trim() {
				for (let t = 0; t < this.tracks.length; t++)
					this.tracks[t].trim(0, this.duration);
				return this;
			}
			validate() {
				let t = !0;
				for (let e = 0; e < this.tracks.length; e++)
					t = t && this.tracks[e].validate();
				return t;
			}
			optimize() {
				for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
				return this;
			}
			clone() {
				const t = [];
				for (let e = 0; e < this.tracks.length; e++)
					t.push(this.tracks[e].clone());
				return new this.constructor(
					this.name,
					this.duration,
					t,
					this.blendMode
				);
			}
			toJSON() {
				return this.constructor.toJSON(this);
			}
		}
		function uc(t) {
			if (void 0 === t.type)
				throw new Error(
					"THREE.KeyframeTrack: track type undefined, can not parse"
				);
			const e = (function (t) {
				switch (t.toLowerCase()) {
					case "scalar":
					case "double":
					case "float":
					case "number":
					case "integer":
						return sc;
					case "vector":
					case "vector2":
					case "vector3":
					case "vector4":
						return cc;
					case "color":
						return rc;
					case "quaternion":
						return oc;
					case "bool":
					case "boolean":
						return ic;
					case "string":
						return lc;
				}
				throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
			})(t.type);
			if (void 0 === t.times) {
				const e = [],
					n = [];
				Kl.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
			}
			return void 0 !== e.parse
				? e.parse(t)
				: new e(t.name, t.times, t.values, t.interpolation);
		}
		const dc = {
			enabled: !1,
			files: {},
			add: function (t, e) {
				!1 !== this.enabled && (this.files[t] = e);
			},
			get: function (t) {
				if (!1 !== this.enabled) return this.files[t];
			},
			remove: function (t) {
				delete this.files[t];
			},
			clear: function () {
				this.files = {};
			},
		};
		class pc {
			constructor(t, e, n) {
				const i = this;
				let r,
					s = !1,
					a = 0,
					o = 0;
				const l = [];
				(this.onStart = void 0),
					(this.onLoad = t),
					(this.onProgress = e),
					(this.onError = n),
					(this.itemStart = function (t) {
						o++,
							!1 === s && void 0 !== i.onStart && i.onStart(t, a, o),
							(s = !0);
					}),
					(this.itemEnd = function (t) {
						a++,
							void 0 !== i.onProgress && i.onProgress(t, a, o),
							a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
					}),
					(this.itemError = function (t) {
						void 0 !== i.onError && i.onError(t);
					}),
					(this.resolveURL = function (t) {
						return r ? r(t) : t;
					}),
					(this.setURLModifier = function (t) {
						return (r = t), this;
					}),
					(this.addHandler = function (t, e) {
						return l.push(t, e), this;
					}),
					(this.removeHandler = function (t) {
						const e = l.indexOf(t);
						return -1 !== e && l.splice(e, 2), this;
					}),
					(this.getHandler = function (t) {
						for (let e = 0, n = l.length; e < n; e += 2) {
							const n = l[e],
								i = l[e + 1];
							if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
						}
						return null;
					});
			}
		}
		const mc = new pc();
		class fc {
			constructor(t) {
				(this.manager = void 0 !== t ? t : mc),
					(this.crossOrigin = "anonymous"),
					(this.withCredentials = !1),
					(this.path = ""),
					(this.resourcePath = ""),
					(this.requestHeader = {});
			}
			load() {}
			loadAsync(t, e) {
				const n = this;
				return new Promise(function (i, r) {
					n.load(t, i, e, r);
				});
			}
			parse() {}
			setCrossOrigin(t) {
				return (this.crossOrigin = t), this;
			}
			setWithCredentials(t) {
				return (this.withCredentials = t), this;
			}
			setPath(t) {
				return (this.path = t), this;
			}
			setResourcePath(t) {
				return (this.resourcePath = t), this;
			}
			setRequestHeader(t) {
				return (this.requestHeader = t), this;
			}
		}
		const gc = {};
		class vc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				void 0 === t && (t = ""),
					void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				const r = dc.get(t);
				if (void 0 !== r)
					return (
						this.manager.itemStart(t),
						setTimeout(() => {
							e && e(r), this.manager.itemEnd(t);
						}, 0),
						r
					);
				if (void 0 !== gc[t])
					return void gc[t].push({ onLoad: e, onProgress: n, onError: i });
				(gc[t] = []), gc[t].push({ onLoad: e, onProgress: n, onError: i });
				const s = new Request(t, {
						headers: new Headers(this.requestHeader),
						credentials: this.withCredentials ? "include" : "same-origin",
					}),
					a = this.mimeType,
					o = this.responseType;
				fetch(s)
					.then((e) => {
						if (200 === e.status || 0 === e.status) {
							if (
								(0 === e.status &&
									console.warn("THREE.FileLoader: HTTP Status 0 received."),
								"undefined" == typeof ReadableStream ||
									void 0 === e.body.getReader)
							)
								return e;
							const n = gc[t],
								i = e.body.getReader(),
								r = e.headers.get("Content-Length"),
								s = r ? parseInt(r) : 0,
								a = 0 !== s;
							let o = 0;
							const l = new ReadableStream({
								start(t) {
									!(function e() {
										i.read().then(({ done: i, value: r }) => {
											if (i) t.close();
											else {
												o += r.byteLength;
												const i = new ProgressEvent("progress", {
													lengthComputable: a,
													loaded: o,
													total: s,
												});
												for (let t = 0, e = n.length; t < e; t++) {
													const e = n[t];
													e.onProgress && e.onProgress(i);
												}
												t.enqueue(r), e();
											}
										});
									})();
								},
							});
							return new Response(l);
						}
						throw Error(
							`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`
						);
					})
					.then((t) => {
						switch (o) {
							case "arraybuffer":
								return t.arrayBuffer();
							case "blob":
								return t.blob();
							case "document":
								return t
									.text()
									.then((t) => new DOMParser().parseFromString(t, a));
							case "json":
								return t.json();
							default:
								if (void 0 === a) return t.text();
								{
									const e = /charset="?([^;"\s]*)"?/i.exec(a),
										n = e && e[1] ? e[1].toLowerCase() : void 0,
										i = new TextDecoder(n);
									return t.arrayBuffer().then((t) => i.decode(t));
								}
						}
					})
					.then((e) => {
						dc.add(t, e);
						const n = gc[t];
						delete gc[t];
						for (let t = 0, i = n.length; t < i; t++) {
							const i = n[t];
							i.onLoad && i.onLoad(e);
						}
					})
					.catch((e) => {
						const n = gc[t];
						if (void 0 === n) throw (this.manager.itemError(t), e);
						delete gc[t];
						for (let t = 0, i = n.length; t < i; t++) {
							const i = n[t];
							i.onError && i.onError(e);
						}
						this.manager.itemError(t);
					})
					.finally(() => {
						this.manager.itemEnd(t);
					}),
					this.manager.itemStart(t);
			}
			setResponseType(t) {
				return (this.responseType = t), this;
			}
			setMimeType(t) {
				return (this.mimeType = t), this;
			}
		}
		class yc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				const r = this,
					s = dc.get(t);
				if (void 0 !== s)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(s), r.manager.itemEnd(t);
						}, 0),
						s
					);
				const a = Dt("img");
				function o() {
					c(), dc.add(t, this), e && e(this), r.manager.itemEnd(t);
				}
				function l(e) {
					c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
				}
				function c() {
					a.removeEventListener("load", o, !1),
						a.removeEventListener("error", l, !1);
				}
				return (
					a.addEventListener("load", o, !1),
					a.addEventListener("error", l, !1),
					"data:" !== t.substr(0, 5) &&
						void 0 !== this.crossOrigin &&
						(a.crossOrigin = this.crossOrigin),
					r.manager.itemStart(t),
					(a.src = t),
					a
				);
			}
		}
		class xc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				const r = new ci(),
					s = new yc(this.manager);
				s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
				let a = 0;
				function o(n) {
					s.load(
						t[n],
						function (t) {
							(r.images[n] = t),
								a++,
								6 === a && ((r.needsUpdate = !0), e && e(r));
						},
						void 0,
						i
					);
				}
				for (let e = 0; e < t.length; ++e) o(e);
				return r;
			}
		}
		class _c extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				const r = this,
					s = new Ha(),
					a = new vc(this.manager);
				return (
					a.setResponseType("arraybuffer"),
					a.setRequestHeader(this.requestHeader),
					a.setPath(this.path),
					a.setWithCredentials(r.withCredentials),
					a.load(
						t,
						function (t) {
							const n = r.parse(t);
							n &&
								(void 0 !== n.image
									? (s.image = n.image)
									: void 0 !== n.data &&
									  ((s.image.width = n.width),
									  (s.image.height = n.height),
									  (s.image.data = n.data)),
								(s.wrapS = void 0 !== n.wrapS ? n.wrapS : u),
								(s.wrapT = void 0 !== n.wrapT ? n.wrapT : u),
								(s.magFilter = void 0 !== n.magFilter ? n.magFilter : g),
								(s.minFilter = void 0 !== n.minFilter ? n.minFilter : g),
								(s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
								void 0 !== n.encoding && (s.encoding = n.encoding),
								void 0 !== n.flipY && (s.flipY = n.flipY),
								void 0 !== n.format && (s.format = n.format),
								void 0 !== n.type && (s.type = n.type),
								void 0 !== n.mipmaps &&
									((s.mipmaps = n.mipmaps), (s.minFilter = y)),
								1 === n.mipmapCount && (s.minFilter = g),
								void 0 !== n.generateMipmaps &&
									(s.generateMipmaps = n.generateMipmaps),
								(s.needsUpdate = !0),
								e && e(s, n));
						},
						n,
						i
					),
					s
				);
			}
		}
		class Mc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				const r = new Vt(),
					s = new yc(this.manager);
				return (
					s.setCrossOrigin(this.crossOrigin),
					s.setPath(this.path),
					s.load(
						t,
						function (t) {
							(r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
						},
						n,
						i
					),
					r
				);
			}
		}
		class bc extends Qe {
			constructor(t, e = 1) {
				super(),
					(this.type = "Light"),
					(this.color = new Ut(t)),
					(this.intensity = e);
			}
			dispose() {}
			copy(t) {
				return (
					super.copy(t),
					this.color.copy(t.color),
					(this.intensity = t.intensity),
					this
				);
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					(e.object.color = this.color.getHex()),
					(e.object.intensity = this.intensity),
					void 0 !== this.groundColor &&
						(e.object.groundColor = this.groundColor.getHex()),
					void 0 !== this.distance && (e.object.distance = this.distance),
					void 0 !== this.angle && (e.object.angle = this.angle),
					void 0 !== this.decay && (e.object.decay = this.decay),
					void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
					void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
					e
				);
			}
		}
		bc.prototype.isLight = !0;
		class wc extends bc {
			constructor(t, e, n) {
				super(t, n),
					(this.type = "HemisphereLight"),
					this.position.copy(Qe.DefaultUp),
					this.updateMatrix(),
					(this.groundColor = new Ut(e));
			}
			copy(t) {
				return (
					bc.prototype.copy.call(this, t),
					this.groundColor.copy(t.groundColor),
					this
				);
			}
		}
		wc.prototype.isHemisphereLight = !0;
		const Sc = new Ae(),
			Tc = new Zt(),
			Ec = new Zt();
		class Ac {
			constructor(t) {
				(this.camera = t),
					(this.bias = 0),
					(this.normalBias = 0),
					(this.radius = 1),
					(this.blurSamples = 8),
					(this.mapSize = new At(512, 512)),
					(this.map = null),
					(this.mapPass = null),
					(this.matrix = new Ae()),
					(this.autoUpdate = !0),
					(this.needsUpdate = !1),
					(this._frustum = new vi()),
					(this._frameExtents = new At(1, 1)),
					(this._viewportCount = 1),
					(this._viewports = [new jt(0, 0, 1, 1)]);
			}
			getViewportCount() {
				return this._viewportCount;
			}
			getFrustum() {
				return this._frustum;
			}
			updateMatrices(t) {
				const e = this.camera,
					n = this.matrix;
				Tc.setFromMatrixPosition(t.matrixWorld),
					e.position.copy(Tc),
					Ec.setFromMatrixPosition(t.target.matrixWorld),
					e.lookAt(Ec),
					e.updateMatrixWorld(),
					Sc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
					this._frustum.setFromProjectionMatrix(Sc),
					n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
					n.multiply(e.projectionMatrix),
					n.multiply(e.matrixWorldInverse);
			}
			getViewport(t) {
				return this._viewports[t];
			}
			getFrameExtents() {
				return this._frameExtents;
			}
			dispose() {
				this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
			}
			copy(t) {
				return (
					(this.camera = t.camera.clone()),
					(this.bias = t.bias),
					(this.radius = t.radius),
					this.mapSize.copy(t.mapSize),
					this
				);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			toJSON() {
				const t = {};
				return (
					0 !== this.bias && (t.bias = this.bias),
					0 !== this.normalBias && (t.normalBias = this.normalBias),
					1 !== this.radius && (t.radius = this.radius),
					(512 === this.mapSize.x && 512 === this.mapSize.y) ||
						(t.mapSize = this.mapSize.toArray()),
					(t.camera = this.camera.toJSON(!1).object),
					delete t.camera.matrix,
					t
				);
			}
		}
		class Rc extends Ac {
			constructor() {
				super(new ai(50, 1, 0.5, 500)), (this.focus = 1);
			}
			updateMatrices(t) {
				const e = this.camera,
					n = 2 * yt * t.angle * this.focus,
					i = this.mapSize.width / this.mapSize.height,
					r = t.distance || e.far;
				(n === e.fov && i === e.aspect && r === e.far) ||
					((e.fov = n),
					(e.aspect = i),
					(e.far = r),
					e.updateProjectionMatrix()),
					super.updateMatrices(t);
			}
			copy(t) {
				return super.copy(t), (this.focus = t.focus), this;
			}
		}
		Rc.prototype.isSpotLightShadow = !0;
		class Lc extends bc {
			constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
				super(t, e),
					(this.type = "SpotLight"),
					this.position.copy(Qe.DefaultUp),
					this.updateMatrix(),
					(this.target = new Qe()),
					(this.distance = n),
					(this.angle = i),
					(this.penumbra = r),
					(this.decay = s),
					(this.shadow = new Rc());
			}
			get power() {
				return this.intensity * Math.PI;
			}
			set power(t) {
				this.intensity = t / Math.PI;
			}
			dispose() {
				this.shadow.dispose();
			}
			copy(t) {
				return (
					super.copy(t),
					(this.distance = t.distance),
					(this.angle = t.angle),
					(this.penumbra = t.penumbra),
					(this.decay = t.decay),
					(this.target = t.target.clone()),
					(this.shadow = t.shadow.clone()),
					this
				);
			}
		}
		Lc.prototype.isSpotLight = !0;
		const Cc = new Ae(),
			Pc = new Zt(),
			Dc = new Zt();
		class Ic extends Ac {
			constructor() {
				super(new ai(90, 1, 0.5, 500)),
					(this._frameExtents = new At(4, 2)),
					(this._viewportCount = 6),
					(this._viewports = [
						new jt(2, 1, 1, 1),
						new jt(0, 1, 1, 1),
						new jt(3, 1, 1, 1),
						new jt(1, 1, 1, 1),
						new jt(3, 0, 1, 1),
						new jt(1, 0, 1, 1),
					]),
					(this._cubeDirections = [
						new Zt(1, 0, 0),
						new Zt(-1, 0, 0),
						new Zt(0, 0, 1),
						new Zt(0, 0, -1),
						new Zt(0, 1, 0),
						new Zt(0, -1, 0),
					]),
					(this._cubeUps = [
						new Zt(0, 1, 0),
						new Zt(0, 1, 0),
						new Zt(0, 1, 0),
						new Zt(0, 1, 0),
						new Zt(0, 0, 1),
						new Zt(0, 0, -1),
					]);
			}
			updateMatrices(t, e = 0) {
				const n = this.camera,
					i = this.matrix,
					r = t.distance || n.far;
				r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
					Pc.setFromMatrixPosition(t.matrixWorld),
					n.position.copy(Pc),
					Dc.copy(n.position),
					Dc.add(this._cubeDirections[e]),
					n.up.copy(this._cubeUps[e]),
					n.lookAt(Dc),
					n.updateMatrixWorld(),
					i.makeTranslation(-Pc.x, -Pc.y, -Pc.z),
					Cc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
					this._frustum.setFromProjectionMatrix(Cc);
			}
		}
		Ic.prototype.isPointLightShadow = !0;
		class Nc extends bc {
			constructor(t, e, n = 0, i = 1) {
				super(t, e),
					(this.type = "PointLight"),
					(this.distance = n),
					(this.decay = i),
					(this.shadow = new Ic());
			}
			get power() {
				return 4 * this.intensity * Math.PI;
			}
			set power(t) {
				this.intensity = t / (4 * Math.PI);
			}
			dispose() {
				this.shadow.dispose();
			}
			copy(t) {
				return (
					super.copy(t),
					(this.distance = t.distance),
					(this.decay = t.decay),
					(this.shadow = t.shadow.clone()),
					this
				);
			}
		}
		Nc.prototype.isPointLight = !0;
		class Bc extends Ac {
			constructor() {
				super(new Ci(-5, 5, 5, -5, 0.5, 500));
			}
		}
		Bc.prototype.isDirectionalLightShadow = !0;
		class zc extends bc {
			constructor(t, e) {
				super(t, e),
					(this.type = "DirectionalLight"),
					this.position.copy(Qe.DefaultUp),
					this.updateMatrix(),
					(this.target = new Qe()),
					(this.shadow = new Bc());
			}
			dispose() {
				this.shadow.dispose();
			}
			copy(t) {
				return (
					super.copy(t),
					(this.target = t.target.clone()),
					(this.shadow = t.shadow.clone()),
					this
				);
			}
		}
		zc.prototype.isDirectionalLight = !0;
		class Oc extends bc {
			constructor(t, e) {
				super(t, e), (this.type = "AmbientLight");
			}
		}
		Oc.prototype.isAmbientLight = !0;
		class Fc extends bc {
			constructor(t, e, n = 10, i = 10) {
				super(t, e),
					(this.type = "RectAreaLight"),
					(this.width = n),
					(this.height = i);
			}
			get power() {
				return this.intensity * this.width * this.height * Math.PI;
			}
			set power(t) {
				this.intensity = t / (this.width * this.height * Math.PI);
			}
			copy(t) {
				return (
					super.copy(t), (this.width = t.width), (this.height = t.height), this
				);
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					(e.object.width = this.width), (e.object.height = this.height), e
				);
			}
		}
		Fc.prototype.isRectAreaLight = !0;
		class Uc {
			constructor() {
				this.coefficients = [];
				for (let t = 0; t < 9; t++) this.coefficients.push(new Zt());
			}
			set(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
				return this;
			}
			zero() {
				for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
				return this;
			}
			getAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					s = this.coefficients;
				return (
					e.copy(s[0]).multiplyScalar(0.282095),
					e.addScaledVector(s[1], 0.488603 * i),
					e.addScaledVector(s[2], 0.488603 * r),
					e.addScaledVector(s[3], 0.488603 * n),
					e.addScaledVector(s[4], n * i * 1.092548),
					e.addScaledVector(s[5], i * r * 1.092548),
					e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
					e.addScaledVector(s[7], n * r * 1.092548),
					e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
					e
				);
			}
			getIrradianceAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z,
					s = this.coefficients;
				return (
					e.copy(s[0]).multiplyScalar(0.886227),
					e.addScaledVector(s[1], 1.023328 * i),
					e.addScaledVector(s[2], 1.023328 * r),
					e.addScaledVector(s[3], 1.023328 * n),
					e.addScaledVector(s[4], 0.858086 * n * i),
					e.addScaledVector(s[5], 0.858086 * i * r),
					e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
					e.addScaledVector(s[7], 0.858086 * n * r),
					e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
					e
				);
			}
			add(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
				return this;
			}
			addScaledSH(t, e) {
				for (let n = 0; n < 9; n++)
					this.coefficients[n].addScaledVector(t.coefficients[n], e);
				return this;
			}
			scale(t) {
				for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
				return this;
			}
			lerp(t, e) {
				for (let n = 0; n < 9; n++)
					this.coefficients[n].lerp(t.coefficients[n], e);
				return this;
			}
			equals(t) {
				for (let e = 0; e < 9; e++)
					if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
				return !0;
			}
			copy(t) {
				return this.set(t.coefficients);
			}
			clone() {
				return new this.constructor().copy(this);
			}
			fromArray(t, e = 0) {
				const n = this.coefficients;
				for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
				return this;
			}
			toArray(t = [], e = 0) {
				const n = this.coefficients;
				for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
				return t;
			}
			static getBasisAt(t, e) {
				const n = t.x,
					i = t.y,
					r = t.z;
				(e[0] = 0.282095),
					(e[1] = 0.488603 * i),
					(e[2] = 0.488603 * r),
					(e[3] = 0.488603 * n),
					(e[4] = 1.092548 * n * i),
					(e[5] = 1.092548 * i * r),
					(e[6] = 0.315392 * (3 * r * r - 1)),
					(e[7] = 1.092548 * n * r),
					(e[8] = 0.546274 * (n * n - i * i));
			}
		}
		Uc.prototype.isSphericalHarmonics3 = !0;
		class Hc extends bc {
			constructor(t = new Uc(), e = 1) {
				super(void 0, e), (this.sh = t);
			}
			copy(t) {
				return super.copy(t), this.sh.copy(t.sh), this;
			}
			fromJSON(t) {
				return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (e.object.sh = this.sh.toArray()), e;
			}
		}
		Hc.prototype.isLightProbe = !0;
		class Gc extends fc {
			constructor(t) {
				super(t), (this.textures = {});
			}
			load(t, e, n, i) {
				const r = this,
					s = new vc(r.manager);
				s.setPath(r.path),
					s.setRequestHeader(r.requestHeader),
					s.setWithCredentials(r.withCredentials),
					s.load(
						t,
						function (n) {
							try {
								e(r.parse(JSON.parse(n)));
							} catch (e) {
								i ? i(e) : console.error(e), r.manager.itemError(t);
							}
						},
						n,
						i
					);
			}
			parse(t) {
				const e = this.textures;
				function n(t) {
					return (
						void 0 === e[t] &&
							console.warn("THREE.MaterialLoader: Undefined texture", t),
						e[t]
					);
				}
				const i = new Zl[t.type]();
				if (
					(void 0 !== t.uuid && (i.uuid = t.uuid),
					void 0 !== t.name && (i.name = t.name),
					void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color),
					void 0 !== t.roughness && (i.roughness = t.roughness),
					void 0 !== t.metalness && (i.metalness = t.metalness),
					void 0 !== t.sheen && (i.sheen = t.sheen),
					void 0 !== t.sheenColor &&
						(i.sheenColor = new Ut().setHex(t.sheenColor)),
					void 0 !== t.sheenRoughness && (i.sheenRoughness = t.sheenRoughness),
					void 0 !== t.emissive &&
						void 0 !== i.emissive &&
						i.emissive.setHex(t.emissive),
					void 0 !== t.specular &&
						void 0 !== i.specular &&
						i.specular.setHex(t.specular),
					void 0 !== t.specularIntensity &&
						(i.specularIntensity = t.specularIntensity),
					void 0 !== t.specularColor &&
						void 0 !== i.specularColor &&
						i.specularColor.setHex(t.specularColor),
					void 0 !== t.shininess && (i.shininess = t.shininess),
					void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat),
					void 0 !== t.clearcoatRoughness &&
						(i.clearcoatRoughness = t.clearcoatRoughness),
					void 0 !== t.transmission && (i.transmission = t.transmission),
					void 0 !== t.thickness && (i.thickness = t.thickness),
					void 0 !== t.attenuationDistance &&
						(i.attenuationDistance = t.attenuationDistance),
					void 0 !== t.attenuationColor &&
						void 0 !== i.attenuationColor &&
						i.attenuationColor.setHex(t.attenuationColor),
					void 0 !== t.fog && (i.fog = t.fog),
					void 0 !== t.flatShading && (i.flatShading = t.flatShading),
					void 0 !== t.blending && (i.blending = t.blending),
					void 0 !== t.combine && (i.combine = t.combine),
					void 0 !== t.side && (i.side = t.side),
					void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide),
					void 0 !== t.opacity && (i.opacity = t.opacity),
					void 0 !== t.transparent && (i.transparent = t.transparent),
					void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
					void 0 !== t.depthTest && (i.depthTest = t.depthTest),
					void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
					void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
					void 0 !== t.alphaWrite && (i.alphaWrite = t.alphaWrite),
					void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite),
					void 0 !== t.stencilWriteMask &&
						(i.stencilWriteMask = t.stencilWriteMask),
					void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc),
					void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef),
					void 0 !== t.stencilFuncMask &&
						(i.stencilFuncMask = t.stencilFuncMask),
					void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail),
					void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail),
					void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass),
					void 0 !== t.wireframe && (i.wireframe = t.wireframe),
					void 0 !== t.wireframeLinewidth &&
						(i.wireframeLinewidth = t.wireframeLinewidth),
					void 0 !== t.wireframeLinecap &&
						(i.wireframeLinecap = t.wireframeLinecap),
					void 0 !== t.wireframeLinejoin &&
						(i.wireframeLinejoin = t.wireframeLinejoin),
					void 0 !== t.rotation && (i.rotation = t.rotation),
					1 !== t.linewidth && (i.linewidth = t.linewidth),
					void 0 !== t.dashSize && (i.dashSize = t.dashSize),
					void 0 !== t.gapSize && (i.gapSize = t.gapSize),
					void 0 !== t.scale && (i.scale = t.scale),
					void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
					void 0 !== t.polygonOffsetFactor &&
						(i.polygonOffsetFactor = t.polygonOffsetFactor),
					void 0 !== t.polygonOffsetUnits &&
						(i.polygonOffsetUnits = t.polygonOffsetUnits),
					void 0 !== t.dithering && (i.dithering = t.dithering),
					void 0 !== t.alphaToCoverage &&
						(i.alphaToCoverage = t.alphaToCoverage),
					void 0 !== t.premultipliedAlpha &&
						(i.premultipliedAlpha = t.premultipliedAlpha),
					void 0 !== t.visible && (i.visible = t.visible),
					void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped),
					void 0 !== t.userData && (i.userData = t.userData),
					void 0 !== t.vertexColors &&
						("number" == typeof t.vertexColors
							? (i.vertexColors = t.vertexColors > 0)
							: (i.vertexColors = t.vertexColors)),
					void 0 !== t.uniforms)
				)
					for (const e in t.uniforms) {
						const r = t.uniforms[e];
						switch (((i.uniforms[e] = {}), r.type)) {
							case "t":
								i.uniforms[e].value = n(r.value);
								break;
							case "c":
								i.uniforms[e].value = new Ut().setHex(r.value);
								break;
							case "v2":
								i.uniforms[e].value = new At().fromArray(r.value);
								break;
							case "v3":
								i.uniforms[e].value = new Zt().fromArray(r.value);
								break;
							case "v4":
								i.uniforms[e].value = new jt().fromArray(r.value);
								break;
							case "m3":
								i.uniforms[e].value = new Rt().fromArray(r.value);
								break;
							case "m4":
								i.uniforms[e].value = new Ae().fromArray(r.value);
								break;
							default:
								i.uniforms[e].value = r.value;
						}
					}
				if (
					(void 0 !== t.defines && (i.defines = t.defines),
					void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
					void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
					void 0 !== t.extensions)
				)
					for (const e in t.extensions) i.extensions[e] = t.extensions[e];
				if (
					(void 0 !== t.shading && (i.flatShading = 1 === t.shading),
					void 0 !== t.size && (i.size = t.size),
					void 0 !== t.sizeAttenuation &&
						(i.sizeAttenuation = t.sizeAttenuation),
					void 0 !== t.map && (i.map = n(t.map)),
					void 0 !== t.matcap && (i.matcap = n(t.matcap)),
					void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)),
					void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
					void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
					void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
					void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
					void 0 !== t.normalScale)
				) {
					let e = t.normalScale;
					!1 === Array.isArray(e) && (e = [e, e]),
						(i.normalScale = new At().fromArray(e));
				}
				return (
					void 0 !== t.displacementMap &&
						(i.displacementMap = n(t.displacementMap)),
					void 0 !== t.displacementScale &&
						(i.displacementScale = t.displacementScale),
					void 0 !== t.displacementBias &&
						(i.displacementBias = t.displacementBias),
					void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
					void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
					void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
					void 0 !== t.emissiveIntensity &&
						(i.emissiveIntensity = t.emissiveIntensity),
					void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
					void 0 !== t.specularIntensityMap &&
						(i.specularIntensityMap = n(t.specularIntensityMap)),
					void 0 !== t.specularColorMap &&
						(i.specularColorMap = n(t.specularColorMap)),
					void 0 !== t.envMap && (i.envMap = n(t.envMap)),
					void 0 !== t.envMapIntensity &&
						(i.envMapIntensity = t.envMapIntensity),
					void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
					void 0 !== t.refractionRatio &&
						(i.refractionRatio = t.refractionRatio),
					void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
					void 0 !== t.lightMapIntensity &&
						(i.lightMapIntensity = t.lightMapIntensity),
					void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
					void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
					void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
					void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)),
					void 0 !== t.clearcoatRoughnessMap &&
						(i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
					void 0 !== t.clearcoatNormalMap &&
						(i.clearcoatNormalMap = n(t.clearcoatNormalMap)),
					void 0 !== t.clearcoatNormalScale &&
						(i.clearcoatNormalScale = new At().fromArray(
							t.clearcoatNormalScale
						)),
					void 0 !== t.transmissionMap &&
						(i.transmissionMap = n(t.transmissionMap)),
					void 0 !== t.thicknessMap && (i.thicknessMap = n(t.thicknessMap)),
					void 0 !== t.sheenColorMap && (i.sheenColorMap = n(t.sheenColorMap)),
					void 0 !== t.sheenRoughnessMap &&
						(i.sheenRoughnessMap = n(t.sheenRoughnessMap)),
					i
				);
			}
			setTextures(t) {
				return (this.textures = t), this;
			}
		}
		class kc {
			static decodeText(t) {
				if ("undefined" != typeof TextDecoder)
					return new TextDecoder().decode(t);
				let e = "";
				for (let n = 0, i = t.length; n < i; n++)
					e += String.fromCharCode(t[n]);
				try {
					return decodeURIComponent(escape(e));
				} catch (t) {
					return e;
				}
			}
			static extractUrlBase(t) {
				const e = t.lastIndexOf("/");
				return -1 === e ? "./" : t.substr(0, e + 1);
			}
			static resolveURL(t, e) {
				return "string" != typeof t || "" === t
					? ""
					: (/^https?:\/\//i.test(e) &&
							/^\//.test(t) &&
							(e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
					  /^(https?:)?\/\//i.test(t) ||
					  /^data:.*,.*$/i.test(t) ||
					  /^blob:.*$/i.test(t)
							? t
							: e + t);
			}
		}
		class Vc extends Nn {
			constructor() {
				super(),
					(this.type = "InstancedBufferGeometry"),
					(this.instanceCount = 1 / 0);
			}
			copy(t) {
				return super.copy(t), (this.instanceCount = t.instanceCount), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			toJSON() {
				const t = super.toJSON(this);
				return (
					(t.instanceCount = this.instanceCount),
					(t.isInstancedBufferGeometry = !0),
					t
				);
			}
		}
		Vc.prototype.isInstancedBufferGeometry = !0;
		class Wc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				const r = this,
					s = new vc(r.manager);
				s.setPath(r.path),
					s.setRequestHeader(r.requestHeader),
					s.setWithCredentials(r.withCredentials),
					s.load(
						t,
						function (n) {
							try {
								e(r.parse(JSON.parse(n)));
							} catch (e) {
								i ? i(e) : console.error(e), r.manager.itemError(t);
							}
						},
						n,
						i
					);
			}
			parse(t) {
				const e = {},
					n = {};
				function i(t, i) {
					if (void 0 !== e[i]) return e[i];
					const r = t.interleavedBuffers[i],
						s = (function (t, e) {
							if (void 0 !== n[e]) return n[e];
							const i = t.arrayBuffers[e],
								r = new Uint32Array(i).buffer;
							return (n[e] = r), r;
						})(t, r.buffer),
						a = Pt(r.type, s),
						o = new ua(a, r.stride);
					return (o.uuid = r.uuid), (e[i] = o), o;
				}
				const r = t.isInstancedBufferGeometry ? new Vc() : new Nn(),
					s = t.data.index;
				if (void 0 !== s) {
					const t = Pt(s.type, s.array);
					r.setIndex(new gn(t, 1));
				}
				const a = t.data.attributes;
				for (const e in a) {
					const n = a[e];
					let s;
					if (n.isInterleavedBufferAttribute) {
						const e = i(t.data, n.data);
						s = new pa(e, n.itemSize, n.offset, n.normalized);
					} else {
						const t = Pt(n.type, n.array);
						s = new (n.isInstancedBufferAttribute ? Wa : gn)(
							t,
							n.itemSize,
							n.normalized
						);
					}
					void 0 !== n.name && (s.name = n.name),
						void 0 !== n.usage && s.setUsage(n.usage),
						void 0 !== n.updateRange &&
							((s.updateRange.offset = n.updateRange.offset),
							(s.updateRange.count = n.updateRange.count)),
						r.setAttribute(e, s);
				}
				const o = t.data.morphAttributes;
				if (o)
					for (const e in o) {
						const n = o[e],
							s = [];
						for (let e = 0, r = n.length; e < r; e++) {
							const r = n[e];
							let a;
							if (r.isInterleavedBufferAttribute) {
								const e = i(t.data, r.data);
								a = new pa(e, r.itemSize, r.offset, r.normalized);
							} else {
								const t = Pt(r.type, r.array);
								a = new gn(t, r.itemSize, r.normalized);
							}
							void 0 !== r.name && (a.name = r.name), s.push(a);
						}
						r.morphAttributes[e] = s;
					}
				t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
				const l = t.data.groups || t.data.drawcalls || t.data.offsets;
				if (void 0 !== l)
					for (let t = 0, e = l.length; t !== e; ++t) {
						const e = l[t];
						r.addGroup(e.start, e.count, e.materialIndex);
					}
				const c = t.data.boundingSphere;
				if (void 0 !== c) {
					const t = new Zt();
					void 0 !== c.center && t.fromArray(c.center),
						(r.boundingSphere = new ye(t, c.radius));
				}
				return (
					t.name && (r.name = t.name),
					t.userData && (r.userData = t.userData),
					r
				);
			}
		}
		const jc = {
				UVMapping: i,
				CubeReflectionMapping: r,
				CubeRefractionMapping: s,
				EquirectangularReflectionMapping: a,
				EquirectangularRefractionMapping: o,
				CubeUVReflectionMapping: l,
				CubeUVRefractionMapping: c,
			},
			qc = {
				RepeatWrapping: h,
				ClampToEdgeWrapping: u,
				MirroredRepeatWrapping: d,
			},
			Xc = {
				NearestFilter: p,
				NearestMipmapNearestFilter: m,
				NearestMipmapLinearFilter: f,
				LinearFilter: g,
				LinearMipmapNearestFilter: v,
				LinearMipmapLinearFilter: y,
			};
		class Jc extends fc {
			constructor(t) {
				super(t),
					"undefined" == typeof createImageBitmap &&
						console.warn(
							"THREE.ImageBitmapLoader: createImageBitmap() not supported."
						),
					"undefined" == typeof fetch &&
						console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
					(this.options = { premultiplyAlpha: "none" });
			}
			setOptions(t) {
				return (this.options = t), this;
			}
			load(t, e, n, i) {
				void 0 === t && (t = ""),
					void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				const r = this,
					s = dc.get(t);
				if (void 0 !== s)
					return (
						r.manager.itemStart(t),
						setTimeout(function () {
							e && e(s), r.manager.itemEnd(t);
						}, 0),
						s
					);
				const a = {};
				(a.credentials =
					"anonymous" === this.crossOrigin ? "same-origin" : "include"),
					(a.headers = this.requestHeader),
					fetch(t, a)
						.then(function (t) {
							return t.blob();
						})
						.then(function (t) {
							return createImageBitmap(
								t,
								Object.assign(r.options, { colorSpaceConversion: "none" })
							);
						})
						.then(function (n) {
							dc.add(t, n), e && e(n), r.manager.itemEnd(t);
						})
						.catch(function (e) {
							i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
						}),
					r.manager.itemStart(t);
			}
		}
		let Yc;
		Jc.prototype.isImageBitmapLoader = !0;
		const Zc = {
			getContext: function () {
				return (
					void 0 === Yc &&
						(Yc = new (window.AudioContext || window.webkitAudioContext)()),
					Yc
				);
			},
			setContext: function (t) {
				Yc = t;
			},
		};
		class Kc extends fc {
			constructor(t) {
				super(t);
			}
			load(t, e, n, i) {
				const r = this,
					s = new vc(this.manager);
				s.setResponseType("arraybuffer"),
					s.setPath(this.path),
					s.setRequestHeader(this.requestHeader),
					s.setWithCredentials(this.withCredentials),
					s.load(
						t,
						function (n) {
							try {
								const t = n.slice(0);
								Zc.getContext().decodeAudioData(t, function (t) {
									e(t);
								});
							} catch (e) {
								i ? i(e) : console.error(e), r.manager.itemError(t);
							}
						},
						n,
						i
					);
			}
		}
		class Qc extends Hc {
			constructor(t, e, n = 1) {
				super(void 0, n);
				const i = new Ut().set(t),
					r = new Ut().set(e),
					s = new Zt(i.r, i.g, i.b),
					a = new Zt(r.r, r.g, r.b),
					o = Math.sqrt(Math.PI),
					l = o * Math.sqrt(0.75);
				this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
					this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
			}
		}
		Qc.prototype.isHemisphereLightProbe = !0;
		class $c extends Hc {
			constructor(t, e = 1) {
				super(void 0, e);
				const n = new Ut().set(t);
				this.sh.coefficients[0]
					.set(n.r, n.g, n.b)
					.multiplyScalar(2 * Math.sqrt(Math.PI));
			}
		}
		$c.prototype.isAmbientLightProbe = !0;
		const th = new Ae(),
			eh = new Ae(),
			nh = new Ae();
		class ih {
			constructor(t = !0) {
				(this.autoStart = t),
					(this.startTime = 0),
					(this.oldTime = 0),
					(this.elapsedTime = 0),
					(this.running = !1);
			}
			start() {
				(this.startTime = rh()),
					(this.oldTime = this.startTime),
					(this.elapsedTime = 0),
					(this.running = !0);
			}
			stop() {
				this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
			}
			getElapsedTime() {
				return this.getDelta(), this.elapsedTime;
			}
			getDelta() {
				let t = 0;
				if (this.autoStart && !this.running) return this.start(), 0;
				if (this.running) {
					const e = rh();
					(t = (e - this.oldTime) / 1e3),
						(this.oldTime = e),
						(this.elapsedTime += t);
				}
				return t;
			}
		}
		function rh() {
			return ("undefined" == typeof performance ? Date : performance).now();
		}
		const sh = new Zt(),
			ah = new Yt(),
			oh = new Zt(),
			lh = new Zt();
		class ch extends Qe {
			constructor(t) {
				super(),
					(this.type = "Audio"),
					(this.listener = t),
					(this.context = t.context),
					(this.gain = this.context.createGain()),
					this.gain.connect(t.getInput()),
					(this.autoplay = !1),
					(this.buffer = null),
					(this.detune = 0),
					(this.loop = !1),
					(this.loopStart = 0),
					(this.loopEnd = 0),
					(this.offset = 0),
					(this.duration = void 0),
					(this.playbackRate = 1),
					(this.isPlaying = !1),
					(this.hasPlaybackControl = !0),
					(this.source = null),
					(this.sourceType = "empty"),
					(this._startedAt = 0),
					(this._progress = 0),
					(this._connected = !1),
					(this.filters = []);
			}
			getOutput() {
				return this.gain;
			}
			setNodeSource(t) {
				return (
					(this.hasPlaybackControl = !1),
					(this.sourceType = "audioNode"),
					(this.source = t),
					this.connect(),
					this
				);
			}
			setMediaElementSource(t) {
				return (
					(this.hasPlaybackControl = !1),
					(this.sourceType = "mediaNode"),
					(this.source = this.context.createMediaElementSource(t)),
					this.connect(),
					this
				);
			}
			setMediaStreamSource(t) {
				return (
					(this.hasPlaybackControl = !1),
					(this.sourceType = "mediaStreamNode"),
					(this.source = this.context.createMediaStreamSource(t)),
					this.connect(),
					this
				);
			}
			setBuffer(t) {
				return (
					(this.buffer = t),
					(this.sourceType = "buffer"),
					this.autoplay && this.play(),
					this
				);
			}
			play(t = 0) {
				if (!0 === this.isPlaying)
					return void console.warn("THREE.Audio: Audio is already playing.");
				if (!1 === this.hasPlaybackControl)
					return void console.warn(
						"THREE.Audio: this Audio has no playback control."
					);
				this._startedAt = this.context.currentTime + t;
				const e = this.context.createBufferSource();
				return (
					(e.buffer = this.buffer),
					(e.loop = this.loop),
					(e.loopStart = this.loopStart),
					(e.loopEnd = this.loopEnd),
					(e.onended = this.onEnded.bind(this)),
					e.start(this._startedAt, this._progress + this.offset, this.duration),
					(this.isPlaying = !0),
					(this.source = e),
					this.setDetune(this.detune),
					this.setPlaybackRate(this.playbackRate),
					this.connect()
				);
			}
			pause() {
				if (!1 !== this.hasPlaybackControl)
					return (
						!0 === this.isPlaying &&
							((this._progress +=
								Math.max(this.context.currentTime - this._startedAt, 0) *
								this.playbackRate),
							!0 === this.loop &&
								(this._progress =
									this._progress % (this.duration || this.buffer.duration)),
							this.source.stop(),
							(this.source.onended = null),
							(this.isPlaying = !1)),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			stop() {
				if (!1 !== this.hasPlaybackControl)
					return (
						(this._progress = 0),
						this.source.stop(),
						(this.source.onended = null),
						(this.isPlaying = !1),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			connect() {
				if (this.filters.length > 0) {
					this.source.connect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++)
						this.filters[t - 1].connect(this.filters[t]);
					this.filters[this.filters.length - 1].connect(this.getOutput());
				} else this.source.connect(this.getOutput());
				return (this._connected = !0), this;
			}
			disconnect() {
				if (this.filters.length > 0) {
					this.source.disconnect(this.filters[0]);
					for (let t = 1, e = this.filters.length; t < e; t++)
						this.filters[t - 1].disconnect(this.filters[t]);
					this.filters[this.filters.length - 1].disconnect(this.getOutput());
				} else this.source.disconnect(this.getOutput());
				return (this._connected = !1), this;
			}
			getFilters() {
				return this.filters;
			}
			setFilters(t) {
				return (
					t || (t = []),
					!0 === this._connected
						? (this.disconnect(), (this.filters = t.slice()), this.connect())
						: (this.filters = t.slice()),
					this
				);
			}
			setDetune(t) {
				if (((this.detune = t), void 0 !== this.source.detune))
					return (
						!0 === this.isPlaying &&
							this.source.detune.setTargetAtTime(
								this.detune,
								this.context.currentTime,
								0.01
							),
						this
					);
			}
			getDetune() {
				return this.detune;
			}
			getFilter() {
				return this.getFilters()[0];
			}
			setFilter(t) {
				return this.setFilters(t ? [t] : []);
			}
			setPlaybackRate(t) {
				if (!1 !== this.hasPlaybackControl)
					return (
						(this.playbackRate = t),
						!0 === this.isPlaying &&
							this.source.playbackRate.setTargetAtTime(
								this.playbackRate,
								this.context.currentTime,
								0.01
							),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			getPlaybackRate() {
				return this.playbackRate;
			}
			onEnded() {
				this.isPlaying = !1;
			}
			getLoop() {
				return !1 === this.hasPlaybackControl
					? (console.warn("THREE.Audio: this Audio has no playback control."),
					  !1)
					: this.loop;
			}
			setLoop(t) {
				if (!1 !== this.hasPlaybackControl)
					return (
						(this.loop = t),
						!0 === this.isPlaying && (this.source.loop = this.loop),
						this
					);
				console.warn("THREE.Audio: this Audio has no playback control.");
			}
			setLoopStart(t) {
				return (this.loopStart = t), this;
			}
			setLoopEnd(t) {
				return (this.loopEnd = t), this;
			}
			getVolume() {
				return this.gain.gain.value;
			}
			setVolume(t) {
				return (
					this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
					this
				);
			}
		}
		const hh = new Zt(),
			uh = new Yt(),
			dh = new Zt(),
			ph = new Zt();
		class mh {
			constructor(t, e = 2048) {
				(this.analyser = t.context.createAnalyser()),
					(this.analyser.fftSize = e),
					(this.data = new Uint8Array(this.analyser.frequencyBinCount)),
					t.getOutput().connect(this.analyser);
			}
			getFrequencyData() {
				return this.analyser.getByteFrequencyData(this.data), this.data;
			}
			getAverageFrequency() {
				let t = 0;
				const e = this.getFrequencyData();
				for (let n = 0; n < e.length; n++) t += e[n];
				return t / e.length;
			}
		}
		class fh {
			constructor(t, e, n) {
				let i, r, s;
				switch (((this.binding = t), (this.valueSize = n), e)) {
					case "quaternion":
						(i = this._slerp),
							(r = this._slerpAdditive),
							(s = this._setAdditiveIdentityQuaternion),
							(this.buffer = new Float64Array(6 * n)),
							(this._workIndex = 5);
						break;
					case "string":
					case "bool":
						(i = this._select),
							(r = this._select),
							(s = this._setAdditiveIdentityOther),
							(this.buffer = new Array(5 * n));
						break;
					default:
						(i = this._lerp),
							(r = this._lerpAdditive),
							(s = this._setAdditiveIdentityNumeric),
							(this.buffer = new Float64Array(5 * n));
				}
				(this._mixBufferRegion = i),
					(this._mixBufferRegionAdditive = r),
					(this._setIdentity = s),
					(this._origIndex = 3),
					(this._addIndex = 4),
					(this.cumulativeWeight = 0),
					(this.cumulativeWeightAdditive = 0),
					(this.useCount = 0),
					(this.referenceCount = 0);
			}
			accumulate(t, e) {
				const n = this.buffer,
					i = this.valueSize,
					r = t * i + i;
				let s = this.cumulativeWeight;
				if (0 === s) {
					for (let t = 0; t !== i; ++t) n[r + t] = n[t];
					s = e;
				} else {
					s += e;
					const t = e / s;
					this._mixBufferRegion(n, r, 0, t, i);
				}
				this.cumulativeWeight = s;
			}
			accumulateAdditive(t) {
				const e = this.buffer,
					n = this.valueSize,
					i = n * this._addIndex;
				0 === this.cumulativeWeightAdditive && this._setIdentity(),
					this._mixBufferRegionAdditive(e, i, 0, t, n),
					(this.cumulativeWeightAdditive += t);
			}
			apply(t) {
				const e = this.valueSize,
					n = this.buffer,
					i = t * e + e,
					r = this.cumulativeWeight,
					s = this.cumulativeWeightAdditive,
					a = this.binding;
				if (
					((this.cumulativeWeight = 0),
					(this.cumulativeWeightAdditive = 0),
					r < 1)
				) {
					const t = e * this._origIndex;
					this._mixBufferRegion(n, i, t, 1 - r, e);
				}
				s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
				for (let t = e, r = e + e; t !== r; ++t)
					if (n[t] !== n[t + e]) {
						a.setValue(n, i);
						break;
					}
			}
			saveOriginalState() {
				const t = this.binding,
					e = this.buffer,
					n = this.valueSize,
					i = n * this._origIndex;
				t.getValue(e, i);
				for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
				this._setIdentity(),
					(this.cumulativeWeight = 0),
					(this.cumulativeWeightAdditive = 0);
			}
			restoreOriginalState() {
				const t = 3 * this.valueSize;
				this.binding.setValue(this.buffer, t);
			}
			_setAdditiveIdentityNumeric() {
				const t = this._addIndex * this.valueSize,
					e = t + this.valueSize;
				for (let n = t; n < e; n++) this.buffer[n] = 0;
			}
			_setAdditiveIdentityQuaternion() {
				this._setAdditiveIdentityNumeric(),
					(this.buffer[this._addIndex * this.valueSize + 3] = 1);
			}
			_setAdditiveIdentityOther() {
				const t = this._origIndex * this.valueSize,
					e = this._addIndex * this.valueSize;
				for (let n = 0; n < this.valueSize; n++)
					this.buffer[e + n] = this.buffer[t + n];
			}
			_select(t, e, n, i, r) {
				if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
			}
			_slerp(t, e, n, i) {
				Yt.slerpFlat(t, e, t, e, t, n, i);
			}
			_slerpAdditive(t, e, n, i, r) {
				const s = this._workIndex * r;
				Yt.multiplyQuaternionsFlat(t, s, t, e, t, n),
					Yt.slerpFlat(t, e, t, e, t, s, i);
			}
			_lerp(t, e, n, i, r) {
				const s = 1 - i;
				for (let a = 0; a !== r; ++a) {
					const r = e + a;
					t[r] = t[r] * s + t[n + a] * i;
				}
			}
			_lerpAdditive(t, e, n, i, r) {
				for (let s = 0; s !== r; ++s) {
					const r = e + s;
					t[r] = t[r] + t[n + s] * i;
				}
			}
		}
		const gh = "\\[\\]\\.:\\/",
			vh = new RegExp("[\\[\\]\\.:\\/]", "g"),
			yh = "[^\\[\\]\\.:\\/]",
			xh = "[^" + gh.replace("\\.", "") + "]",
			_h = /((?:WC+[\/:])*)/.source.replace("WC", yh),
			Mh = /(WCOD+)?/.source.replace("WCOD", xh),
			bh = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", yh),
			wh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", yh),
			Sh = new RegExp("^" + _h + Mh + bh + wh + "$"),
			Th = ["material", "materials", "bones"];
		class Eh {
			constructor(t, e, n) {
				(this.path = e),
					(this.parsedPath = n || Eh.parseTrackName(e)),
					(this.node = Eh.findNode(t, this.parsedPath.nodeName) || t),
					(this.rootNode = t),
					(this.getValue = this._getValue_unbound),
					(this.setValue = this._setValue_unbound);
			}
			static create(t, e, n) {
				return t && t.isAnimationObjectGroup
					? new Eh.Composite(t, e, n)
					: new Eh(t, e, n);
			}
			static sanitizeNodeName(t) {
				return t.replace(/\s/g, "_").replace(vh, "");
			}
			static parseTrackName(t) {
				const e = Sh.exec(t);
				if (!e)
					throw new Error("PropertyBinding: Cannot parse trackName: " + t);
				const n = {
						nodeName: e[2],
						objectName: e[3],
						objectIndex: e[4],
						propertyName: e[5],
						propertyIndex: e[6],
					},
					i = n.nodeName && n.nodeName.lastIndexOf(".");
				if (void 0 !== i && -1 !== i) {
					const t = n.nodeName.substring(i + 1);
					-1 !== Th.indexOf(t) &&
						((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
				}
				if (null === n.propertyName || 0 === n.propertyName.length)
					throw new Error(
						"PropertyBinding: can not parse propertyName from trackName: " + t
					);
				return n;
			}
			static findNode(t, e) {
				if (
					!e ||
					"" === e ||
					"." === e ||
					-1 === e ||
					e === t.name ||
					e === t.uuid
				)
					return t;
				if (t.skeleton) {
					const n = t.skeleton.getBoneByName(e);
					if (void 0 !== n) return n;
				}
				if (t.children) {
					const n = function (t) {
							for (let i = 0; i < t.length; i++) {
								const r = t[i];
								if (r.name === e || r.uuid === e) return r;
								const s = n(r.children);
								if (s) return s;
							}
							return null;
						},
						i = n(t.children);
					if (i) return i;
				}
				return null;
			}
			_getValue_unavailable() {}
			_setValue_unavailable() {}
			_getValue_direct(t, e) {
				t[e] = this.targetObject[this.propertyName];
			}
			_getValue_array(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
			}
			_getValue_arrayElement(t, e) {
				t[e] = this.resolvedProperty[this.propertyIndex];
			}
			_getValue_toArray(t, e) {
				this.resolvedProperty.toArray(t, e);
			}
			_setValue_direct(t, e) {
				this.targetObject[this.propertyName] = t[e];
			}
			_setValue_direct_setNeedsUpdate(t, e) {
				(this.targetObject[this.propertyName] = t[e]),
					(this.targetObject.needsUpdate = !0);
			}
			_setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
				(this.targetObject[this.propertyName] = t[e]),
					(this.targetObject.matrixWorldNeedsUpdate = !0);
			}
			_setValue_array(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
			}
			_setValue_array_setNeedsUpdate(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
				this.targetObject.needsUpdate = !0;
			}
			_setValue_array_setMatrixWorldNeedsUpdate(t, e) {
				const n = this.resolvedProperty;
				for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
				this.targetObject.matrixWorldNeedsUpdate = !0;
			}
			_setValue_arrayElement(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e];
			}
			_setValue_arrayElement_setNeedsUpdate(t, e) {
				(this.resolvedProperty[this.propertyIndex] = t[e]),
					(this.targetObject.needsUpdate = !0);
			}
			_setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
				(this.resolvedProperty[this.propertyIndex] = t[e]),
					(this.targetObject.matrixWorldNeedsUpdate = !0);
			}
			_setValue_fromArray(t, e) {
				this.resolvedProperty.fromArray(t, e);
			}
			_setValue_fromArray_setNeedsUpdate(t, e) {
				this.resolvedProperty.fromArray(t, e),
					(this.targetObject.needsUpdate = !0);
			}
			_setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
				this.resolvedProperty.fromArray(t, e),
					(this.targetObject.matrixWorldNeedsUpdate = !0);
			}
			_getValue_unbound(t, e) {
				this.bind(), this.getValue(t, e);
			}
			_setValue_unbound(t, e) {
				this.bind(), this.setValue(t, e);
			}
			bind() {
				let t = this.node;
				const e = this.parsedPath,
					n = e.objectName,
					i = e.propertyName;
				let r = e.propertyIndex;
				if (
					(t ||
						((t = Eh.findNode(this.rootNode, e.nodeName) || this.rootNode),
						(this.node = t)),
					(this.getValue = this._getValue_unavailable),
					(this.setValue = this._setValue_unavailable),
					!t)
				)
					return void console.error(
						"THREE.PropertyBinding: Trying to update node for track: " +
							this.path +
							" but it wasn't found."
					);
				if (n) {
					let i = e.objectIndex;
					switch (n) {
						case "materials":
							if (!t.material)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to material as node does not have a material.",
									this
								);
							if (!t.material.materials)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
									this
								);
							t = t.material.materials;
							break;
						case "bones":
							if (!t.skeleton)
								return void console.error(
									"THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
									this
								);
							t = t.skeleton.bones;
							for (let e = 0; e < t.length; e++)
								if (t[e].name === i) {
									i = e;
									break;
								}
							break;
						default:
							if (void 0 === t[n])
								return void console.error(
									"THREE.PropertyBinding: Can not bind to objectName of node undefined.",
									this
								);
							t = t[n];
					}
					if (void 0 !== i) {
						if (void 0 === t[i])
							return void console.error(
								"THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
								this,
								t
							);
						t = t[i];
					}
				}
				const s = t[i];
				if (void 0 === s) {
					const n = e.nodeName;
					return void console.error(
						"THREE.PropertyBinding: Trying to update property for track: " +
							n +
							"." +
							i +
							" but it wasn't found.",
						t
					);
				}
				let a = this.Versioning.None;
				(this.targetObject = t),
					void 0 !== t.needsUpdate
						? (a = this.Versioning.NeedsUpdate)
						: void 0 !== t.matrixWorldNeedsUpdate &&
						  (a = this.Versioning.MatrixWorldNeedsUpdate);
				let o = this.BindingType.Direct;
				if (void 0 !== r) {
					if ("morphTargetInfluences" === i) {
						if (!t.geometry)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
								this
							);
						if (!t.geometry.isBufferGeometry)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
								this
							);
						if (!t.geometry.morphAttributes)
							return void console.error(
								"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
								this
							);
						void 0 !== t.morphTargetDictionary[r] &&
							(r = t.morphTargetDictionary[r]);
					}
					(o = this.BindingType.ArrayElement),
						(this.resolvedProperty = s),
						(this.propertyIndex = r);
				} else void 0 !== s.fromArray && void 0 !== s.toArray ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s)) : Array.isArray(s) ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s)) : (this.propertyName = i);
				(this.getValue = this.GetterByBindingType[o]),
					(this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
			}
			unbind() {
				(this.node = null),
					(this.getValue = this._getValue_unbound),
					(this.setValue = this._setValue_unbound);
			}
		}
		(Eh.Composite = class {
			constructor(t, e, n) {
				const i = n || Eh.parseTrackName(e);
				(this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
			}
			getValue(t, e) {
				this.bind();
				const n = this._targetGroup.nCachedObjects_,
					i = this._bindings[n];
				void 0 !== i && i.getValue(t, e);
			}
			setValue(t, e) {
				const n = this._bindings;
				for (
					let i = this._targetGroup.nCachedObjects_, r = n.length;
					i !== r;
					++i
				)
					n[i].setValue(t, e);
			}
			bind() {
				const t = this._bindings;
				for (
					let e = this._targetGroup.nCachedObjects_, n = t.length;
					e !== n;
					++e
				)
					t[e].bind();
			}
			unbind() {
				const t = this._bindings;
				for (
					let e = this._targetGroup.nCachedObjects_, n = t.length;
					e !== n;
					++e
				)
					t[e].unbind();
			}
		}),
			(Eh.prototype.BindingType = {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3,
			}),
			(Eh.prototype.Versioning = {
				None: 0,
				NeedsUpdate: 1,
				MatrixWorldNeedsUpdate: 2,
			}),
			(Eh.prototype.GetterByBindingType = [
				Eh.prototype._getValue_direct,
				Eh.prototype._getValue_array,
				Eh.prototype._getValue_arrayElement,
				Eh.prototype._getValue_toArray,
			]),
			(Eh.prototype.SetterByBindingTypeAndVersioning = [
				[
					Eh.prototype._setValue_direct,
					Eh.prototype._setValue_direct_setNeedsUpdate,
					Eh.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
				],
				[
					Eh.prototype._setValue_array,
					Eh.prototype._setValue_array_setNeedsUpdate,
					Eh.prototype._setValue_array_setMatrixWorldNeedsUpdate,
				],
				[
					Eh.prototype._setValue_arrayElement,
					Eh.prototype._setValue_arrayElement_setNeedsUpdate,
					Eh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
				],
				[
					Eh.prototype._setValue_fromArray,
					Eh.prototype._setValue_fromArray_setNeedsUpdate,
					Eh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
				],
			]);
		class Ah {
			constructor() {
				(this.uuid = xt()),
					(this._objects = Array.prototype.slice.call(arguments)),
					(this.nCachedObjects_ = 0);
				const t = {};
				this._indicesByUUID = t;
				for (let e = 0, n = arguments.length; e !== n; ++e)
					t[arguments[e].uuid] = e;
				(this._paths = []),
					(this._parsedPaths = []),
					(this._bindings = []),
					(this._bindingsIndicesByPath = {});
				const e = this;
				this.stats = {
					objects: {
						get total() {
							return e._objects.length;
						},
						get inUse() {
							return this.total - e.nCachedObjects_;
						},
					},
					get bindingsPerObject() {
						return e._bindings.length;
					},
				};
			}
			add() {
				const t = this._objects,
					e = this._indicesByUUID,
					n = this._paths,
					i = this._parsedPaths,
					r = this._bindings,
					s = r.length;
				let a,
					o = t.length,
					l = this.nCachedObjects_;
				for (let c = 0, h = arguments.length; c !== h; ++c) {
					const h = arguments[c],
						u = h.uuid;
					let d = e[u];
					if (void 0 === d) {
						(d = o++), (e[u] = d), t.push(h);
						for (let t = 0, e = s; t !== e; ++t)
							r[t].push(new Eh(h, n[t], i[t]));
					} else if (d < l) {
						a = t[d];
						const o = --l,
							c = t[o];
						(e[c.uuid] = d), (t[d] = c), (e[u] = o), (t[o] = h);
						for (let t = 0, e = s; t !== e; ++t) {
							const e = r[t],
								s = e[o];
							let a = e[d];
							(e[d] = s),
								void 0 === a && (a = new Eh(h, n[t], i[t])),
								(e[o] = a);
						}
					} else
						t[d] !== a &&
							console.error(
								"THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
							);
				}
				this.nCachedObjects_ = l;
			}
			remove() {
				const t = this._objects,
					e = this._indicesByUUID,
					n = this._bindings,
					i = n.length;
				let r = this.nCachedObjects_;
				for (let s = 0, a = arguments.length; s !== a; ++s) {
					const a = arguments[s],
						o = a.uuid,
						l = e[o];
					if (void 0 !== l && l >= r) {
						const s = r++,
							c = t[s];
						(e[c.uuid] = l), (t[l] = c), (e[o] = s), (t[s] = a);
						for (let t = 0, e = i; t !== e; ++t) {
							const e = n[t],
								i = e[s],
								r = e[l];
							(e[l] = i), (e[s] = r);
						}
					}
				}
				this.nCachedObjects_ = r;
			}
			uncache() {
				const t = this._objects,
					e = this._indicesByUUID,
					n = this._bindings,
					i = n.length;
				let r = this.nCachedObjects_,
					s = t.length;
				for (let a = 0, o = arguments.length; a !== o; ++a) {
					const o = arguments[a].uuid,
						l = e[o];
					if (void 0 !== l)
						if ((delete e[o], l < r)) {
							const a = --r,
								o = t[a],
								c = --s,
								h = t[c];
							(e[o.uuid] = l), (t[l] = o), (e[h.uuid] = a), (t[a] = h), t.pop();
							for (let t = 0, e = i; t !== e; ++t) {
								const e = n[t],
									i = e[a],
									r = e[c];
								(e[l] = i), (e[a] = r), e.pop();
							}
						} else {
							const r = --s,
								a = t[r];
							r > 0 && (e[a.uuid] = l), (t[l] = a), t.pop();
							for (let t = 0, e = i; t !== e; ++t) {
								const e = n[t];
								(e[l] = e[r]), e.pop();
							}
						}
				}
				this.nCachedObjects_ = r;
			}
			subscribe_(t, e) {
				const n = this._bindingsIndicesByPath;
				let i = n[t];
				const r = this._bindings;
				if (void 0 !== i) return r[i];
				const s = this._paths,
					a = this._parsedPaths,
					o = this._objects,
					l = o.length,
					c = this.nCachedObjects_,
					h = new Array(l);
				(i = r.length), (n[t] = i), s.push(t), a.push(e), r.push(h);
				for (let n = c, i = o.length; n !== i; ++n) {
					const i = o[n];
					h[n] = new Eh(i, t, e);
				}
				return h;
			}
			unsubscribe_(t) {
				const e = this._bindingsIndicesByPath,
					n = e[t];
				if (void 0 !== n) {
					const i = this._paths,
						r = this._parsedPaths,
						s = this._bindings,
						a = s.length - 1,
						o = s[a];
					(e[t[a]] = n),
						(s[n] = o),
						s.pop(),
						(r[n] = r[a]),
						r.pop(),
						(i[n] = i[a]),
						i.pop();
				}
			}
		}
		Ah.prototype.isAnimationObjectGroup = !0;
		class Rh {
			constructor(t, e, n = null, i = e.blendMode) {
				(this._mixer = t),
					(this._clip = e),
					(this._localRoot = n),
					(this.blendMode = i);
				const r = e.tracks,
					s = r.length,
					a = new Array(s),
					o = { endingStart: nt, endingEnd: nt };
				for (let t = 0; t !== s; ++t) {
					const e = r[t].createInterpolant(null);
					(a[t] = e), (e.settings = o);
				}
				(this._interpolantSettings = o),
					(this._interpolants = a),
					(this._propertyBindings = new Array(s)),
					(this._cacheIndex = null),
					(this._byClipCacheIndex = null),
					(this._timeScaleInterpolant = null),
					(this._weightInterpolant = null),
					(this.loop = 2201),
					(this._loopCount = -1),
					(this._startTime = null),
					(this.time = 0),
					(this.timeScale = 1),
					(this._effectiveTimeScale = 1),
					(this.weight = 1),
					(this._effectiveWeight = 1),
					(this.repetitions = 1 / 0),
					(this.paused = !1),
					(this.enabled = !0),
					(this.clampWhenFinished = !1),
					(this.zeroSlopeAtStart = !0),
					(this.zeroSlopeAtEnd = !0);
			}
			play() {
				return this._mixer._activateAction(this), this;
			}
			stop() {
				return this._mixer._deactivateAction(this), this.reset();
			}
			reset() {
				return (
					(this.paused = !1),
					(this.enabled = !0),
					(this.time = 0),
					(this._loopCount = -1),
					(this._startTime = null),
					this.stopFading().stopWarping()
				);
			}
			isRunning() {
				return (
					this.enabled &&
					!this.paused &&
					0 !== this.timeScale &&
					null === this._startTime &&
					this._mixer._isActiveAction(this)
				);
			}
			isScheduled() {
				return this._mixer._isActiveAction(this);
			}
			startAt(t) {
				return (this._startTime = t), this;
			}
			setLoop(t, e) {
				return (this.loop = t), (this.repetitions = e), this;
			}
			setEffectiveWeight(t) {
				return (
					(this.weight = t),
					(this._effectiveWeight = this.enabled ? t : 0),
					this.stopFading()
				);
			}
			getEffectiveWeight() {
				return this._effectiveWeight;
			}
			fadeIn(t) {
				return this._scheduleFading(t, 0, 1);
			}
			fadeOut(t) {
				return this._scheduleFading(t, 1, 0);
			}
			crossFadeFrom(t, e, n) {
				if ((t.fadeOut(e), this.fadeIn(e), n)) {
					const n = this._clip.duration,
						i = t._clip.duration,
						r = i / n,
						s = n / i;
					t.warp(1, r, e), this.warp(s, 1, e);
				}
				return this;
			}
			crossFadeTo(t, e, n) {
				return t.crossFadeFrom(this, e, n);
			}
			stopFading() {
				const t = this._weightInterpolant;
				return (
					null !== t &&
						((this._weightInterpolant = null),
						this._mixer._takeBackControlInterpolant(t)),
					this
				);
			}
			setEffectiveTimeScale(t) {
				return (
					(this.timeScale = t),
					(this._effectiveTimeScale = this.paused ? 0 : t),
					this.stopWarping()
				);
			}
			getEffectiveTimeScale() {
				return this._effectiveTimeScale;
			}
			setDuration(t) {
				return (this.timeScale = this._clip.duration / t), this.stopWarping();
			}
			syncWith(t) {
				return (
					(this.time = t.time),
					(this.timeScale = t.timeScale),
					this.stopWarping()
				);
			}
			halt(t) {
				return this.warp(this._effectiveTimeScale, 0, t);
			}
			warp(t, e, n) {
				const i = this._mixer,
					r = i.time,
					s = this.timeScale;
				let a = this._timeScaleInterpolant;
				null === a &&
					((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
				const o = a.parameterPositions,
					l = a.sampleValues;
				return (o[0] = r), (o[1] = r + n), (l[0] = t / s), (l[1] = e / s), this;
			}
			stopWarping() {
				const t = this._timeScaleInterpolant;
				return (
					null !== t &&
						((this._timeScaleInterpolant = null),
						this._mixer._takeBackControlInterpolant(t)),
					this
				);
			}
			getMixer() {
				return this._mixer;
			}
			getClip() {
				return this._clip;
			}
			getRoot() {
				return this._localRoot || this._mixer._root;
			}
			_update(t, e, n, i) {
				if (!this.enabled) return void this._updateWeight(t);
				const r = this._startTime;
				if (null !== r) {
					const i = (t - r) * n;
					if (i < 0 || 0 === n) return;
					(this._startTime = null), (e = n * i);
				}
				e *= this._updateTimeScale(t);
				const s = this._updateTime(e),
					a = this._updateWeight(t);
				if (a > 0) {
					const t = this._interpolants,
						e = this._propertyBindings;
					if (this.blendMode === at)
						for (let n = 0, i = t.length; n !== i; ++n)
							t[n].evaluate(s), e[n].accumulateAdditive(a);
					else
						for (let n = 0, r = t.length; n !== r; ++n)
							t[n].evaluate(s), e[n].accumulate(i, a);
				}
			}
			_updateWeight(t) {
				let e = 0;
				if (this.enabled) {
					e = this.weight;
					const n = this._weightInterpolant;
					if (null !== n) {
						const i = n.evaluate(t)[0];
						(e *= i),
							t > n.parameterPositions[1] &&
								(this.stopFading(), 0 === i && (this.enabled = !1));
					}
				}
				return (this._effectiveWeight = e), e;
			}
			_updateTimeScale(t) {
				let e = 0;
				if (!this.paused) {
					e = this.timeScale;
					const n = this._timeScaleInterpolant;
					if (null !== n) {
						(e *= n.evaluate(t)[0]),
							t > n.parameterPositions[1] &&
								(this.stopWarping(),
								0 === e ? (this.paused = !0) : (this.timeScale = e));
					}
				}
				return (this._effectiveTimeScale = e), e;
			}
			_updateTime(t) {
				const e = this._clip.duration,
					n = this.loop;
				let i = this.time + t,
					r = this._loopCount;
				const s = 2202 === n;
				if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
				if (2200 === n) {
					-1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
					t: {
						if (i >= e) i = e;
						else {
							if (!(i < 0)) {
								this.time = i;
								break t;
							}
							i = 0;
						}
						this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
							(this.time = i),
							this._mixer.dispatchEvent({
								type: "finished",
								action: this,
								direction: t < 0 ? -1 : 1,
							});
					}
				} else {
					if (
						(-1 === r &&
							(t >= 0
								? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
								: this._setEndings(0 === this.repetitions, !0, s)),
						i >= e || i < 0)
					) {
						const n = Math.floor(i / e);
						(i -= e * n), (r += Math.abs(n));
						const a = this.repetitions - r;
						if (a <= 0)
							this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
								(i = t > 0 ? e : 0),
								(this.time = i),
								this._mixer.dispatchEvent({
									type: "finished",
									action: this,
									direction: t > 0 ? 1 : -1,
								});
						else {
							if (1 === a) {
								const e = t < 0;
								this._setEndings(e, !e, s);
							} else this._setEndings(!1, !1, s);
							(this._loopCount = r),
								(this.time = i),
								this._mixer.dispatchEvent({
									type: "loop",
									action: this,
									loopDelta: n,
								});
						}
					} else this.time = i;
					if (s && 1 == (1 & r)) return e - i;
				}
				return i;
			}
			_setEndings(t, e, n) {
				const i = this._interpolantSettings;
				n
					? ((i.endingStart = it), (i.endingEnd = it))
					: ((i.endingStart = t ? (this.zeroSlopeAtStart ? it : nt) : rt),
					  (i.endingEnd = e ? (this.zeroSlopeAtEnd ? it : nt) : rt));
			}
			_scheduleFading(t, e, n) {
				const i = this._mixer,
					r = i.time;
				let s = this._weightInterpolant;
				null === s &&
					((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
				const a = s.parameterPositions,
					o = s.sampleValues;
				return (a[0] = r), (o[0] = e), (a[1] = r + t), (o[1] = n), this;
			}
		}
		class Lh extends mt {
			constructor(t) {
				super(),
					(this._root = t),
					this._initMemoryManager(),
					(this._accuIndex = 0),
					(this.time = 0),
					(this.timeScale = 1);
			}
			_bindAction(t, e) {
				const n = t._localRoot || this._root,
					i = t._clip.tracks,
					r = i.length,
					s = t._propertyBindings,
					a = t._interpolants,
					o = n.uuid,
					l = this._bindingsByRootAndName;
				let c = l[o];
				void 0 === c && ((c = {}), (l[o] = c));
				for (let t = 0; t !== r; ++t) {
					const r = i[t],
						l = r.name;
					let h = c[l];
					if (void 0 !== h) ++h.referenceCount, (s[t] = h);
					else {
						if (((h = s[t]), void 0 !== h)) {
							null === h._cacheIndex &&
								(++h.referenceCount, this._addInactiveBinding(h, o, l));
							continue;
						}
						const i = e && e._propertyBindings[t].binding.parsedPath;
						(h = new fh(Eh.create(n, l, i), r.ValueTypeName, r.getValueSize())),
							++h.referenceCount,
							this._addInactiveBinding(h, o, l),
							(s[t] = h);
					}
					a[t].resultBuffer = h.buffer;
				}
			}
			_activateAction(t) {
				if (!this._isActiveAction(t)) {
					if (null === t._cacheIndex) {
						const e = (t._localRoot || this._root).uuid,
							n = t._clip.uuid,
							i = this._actionsByClip[n];
						this._bindAction(t, i && i.knownActions[0]),
							this._addInactiveAction(t, n, e);
					}
					const e = t._propertyBindings;
					for (let t = 0, n = e.length; t !== n; ++t) {
						const n = e[t];
						0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
					}
					this._lendAction(t);
				}
			}
			_deactivateAction(t) {
				if (this._isActiveAction(t)) {
					const e = t._propertyBindings;
					for (let t = 0, n = e.length; t !== n; ++t) {
						const n = e[t];
						0 == --n.useCount &&
							(n.restoreOriginalState(), this._takeBackBinding(n));
					}
					this._takeBackAction(t);
				}
			}
			_initMemoryManager() {
				(this._actions = []),
					(this._nActiveActions = 0),
					(this._actionsByClip = {}),
					(this._bindings = []),
					(this._nActiveBindings = 0),
					(this._bindingsByRootAndName = {}),
					(this._controlInterpolants = []),
					(this._nActiveControlInterpolants = 0);
				const t = this;
				this.stats = {
					actions: {
						get total() {
							return t._actions.length;
						},
						get inUse() {
							return t._nActiveActions;
						},
					},
					bindings: {
						get total() {
							return t._bindings.length;
						},
						get inUse() {
							return t._nActiveBindings;
						},
					},
					controlInterpolants: {
						get total() {
							return t._controlInterpolants.length;
						},
						get inUse() {
							return t._nActiveControlInterpolants;
						},
					},
				};
			}
			_isActiveAction(t) {
				const e = t._cacheIndex;
				return null !== e && e < this._nActiveActions;
			}
			_addInactiveAction(t, e, n) {
				const i = this._actions,
					r = this._actionsByClip;
				let s = r[e];
				if (void 0 === s)
					(s = { knownActions: [t], actionByRoot: {} }),
						(t._byClipCacheIndex = 0),
						(r[e] = s);
				else {
					const e = s.knownActions;
					(t._byClipCacheIndex = e.length), e.push(t);
				}
				(t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
			}
			_removeInactiveAction(t) {
				const e = this._actions,
					n = e[e.length - 1],
					i = t._cacheIndex;
				(n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
				const r = t._clip.uuid,
					s = this._actionsByClip,
					a = s[r],
					o = a.knownActions,
					l = o[o.length - 1],
					c = t._byClipCacheIndex;
				(l._byClipCacheIndex = c),
					(o[c] = l),
					o.pop(),
					(t._byClipCacheIndex = null);
				delete a.actionByRoot[(t._localRoot || this._root).uuid],
					0 === o.length && delete s[r],
					this._removeInactiveBindingsForAction(t);
			}
			_removeInactiveBindingsForAction(t) {
				const e = t._propertyBindings;
				for (let t = 0, n = e.length; t !== n; ++t) {
					const n = e[t];
					0 == --n.referenceCount && this._removeInactiveBinding(n);
				}
			}
			_lendAction(t) {
				const e = this._actions,
					n = t._cacheIndex,
					i = this._nActiveActions++,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			}
			_takeBackAction(t) {
				const e = this._actions,
					n = t._cacheIndex,
					i = --this._nActiveActions,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			}
			_addInactiveBinding(t, e, n) {
				const i = this._bindingsByRootAndName,
					r = this._bindings;
				let s = i[e];
				void 0 === s && ((s = {}), (i[e] = s)),
					(s[n] = t),
					(t._cacheIndex = r.length),
					r.push(t);
			}
			_removeInactiveBinding(t) {
				const e = this._bindings,
					n = t.binding,
					i = n.rootNode.uuid,
					r = n.path,
					s = this._bindingsByRootAndName,
					a = s[i],
					o = e[e.length - 1],
					l = t._cacheIndex;
				(o._cacheIndex = l),
					(e[l] = o),
					e.pop(),
					delete a[r],
					0 === Object.keys(a).length && delete s[i];
			}
			_lendBinding(t) {
				const e = this._bindings,
					n = t._cacheIndex,
					i = this._nActiveBindings++,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			}
			_takeBackBinding(t) {
				const e = this._bindings,
					n = t._cacheIndex,
					i = --this._nActiveBindings,
					r = e[i];
				(t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
			}
			_lendControlInterpolant() {
				const t = this._controlInterpolants,
					e = this._nActiveControlInterpolants++;
				let n = t[e];
				return (
					void 0 === n &&
						((n = new tc(
							new Float32Array(2),
							new Float32Array(2),
							1,
							this._controlInterpolantsResultBuffer
						)),
						(n.__cacheIndex = e),
						(t[e] = n)),
					n
				);
			}
			_takeBackControlInterpolant(t) {
				const e = this._controlInterpolants,
					n = t.__cacheIndex,
					i = --this._nActiveControlInterpolants,
					r = e[i];
				(t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
			}
			clipAction(t, e, n) {
				const i = e || this._root,
					r = i.uuid;
				let s = "string" == typeof t ? hc.findByName(i, t) : t;
				const a = null !== s ? s.uuid : t,
					o = this._actionsByClip[a];
				let l = null;
				if (
					(void 0 === n && (n = null !== s ? s.blendMode : st), void 0 !== o)
				) {
					const t = o.actionByRoot[r];
					if (void 0 !== t && t.blendMode === n) return t;
					(l = o.knownActions[0]), null === s && (s = l._clip);
				}
				if (null === s) return null;
				const c = new Rh(this, s, e, n);
				return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
			}
			existingAction(t, e) {
				const n = e || this._root,
					i = n.uuid,
					r = "string" == typeof t ? hc.findByName(n, t) : t,
					s = r ? r.uuid : t,
					a = this._actionsByClip[s];
				return (void 0 !== a && a.actionByRoot[i]) || null;
			}
			stopAllAction() {
				const t = this._actions;
				for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
				return this;
			}
			update(t) {
				t *= this.timeScale;
				const e = this._actions,
					n = this._nActiveActions,
					i = (this.time += t),
					r = Math.sign(t),
					s = (this._accuIndex ^= 1);
				for (let a = 0; a !== n; ++a) {
					e[a]._update(i, t, r, s);
				}
				const a = this._bindings,
					o = this._nActiveBindings;
				for (let t = 0; t !== o; ++t) a[t].apply(s);
				return this;
			}
			setTime(t) {
				this.time = 0;
				for (let t = 0; t < this._actions.length; t++)
					this._actions[t].time = 0;
				return this.update(t);
			}
			getRoot() {
				return this._root;
			}
			uncacheClip(t) {
				const e = this._actions,
					n = t.uuid,
					i = this._actionsByClip,
					r = i[n];
				if (void 0 !== r) {
					const t = r.knownActions;
					for (let n = 0, i = t.length; n !== i; ++n) {
						const i = t[n];
						this._deactivateAction(i);
						const r = i._cacheIndex,
							s = e[e.length - 1];
						(i._cacheIndex = null),
							(i._byClipCacheIndex = null),
							(s._cacheIndex = r),
							(e[r] = s),
							e.pop(),
							this._removeInactiveBindingsForAction(i);
					}
					delete i[n];
				}
			}
			uncacheRoot(t) {
				const e = t.uuid,
					n = this._actionsByClip;
				for (const t in n) {
					const i = n[t].actionByRoot[e];
					void 0 !== i &&
						(this._deactivateAction(i), this._removeInactiveAction(i));
				}
				const i = this._bindingsByRootAndName[e];
				if (void 0 !== i)
					for (const t in i) {
						const e = i[t];
						e.restoreOriginalState(), this._removeInactiveBinding(e);
					}
			}
			uncacheAction(t, e) {
				const n = this.existingAction(t, e);
				null !== n &&
					(this._deactivateAction(n), this._removeInactiveAction(n));
			}
		}
		Lh.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
		class Ch {
			constructor(t) {
				"string" == typeof t &&
					(console.warn("THREE.Uniform: Type parameter is no longer needed."),
					(t = arguments[1])),
					(this.value = t);
			}
			clone() {
				return new Ch(
					void 0 === this.value.clone ? this.value : this.value.clone()
				);
			}
		}
		class Ph extends ua {
			constructor(t, e, n = 1) {
				super(t, e), (this.meshPerAttribute = n);
			}
			copy(t) {
				return (
					super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
				);
			}
			clone(t) {
				const e = super.clone(t);
				return (e.meshPerAttribute = this.meshPerAttribute), e;
			}
			toJSON(t) {
				const e = super.toJSON(t);
				return (
					(e.isInstancedInterleavedBuffer = !0),
					(e.meshPerAttribute = this.meshPerAttribute),
					e
				);
			}
		}
		Ph.prototype.isInstancedInterleavedBuffer = !0;
		class Dh {
			constructor(t, e, n, i, r) {
				(this.buffer = t),
					(this.type = e),
					(this.itemSize = n),
					(this.elementSize = i),
					(this.count = r),
					(this.version = 0);
			}
			set needsUpdate(t) {
				!0 === t && this.version++;
			}
			setBuffer(t) {
				return (this.buffer = t), this;
			}
			setType(t, e) {
				return (this.type = t), (this.elementSize = e), this;
			}
			setItemSize(t) {
				return (this.itemSize = t), this;
			}
			setCount(t) {
				return (this.count = t), this;
			}
		}
		Dh.prototype.isGLBufferAttribute = !0;
		function Ih(t, e) {
			return t.distance - e.distance;
		}
		function Nh(t, e, n, i) {
			if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
				const i = t.children;
				for (let t = 0, r = i.length; t < r; t++) Nh(i[t], e, n, !0);
			}
		}
		const Bh = new At();
		class zh {
			constructor(t = new At(1 / 0, 1 / 0), e = new At(-1 / 0, -1 / 0)) {
				(this.min = t), (this.max = e);
			}
			set(t, e) {
				return this.min.copy(t), this.max.copy(e), this;
			}
			setFromPoints(t) {
				this.makeEmpty();
				for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
				return this;
			}
			setFromCenterAndSize(t, e) {
				const n = Bh.copy(e).multiplyScalar(0.5);
				return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
			}
			clone() {
				return new this.constructor().copy(this);
			}
			copy(t) {
				return this.min.copy(t.min), this.max.copy(t.max), this;
			}
			makeEmpty() {
				return (
					(this.min.x = this.min.y = 1 / 0),
					(this.max.x = this.max.y = -1 / 0),
					this
				);
			}
			isEmpty() {
				return this.max.x < this.min.x || this.max.y < this.min.y;
			}
			getCenter(t) {
				return this.isEmpty()
					? t.set(0, 0)
					: t.addVectors(this.min, this.max).multiplyScalar(0.5);
			}
			getSize(t) {
				return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
			}
			expandByPoint(t) {
				return this.min.min(t), this.max.max(t), this;
			}
			expandByVector(t) {
				return this.min.sub(t), this.max.add(t), this;
			}
			expandByScalar(t) {
				return this.min.addScalar(-t), this.max.addScalar(t), this;
			}
			containsPoint(t) {
				return !(
					t.x < this.min.x ||
					t.x > this.max.x ||
					t.y < this.min.y ||
					t.y > this.max.y
				);
			}
			containsBox(t) {
				return (
					this.min.x <= t.min.x &&
					t.max.x <= this.max.x &&
					this.min.y <= t.min.y &&
					t.max.y <= this.max.y
				);
			}
			getParameter(t, e) {
				return e.set(
					(t.x - this.min.x) / (this.max.x - this.min.x),
					(t.y - this.min.y) / (this.max.y - this.min.y)
				);
			}
			intersectsBox(t) {
				return !(
					t.max.x < this.min.x ||
					t.min.x > this.max.x ||
					t.max.y < this.min.y ||
					t.min.y > this.max.y
				);
			}
			clampPoint(t, e) {
				return e.copy(t).clamp(this.min, this.max);
			}
			distanceToPoint(t) {
				return Bh.copy(t).clamp(this.min, this.max).sub(t).length();
			}
			intersect(t) {
				return this.min.max(t.min), this.max.min(t.max), this;
			}
			union(t) {
				return this.min.min(t.min), this.max.max(t.max), this;
			}
			translate(t) {
				return this.min.add(t), this.max.add(t), this;
			}
			equals(t) {
				return t.min.equals(this.min) && t.max.equals(this.max);
			}
		}
		zh.prototype.isBox2 = !0;
		const Oh = new Zt(),
			Fh = new Zt();
		class Uh {
			constructor(t = new Zt(), e = new Zt()) {
				(this.start = t), (this.end = e);
			}
			set(t, e) {
				return this.start.copy(t), this.end.copy(e), this;
			}
			copy(t) {
				return this.start.copy(t.start), this.end.copy(t.end), this;
			}
			getCenter(t) {
				return t.addVectors(this.start, this.end).multiplyScalar(0.5);
			}
			delta(t) {
				return t.subVectors(this.end, this.start);
			}
			distanceSq() {
				return this.start.distanceToSquared(this.end);
			}
			distance() {
				return this.start.distanceTo(this.end);
			}
			at(t, e) {
				return this.delta(e).multiplyScalar(t).add(this.start);
			}
			closestPointToPointParameter(t, e) {
				Oh.subVectors(t, this.start), Fh.subVectors(this.end, this.start);
				const n = Fh.dot(Fh);
				let i = Fh.dot(Oh) / n;
				return e && (i = _t(i, 0, 1)), i;
			}
			closestPointToPoint(t, e, n) {
				const i = this.closestPointToPointParameter(t, e);
				return this.delta(n).multiplyScalar(i).add(this.start);
			}
			applyMatrix4(t) {
				return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
			}
			equals(t) {
				return t.start.equals(this.start) && t.end.equals(this.end);
			}
			clone() {
				return new this.constructor().copy(this);
			}
		}
		const Hh = new Zt();
		const Gh = new Zt(),
			kh = new Ae(),
			Vh = new Ae();
		class Wh extends so {
			constructor(t) {
				const e = jh(t),
					n = new Nn(),
					i = [],
					r = [],
					s = new Ut(0, 0, 1),
					a = new Ut(0, 1, 0);
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					n.parent &&
						n.parent.isBone &&
						(i.push(0, 0, 0),
						i.push(0, 0, 0),
						r.push(s.r, s.g, s.b),
						r.push(a.r, a.g, a.b));
				}
				n.setAttribute("position", new Tn(i, 3)),
					n.setAttribute("color", new Tn(r, 3));
				super(
					n,
					new Za({
						vertexColors: !0,
						depthTest: !1,
						depthWrite: !1,
						toneMapped: !1,
						transparent: !0,
					})
				),
					(this.type = "SkeletonHelper"),
					(this.isSkeletonHelper = !0),
					(this.root = t),
					(this.bones = e),
					(this.matrix = t.matrixWorld),
					(this.matrixAutoUpdate = !1);
			}
			updateMatrixWorld(t) {
				const e = this.bones,
					n = this.geometry,
					i = n.getAttribute("position");
				Vh.copy(this.root.matrixWorld).invert();
				for (let t = 0, n = 0; t < e.length; t++) {
					const r = e[t];
					r.parent &&
						r.parent.isBone &&
						(kh.multiplyMatrices(Vh, r.matrixWorld),
						Gh.setFromMatrixPosition(kh),
						i.setXYZ(n, Gh.x, Gh.y, Gh.z),
						kh.multiplyMatrices(Vh, r.parent.matrixWorld),
						Gh.setFromMatrixPosition(kh),
						i.setXYZ(n + 1, Gh.x, Gh.y, Gh.z),
						(n += 2));
				}
				(n.getAttribute("position").needsUpdate = !0),
					super.updateMatrixWorld(t);
			}
		}
		function jh(t) {
			const e = [];
			t && t.isBone && e.push(t);
			for (let n = 0; n < t.children.length; n++)
				e.push.apply(e, jh(t.children[n]));
			return e;
		}
		const qh = new Zt(),
			Xh = new Ut(),
			Jh = new Ut();
		class Yh extends so {
			constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
				(n = new Ut(n)), (i = new Ut(i));
				const r = e / 2,
					s = t / e,
					a = t / 2,
					o = [],
					l = [];
				for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
					o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
					const e = t === r ? n : i;
					e.toArray(l, c),
						(c += 3),
						e.toArray(l, c),
						(c += 3),
						e.toArray(l, c),
						(c += 3),
						e.toArray(l, c),
						(c += 3);
				}
				const c = new Nn();
				c.setAttribute("position", new Tn(o, 3)),
					c.setAttribute("color", new Tn(l, 3));
				super(c, new Za({ vertexColors: !0, toneMapped: !1 })),
					(this.type = "GridHelper");
			}
		}
		const Zh = new Zt(),
			Kh = new Zt(),
			Qh = new Zt();
		const $h = new Zt(),
			tu = new si();
		function eu(t, e, n, i, r, s, a) {
			$h.set(r, s, a).unproject(i);
			const o = e[t];
			if (void 0 !== o) {
				const t = n.getAttribute("position");
				for (let e = 0, n = o.length; e < n; e++)
					t.setXYZ(o[e], $h.x, $h.y, $h.z);
			}
		}
		const nu = new $t();
		class iu extends so {
			constructor(t, e = 16776960) {
				const n = new Uint16Array([
						0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
						7,
					]),
					i = new Float32Array(24),
					r = new Nn();
				r.setIndex(new gn(n, 1)),
					r.setAttribute("position", new gn(i, 3)),
					super(r, new Za({ color: e, toneMapped: !1 })),
					(this.object = t),
					(this.type = "BoxHelper"),
					(this.matrixAutoUpdate = !1),
					this.update();
			}
			update(t) {
				if (
					(void 0 !== t &&
						console.warn("THREE.BoxHelper: .update() has no longer arguments."),
					void 0 !== this.object && nu.setFromObject(this.object),
					nu.isEmpty())
				)
					return;
				const e = nu.min,
					n = nu.max,
					i = this.geometry.attributes.position,
					r = i.array;
				(r[0] = n.x),
					(r[1] = n.y),
					(r[2] = n.z),
					(r[3] = e.x),
					(r[4] = n.y),
					(r[5] = n.z),
					(r[6] = e.x),
					(r[7] = e.y),
					(r[8] = n.z),
					(r[9] = n.x),
					(r[10] = e.y),
					(r[11] = n.z),
					(r[12] = n.x),
					(r[13] = n.y),
					(r[14] = e.z),
					(r[15] = e.x),
					(r[16] = n.y),
					(r[17] = e.z),
					(r[18] = e.x),
					(r[19] = e.y),
					(r[20] = e.z),
					(r[21] = n.x),
					(r[22] = e.y),
					(r[23] = e.z),
					(i.needsUpdate = !0),
					this.geometry.computeBoundingSphere();
			}
			setFromObject(t) {
				return (this.object = t), this.update(), this;
			}
			copy(t) {
				return so.prototype.copy.call(this, t), (this.object = t.object), this;
			}
		}
		const ru = new Zt();
		let su, au;
		class ou extends so {
			constructor(t = 1) {
				const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
					n = new Nn();
				n.setAttribute("position", new Tn(e, 3)),
					n.setAttribute(
						"color",
						new Tn(
							[1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
							3
						)
					);
				super(n, new Za({ vertexColors: !0, toneMapped: !1 })),
					(this.type = "AxesHelper");
			}
			setColors(t, e, n) {
				const i = new Ut(),
					r = this.geometry.attributes.color.array;
				return (
					i.set(t),
					i.toArray(r, 0),
					i.toArray(r, 3),
					i.set(e),
					i.toArray(r, 6),
					i.toArray(r, 9),
					i.set(n),
					i.toArray(r, 12),
					i.toArray(r, 15),
					(this.geometry.attributes.color.needsUpdate = !0),
					this
				);
			}
			dispose() {
				this.geometry.dispose(), this.material.dispose();
			}
		}
		const lu = new Float32Array(1),
			cu = new Int32Array(lu.buffer);
		(Lo.create = function (t, e) {
			return (
				console.log("THREE.Curve.create() has been deprecated"),
				(t.prototype = Object.create(Lo.prototype)),
				(t.prototype.constructor = t),
				(t.prototype.getPoint = e),
				t
			);
		}),
			(Zo.prototype.fromPoints = function (t) {
				return (
					console.warn(
						"THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
					),
					this.setFromPoints(t)
				);
			}),
			(Yh.prototype.setColors = function () {
				console.error(
					"THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
				);
			}),
			(Wh.prototype.update = function () {
				console.error(
					"THREE.SkeletonHelper: update() no longer needs to be called."
				);
			}),
			(fc.prototype.extractUrlBase = function (t) {
				return (
					console.warn(
						"THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
					),
					kc.extractUrlBase(t)
				);
			}),
			(fc.Handlers = {
				add: function () {
					console.error(
						"THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
					);
				},
				get: function () {
					console.error(
						"THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
					);
				},
			}),
			(zh.prototype.center = function (t) {
				return (
					console.warn(
						"THREE.Box2: .center() has been renamed to .getCenter()."
					),
					this.getCenter(t)
				);
			}),
			(zh.prototype.empty = function () {
				return (
					console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
					this.isEmpty()
				);
			}),
			(zh.prototype.isIntersectionBox = function (t) {
				return (
					console.warn(
						"THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
					),
					this.intersectsBox(t)
				);
			}),
			(zh.prototype.size = function (t) {
				return (
					console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
					this.getSize(t)
				);
			}),
			($t.prototype.center = function (t) {
				return (
					console.warn(
						"THREE.Box3: .center() has been renamed to .getCenter()."
					),
					this.getCenter(t)
				);
			}),
			($t.prototype.empty = function () {
				return (
					console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
					this.isEmpty()
				);
			}),
			($t.prototype.isIntersectionBox = function (t) {
				return (
					console.warn(
						"THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
					),
					this.intersectsBox(t)
				);
			}),
			($t.prototype.isIntersectionSphere = function (t) {
				return (
					console.warn(
						"THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
					),
					this.intersectsSphere(t)
				);
			}),
			($t.prototype.size = function (t) {
				return (
					console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
					this.getSize(t)
				);
			}),
			(ye.prototype.empty = function () {
				return (
					console.warn(
						"THREE.Sphere: .empty() has been renamed to .isEmpty()."
					),
					this.isEmpty()
				);
			}),
			(vi.prototype.setFromMatrix = function (t) {
				return (
					console.warn(
						"THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
					),
					this.setFromProjectionMatrix(t)
				);
			}),
			(Uh.prototype.center = function (t) {
				return (
					console.warn(
						"THREE.Line3: .center() has been renamed to .getCenter()."
					),
					this.getCenter(t)
				);
			}),
			(Rt.prototype.flattenToArrayOffset = function (t, e) {
				return (
					console.warn(
						"THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
					),
					this.toArray(t, e)
				);
			}),
			(Rt.prototype.multiplyVector3 = function (t) {
				return (
					console.warn(
						"THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
					),
					t.applyMatrix3(this)
				);
			}),
			(Rt.prototype.multiplyVector3Array = function () {
				console.error(
					"THREE.Matrix3: .multiplyVector3Array() has been removed."
				);
			}),
			(Rt.prototype.applyToBufferAttribute = function (t) {
				return (
					console.warn(
						"THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
					),
					t.applyMatrix3(this)
				);
			}),
			(Rt.prototype.applyToVector3Array = function () {
				console.error(
					"THREE.Matrix3: .applyToVector3Array() has been removed."
				);
			}),
			(Rt.prototype.getInverse = function (t) {
				return (
					console.warn(
						"THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
					),
					this.copy(t).invert()
				);
			}),
			(Ae.prototype.extractPosition = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
					),
					this.copyPosition(t)
				);
			}),
			(Ae.prototype.flattenToArrayOffset = function (t, e) {
				return (
					console.warn(
						"THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
					),
					this.toArray(t, e)
				);
			}),
			(Ae.prototype.getPosition = function () {
				return (
					console.warn(
						"THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
					),
					new Zt().setFromMatrixColumn(this, 3)
				);
			}),
			(Ae.prototype.setRotationFromQuaternion = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
					),
					this.makeRotationFromQuaternion(t)
				);
			}),
			(Ae.prototype.multiplyToArray = function () {
				console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
			}),
			(Ae.prototype.multiplyVector3 = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
					),
					t.applyMatrix4(this)
				);
			}),
			(Ae.prototype.multiplyVector4 = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
					),
					t.applyMatrix4(this)
				);
			}),
			(Ae.prototype.multiplyVector3Array = function () {
				console.error(
					"THREE.Matrix4: .multiplyVector3Array() has been removed."
				);
			}),
			(Ae.prototype.rotateAxis = function (t) {
				console.warn(
					"THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
				),
					t.transformDirection(this);
			}),
			(Ae.prototype.crossVector = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
					),
					t.applyMatrix4(this)
				);
			}),
			(Ae.prototype.translate = function () {
				console.error("THREE.Matrix4: .translate() has been removed.");
			}),
			(Ae.prototype.rotateX = function () {
				console.error("THREE.Matrix4: .rotateX() has been removed.");
			}),
			(Ae.prototype.rotateY = function () {
				console.error("THREE.Matrix4: .rotateY() has been removed.");
			}),
			(Ae.prototype.rotateZ = function () {
				console.error("THREE.Matrix4: .rotateZ() has been removed.");
			}),
			(Ae.prototype.rotateByAxis = function () {
				console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
			}),
			(Ae.prototype.applyToBufferAttribute = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
					),
					t.applyMatrix4(this)
				);
			}),
			(Ae.prototype.applyToVector3Array = function () {
				console.error(
					"THREE.Matrix4: .applyToVector3Array() has been removed."
				);
			}),
			(Ae.prototype.makeFrustum = function (t, e, n, i, r, s) {
				return (
					console.warn(
						"THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
					),
					this.makePerspective(t, e, i, n, r, s)
				);
			}),
			(Ae.prototype.getInverse = function (t) {
				return (
					console.warn(
						"THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
					),
					this.copy(t).invert()
				);
			}),
			(mi.prototype.isIntersectionLine = function (t) {
				return (
					console.warn(
						"THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
					),
					this.intersectsLine(t)
				);
			}),
			(Yt.prototype.multiplyVector3 = function (t) {
				return (
					console.warn(
						"THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
					),
					t.applyQuaternion(this)
				);
			}),
			(Yt.prototype.inverse = function () {
				return (
					console.warn(
						"THREE.Quaternion: .inverse() has been renamed to invert()."
					),
					this.invert()
				);
			}),
			(Ee.prototype.isIntersectionBox = function (t) {
				return (
					console.warn(
						"THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
					),
					this.intersectsBox(t)
				);
			}),
			(Ee.prototype.isIntersectionPlane = function (t) {
				return (
					console.warn(
						"THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
					),
					this.intersectsPlane(t)
				);
			}),
			(Ee.prototype.isIntersectionSphere = function (t) {
				return (
					console.warn(
						"THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
					),
					this.intersectsSphere(t)
				);
			}),
			(hn.prototype.area = function () {
				return (
					console.warn(
						"THREE.Triangle: .area() has been renamed to .getArea()."
					),
					this.getArea()
				);
			}),
			(hn.prototype.barycoordFromPoint = function (t, e) {
				return (
					console.warn(
						"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
					),
					this.getBarycoord(t, e)
				);
			}),
			(hn.prototype.midpoint = function (t) {
				return (
					console.warn(
						"THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
					),
					this.getMidpoint(t)
				);
			}),
			(hn.prototypenormal = function (t) {
				return (
					console.warn(
						"THREE.Triangle: .normal() has been renamed to .getNormal()."
					),
					this.getNormal(t)
				);
			}),
			(hn.prototype.plane = function (t) {
				return (
					console.warn(
						"THREE.Triangle: .plane() has been renamed to .getPlane()."
					),
					this.getPlane(t)
				);
			}),
			(hn.barycoordFromPoint = function (t, e, n, i, r) {
				return (
					console.warn(
						"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
					),
					hn.getBarycoord(t, e, n, i, r)
				);
			}),
			(hn.normal = function (t, e, n, i) {
				return (
					console.warn(
						"THREE.Triangle: .normal() has been renamed to .getNormal()."
					),
					hn.getNormal(t, e, n, i)
				);
			}),
			(Ko.prototype.extractAllPoints = function (t) {
				return (
					console.warn(
						"THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
					),
					this.extractPoints(t)
				);
			}),
			(Ko.prototype.extrude = function (t) {
				return (
					console.warn(
						"THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
					),
					new El(this, t)
				);
			}),
			(Ko.prototype.makeGeometry = function (t) {
				return (
					console.warn(
						"THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
					),
					new Dl(this, t)
				);
			}),
			(At.prototype.fromAttribute = function (t, e, n) {
				return (
					console.warn(
						"THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
					),
					this.fromBufferAttribute(t, e, n)
				);
			}),
			(At.prototype.distanceToManhattan = function (t) {
				return (
					console.warn(
						"THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
					),
					this.manhattanDistanceTo(t)
				);
			}),
			(At.prototype.lengthManhattan = function () {
				return (
					console.warn(
						"THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
					),
					this.manhattanLength()
				);
			}),
			(Zt.prototype.setEulerFromRotationMatrix = function () {
				console.error(
					"THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
				);
			}),
			(Zt.prototype.setEulerFromQuaternion = function () {
				console.error(
					"THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
				);
			}),
			(Zt.prototype.getPositionFromMatrix = function (t) {
				return (
					console.warn(
						"THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
					),
					this.setFromMatrixPosition(t)
				);
			}),
			(Zt.prototype.getScaleFromMatrix = function (t) {
				return (
					console.warn(
						"THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
					),
					this.setFromMatrixScale(t)
				);
			}),
			(Zt.prototype.getColumnFromMatrix = function (t, e) {
				return (
					console.warn(
						"THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
					),
					this.setFromMatrixColumn(e, t)
				);
			}),
			(Zt.prototype.applyProjection = function (t) {
				return (
					console.warn(
						"THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
					),
					this.applyMatrix4(t)
				);
			}),
			(Zt.prototype.fromAttribute = function (t, e, n) {
				return (
					console.warn(
						"THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
					),
					this.fromBufferAttribute(t, e, n)
				);
			}),
			(Zt.prototype.distanceToManhattan = function (t) {
				return (
					console.warn(
						"THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
					),
					this.manhattanDistanceTo(t)
				);
			}),
			(Zt.prototype.lengthManhattan = function () {
				return (
					console.warn(
						"THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
					),
					this.manhattanLength()
				);
			}),
			(jt.prototype.fromAttribute = function (t, e, n) {
				return (
					console.warn(
						"THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
					),
					this.fromBufferAttribute(t, e, n)
				);
			}),
			(jt.prototype.lengthManhattan = function () {
				return (
					console.warn(
						"THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
					),
					this.manhattanLength()
				);
			}),
			(Qe.prototype.getChildByName = function (t) {
				return (
					console.warn(
						"THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
					),
					this.getObjectByName(t)
				);
			}),
			(Qe.prototype.renderDepth = function () {
				console.warn(
					"THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
				);
			}),
			(Qe.prototype.translate = function (t, e) {
				return (
					console.warn(
						"THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
					),
					this.translateOnAxis(e, t)
				);
			}),
			(Qe.prototype.getWorldRotation = function () {
				console.error(
					"THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
				);
			}),
			(Qe.prototype.applyMatrix = function (t) {
				return (
					console.warn(
						"THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
					),
					this.applyMatrix4(t)
				);
			}),
			Object.defineProperties(Qe.prototype, {
				eulerOrder: {
					get: function () {
						return (
							console.warn(
								"THREE.Object3D: .eulerOrder is now .rotation.order."
							),
							this.rotation.order
						);
					},
					set: function (t) {
						console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
							(this.rotation.order = t);
					},
				},
				useQuaternion: {
					get: function () {
						console.warn(
							"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
						);
					},
					set: function () {
						console.warn(
							"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
						);
					},
				},
			}),
			(Qn.prototype.setDrawMode = function () {
				console.error(
					"THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
				);
			}),
			Object.defineProperties(Qn.prototype, {
				drawMode: {
					get: function () {
						return (
							console.error(
								"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
							),
							0
						);
					},
					set: function () {
						console.error(
							"THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
						);
					},
				},
			}),
			(Fa.prototype.initBones = function () {
				console.error("THREE.SkinnedMesh: initBones() has been removed.");
			}),
			(ai.prototype.setLens = function (t, e) {
				console.warn(
					"THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
				),
					void 0 !== e && (this.filmGauge = e),
					this.setFocalLength(t);
			}),
			Object.defineProperties(bc.prototype, {
				onlyShadow: {
					set: function () {
						console.warn("THREE.Light: .onlyShadow has been removed.");
					},
				},
				shadowCameraFov: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
						),
							(this.shadow.camera.fov = t);
					},
				},
				shadowCameraLeft: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
						),
							(this.shadow.camera.left = t);
					},
				},
				shadowCameraRight: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraRight is now .shadow.camera.right."
						),
							(this.shadow.camera.right = t);
					},
				},
				shadowCameraTop: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraTop is now .shadow.camera.top."
						),
							(this.shadow.camera.top = t);
					},
				},
				shadowCameraBottom: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
						),
							(this.shadow.camera.bottom = t);
					},
				},
				shadowCameraNear: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraNear is now .shadow.camera.near."
						),
							(this.shadow.camera.near = t);
					},
				},
				shadowCameraFar: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowCameraFar is now .shadow.camera.far."
						),
							(this.shadow.camera.far = t);
					},
				},
				shadowCameraVisible: {
					set: function () {
						console.warn(
							"THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
						);
					},
				},
				shadowBias: {
					set: function (t) {
						console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
							(this.shadow.bias = t);
					},
				},
				shadowDarkness: {
					set: function () {
						console.warn("THREE.Light: .shadowDarkness has been removed.");
					},
				},
				shadowMapWidth: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
						),
							(this.shadow.mapSize.width = t);
					},
				},
				shadowMapHeight: {
					set: function (t) {
						console.warn(
							"THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
						),
							(this.shadow.mapSize.height = t);
					},
				},
			}),
			Object.defineProperties(gn.prototype, {
				length: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferAttribute: .length has been deprecated. Use .count instead."
							),
							this.array.length
						);
					},
				},
				dynamic: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
							),
							this.usage === ut
						);
					},
					set: function () {
						console.warn(
							"THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
						),
							this.setUsage(ut);
					},
				},
			}),
			(gn.prototype.setDynamic = function (t) {
				return (
					console.warn(
						"THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
					),
					this.setUsage(!0 === t ? ut : ht),
					this
				);
			}),
			(gn.prototype.copyIndicesArray = function () {
				console.error(
					"THREE.BufferAttribute: .copyIndicesArray() has been removed."
				);
			}),
			(gn.prototype.setArray = function () {
				console.error(
					"THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
				);
			}),
			(Nn.prototype.addIndex = function (t) {
				console.warn(
					"THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
				),
					this.setIndex(t);
			}),
			(Nn.prototype.addAttribute = function (t, e) {
				return (
					console.warn(
						"THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
					),
					(e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
						? "index" === t
							? (console.warn(
									"THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
							  ),
							  this.setIndex(e),
							  this)
							: this.setAttribute(t, e)
						: (console.warn(
								"THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
						  ),
						  this.setAttribute(t, new gn(arguments[1], arguments[2])))
				);
			}),
			(Nn.prototype.addDrawCall = function (t, e, n) {
				void 0 !== n &&
					console.warn(
						"THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
					),
					console.warn(
						"THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
					),
					this.addGroup(t, e);
			}),
			(Nn.prototype.clearDrawCalls = function () {
				console.warn(
					"THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
				),
					this.clearGroups();
			}),
			(Nn.prototype.computeOffsets = function () {
				console.warn(
					"THREE.BufferGeometry: .computeOffsets() has been removed."
				);
			}),
			(Nn.prototype.removeAttribute = function (t) {
				return (
					console.warn(
						"THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
					),
					this.deleteAttribute(t)
				);
			}),
			(Nn.prototype.applyMatrix = function (t) {
				return (
					console.warn(
						"THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
					),
					this.applyMatrix4(t)
				);
			}),
			Object.defineProperties(Nn.prototype, {
				drawcalls: {
					get: function () {
						return (
							console.error(
								"THREE.BufferGeometry: .drawcalls has been renamed to .groups."
							),
							this.groups
						);
					},
				},
				offsets: {
					get: function () {
						return (
							console.warn(
								"THREE.BufferGeometry: .offsets has been renamed to .groups."
							),
							this.groups
						);
					},
				},
			}),
			(ua.prototype.setDynamic = function (t) {
				return (
					console.warn(
						"THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
					),
					this.setUsage(!0 === t ? ut : ht),
					this
				);
			}),
			(ua.prototype.setArray = function () {
				console.error(
					"THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
				);
			}),
			(El.prototype.getArrays = function () {
				console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
			}),
			(El.prototype.addShapeList = function () {
				console.error(
					"THREE.ExtrudeGeometry: .addShapeList() has been removed."
				);
			}),
			(El.prototype.addShape = function () {
				console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
			}),
			(ha.prototype.dispose = function () {
				console.error("THREE.Scene: .dispose() has been removed.");
			}),
			(Ch.prototype.onUpdate = function () {
				return (
					console.warn(
						"THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
					),
					this
				);
			}),
			Object.defineProperties(dn.prototype, {
				wrapAround: {
					get: function () {
						console.warn("THREE.Material: .wrapAround has been removed.");
					},
					set: function () {
						console.warn("THREE.Material: .wrapAround has been removed.");
					},
				},
				overdraw: {
					get: function () {
						console.warn("THREE.Material: .overdraw has been removed.");
					},
					set: function () {
						console.warn("THREE.Material: .overdraw has been removed.");
					},
				},
				wrapRGB: {
					get: function () {
						return (
							console.warn("THREE.Material: .wrapRGB has been removed."),
							new Ut()
						);
					},
				},
				shading: {
					get: function () {
						console.error(
							"THREE." +
								this.type +
								": .shading has been removed. Use the boolean .flatShading instead."
						);
					},
					set: function (t) {
						console.warn(
							"THREE." +
								this.type +
								": .shading has been removed. Use the boolean .flatShading instead."
						),
							(this.flatShading = 1 === t);
					},
				},
				stencilMask: {
					get: function () {
						return (
							console.warn(
								"THREE." +
									this.type +
									": .stencilMask has been removed. Use .stencilFuncMask instead."
							),
							this.stencilFuncMask
						);
					},
					set: function (t) {
						console.warn(
							"THREE." +
								this.type +
								": .stencilMask has been removed. Use .stencilFuncMask instead."
						),
							(this.stencilFuncMask = t);
					},
				},
				vertexTangents: {
					get: function () {
						console.warn(
							"THREE." + this.type + ": .vertexTangents has been removed."
						);
					},
					set: function () {
						console.warn(
							"THREE." + this.type + ": .vertexTangents has been removed."
						);
					},
				},
			}),
			Object.defineProperties(ri.prototype, {
				derivatives: {
					get: function () {
						return (
							console.warn(
								"THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
							),
							this.extensions.derivatives
						);
					},
					set: function (t) {
						console.warn(
							"THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
						),
							(this.extensions.derivatives = t);
					},
				},
			}),
			(aa.prototype.clearTarget = function (t, e, n, i) {
				console.warn(
					"THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
				),
					this.setRenderTarget(t),
					this.clear(e, n, i);
			}),
			(aa.prototype.animate = function (t) {
				console.warn(
					"THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
				),
					this.setAnimationLoop(t);
			}),
			(aa.prototype.getCurrentRenderTarget = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
					),
					this.getRenderTarget()
				);
			}),
			(aa.prototype.getMaxAnisotropy = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
					),
					this.capabilities.getMaxAnisotropy()
				);
			}),
			(aa.prototype.getPrecision = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
					),
					this.capabilities.precision
				);
			}),
			(aa.prototype.resetGLState = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
					),
					this.state.reset()
				);
			}),
			(aa.prototype.supportsFloatTextures = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
					),
					this.extensions.get("OES_texture_float")
				);
			}),
			(aa.prototype.supportsHalfFloatTextures = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
					),
					this.extensions.get("OES_texture_half_float")
				);
			}),
			(aa.prototype.supportsStandardDerivatives = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
					),
					this.extensions.get("OES_standard_derivatives")
				);
			}),
			(aa.prototype.supportsCompressedTextureS3TC = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
					),
					this.extensions.get("WEBGL_compressed_texture_s3tc")
				);
			}),
			(aa.prototype.supportsCompressedTexturePVRTC = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
					),
					this.extensions.get("WEBGL_compressed_texture_pvrtc")
				);
			}),
			(aa.prototype.supportsBlendMinMax = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
					),
					this.extensions.get("EXT_blend_minmax")
				);
			}),
			(aa.prototype.supportsVertexTextures = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
					),
					this.capabilities.vertexTextures
				);
			}),
			(aa.prototype.supportsInstancedArrays = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
					),
					this.extensions.get("ANGLE_instanced_arrays")
				);
			}),
			(aa.prototype.enableScissorTest = function (t) {
				console.warn(
					"THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
				),
					this.setScissorTest(t);
			}),
			(aa.prototype.initMaterial = function () {
				console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
			}),
			(aa.prototype.addPrePlugin = function () {
				console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
			}),
			(aa.prototype.addPostPlugin = function () {
				console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
			}),
			(aa.prototype.updateShadowMap = function () {
				console.warn(
					"THREE.WebGLRenderer: .updateShadowMap() has been removed."
				);
			}),
			(aa.prototype.setFaceCulling = function () {
				console.warn(
					"THREE.WebGLRenderer: .setFaceCulling() has been removed."
				);
			}),
			(aa.prototype.allocTextureUnit = function () {
				console.warn(
					"THREE.WebGLRenderer: .allocTextureUnit() has been removed."
				);
			}),
			(aa.prototype.setTexture = function () {
				console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
			}),
			(aa.prototype.setTexture2D = function () {
				console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
			}),
			(aa.prototype.setTextureCube = function () {
				console.warn(
					"THREE.WebGLRenderer: .setTextureCube() has been removed."
				);
			}),
			(aa.prototype.getActiveMipMapLevel = function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
					),
					this.getActiveMipmapLevel()
				);
			}),
			Object.defineProperties(aa.prototype, {
				shadowMapEnabled: {
					get: function () {
						return this.shadowMap.enabled;
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
						),
							(this.shadowMap.enabled = t);
					},
				},
				shadowMapType: {
					get: function () {
						return this.shadowMap.type;
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
						),
							(this.shadowMap.type = t);
					},
				},
				shadowMapCullFace: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
						);
					},
				},
				context: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
							),
							this.getContext()
						);
					},
				},
				vr: {
					get: function () {
						return (
							console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
							this.xr
						);
					},
				},
				gammaInput: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
							),
							!1
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
						);
					},
				},
				gammaOutput: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
							),
							!1
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
						),
							(this.outputEncoding = !0 === t ? lt : ot);
					},
				},
				toneMappingWhitePoint: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
							),
							1
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
						);
					},
				},
				gammaFactor: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderer: .gammaFactor has been removed."
							),
							2
						);
					},
					set: function () {
						console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
					},
				},
			}),
			Object.defineProperties(Ys.prototype, {
				cullFace: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
						);
					},
				},
				renderReverseSided: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
						);
					},
				},
				renderSingleSided: {
					get: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
						);
					},
					set: function () {
						console.warn(
							"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
						);
					},
				},
			}),
			Object.defineProperties(qt.prototype, {
				wrapS: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
							),
							this.texture.wrapS
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
						),
							(this.texture.wrapS = t);
					},
				},
				wrapT: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
							),
							this.texture.wrapT
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
						),
							(this.texture.wrapT = t);
					},
				},
				magFilter: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
							),
							this.texture.magFilter
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
						),
							(this.texture.magFilter = t);
					},
				},
				minFilter: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
							),
							this.texture.minFilter
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
						),
							(this.texture.minFilter = t);
					},
				},
				anisotropy: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
							),
							this.texture.anisotropy
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
						),
							(this.texture.anisotropy = t);
					},
				},
				offset: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .offset is now .texture.offset."
							),
							this.texture.offset
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .offset is now .texture.offset."
						),
							(this.texture.offset = t);
					},
				},
				repeat: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
							),
							this.texture.repeat
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
						),
							(this.texture.repeat = t);
					},
				},
				format: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .format is now .texture.format."
							),
							this.texture.format
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .format is now .texture.format."
						),
							(this.texture.format = t);
					},
				},
				type: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .type is now .texture.type."
							),
							this.texture.type
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .type is now .texture.type."
						),
							(this.texture.type = t);
					},
				},
				generateMipmaps: {
					get: function () {
						return (
							console.warn(
								"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
							),
							this.texture.generateMipmaps
						);
					},
					set: function (t) {
						console.warn(
							"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
						),
							(this.texture.generateMipmaps = t);
					},
				},
			}),
			(ch.prototype.load = function (t) {
				console.warn(
					"THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
				);
				const e = this;
				return (
					new Kc().load(t, function (t) {
						e.setBuffer(t);
					}),
					this
				);
			}),
			(mh.prototype.getData = function () {
				return (
					console.warn(
						"THREE.AudioAnalyser: .getData() is now .getFrequencyData()."
					),
					this.getFrequencyData()
				);
			}),
			(li.prototype.updateCubeMap = function (t, e) {
				return (
					console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
					this.update(t, e)
				);
			}),
			(li.prototype.clear = function (t, e, n, i) {
				return (
					console.warn(
						"THREE.CubeCamera: .clear() is now .renderTarget.clear()."
					),
					this.renderTarget.clear(t, e, n, i)
				);
			}),
			(Gt.crossOrigin = void 0),
			(Gt.loadTexture = function (t, e, n, i) {
				console.warn(
					"THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
				);
				const r = new Mc();
				r.setCrossOrigin(this.crossOrigin);
				const s = r.load(t, n, void 0, i);
				return e && (s.mapping = e), s;
			}),
			(Gt.loadTextureCube = function (t, e, n, i) {
				console.warn(
					"THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
				);
				const r = new xc();
				r.setCrossOrigin(this.crossOrigin);
				const s = r.load(t, n, void 0, i);
				return e && (s.mapping = e), s;
			}),
			(Gt.loadCompressedTexture = function () {
				console.error(
					"THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
				);
			}),
			(Gt.loadCompressedTextureCube = function () {
				console.error(
					"THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
				);
			});
		const hu = {
			createMultiMaterialObject: function () {
				console.error(
					"THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
				);
			},
			detach: function () {
				console.error(
					"THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
				);
			},
			attach: function () {
				console.error(
					"THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
				);
			},
		};
		"undefined" != typeof __INTERNAL_THREE_DEVTOOLS__ &&
			__INTERNAL_THREE_DEVTOOLS__.dispatchEvent(
				new CustomEvent("register", { detail: { revision: e } })
			),
			"undefined" != typeof window &&
				(window.__THREE__
					? console.warn(
							"WARNING: Multiple instances of Three.js being imported."
					  )
					: (window.__THREE__ = e)),
			(t.ACESFilmicToneMapping = 4),
			(t.AddEquation = n),
			(t.AddOperation = 2),
			(t.AdditiveAnimationBlendMode = at),
			(t.AdditiveBlending = 2),
			(t.AlphaFormat = 1021),
			(t.AlwaysDepth = 1),
			(t.AlwaysStencilFunc = 519),
			(t.AmbientLight = Oc),
			(t.AmbientLightProbe = $c),
			(t.AnimationClip = hc),
			(t.AnimationLoader = class extends fc {
				constructor(t) {
					super(t);
				}
				load(t, e, n, i) {
					const r = this,
						s = new vc(this.manager);
					s.setPath(this.path),
						s.setRequestHeader(this.requestHeader),
						s.setWithCredentials(this.withCredentials),
						s.load(
							t,
							function (n) {
								try {
									e(r.parse(JSON.parse(n)));
								} catch (e) {
									i ? i(e) : console.error(e), r.manager.itemError(t);
								}
							},
							n,
							i
						);
				}
				parse(t) {
					const e = [];
					for (let n = 0; n < t.length; n++) {
						const i = hc.parse(t[n]);
						e.push(i);
					}
					return e;
				}
			}),
			(t.AnimationMixer = Lh),
			(t.AnimationObjectGroup = Ah),
			(t.AnimationUtils = Kl),
			(t.ArcCurve = Po),
			(t.ArrayCamera = $s),
			(t.ArrowHelper = class extends Qe {
				constructor(
					t = new Zt(0, 0, 1),
					e = new Zt(0, 0, 0),
					n = 1,
					i = 16776960,
					r = 0.2 * n,
					s = 0.2 * r
				) {
					super(),
						(this.type = "ArrowHelper"),
						void 0 === su &&
							((su = new Nn()),
							su.setAttribute("position", new Tn([0, 0, 0, 0, 1, 0], 3)),
							(au = new _o(0, 0.5, 1, 5, 1)),
							au.translate(0, -0.5, 0)),
						this.position.copy(e),
						(this.line = new no(su, new Za({ color: i, toneMapped: !1 }))),
						(this.line.matrixAutoUpdate = !1),
						this.add(this.line),
						(this.cone = new Qn(au, new pn({ color: i, toneMapped: !1 }))),
						(this.cone.matrixAutoUpdate = !1),
						this.add(this.cone),
						this.setDirection(t),
						this.setLength(n, r, s);
				}
				setDirection(t) {
					if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
					else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
					else {
						ru.set(t.z, 0, -t.x).normalize();
						const e = Math.acos(t.y);
						this.quaternion.setFromAxisAngle(ru, e);
					}
				}
				setLength(t, e = 0.2 * t, n = 0.2 * e) {
					this.line.scale.set(1, Math.max(1e-4, t - e), 1),
						this.line.updateMatrix(),
						this.cone.scale.set(n, e, n),
						(this.cone.position.y = t),
						this.cone.updateMatrix();
				}
				setColor(t) {
					this.line.material.color.set(t), this.cone.material.color.set(t);
				}
				copy(t) {
					return (
						super.copy(t, !1),
						this.line.copy(t.line),
						this.cone.copy(t.cone),
						this
					);
				}
			}),
			(t.Audio = ch),
			(t.AudioAnalyser = mh),
			(t.AudioContext = Zc),
			(t.AudioListener = class extends Qe {
				constructor() {
					super(),
						(this.type = "AudioListener"),
						(this.context = Zc.getContext()),
						(this.gain = this.context.createGain()),
						this.gain.connect(this.context.destination),
						(this.filter = null),
						(this.timeDelta = 0),
						(this._clock = new ih());
				}
				getInput() {
					return this.gain;
				}
				removeFilter() {
					return (
						null !== this.filter &&
							(this.gain.disconnect(this.filter),
							this.filter.disconnect(this.context.destination),
							this.gain.connect(this.context.destination),
							(this.filter = null)),
						this
					);
				}
				getFilter() {
					return this.filter;
				}
				setFilter(t) {
					return (
						null !== this.filter
							? (this.gain.disconnect(this.filter),
							  this.filter.disconnect(this.context.destination))
							: this.gain.disconnect(this.context.destination),
						(this.filter = t),
						this.gain.connect(this.filter),
						this.filter.connect(this.context.destination),
						this
					);
				}
				getMasterVolume() {
					return this.gain.gain.value;
				}
				setMasterVolume(t) {
					return (
						this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
						this
					);
				}
				updateMatrixWorld(t) {
					super.updateMatrixWorld(t);
					const e = this.context.listener,
						n = this.up;
					if (
						((this.timeDelta = this._clock.getDelta()),
						this.matrixWorld.decompose(sh, ah, oh),
						lh.set(0, 0, -1).applyQuaternion(ah),
						e.positionX)
					) {
						const t = this.context.currentTime + this.timeDelta;
						e.positionX.linearRampToValueAtTime(sh.x, t),
							e.positionY.linearRampToValueAtTime(sh.y, t),
							e.positionZ.linearRampToValueAtTime(sh.z, t),
							e.forwardX.linearRampToValueAtTime(lh.x, t),
							e.forwardY.linearRampToValueAtTime(lh.y, t),
							e.forwardZ.linearRampToValueAtTime(lh.z, t),
							e.upX.linearRampToValueAtTime(n.x, t),
							e.upY.linearRampToValueAtTime(n.y, t),
							e.upZ.linearRampToValueAtTime(n.z, t);
					} else
						e.setPosition(sh.x, sh.y, sh.z),
							e.setOrientation(lh.x, lh.y, lh.z, n.x, n.y, n.z);
				}
			}),
			(t.AudioLoader = Kc),
			(t.AxesHelper = ou),
			(t.AxisHelper = function (t) {
				return (
					console.warn(
						"THREE.AxisHelper has been renamed to THREE.AxesHelper."
					),
					new ou(t)
				);
			}),
			(t.BackSide = 1),
			(t.BasicDepthPacking = 3200),
			(t.BasicShadowMap = 0),
			(t.BinaryTextureLoader = function (t) {
				return (
					console.warn(
						"THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."
					),
					new _c(t)
				);
			}),
			(t.Bone = Ua),
			(t.BooleanKeyframeTrack = ic),
			(t.BoundingBoxHelper = function (t, e) {
				return (
					console.warn(
						"THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."
					),
					new iu(t, e)
				);
			}),
			(t.Box2 = zh),
			(t.Box3 = $t),
			(t.Box3Helper = class extends so {
				constructor(t, e = 16776960) {
					const n = new Uint16Array([
							0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6,
							3, 7,
						]),
						i = new Nn();
					i.setIndex(new gn(n, 1)),
						i.setAttribute(
							"position",
							new Tn(
								[
									1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1,
									-1, -1, -1, 1, -1, -1,
								],
								3
							)
						),
						super(i, new Za({ color: e, toneMapped: !1 })),
						(this.box = t),
						(this.type = "Box3Helper"),
						this.geometry.computeBoundingSphere();
				}
				updateMatrixWorld(t) {
					const e = this.box;
					e.isEmpty() ||
						(e.getCenter(this.position),
						e.getSize(this.scale),
						this.scale.multiplyScalar(0.5),
						super.updateMatrixWorld(t));
				}
			}),
			(t.BoxBufferGeometry = ti),
			(t.BoxGeometry = ti),
			(t.BoxHelper = iu),
			(t.BufferAttribute = gn),
			(t.BufferGeometry = Nn),
			(t.BufferGeometryLoader = Wc),
			(t.ByteType = 1010),
			(t.Cache = dc),
			(t.Camera = si),
			(t.CameraHelper = class extends so {
				constructor(t) {
					const e = new Nn(),
						n = new Za({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
						i = [],
						r = [],
						s = {},
						a = new Ut(16755200),
						o = new Ut(16711680),
						l = new Ut(43775),
						c = new Ut(16777215),
						h = new Ut(3355443);
					function u(t, e, n) {
						d(t, n), d(e, n);
					}
					function d(t, e) {
						i.push(0, 0, 0),
							r.push(e.r, e.g, e.b),
							void 0 === s[t] && (s[t] = []),
							s[t].push(i.length / 3 - 1);
					}
					u("n1", "n2", a),
						u("n2", "n4", a),
						u("n4", "n3", a),
						u("n3", "n1", a),
						u("f1", "f2", a),
						u("f2", "f4", a),
						u("f4", "f3", a),
						u("f3", "f1", a),
						u("n1", "f1", a),
						u("n2", "f2", a),
						u("n3", "f3", a),
						u("n4", "f4", a),
						u("p", "n1", o),
						u("p", "n2", o),
						u("p", "n3", o),
						u("p", "n4", o),
						u("u1", "u2", l),
						u("u2", "u3", l),
						u("u3", "u1", l),
						u("c", "t", c),
						u("p", "c", h),
						u("cn1", "cn2", h),
						u("cn3", "cn4", h),
						u("cf1", "cf2", h),
						u("cf3", "cf4", h),
						e.setAttribute("position", new Tn(i, 3)),
						e.setAttribute("color", new Tn(r, 3)),
						super(e, n),
						(this.type = "CameraHelper"),
						(this.camera = t),
						this.camera.updateProjectionMatrix &&
							this.camera.updateProjectionMatrix(),
						(this.matrix = t.matrixWorld),
						(this.matrixAutoUpdate = !1),
						(this.pointMap = s),
						this.update();
				}
				update() {
					const t = this.geometry,
						e = this.pointMap;
					tu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
						eu("c", e, t, tu, 0, 0, -1),
						eu("t", e, t, tu, 0, 0, 1),
						eu("n1", e, t, tu, -1, -1, -1),
						eu("n2", e, t, tu, 1, -1, -1),
						eu("n3", e, t, tu, -1, 1, -1),
						eu("n4", e, t, tu, 1, 1, -1),
						eu("f1", e, t, tu, -1, -1, 1),
						eu("f2", e, t, tu, 1, -1, 1),
						eu("f3", e, t, tu, -1, 1, 1),
						eu("f4", e, t, tu, 1, 1, 1),
						eu("u1", e, t, tu, 0.7, 1.1, -1),
						eu("u2", e, t, tu, -0.7, 1.1, -1),
						eu("u3", e, t, tu, 0, 2, -1),
						eu("cf1", e, t, tu, -1, 0, 1),
						eu("cf2", e, t, tu, 1, 0, 1),
						eu("cf3", e, t, tu, 0, -1, 1),
						eu("cf4", e, t, tu, 0, 1, 1),
						eu("cn1", e, t, tu, -1, 0, -1),
						eu("cn2", e, t, tu, 1, 0, -1),
						eu("cn3", e, t, tu, 0, -1, -1),
						eu("cn4", e, t, tu, 0, 1, -1),
						(t.getAttribute("position").needsUpdate = !0);
				}
				dispose() {
					this.geometry.dispose(), this.material.dispose();
				}
			}),
			(t.CanvasRenderer = function () {
				console.error("THREE.CanvasRenderer has been removed");
			}),
			(t.CanvasTexture = yo),
			(t.CatmullRomCurve3 = Oo),
			(t.CineonToneMapping = 3),
			(t.CircleBufferGeometry = xo),
			(t.CircleGeometry = xo),
			(t.ClampToEdgeWrapping = u),
			(t.Clock = ih),
			(t.Color = Ut),
			(t.ColorKeyframeTrack = rc),
			(t.CompressedTexture = vo),
			(t.CompressedTextureLoader = class extends fc {
				constructor(t) {
					super(t);
				}
				load(t, e, n, i) {
					const r = this,
						s = [],
						a = new vo(),
						o = new vc(this.manager);
					o.setPath(this.path),
						o.setResponseType("arraybuffer"),
						o.setRequestHeader(this.requestHeader),
						o.setWithCredentials(r.withCredentials);
					let l = 0;
					function c(c) {
						o.load(
							t[c],
							function (t) {
								const n = r.parse(t, !0);
								(s[c] = {
									width: n.width,
									height: n.height,
									format: n.format,
									mipmaps: n.mipmaps,
								}),
									(l += 1),
									6 === l &&
										(1 === n.mipmapCount && (a.minFilter = g),
										(a.image = s),
										(a.format = n.format),
										(a.needsUpdate = !0),
										e && e(a));
							},
							n,
							i
						);
					}
					if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) c(e);
					else
						o.load(
							t,
							function (t) {
								const n = r.parse(t, !0);
								if (n.isCubemap) {
									const t = n.mipmaps.length / n.mipmapCount;
									for (let e = 0; e < t; e++) {
										s[e] = { mipmaps: [] };
										for (let t = 0; t < n.mipmapCount; t++)
											s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]),
												(s[e].format = n.format),
												(s[e].width = n.width),
												(s[e].height = n.height);
									}
									a.image = s;
								} else
									(a.image.width = n.width),
										(a.image.height = n.height),
										(a.mipmaps = n.mipmaps);
								1 === n.mipmapCount && (a.minFilter = g),
									(a.format = n.format),
									(a.needsUpdate = !0),
									e && e(a);
							},
							n,
							i
						);
					return a;
				}
			}),
			(t.ConeBufferGeometry = Mo),
			(t.ConeGeometry = Mo),
			(t.CubeCamera = li),
			(t.CubeReflectionMapping = r),
			(t.CubeRefractionMapping = s),
			(t.CubeTexture = ci),
			(t.CubeTextureLoader = xc),
			(t.CubeUVReflectionMapping = l),
			(t.CubeUVRefractionMapping = c),
			(t.CubicBezierCurve = Go),
			(t.CubicBezierCurve3 = ko),
			(t.CubicInterpolant = $l),
			(t.CullFaceBack = 1),
			(t.CullFaceFront = 2),
			(t.CullFaceFrontBack = 3),
			(t.CullFaceNone = 0),
			(t.Curve = Lo),
			(t.CurvePath = Yo),
			(t.CustomBlending = 5),
			(t.CustomToneMapping = 5),
			(t.CylinderBufferGeometry = _o),
			(t.CylinderGeometry = _o),
			(t.Cylindrical = class {
				constructor(t = 1, e = 0, n = 0) {
					return (this.radius = t), (this.theta = e), (this.y = n), this;
				}
				set(t, e, n) {
					return (this.radius = t), (this.theta = e), (this.y = n), this;
				}
				copy(t) {
					return (
						(this.radius = t.radius),
						(this.theta = t.theta),
						(this.y = t.y),
						this
					);
				}
				setFromVector3(t) {
					return this.setFromCartesianCoords(t.x, t.y, t.z);
				}
				setFromCartesianCoords(t, e, n) {
					return (
						(this.radius = Math.sqrt(t * t + n * n)),
						(this.theta = Math.atan2(t, n)),
						(this.y = e),
						this
					);
				}
				clone() {
					return new this.constructor().copy(this);
				}
			}),
			(t.DataTexture = Ha),
			(t.DataTexture2DArray = ir),
			(t.DataTexture3D = cr),
			(t.DataTextureLoader = _c),
			(t.DataUtils = class {
				static toHalfFloat(t) {
					t > 65504 &&
						(console.warn(
							"THREE.DataUtils.toHalfFloat(): value exceeds 65504."
						),
						(t = 65504)),
						(lu[0] = t);
					const e = cu[0];
					let n = (e >> 16) & 32768,
						i = (e >> 12) & 2047;
					const r = (e >> 23) & 255;
					return r < 103
						? n
						: r > 142
						? ((n |= 31744), (n |= (255 == r ? 0 : 1) && 8388607 & e), n)
						: r < 113
						? ((i |= 2048), (n |= (i >> (114 - r)) + ((i >> (113 - r)) & 1)), n)
						: ((n |= ((r - 112) << 10) | (i >> 1)), (n += 1 & i), n);
				}
			}),
			(t.DecrementStencilOp = 7683),
			(t.DecrementWrapStencilOp = 34056),
			(t.DefaultLoadingManager = mc),
			(t.DepthFormat = E),
			(t.DepthStencilFormat = A),
			(t.DepthTexture = ia),
			(t.DirectionalLight = zc),
			(t.DirectionalLightHelper = class extends Qe {
				constructor(t, e, n) {
					super(),
						(this.light = t),
						this.light.updateMatrixWorld(),
						(this.matrix = t.matrixWorld),
						(this.matrixAutoUpdate = !1),
						(this.color = n),
						void 0 === e && (e = 1);
					let i = new Nn();
					i.setAttribute(
						"position",
						new Tn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)
					);
					const r = new Za({ fog: !1, toneMapped: !1 });
					(this.lightPlane = new no(i, r)),
						this.add(this.lightPlane),
						(i = new Nn()),
						i.setAttribute("position", new Tn([0, 0, 0, 0, 0, 1], 3)),
						(this.targetLine = new no(i, r)),
						this.add(this.targetLine),
						this.update();
				}
				dispose() {
					this.lightPlane.geometry.dispose(),
						this.lightPlane.material.dispose(),
						this.targetLine.geometry.dispose(),
						this.targetLine.material.dispose();
				}
				update() {
					Zh.setFromMatrixPosition(this.light.matrixWorld),
						Kh.setFromMatrixPosition(this.light.target.matrixWorld),
						Qh.subVectors(Kh, Zh),
						this.lightPlane.lookAt(Kh),
						void 0 !== this.color
							? (this.lightPlane.material.color.set(this.color),
							  this.targetLine.material.color.set(this.color))
							: (this.lightPlane.material.color.copy(this.light.color),
							  this.targetLine.material.color.copy(this.light.color)),
						this.targetLine.lookAt(Kh),
						(this.targetLine.scale.z = Qh.length());
				}
			}),
			(t.DiscreteInterpolant = ec),
			(t.DodecahedronBufferGeometry = wo),
			(t.DodecahedronGeometry = wo),
			(t.DoubleSide = 2),
			(t.DstAlphaFactor = 206),
			(t.DstColorFactor = 208),
			(t.DynamicBufferAttribute = function (t, e) {
				return (
					console.warn(
						"THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."
					),
					new gn(t, e).setUsage(ut)
				);
			}),
			(t.DynamicCopyUsage = 35050),
			(t.DynamicDrawUsage = ut),
			(t.DynamicReadUsage = 35049),
			(t.EdgesGeometry = Ro),
			(t.EdgesHelper = function (t, e) {
				return (
					console.warn(
						"THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."
					),
					new so(
						new Ro(t.geometry),
						new Za({ color: void 0 !== e ? e : 16777215 })
					)
				);
			}),
			(t.EllipseCurve = Co),
			(t.EqualDepth = 4),
			(t.EqualStencilFunc = 514),
			(t.EquirectangularReflectionMapping = a),
			(t.EquirectangularRefractionMapping = o),
			(t.Euler = Oe),
			(t.EventDispatcher = mt),
			(t.ExtrudeBufferGeometry = El),
			(t.ExtrudeGeometry = El),
			(t.FaceColors = 1),
			(t.FileLoader = vc),
			(t.FlatShading = 1),
			(t.Float16BufferAttribute = Sn),
			(t.Float32Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."
					),
					new Tn(t, e)
				);
			}),
			(t.Float32BufferAttribute = Tn),
			(t.Float64Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."
					),
					new En(t, e)
				);
			}),
			(t.Float64BufferAttribute = En),
			(t.FloatType = b),
			(t.Fog = ca),
			(t.FogExp2 = la),
			(t.Font = function () {
				console.error(
					"THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js"
				);
			}),
			(t.FontLoader = function () {
				console.error(
					"THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js"
				);
			}),
			(t.FramebufferTexture = go),
			(t.FrontSide = 0),
			(t.Frustum = vi),
			(t.GLBufferAttribute = Dh),
			(t.GLSL1 = "100"),
			(t.GLSL3 = dt),
			(t.GreaterDepth = 6),
			(t.GreaterEqualDepth = 5),
			(t.GreaterEqualStencilFunc = 518),
			(t.GreaterStencilFunc = 516),
			(t.GridHelper = Yh),
			(t.Group = ta),
			(t.HalfFloatType = w),
			(t.HemisphereLight = wc),
			(t.HemisphereLightHelper = class extends Qe {
				constructor(t, e, n) {
					super(),
						(this.light = t),
						this.light.updateMatrixWorld(),
						(this.matrix = t.matrixWorld),
						(this.matrixAutoUpdate = !1),
						(this.color = n);
					const i = new Cl(e);
					i.rotateY(0.5 * Math.PI),
						(this.material = new pn({
							wireframe: !0,
							fog: !1,
							toneMapped: !1,
						})),
						void 0 === this.color && (this.material.vertexColors = !0);
					const r = i.getAttribute("position"),
						s = new Float32Array(3 * r.count);
					i.setAttribute("color", new gn(s, 3)),
						this.add(new Qn(i, this.material)),
						this.update();
				}
				dispose() {
					this.children[0].geometry.dispose(),
						this.children[0].material.dispose();
				}
				update() {
					const t = this.children[0];
					if (void 0 !== this.color) this.material.color.set(this.color);
					else {
						const e = t.geometry.getAttribute("color");
						Xh.copy(this.light.color), Jh.copy(this.light.groundColor);
						for (let t = 0, n = e.count; t < n; t++) {
							const i = t < n / 2 ? Xh : Jh;
							e.setXYZ(t, i.r, i.g, i.b);
						}
						e.needsUpdate = !0;
					}
					t.lookAt(qh.setFromMatrixPosition(this.light.matrixWorld).negate());
				}
			}),
			(t.HemisphereLightProbe = Qc),
			(t.IcosahedronBufferGeometry = Rl),
			(t.IcosahedronGeometry = Rl),
			(t.ImageBitmapLoader = Jc),
			(t.ImageLoader = yc),
			(t.ImageUtils = Gt),
			(t.ImmediateRenderObject = function () {
				console.error("THREE.ImmediateRenderObject has been removed.");
			}),
			(t.IncrementStencilOp = 7682),
			(t.IncrementWrapStencilOp = 34055),
			(t.InstancedBufferAttribute = Wa),
			(t.InstancedBufferGeometry = Vc),
			(t.InstancedInterleavedBuffer = Ph),
			(t.InstancedMesh = Ya),
			(t.Int16Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."
					),
					new _n(t, e)
				);
			}),
			(t.Int16BufferAttribute = _n),
			(t.Int32Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."
					),
					new bn(t, e)
				);
			}),
			(t.Int32BufferAttribute = bn),
			(t.Int8Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."
					),
					new vn(t, e)
				);
			}),
			(t.Int8BufferAttribute = vn),
			(t.IntType = 1013),
			(t.InterleavedBuffer = ua),
			(t.InterleavedBufferAttribute = pa),
			(t.Interpolant = Ql),
			(t.InterpolateDiscrete = $),
			(t.InterpolateLinear = tt),
			(t.InterpolateSmooth = et),
			(t.InvertStencilOp = 5386),
			(t.JSONLoader = function () {
				console.error("THREE.JSONLoader has been removed.");
			}),
			(t.KeepStencilOp = ct),
			(t.KeyframeTrack = nc),
			(t.LOD = Da),
			(t.LatheBufferGeometry = Ll),
			(t.LatheGeometry = Ll),
			(t.Layers = Fe),
			(t.LensFlare = function () {
				console.error(
					"THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js"
				);
			}),
			(t.LessDepth = 2),
			(t.LessEqualDepth = 3),
			(t.LessEqualStencilFunc = 515),
			(t.LessStencilFunc = 513),
			(t.Light = bc),
			(t.LightProbe = Hc),
			(t.Line = no),
			(t.Line3 = Uh),
			(t.LineBasicMaterial = Za),
			(t.LineCurve = Vo),
			(t.LineCurve3 = Wo),
			(t.LineDashedMaterial = Yl),
			(t.LineLoop = ao),
			(t.LinePieces = 1),
			(t.LineSegments = so),
			(t.LineStrip = 0),
			(t.LinearEncoding = ot),
			(t.LinearFilter = g),
			(t.LinearInterpolant = tc),
			(t.LinearMipMapLinearFilter = 1008),
			(t.LinearMipMapNearestFilter = 1007),
			(t.LinearMipmapLinearFilter = y),
			(t.LinearMipmapNearestFilter = v),
			(t.LinearToneMapping = 1),
			(t.Loader = fc),
			(t.LoaderUtils = kc),
			(t.LoadingManager = pc),
			(t.LoopOnce = 2200),
			(t.LoopPingPong = 2202),
			(t.LoopRepeat = 2201),
			(t.LuminanceAlphaFormat = 1025),
			(t.LuminanceFormat = 1024),
			(t.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }),
			(t.Material = dn),
			(t.MaterialLoader = Gc),
			(t.Math = Et),
			(t.MathUtils = Et),
			(t.Matrix3 = Rt),
			(t.Matrix4 = Ae),
			(t.MaxEquation = 104),
			(t.Mesh = Qn),
			(t.MeshBasicMaterial = pn),
			(t.MeshDepthMaterial = Xs),
			(t.MeshDistanceMaterial = Js),
			(t.MeshFaceMaterial = function (t) {
				return (
					console.warn(
						"THREE.MeshFaceMaterial has been removed. Use an Array instead."
					),
					t
				);
			}),
			(t.MeshLambertMaterial = Xl),
			(t.MeshMatcapMaterial = Jl),
			(t.MeshNormalMaterial = ql),
			(t.MeshPhongMaterial = Wl),
			(t.MeshPhysicalMaterial = Vl),
			(t.MeshStandardMaterial = kl),
			(t.MeshToonMaterial = jl),
			(t.MinEquation = 103),
			(t.MirroredRepeatWrapping = d),
			(t.MixOperation = 1),
			(t.MultiMaterial = function (t = []) {
				return (
					console.warn(
						"THREE.MultiMaterial has been removed. Use an Array instead."
					),
					(t.isMultiMaterial = !0),
					(t.materials = t),
					(t.clone = function () {
						return t.slice();
					}),
					t
				);
			}),
			(t.MultiplyBlending = 4),
			(t.MultiplyOperation = 0),
			(t.NearestFilter = p),
			(t.NearestMipMapLinearFilter = 1005),
			(t.NearestMipMapNearestFilter = 1004),
			(t.NearestMipmapLinearFilter = f),
			(t.NearestMipmapNearestFilter = m),
			(t.NeverDepth = 0),
			(t.NeverStencilFunc = 512),
			(t.NoBlending = 0),
			(t.NoColors = 0),
			(t.NoToneMapping = 0),
			(t.NormalAnimationBlendMode = st),
			(t.NormalBlending = 1),
			(t.NotEqualDepth = 7),
			(t.NotEqualStencilFunc = 517),
			(t.NumberKeyframeTrack = sc),
			(t.Object3D = Qe),
			(t.ObjectLoader = class extends fc {
				constructor(t) {
					super(t);
				}
				load(t, e, n, i) {
					const r = this,
						s = "" === this.path ? kc.extractUrlBase(t) : this.path;
					this.resourcePath = this.resourcePath || s;
					const a = new vc(this.manager);
					a.setPath(this.path),
						a.setRequestHeader(this.requestHeader),
						a.setWithCredentials(this.withCredentials),
						a.load(
							t,
							function (n) {
								let s = null;
								try {
									s = JSON.parse(n);
								} catch (e) {
									return (
										void 0 !== i && i(e),
										void console.error(
											"THREE:ObjectLoader: Can't parse " + t + ".",
											e.message
										)
									);
								}
								const a = s.metadata;
								void 0 !== a &&
								void 0 !== a.type &&
								"geometry" !== a.type.toLowerCase()
									? r.parse(s, e)
									: console.error("THREE.ObjectLoader: Can't load " + t);
							},
							n,
							i
						);
				}
				async loadAsync(t, e) {
					const n = "" === this.path ? kc.extractUrlBase(t) : this.path;
					this.resourcePath = this.resourcePath || n;
					const i = new vc(this.manager);
					i.setPath(this.path),
						i.setRequestHeader(this.requestHeader),
						i.setWithCredentials(this.withCredentials);
					const r = await i.loadAsync(t, e),
						s = JSON.parse(r),
						a = s.metadata;
					if (
						void 0 === a ||
						void 0 === a.type ||
						"geometry" === a.type.toLowerCase()
					)
						throw new Error("THREE.ObjectLoader: Can't load " + t);
					return await this.parseAsync(s);
				}
				parse(t, e) {
					const n = this.parseAnimations(t.animations),
						i = this.parseShapes(t.shapes),
						r = this.parseGeometries(t.geometries, i),
						s = this.parseImages(t.images, function () {
							void 0 !== e && e(l);
						}),
						a = this.parseTextures(t.textures, s),
						o = this.parseMaterials(t.materials, a),
						l = this.parseObject(t.object, r, o, a, n),
						c = this.parseSkeletons(t.skeletons, l);
					if ((this.bindSkeletons(l, c), void 0 !== e)) {
						let t = !1;
						for (const e in s)
							if (s[e] instanceof HTMLImageElement) {
								t = !0;
								break;
							}
						!1 === t && e(l);
					}
					return l;
				}
				async parseAsync(t) {
					const e = this.parseAnimations(t.animations),
						n = this.parseShapes(t.shapes),
						i = this.parseGeometries(t.geometries, n),
						r = await this.parseImagesAsync(t.images),
						s = this.parseTextures(t.textures, r),
						a = this.parseMaterials(t.materials, s),
						o = this.parseObject(t.object, i, a, s, e),
						l = this.parseSkeletons(t.skeletons, o);
					return this.bindSkeletons(o, l), o;
				}
				parseShapes(t) {
					const e = {};
					if (void 0 !== t)
						for (let n = 0, i = t.length; n < i; n++) {
							const i = new Ko().fromJSON(t[n]);
							e[i.uuid] = i;
						}
					return e;
				}
				parseSkeletons(t, e) {
					const n = {},
						i = {};
					if (
						(e.traverse(function (t) {
							t.isBone && (i[t.uuid] = t);
						}),
						void 0 !== t)
					)
						for (let e = 0, r = t.length; e < r; e++) {
							const r = new Va().fromJSON(t[e], i);
							n[r.uuid] = r;
						}
					return n;
				}
				parseGeometries(t, e) {
					const n = {};
					if (void 0 !== t) {
						const i = new Wc();
						for (let r = 0, s = t.length; r < s; r++) {
							let s;
							const a = t[r];
							switch (a.type) {
								case "BufferGeometry":
								case "InstancedBufferGeometry":
									s = i.parse(a);
									break;
								case "Geometry":
									console.error(
										"THREE.ObjectLoader: The legacy Geometry type is no longer supported."
									);
									break;
								default:
									a.type in Hl
										? (s = Hl[a.type].fromJSON(a, e))
										: console.warn(
												`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`
										  );
							}
							(s.uuid = a.uuid),
								void 0 !== a.name && (s.name = a.name),
								!0 === s.isBufferGeometry &&
									void 0 !== a.userData &&
									(s.userData = a.userData),
								(n[a.uuid] = s);
						}
					}
					return n;
				}
				parseMaterials(t, e) {
					const n = {},
						i = {};
					if (void 0 !== t) {
						const r = new Gc();
						r.setTextures(e);
						for (let e = 0, s = t.length; e < s; e++) {
							const s = t[e];
							if ("MultiMaterial" === s.type) {
								const t = [];
								for (let e = 0; e < s.materials.length; e++) {
									const i = s.materials[e];
									void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)),
										t.push(n[i.uuid]);
								}
								i[s.uuid] = t;
							} else
								void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)),
									(i[s.uuid] = n[s.uuid]);
						}
					}
					return i;
				}
				parseAnimations(t) {
					const e = {};
					if (void 0 !== t)
						for (let n = 0; n < t.length; n++) {
							const i = t[n],
								r = hc.parse(i);
							e[r.uuid] = r;
						}
					return e;
				}
				parseImages(t, e) {
					const n = this,
						i = {};
					let r;
					function s(t) {
						if ("string" == typeof t) {
							const e = t;
							return (function (t) {
								return (
									n.manager.itemStart(t),
									r.load(
										t,
										function () {
											n.manager.itemEnd(t);
										},
										void 0,
										function () {
											n.manager.itemError(t), n.manager.itemEnd(t);
										}
									)
								);
							})(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
						}
						return t.data
							? { data: Pt(t.type, t.data), width: t.width, height: t.height }
							: null;
					}
					if (void 0 !== t && t.length > 0) {
						const n = new pc(e);
						(r = new yc(n)), r.setCrossOrigin(this.crossOrigin);
						for (let e = 0, n = t.length; e < n; e++) {
							const n = t[e],
								r = n.url;
							if (Array.isArray(r)) {
								i[n.uuid] = [];
								for (let t = 0, e = r.length; t < e; t++) {
									const e = s(r[t]);
									null !== e &&
										(e instanceof HTMLImageElement
											? i[n.uuid].push(e)
											: i[n.uuid].push(new Ha(e.data, e.width, e.height)));
								}
							} else {
								const t = s(n.url);
								null !== t && (i[n.uuid] = t);
							}
						}
					}
					return i;
				}
				async parseImagesAsync(t) {
					const e = this,
						n = {};
					let i;
					async function r(t) {
						if ("string" == typeof t) {
							const n = t,
								r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)
									? n
									: e.resourcePath + n;
							return await i.loadAsync(r);
						}
						return t.data
							? { data: Pt(t.type, t.data), width: t.width, height: t.height }
							: null;
					}
					if (void 0 !== t && t.length > 0) {
						(i = new yc(this.manager)), i.setCrossOrigin(this.crossOrigin);
						for (let e = 0, i = t.length; e < i; e++) {
							const i = t[e],
								s = i.url;
							if (Array.isArray(s)) {
								n[i.uuid] = [];
								for (let t = 0, e = s.length; t < e; t++) {
									const e = s[t],
										a = await r(e);
									null !== a &&
										(a instanceof HTMLImageElement
											? n[i.uuid].push(a)
											: n[i.uuid].push(new Ha(a.data, a.width, a.height)));
								}
							} else {
								const t = await r(i.url);
								null !== t && (n[i.uuid] = t);
							}
						}
					}
					return n;
				}
				parseTextures(t, e) {
					function n(t, e) {
						return "number" == typeof t
							? t
							: (console.warn(
									"THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
									t
							  ),
							  e[t]);
					}
					const i = {};
					if (void 0 !== t)
						for (let r = 0, s = t.length; r < s; r++) {
							const s = t[r];
							let a;
							void 0 === s.image &&
								console.warn(
									'THREE.ObjectLoader: No "image" specified for',
									s.uuid
								),
								void 0 === e[s.image] &&
									console.warn("THREE.ObjectLoader: Undefined image", s.image);
							const o = e[s.image];
							Array.isArray(o)
								? ((a = new ci(o)), 6 === o.length && (a.needsUpdate = !0))
								: ((a =
										o && o.data
											? new Ha(o.data, o.width, o.height)
											: new Vt(o)),
								  o && (a.needsUpdate = !0)),
								(a.uuid = s.uuid),
								void 0 !== s.name && (a.name = s.name),
								void 0 !== s.mapping && (a.mapping = n(s.mapping, jc)),
								void 0 !== s.offset && a.offset.fromArray(s.offset),
								void 0 !== s.repeat && a.repeat.fromArray(s.repeat),
								void 0 !== s.center && a.center.fromArray(s.center),
								void 0 !== s.rotation && (a.rotation = s.rotation),
								void 0 !== s.wrap &&
									((a.wrapS = n(s.wrap[0], qc)), (a.wrapT = n(s.wrap[1], qc))),
								void 0 !== s.format && (a.format = s.format),
								void 0 !== s.type && (a.type = s.type),
								void 0 !== s.encoding && (a.encoding = s.encoding),
								void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, Xc)),
								void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, Xc)),
								void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy),
								void 0 !== s.flipY && (a.flipY = s.flipY),
								void 0 !== s.premultiplyAlpha &&
									(a.premultiplyAlpha = s.premultiplyAlpha),
								void 0 !== s.unpackAlignment &&
									(a.unpackAlignment = s.unpackAlignment),
								void 0 !== s.userData && (a.userData = s.userData),
								(i[s.uuid] = a);
						}
					return i;
				}
				parseObject(t, e, n, i, r) {
					let s, a, o;
					function l(t) {
						return (
							void 0 === e[t] &&
								console.warn("THREE.ObjectLoader: Undefined geometry", t),
							e[t]
						);
					}
					function c(t) {
						if (void 0 !== t) {
							if (Array.isArray(t)) {
								const e = [];
								for (let i = 0, r = t.length; i < r; i++) {
									const r = t[i];
									void 0 === n[r] &&
										console.warn("THREE.ObjectLoader: Undefined material", r),
										e.push(n[r]);
								}
								return e;
							}
							return (
								void 0 === n[t] &&
									console.warn("THREE.ObjectLoader: Undefined material", t),
								n[t]
							);
						}
					}
					function h(t) {
						return (
							void 0 === i[t] &&
								console.warn("THREE.ObjectLoader: Undefined texture", t),
							i[t]
						);
					}
					switch (t.type) {
						case "Scene":
							(s = new ha()),
								void 0 !== t.background &&
									(Number.isInteger(t.background)
										? (s.background = new Ut(t.background))
										: (s.background = h(t.background))),
								void 0 !== t.environment && (s.environment = h(t.environment)),
								void 0 !== t.fog &&
									("Fog" === t.fog.type
										? (s.fog = new ca(t.fog.color, t.fog.near, t.fog.far))
										: "FogExp2" === t.fog.type &&
										  (s.fog = new la(t.fog.color, t.fog.density)));
							break;
						case "PerspectiveCamera":
							(s = new ai(t.fov, t.aspect, t.near, t.far)),
								void 0 !== t.focus && (s.focus = t.focus),
								void 0 !== t.zoom && (s.zoom = t.zoom),
								void 0 !== t.filmGauge && (s.filmGauge = t.filmGauge),
								void 0 !== t.filmOffset && (s.filmOffset = t.filmOffset),
								void 0 !== t.view && (s.view = Object.assign({}, t.view));
							break;
						case "OrthographicCamera":
							(s = new Ci(t.left, t.right, t.top, t.bottom, t.near, t.far)),
								void 0 !== t.zoom && (s.zoom = t.zoom),
								void 0 !== t.view && (s.view = Object.assign({}, t.view));
							break;
						case "AmbientLight":
							s = new Oc(t.color, t.intensity);
							break;
						case "DirectionalLight":
							s = new zc(t.color, t.intensity);
							break;
						case "PointLight":
							s = new Nc(t.color, t.intensity, t.distance, t.decay);
							break;
						case "RectAreaLight":
							s = new Fc(t.color, t.intensity, t.width, t.height);
							break;
						case "SpotLight":
							s = new Lc(
								t.color,
								t.intensity,
								t.distance,
								t.angle,
								t.penumbra,
								t.decay
							);
							break;
						case "HemisphereLight":
							s = new wc(t.color, t.groundColor, t.intensity);
							break;
						case "LightProbe":
							s = new Hc().fromJSON(t);
							break;
						case "SkinnedMesh":
							(a = l(t.geometry)),
								(o = c(t.material)),
								(s = new Fa(a, o)),
								void 0 !== t.bindMode && (s.bindMode = t.bindMode),
								void 0 !== t.bindMatrix && s.bindMatrix.fromArray(t.bindMatrix),
								void 0 !== t.skeleton && (s.skeleton = t.skeleton);
							break;
						case "Mesh":
							(a = l(t.geometry)), (o = c(t.material)), (s = new Qn(a, o));
							break;
						case "InstancedMesh":
							(a = l(t.geometry)), (o = c(t.material));
							const e = t.count,
								n = t.instanceMatrix,
								i = t.instanceColor;
							(s = new Ya(a, o, e)),
								(s.instanceMatrix = new Wa(new Float32Array(n.array), 16)),
								void 0 !== i &&
									(s.instanceColor = new Wa(
										new Float32Array(i.array),
										i.itemSize
									));
							break;
						case "LOD":
							s = new Da();
							break;
						case "Line":
							s = new no(l(t.geometry), c(t.material));
							break;
						case "LineLoop":
							s = new ao(l(t.geometry), c(t.material));
							break;
						case "LineSegments":
							s = new so(l(t.geometry), c(t.material));
							break;
						case "PointCloud":
						case "Points":
							s = new po(l(t.geometry), c(t.material));
							break;
						case "Sprite":
							s = new Ra(c(t.material));
							break;
						case "Group":
							s = new ta();
							break;
						case "Bone":
							s = new Ua();
							break;
						default:
							s = new Qe();
					}
					if (
						((s.uuid = t.uuid),
						void 0 !== t.name && (s.name = t.name),
						void 0 !== t.matrix
							? (s.matrix.fromArray(t.matrix),
							  void 0 !== t.matrixAutoUpdate &&
									(s.matrixAutoUpdate = t.matrixAutoUpdate),
							  s.matrixAutoUpdate &&
									s.matrix.decompose(s.position, s.quaternion, s.scale))
							: (void 0 !== t.position && s.position.fromArray(t.position),
							  void 0 !== t.rotation && s.rotation.fromArray(t.rotation),
							  void 0 !== t.quaternion && s.quaternion.fromArray(t.quaternion),
							  void 0 !== t.scale && s.scale.fromArray(t.scale)),
						void 0 !== t.castShadow && (s.castShadow = t.castShadow),
						void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow),
						t.shadow &&
							(void 0 !== t.shadow.bias && (s.shadow.bias = t.shadow.bias),
							void 0 !== t.shadow.normalBias &&
								(s.shadow.normalBias = t.shadow.normalBias),
							void 0 !== t.shadow.radius && (s.shadow.radius = t.shadow.radius),
							void 0 !== t.shadow.mapSize &&
								s.shadow.mapSize.fromArray(t.shadow.mapSize),
							void 0 !== t.shadow.camera &&
								(s.shadow.camera = this.parseObject(t.shadow.camera))),
						void 0 !== t.visible && (s.visible = t.visible),
						void 0 !== t.frustumCulled && (s.frustumCulled = t.frustumCulled),
						void 0 !== t.renderOrder && (s.renderOrder = t.renderOrder),
						void 0 !== t.userData && (s.userData = t.userData),
						void 0 !== t.layers && (s.layers.mask = t.layers),
						void 0 !== t.children)
					) {
						const a = t.children;
						for (let t = 0; t < a.length; t++)
							s.add(this.parseObject(a[t], e, n, i, r));
					}
					if (void 0 !== t.animations) {
						const e = t.animations;
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							s.animations.push(r[n]);
						}
					}
					if ("LOD" === t.type) {
						void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
						const e = t.levels;
						for (let t = 0; t < e.length; t++) {
							const n = e[t],
								i = s.getObjectByProperty("uuid", n.object);
							void 0 !== i && s.addLevel(i, n.distance);
						}
					}
					return s;
				}
				bindSkeletons(t, e) {
					0 !== Object.keys(e).length &&
						t.traverse(function (t) {
							if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
								const n = e[t.skeleton];
								void 0 === n
									? console.warn(
											"THREE.ObjectLoader: No skeleton found with UUID:",
											t.skeleton
									  )
									: t.bind(n, t.bindMatrix);
							}
						});
				}
				setTexturePath(t) {
					return (
						console.warn(
							"THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
						),
						this.setResourcePath(t)
					);
				}
			}),
			(t.ObjectSpaceNormalMap = 1),
			(t.OctahedronBufferGeometry = Cl),
			(t.OctahedronGeometry = Cl),
			(t.OneFactor = 201),
			(t.OneMinusDstAlphaFactor = 207),
			(t.OneMinusDstColorFactor = 209),
			(t.OneMinusSrcAlphaFactor = 205),
			(t.OneMinusSrcColorFactor = 203),
			(t.OrthographicCamera = Ci),
			(t.PCFShadowMap = 1),
			(t.PCFSoftShadowMap = 2),
			(t.PMREMGenerator = ji),
			(t.ParametricGeometry = function () {
				return (
					console.error(
						"THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"
					),
					new Nn()
				);
			}),
			(t.Particle = function (t) {
				return (
					console.warn("THREE.Particle has been renamed to THREE.Sprite."),
					new Ra(t)
				);
			}),
			(t.ParticleBasicMaterial = function (t) {
				return (
					console.warn(
						"THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."
					),
					new oo(t)
				);
			}),
			(t.ParticleSystem = function (t, e) {
				return (
					console.warn(
						"THREE.ParticleSystem has been renamed to THREE.Points."
					),
					new po(t, e)
				);
			}),
			(t.ParticleSystemMaterial = function (t) {
				return (
					console.warn(
						"THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."
					),
					new oo(t)
				);
			}),
			(t.Path = Zo),
			(t.PerspectiveCamera = ai),
			(t.Plane = mi),
			(t.PlaneBufferGeometry = _i),
			(t.PlaneGeometry = _i),
			(t.PlaneHelper = class extends no {
				constructor(t, e = 1, n = 16776960) {
					const i = n,
						r = new Nn();
					r.setAttribute(
						"position",
						new Tn(
							[
								1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1,
								-1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
							],
							3
						)
					),
						r.computeBoundingSphere(),
						super(r, new Za({ color: i, toneMapped: !1 })),
						(this.type = "PlaneHelper"),
						(this.plane = t),
						(this.size = e);
					const s = new Nn();
					s.setAttribute(
						"position",
						new Tn(
							[1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
							3
						)
					),
						s.computeBoundingSphere(),
						this.add(
							new Qn(
								s,
								new pn({
									color: i,
									opacity: 0.2,
									transparent: !0,
									depthWrite: !1,
									toneMapped: !1,
								})
							)
						);
				}
				updateMatrixWorld(t) {
					let e = -this.plane.constant;
					Math.abs(e) < 1e-8 && (e = 1e-8),
						this.scale.set(0.5 * this.size, 0.5 * this.size, e),
						(this.children[0].material.side = e < 0 ? 1 : 0),
						this.lookAt(this.plane.normal),
						super.updateMatrixWorld(t);
				}
			}),
			(t.PointCloud = function (t, e) {
				return (
					console.warn("THREE.PointCloud has been renamed to THREE.Points."),
					new po(t, e)
				);
			}),
			(t.PointCloudMaterial = function (t) {
				return (
					console.warn(
						"THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."
					),
					new oo(t)
				);
			}),
			(t.PointLight = Nc),
			(t.PointLightHelper = class extends Qn {
				constructor(t, e, n) {
					super(
						new Il(e, 4, 2),
						new pn({ wireframe: !0, fog: !1, toneMapped: !1 })
					),
						(this.light = t),
						this.light.updateMatrixWorld(),
						(this.color = n),
						(this.type = "PointLightHelper"),
						(this.matrix = this.light.matrixWorld),
						(this.matrixAutoUpdate = !1),
						this.update();
				}
				dispose() {
					this.geometry.dispose(), this.material.dispose();
				}
				update() {
					void 0 !== this.color
						? this.material.color.set(this.color)
						: this.material.color.copy(this.light.color);
				}
			}),
			(t.Points = po),
			(t.PointsMaterial = oo),
			(t.PolarGridHelper = class extends so {
				constructor(t = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848) {
					(r = new Ut(r)), (s = new Ut(s));
					const a = [],
						o = [];
					for (let n = 0; n <= e; n++) {
						const i = (n / e) * (2 * Math.PI),
							l = Math.sin(i) * t,
							c = Math.cos(i) * t;
						a.push(0, 0, 0), a.push(l, 0, c);
						const h = 1 & n ? r : s;
						o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
					}
					for (let e = 0; e <= n; e++) {
						const l = 1 & e ? r : s,
							c = t - (t / n) * e;
						for (let t = 0; t < i; t++) {
							let e = (t / i) * (2 * Math.PI),
								n = Math.sin(e) * c,
								r = Math.cos(e) * c;
							a.push(n, 0, r),
								o.push(l.r, l.g, l.b),
								(e = ((t + 1) / i) * (2 * Math.PI)),
								(n = Math.sin(e) * c),
								(r = Math.cos(e) * c),
								a.push(n, 0, r),
								o.push(l.r, l.g, l.b);
						}
					}
					const l = new Nn();
					l.setAttribute("position", new Tn(a, 3)),
						l.setAttribute("color", new Tn(o, 3));
					super(l, new Za({ vertexColors: !0, toneMapped: !1 })),
						(this.type = "PolarGridHelper");
				}
			}),
			(t.PolyhedronBufferGeometry = bo),
			(t.PolyhedronGeometry = bo),
			(t.PositionalAudio = class extends ch {
				constructor(t) {
					super(t),
						(this.panner = this.context.createPanner()),
						(this.panner.panningModel = "HRTF"),
						this.panner.connect(this.gain);
				}
				getOutput() {
					return this.panner;
				}
				getRefDistance() {
					return this.panner.refDistance;
				}
				setRefDistance(t) {
					return (this.panner.refDistance = t), this;
				}
				getRolloffFactor() {
					return this.panner.rolloffFactor;
				}
				setRolloffFactor(t) {
					return (this.panner.rolloffFactor = t), this;
				}
				getDistanceModel() {
					return this.panner.distanceModel;
				}
				setDistanceModel(t) {
					return (this.panner.distanceModel = t), this;
				}
				getMaxDistance() {
					return this.panner.maxDistance;
				}
				setMaxDistance(t) {
					return (this.panner.maxDistance = t), this;
				}
				setDirectionalCone(t, e, n) {
					return (
						(this.panner.coneInnerAngle = t),
						(this.panner.coneOuterAngle = e),
						(this.panner.coneOuterGain = n),
						this
					);
				}
				updateMatrixWorld(t) {
					if (
						(super.updateMatrixWorld(t),
						!0 === this.hasPlaybackControl && !1 === this.isPlaying)
					)
						return;
					this.matrixWorld.decompose(hh, uh, dh),
						ph.set(0, 0, 1).applyQuaternion(uh);
					const e = this.panner;
					if (e.positionX) {
						const t = this.context.currentTime + this.listener.timeDelta;
						e.positionX.linearRampToValueAtTime(hh.x, t),
							e.positionY.linearRampToValueAtTime(hh.y, t),
							e.positionZ.linearRampToValueAtTime(hh.z, t),
							e.orientationX.linearRampToValueAtTime(ph.x, t),
							e.orientationY.linearRampToValueAtTime(ph.y, t),
							e.orientationZ.linearRampToValueAtTime(ph.z, t);
					} else
						e.setPosition(hh.x, hh.y, hh.z), e.setOrientation(ph.x, ph.y, ph.z);
				}
			}),
			(t.PropertyBinding = Eh),
			(t.PropertyMixer = fh),
			(t.QuadraticBezierCurve = jo),
			(t.QuadraticBezierCurve3 = qo),
			(t.Quaternion = Yt),
			(t.QuaternionKeyframeTrack = oc),
			(t.QuaternionLinearInterpolant = ac),
			(t.REVISION = e),
			(t.RGBADepthPacking = 3201),
			(t.RGBAFormat = T),
			(t.RGBAIntegerFormat = 1033),
			(t.RGBA_ASTC_10x10_Format = Y),
			(t.RGBA_ASTC_10x5_Format = q),
			(t.RGBA_ASTC_10x6_Format = X),
			(t.RGBA_ASTC_10x8_Format = J),
			(t.RGBA_ASTC_12x10_Format = Z),
			(t.RGBA_ASTC_12x12_Format = K),
			(t.RGBA_ASTC_4x4_Format = F),
			(t.RGBA_ASTC_5x4_Format = U),
			(t.RGBA_ASTC_5x5_Format = H),
			(t.RGBA_ASTC_6x5_Format = G),
			(t.RGBA_ASTC_6x6_Format = k),
			(t.RGBA_ASTC_8x5_Format = V),
			(t.RGBA_ASTC_8x6_Format = W),
			(t.RGBA_ASTC_8x8_Format = j),
			(t.RGBA_BPTC_Format = Q),
			(t.RGBA_ETC2_EAC_Format = O),
			(t.RGBA_PVRTC_2BPPV1_Format = B),
			(t.RGBA_PVRTC_4BPPV1_Format = N),
			(t.RGBA_S3TC_DXT1_Format = L),
			(t.RGBA_S3TC_DXT3_Format = C),
			(t.RGBA_S3TC_DXT5_Format = P),
			(t.RGB_ETC1_Format = 36196),
			(t.RGB_ETC2_Format = z),
			(t.RGB_PVRTC_2BPPV1_Format = I),
			(t.RGB_PVRTC_4BPPV1_Format = D),
			(t.RGB_S3TC_DXT1_Format = R),
			(t.RGFormat = 1030),
			(t.RGIntegerFormat = 1031),
			(t.RawShaderMaterial = Pi),
			(t.Ray = Ee),
			(t.Raycaster = class {
				constructor(t, e, n = 0, i = 1 / 0) {
					(this.ray = new Ee(t, e)),
						(this.near = n),
						(this.far = i),
						(this.camera = null),
						(this.layers = new Fe()),
						(this.params = {
							Mesh: {},
							Line: { threshold: 1 },
							LOD: {},
							Points: { threshold: 1 },
							Sprite: {},
						});
				}
				set(t, e) {
					this.ray.set(t, e);
				}
				setFromCamera(t, e) {
					e && e.isPerspectiveCamera
						? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
						  this.ray.direction
								.set(t.x, t.y, 0.5)
								.unproject(e)
								.sub(this.ray.origin)
								.normalize(),
						  (this.camera = e))
						: e && e.isOrthographicCamera
						? (this.ray.origin
								.set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
								.unproject(e),
						  this.ray.direction
								.set(0, 0, -1)
								.transformDirection(e.matrixWorld),
						  (this.camera = e))
						: console.error(
								"THREE.Raycaster: Unsupported camera type: " + e.type
						  );
				}
				intersectObject(t, e = !0, n = []) {
					return Nh(t, this, n, e), n.sort(Ih), n;
				}
				intersectObjects(t, e = !0, n = []) {
					for (let i = 0, r = t.length; i < r; i++) Nh(t[i], this, n, e);
					return n.sort(Ih), n;
				}
			}),
			(t.RectAreaLight = Fc),
			(t.RedFormat = 1028),
			(t.RedIntegerFormat = 1029),
			(t.ReinhardToneMapping = 2),
			(t.RepeatWrapping = h),
			(t.ReplaceStencilOp = 7681),
			(t.ReverseSubtractEquation = 102),
			(t.RingBufferGeometry = Pl),
			(t.RingGeometry = Pl),
			(t.Scene = ha),
			(t.SceneUtils = hu),
			(t.ShaderChunk = Mi),
			(t.ShaderLib = wi),
			(t.ShaderMaterial = ri),
			(t.ShadowMaterial = Gl),
			(t.Shape = Ko),
			(t.ShapeBufferGeometry = Dl),
			(t.ShapeGeometry = Dl),
			(t.ShapePath = class {
				constructor() {
					(this.type = "ShapePath"),
						(this.color = new Ut()),
						(this.subPaths = []),
						(this.currentPath = null);
				}
				moveTo(t, e) {
					return (
						(this.currentPath = new Zo()),
						this.subPaths.push(this.currentPath),
						this.currentPath.moveTo(t, e),
						this
					);
				}
				lineTo(t, e) {
					return this.currentPath.lineTo(t, e), this;
				}
				quadraticCurveTo(t, e, n, i) {
					return this.currentPath.quadraticCurveTo(t, e, n, i), this;
				}
				bezierCurveTo(t, e, n, i, r, s) {
					return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
				}
				splineThru(t) {
					return this.currentPath.splineThru(t), this;
				}
				toShapes(t, e) {
					function n(t) {
						const e = [];
						for (let n = 0, i = t.length; n < i; n++) {
							const i = t[n],
								r = new Ko();
							(r.curves = i.curves), e.push(r);
						}
						return e;
					}
					function i(t, e) {
						const n = e.length;
						let i = !1;
						for (let r = n - 1, s = 0; s < n; r = s++) {
							let n = e[r],
								a = e[s],
								o = a.x - n.x,
								l = a.y - n.y;
							if (Math.abs(l) > Number.EPSILON) {
								if (
									(l < 0 && ((n = e[s]), (o = -o), (a = e[r]), (l = -l)),
									t.y < n.y || t.y > a.y)
								)
									continue;
								if (t.y === n.y) {
									if (t.x === n.x) return !0;
								} else {
									const e = l * (t.x - n.x) - o * (t.y - n.y);
									if (0 === e) return !0;
									if (e < 0) continue;
									i = !i;
								}
							} else {
								if (t.y !== n.y) continue;
								if ((a.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= a.x))
									return !0;
							}
						}
						return i;
					}
					const r = wl.isClockWise,
						s = this.subPaths;
					if (0 === s.length) return [];
					if (!0 === e) return n(s);
					let a, o, l;
					const c = [];
					if (1 === s.length)
						return (
							(o = s[0]), (l = new Ko()), (l.curves = o.curves), c.push(l), c
						);
					let h = !r(s[0].getPoints());
					h = t ? !h : h;
					const u = [],
						d = [];
					let p,
						m,
						f = [],
						g = 0;
					(d[g] = void 0), (f[g] = []);
					for (let e = 0, n = s.length; e < n; e++)
						(o = s[e]),
							(p = o.getPoints()),
							(a = r(p)),
							(a = t ? !a : a),
							a
								? (!h && d[g] && g++,
								  (d[g] = { s: new Ko(), p: p }),
								  (d[g].s.curves = o.curves),
								  h && g++,
								  (f[g] = []))
								: f[g].push({ h: o, p: p[0] });
					if (!d[0]) return n(s);
					if (d.length > 1) {
						let t = !1;
						const e = [];
						for (let t = 0, e = d.length; t < e; t++) u[t] = [];
						for (let n = 0, r = d.length; n < r; n++) {
							const r = f[n];
							for (let s = 0; s < r.length; s++) {
								const a = r[s];
								let o = !0;
								for (let r = 0; r < d.length; r++)
									i(a.p, d[r].p) &&
										(n !== r && e.push({ froms: n, tos: r, hole: s }),
										o ? ((o = !1), u[r].push(a)) : (t = !0));
								o && u[n].push(a);
							}
						}
						e.length > 0 && (t || (f = u));
					}
					for (let t = 0, e = d.length; t < e; t++) {
						(l = d[t].s), c.push(l), (m = f[t]);
						for (let t = 0, e = m.length; t < e; t++) l.holes.push(m[t].h);
					}
					return c;
				}
			}),
			(t.ShapeUtils = wl),
			(t.ShortType = 1011),
			(t.Skeleton = Va),
			(t.SkeletonHelper = Wh),
			(t.SkinnedMesh = Fa),
			(t.SmoothShading = 2),
			(t.Sphere = ye),
			(t.SphereBufferGeometry = Il),
			(t.SphereGeometry = Il),
			(t.Spherical = class {
				constructor(t = 1, e = 0, n = 0) {
					return (this.radius = t), (this.phi = e), (this.theta = n), this;
				}
				set(t, e, n) {
					return (this.radius = t), (this.phi = e), (this.theta = n), this;
				}
				copy(t) {
					return (
						(this.radius = t.radius),
						(this.phi = t.phi),
						(this.theta = t.theta),
						this
					);
				}
				makeSafe() {
					const t = 1e-6;
					return (
						(this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this
					);
				}
				setFromVector3(t) {
					return this.setFromCartesianCoords(t.x, t.y, t.z);
				}
				setFromCartesianCoords(t, e, n) {
					return (
						(this.radius = Math.sqrt(t * t + e * e + n * n)),
						0 === this.radius
							? ((this.theta = 0), (this.phi = 0))
							: ((this.theta = Math.atan2(t, n)),
							  (this.phi = Math.acos(_t(e / this.radius, -1, 1)))),
						this
					);
				}
				clone() {
					return new this.constructor().copy(this);
				}
			}),
			(t.SphericalHarmonics3 = Uc),
			(t.SplineCurve = Xo),
			(t.SpotLight = Lc),
			(t.SpotLightHelper = class extends Qe {
				constructor(t, e) {
					super(),
						(this.light = t),
						this.light.updateMatrixWorld(),
						(this.matrix = t.matrixWorld),
						(this.matrixAutoUpdate = !1),
						(this.color = e);
					const n = new Nn(),
						i = [
							0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0,
							1, 1, 0, 0, 0, 0, -1, 1,
						];
					for (let t = 0, e = 1, n = 32; t < n; t++, e++) {
						const r = (t / n) * Math.PI * 2,
							s = (e / n) * Math.PI * 2;
						i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
					}
					n.setAttribute("position", new Tn(i, 3));
					const r = new Za({ fog: !1, toneMapped: !1 });
					(this.cone = new so(n, r)), this.add(this.cone), this.update();
				}
				dispose() {
					this.cone.geometry.dispose(), this.cone.material.dispose();
				}
				update() {
					this.light.updateMatrixWorld();
					const t = this.light.distance ? this.light.distance : 1e3,
						e = t * Math.tan(this.light.angle);
					this.cone.scale.set(e, e, t),
						Hh.setFromMatrixPosition(this.light.target.matrixWorld),
						this.cone.lookAt(Hh),
						void 0 !== this.color
							? this.cone.material.color.set(this.color)
							: this.cone.material.color.copy(this.light.color);
				}
			}),
			(t.Sprite = Ra),
			(t.SpriteMaterial = ma),
			(t.SrcAlphaFactor = 204),
			(t.SrcAlphaSaturateFactor = 210),
			(t.SrcColorFactor = 202),
			(t.StaticCopyUsage = 35046),
			(t.StaticDrawUsage = ht),
			(t.StaticReadUsage = 35045),
			(t.StereoCamera = class {
				constructor() {
					(this.type = "StereoCamera"),
						(this.aspect = 1),
						(this.eyeSep = 0.064),
						(this.cameraL = new ai()),
						this.cameraL.layers.enable(1),
						(this.cameraL.matrixAutoUpdate = !1),
						(this.cameraR = new ai()),
						this.cameraR.layers.enable(2),
						(this.cameraR.matrixAutoUpdate = !1),
						(this._cache = {
							focus: null,
							fov: null,
							aspect: null,
							near: null,
							far: null,
							zoom: null,
							eyeSep: null,
						});
				}
				update(t) {
					const e = this._cache;
					if (
						e.focus !== t.focus ||
						e.fov !== t.fov ||
						e.aspect !== t.aspect * this.aspect ||
						e.near !== t.near ||
						e.far !== t.far ||
						e.zoom !== t.zoom ||
						e.eyeSep !== this.eyeSep
					) {
						(e.focus = t.focus),
							(e.fov = t.fov),
							(e.aspect = t.aspect * this.aspect),
							(e.near = t.near),
							(e.far = t.far),
							(e.zoom = t.zoom),
							(e.eyeSep = this.eyeSep),
							nh.copy(t.projectionMatrix);
						const n = e.eyeSep / 2,
							i = (n * e.near) / e.focus,
							r = (e.near * Math.tan(vt * e.fov * 0.5)) / e.zoom;
						let s, a;
						(eh.elements[12] = -n),
							(th.elements[12] = n),
							(s = -r * e.aspect + i),
							(a = r * e.aspect + i),
							(nh.elements[0] = (2 * e.near) / (a - s)),
							(nh.elements[8] = (a + s) / (a - s)),
							this.cameraL.projectionMatrix.copy(nh),
							(s = -r * e.aspect - i),
							(a = r * e.aspect - i),
							(nh.elements[0] = (2 * e.near) / (a - s)),
							(nh.elements[8] = (a + s) / (a - s)),
							this.cameraR.projectionMatrix.copy(nh);
					}
					this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(eh),
						this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(th);
				}
			}),
			(t.StreamCopyUsage = 35042),
			(t.StreamDrawUsage = 35040),
			(t.StreamReadUsage = 35041),
			(t.StringKeyframeTrack = lc),
			(t.SubtractEquation = 101),
			(t.SubtractiveBlending = 3),
			(t.TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }),
			(t.TangentSpaceNormalMap = 0),
			(t.TetrahedronBufferGeometry = Nl),
			(t.TetrahedronGeometry = Nl),
			(t.TextGeometry = function () {
				return (
					console.error(
						"THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"
					),
					new Nn()
				);
			}),
			(t.Texture = Vt),
			(t.TextureLoader = Mc),
			(t.TorusBufferGeometry = Bl),
			(t.TorusGeometry = Bl),
			(t.TorusKnotBufferGeometry = zl),
			(t.TorusKnotGeometry = zl),
			(t.Triangle = hn),
			(t.TriangleFanDrawMode = 2),
			(t.TriangleStripDrawMode = 1),
			(t.TrianglesDrawMode = 0),
			(t.TubeBufferGeometry = Ol),
			(t.TubeGeometry = Ol),
			(t.UVMapping = i),
			(t.Uint16Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."
					),
					new Mn(t, e)
				);
			}),
			(t.Uint16BufferAttribute = Mn),
			(t.Uint32Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."
					),
					new wn(t, e)
				);
			}),
			(t.Uint32BufferAttribute = wn),
			(t.Uint8Attribute = function (t, e) {
				return (
					console.warn(
						"THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."
					),
					new yn(t, e)
				);
			}),
			(t.Uint8BufferAttribute = yn),
			(t.Uint8ClampedAttribute = function (t, e) {
				return (
					console.warn(
						"THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."
					),
					new xn(t, e)
				);
			}),
			(t.Uint8ClampedBufferAttribute = xn),
			(t.Uniform = Ch),
			(t.UniformsLib = bi),
			(t.UniformsUtils = ii),
			(t.UnsignedByteType = x),
			(t.UnsignedInt248Type = S),
			(t.UnsignedIntType = M),
			(t.UnsignedShort4444Type = 1017),
			(t.UnsignedShort5551Type = 1018),
			(t.UnsignedShortType = _),
			(t.VSMShadowMap = 3),
			(t.Vector2 = At),
			(t.Vector3 = Zt),
			(t.Vector4 = jt),
			(t.VectorKeyframeTrack = cc),
			(t.Vertex = function (t, e, n) {
				return (
					console.warn(
						"THREE.Vertex has been removed. Use THREE.Vector3 instead."
					),
					new Zt(t, e, n)
				);
			}),
			(t.VertexColors = 2),
			(t.VideoTexture = fo),
			(t.WebGL1Renderer = oa),
			(t.WebGLCubeRenderTarget = hi),
			(t.WebGLMultipleRenderTargets = Xt),
			(t.WebGLMultisampleRenderTarget = Jt),
			(t.WebGLRenderTarget = qt),
			(t.WebGLRenderTargetCube = function (t, e, n) {
				return (
					console.warn(
						"THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."
					),
					new hi(t, n)
				);
			}),
			(t.WebGLRenderer = aa),
			(t.WebGLUtils = Qs),
			(t.WireframeGeometry = Fl),
			(t.WireframeHelper = function (t, e) {
				return (
					console.warn(
						"THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."
					),
					new so(
						new Fl(t.geometry),
						new Za({ color: void 0 !== e ? e : 16777215 })
					)
				);
			}),
			(t.WrapAroundEnding = rt),
			(t.XHRLoader = function (t) {
				return (
					console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
					new vc(t)
				);
			}),
			(t.ZeroCurvatureEnding = nt),
			(t.ZeroFactor = 200),
			(t.ZeroSlopeEnding = it),
			(t.ZeroStencilOp = 0),
			(t._SRGBAFormat = pt),
			(t.sRGBEncoding = lt),
			Object.defineProperty(t, "__esModule", { value: !0 });
	});
	return exports;
};
