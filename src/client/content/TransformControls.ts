//@ts-nocheck
// import * as THREE from '../three'
// import React, {useState} from 'react';
// import e from 'express';
// import { THREEwithTransformControls } from './../types'
// this.THREE: THREEwithTransformControls<THREE>;
// NOTE: this class was NOT a THREE.Object3D extension before 
// would want to extend Object3D class -- add additional functionality beyond original class

console.log('this is at the start of transform controls');

type EventType = {
  type: string
  mode?: any
}
export default (THREE) => {
  // var exports = {};
  // var module = { exports };
// export default class TransformControls {
  class TransformControls extends THREE.Object3D {camera: THREE.Camera
  domElement: any
  visible: boolean
  _gizmo: any
  _plane: any
  mode: any
  scope: any
  changeEvent: EventType
  mouseDownEvent: EventType
  mouseUpEvent: EventType
  objectChangeEvent: EventType
  pointStart: THREE.Vector3
  pointEnd: THREE.Vector3
  offset: THREE.Vector3
  rotationAxis: THREE.Vector3
  startNorm: THREE.Vector3
  endNorm: THREE.Vector3
  rotationAngle: number
  cameraPosition: THREE.Vector3
  ray: THREE.Raycaster
  _tempVector: THREE.Vector3
  _tempVector2: THREE.Vector3
  _tempQuaternion: THREE.Quaternion
  _unit: {
    [key: string]: THREE.Vector3
  };
  cameraQuaternion: THREE.Quaternion
  cameraScale: THREE.Vector3
  parentPosition: THREE.Vector3
  parentQuaternion: THREE.Quaternion
  parentQuaternionInv: THREE.Quaternion
  parentScale: THREE.Vector3
  worldPositionStart: THREE.Vector3
  worldQuaternionStart: THREE.Quaternion
  worldScaleStart: THREE.Vector3
  worldPosition: THREE.Vector3
  worldQuaternion: THREE.Quaternion
  worldQuaternionInv: THREE.Quaternion
  worldScale: THREE.Vector3
  eye: THREE.Vector3 // used to have eye and this.eye, now just this.eye -- keep an eye on it in case of errors
  positionStart: THREE.Vector3
  quaternionStart: THREE.Quaternion
  scaleStart: THREE.Vector3
  document: any
  object: any
  axis: any
  dragging: any
  space: any
  rotationSnap: any
  translationSnap: any
  scaleSnap: any
  showX: THREE.Vector3;
  showY: THREE.Vector3;
  showZ: THREE.Vector3;
  size: number;
  enabled: boolean;

  constructor (
    camera: THREE.Camera,
    domElement: any,
  ) {
    super();
    this.camera = camera;
    this.domElement = domElement;
    this.mode = "translate";
    this.visible = false;
    this._gizmo = new TransformControlsGizmo(this.camera, this.domElement);
    this._plane = new TransformControlsPlane(this.camera, this.domElement);
    this.document = document;
    
    if (this.domElement === undefined) {
      console.warn( 'TransformControls: The second parameter "domElement" is now mandatory.' );
      domElement = document;
    }

    // pay attention to what this does (add back in only if necessary / not seeing desired functionality) -- this might not be necessary? might be replaced with 'extends THREE.Object3D' & 'super()'
    // THREE.Object3D.call(this);

    this.scope = this;
    
    // define properties? -- this.defineProperty is a function later

    this.defineProperty("camera", camera); 
    this.defineProperty("object", undefined);
    // this.defineProperty("enabled", true);
    this.defineProperty( "axis", null );
    this.defineProperty( "mode", "translate" );
    this.defineProperty( "translationSnap", null );
    this.defineProperty( "rotationSnap", null );
    this.defineProperty( "scaleSnap", null );
    this.defineProperty( "space", "world" );
    // this.defineProperty( "size", 1 );
    this.defineProperty( "dragging", false );
    // this.defineProperty( "showX", true );
    // this.defineProperty( "showY", true );
    // this.defineProperty( "showZ", true );

    this.changeEvent = { type: "change"};
    this.mouseDownEvent = { type: "mouseDown" };
    this.mouseUpEvent = { type: "mouseUp", mode: this.scope.mode }; 
    this.objectChangeEvent = { type: "objectChange" };
    
    this.ray = new THREE.Raycaster();

    this._tempVector = new THREE.Vector3();
    this._tempVector2 = new THREE.Vector3();
    this._tempQuaternion = new THREE.Quaternion();
    this._unit = {
      X: new THREE.Vector3(1, 0, 0),
      Y: new THREE.Vector3(0, 1, 0),
      Z: new THREE.Vector3(0, 0, 1)
    };

    this.pointStart = new THREE.Vector3();
    this.pointEnd = new THREE.Vector3();
    this.offset = new THREE.Vector3();
    this.rotationAxis = new THREE.Vector3();
    this.startNorm = new THREE.Vector3();
    this.endNorm = new THREE.Vector3();
    this.rotationAngle = 0;

    this.cameraPosition = new THREE.Vector3();
    this.cameraQuaternion = new THREE.Quaternion();
    this.cameraScale = new THREE.Vector3();

    this.parentPosition = new THREE.Vector3();
    this.parentQuaternion = new THREE.Quaternion();
    this.parentQuaternionInv = new THREE.Quaternion();
    this.parentScale = new THREE.Vector3();

    this.worldPositionStart = new THREE.Vector3();
    this.worldQuaternionStart = new THREE.Quaternion();
    this.worldScaleStart = new THREE.Vector3();

    this.worldPosition = new THREE.Vector3();
    this.worldQuaternion = new THREE.Quaternion();
    this.worldQuaternionInv = new THREE.Quaternion();
    this.worldScale = new THREE.Vector3();

    this.eye = new THREE.Vector3();

    this.positionStart = new THREE.Vector3();
    this.quaternionStart = new THREE.Quaternion();
    this.scaleStart = new THREE.Vector3();

    this.showX = new THREE.Vector3();
    this.showY = new THREE.Vector3();
    this.showZ = new THREE.Vector3();
    
    this.size = 1;
    this.enabled = true;

    // originally, this.prop and prop existed -- watch in case errors occur
    this.defineProperty( "worldPosition", this.worldPosition );
    this.defineProperty( "worldPositionStart", this.worldPositionStart );
    this.defineProperty( "worldQuaternion", this.worldQuaternion );
    this.defineProperty( "worldQuaternionStart", this.worldQuaternionStart );
    this.defineProperty( "cameraPosition", this.cameraPosition );
    this.defineProperty( "cameraQuaternion", this.cameraQuaternion );
    this.defineProperty( "pointStart", this.pointStart );
    this.defineProperty( "pointEnd", this.pointEnd );
    this.defineProperty( "rotationAxis", this.rotationAxis );
    this.defineProperty( "rotationAngle", this.rotationAngle );
    this.defineProperty( "eye", this.eye );

    this.domElement.addEventListener( "mousedown", this.onPointerDown, false );
		this.domElement.addEventListener( "touchstart", this.onPointerDown, false );
		this.domElement.addEventListener( "mousemove", this.onPointerHover, false );
		this.domElement.addEventListener( "touchmove", this.onPointerHover, false );
		this.domElement.addEventListener( "touchmove", this.onPointerMove, false );
		this.document.addEventListener( "mouseup", this.onPointerUp, false );
		this.domElement.addEventListener( "touchend", this.onPointerUp, false );
	  this.domElement.addEventListener( "touchcancel", this.onPointerUp, false );
		this.domElement.addEventListener( "touchleave", this.onPointerUp, false );
    
  }

  dispose () {

		this.domElement.removeEventListener( "mousedown", this.onPointerDown );
		this.domElement.removeEventListener( "touchstart", this.onPointerDown );
		this.domElement.removeEventListener( "mousemove", this.onPointerHover );
		document.removeEventListener( "mousemove", this.onPointerMove );
		this.domElement.removeEventListener( "touchmove", this.onPointerHover );
		this.domElement.removeEventListener( "touchmove", this.onPointerMove );
		document.removeEventListener( "mouseup", this.onPointerUp );
		this.domElement.removeEventListener( "touchend", this.onPointerUp );
		this.domElement.removeEventListener( "touchcancel", this.onPointerUp );
		this.domElement.removeEventListener( "touchleave", this.onPointerUp );

		this.traverse( function ( child: any ) {

			if ( child.geometry ) child.geometry.dispose();
			if ( child.material ) child.material.dispose();

		} );

	};

  // set current object
  attach (object: any) {
    this.object = object;
    this.visible = true;

    return this;
  };

  // detach from object
  detach () {
    this.object = undefined;
    this.visible = false;
    this.axis = null;

    return this;
  };

  // defines getter, setter, and store for a property
  defineProperty(propName: string, defaultValue: any) {
    let propValue = defaultValue;

    // 'this' was 'scope' but function cannot find 'scope' 
    Object.defineProperty(this.scope, propName, {
      get: function () {
        return propValue !== undefined ? propValue : defaultValue;
      },
      set: function (value) {
        if (propValue !== value) {
          propValue = value;
          this._plane[propName] = value;
          this._gizmo[propName] = value;

          this.scope.dispatchEvent({ type: propName + "-changed", value: value });
          this.scope.dispatchEvent(this.changeEvent);
        }
      }
    });
    
    this.scope[propName] = defaultValue;
    this._plane[propName] = defaultValue;
    this._gizmo[propName] = defaultValue;
  };
  
  // updates key transformation variables
  updateMatrixWorld () {
    if (this.object !== undefined) {
      this.object.updateMatrixWorld();
			this.object.parent.matrixWorld.decompose( this.parentPosition, this.parentQuaternion, this.parentScale );
			this.object.matrixWorld.decompose( this.worldPosition, this.worldQuaternion, this.worldScale );

			this.parentQuaternionInv.copy( this.parentQuaternion ).inverse();
			this.worldQuaternionInv.copy( this.worldQuaternion ).inverse();
    }

    this.camera.updateMatrixWorld();
		this.camera.matrixWorld.decompose( this.cameraPosition, this.cameraQuaternion, this.cameraScale );

		this.eye.copy( this.cameraPosition ).sub( this.worldPosition ).normalize();

    // is this line doing what we want it to?
		THREE.Object3D.prototype.updateMatrixWorld.call( this );
  };

  pointerHover (pointer: any) {
    if ( this.object === undefined || this.dragging === true || ( pointer.button !== undefined && pointer.button !== 0 ) ) return;
    
    this.ray.setFromCamera( pointer, this.camera );

    let intersect = this.ray.intersectObjects( this._gizmo.picker[ this.mode ].children, true )[ 0 ] || false;

    if (intersect) {
      this.axis = intersect.object.name;
    } else {
      this.axis = null;
    }
  };

  pointerDown (pointer: any) {
    if ( this.object === undefined || this.dragging === true || ( pointer.button !== undefined && pointer.button !== 0 ) ) return;

    if ((pointer.button === 0 || pointer.button === undefined) && this.axis !== null) {
      this.ray.setFromCamera(pointer, this.camera);
      let planeIntersect = this.ray.intersectObjects([this._plane], true)[0] || false;

      if (planeIntersect) {
        let space = this.space;

        if (this.mode === 'scale') {
          space = 'local';
        } else if (this.axis === 'E' || this.axis === 'XYZE' || this.axis === 'XYZ') {
          space = 'world';
        }

        if (space === 'local' && this.mode === 'rotate') {
          let snap = this.rotationSnap;
          if (this.axis === 'X' && snap) this.object.rotation.x = Math.round(this.object.rotation.x / snap) * snap;
          if (this.axis === 'Y' && snap) this.object.rotation.y = Math.round(this.object.rotation.y / snap) * snap;
          if (this.axis === 'Z' && snap) this.object.rotation.z = Math.round(this.object.rotation.z / snap) * snap;
        }

        this.object.updateMatrixWorld();
        this.object.parent.updateMatrixWorld();

        this.positionStart.copy(this.object.position)
        this.quaternionStart.copy(this.object.quaternion);
        this.scaleStart.copy(this.object.scale);

        this.object.matrixWorld.decompose( this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart );

        this.pointStart.copy(planeIntersect.point).sub( this.worldPositionStart )
      }

      this.dragging = true;
      this.mouseDownEvent.mode = this.mode;
      this.dispatchEvent( this.mouseDownEvent )
    }
  }

  pointerMove (pointer: any) {
    if (this.mode === 'scale') {
      this.space = 'local';
    } else if ( this.axis === 'E' || this.axis === 'XYZE' || this.axis === 'XYZ') {
      this.space = 'world'
    }

    if (this.object === undefined || this.axis === null || this.dragging === false || (pointer.button !== undefined && pointer.button !== 0)) return;

    this.ray.setFromCamera( pointer, this.camera );

    let planeIntersect = this.ray.intersectObjects( [ this._plane ], true)[0] || false;

    if (!planeIntersect) return;

    this.pointEnd.copy(planeIntersect.point).sub(this.worldPositionStart);

    if (this.mode === 'translate') {
      // apply translate 
      this.offset.copy(this.pointEnd).sub(this.pointStart);

      if (this.space === 'local' && this.axis !== 'XYZ') {
        this.offset.applyQuaternion(this.worldQuaternionInv);
      }

      if (this.axis.indexOf('X') === -1) this.offset.x = 0;
      if (this.axis.indexOf('Y') === -1) this.offset.y = 0;
      if (this.axis.indexOf('Z') === -1) this.offset.z = 0;

      if (this.space === 'local' && this.axis !== 'XYZ') {
        this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale);
      } else {
        this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale);
      }

      this.object.position.copy(this.offset).add(this.positionStart);

      // apply translation snap
      if (this.translationSnap) {
        if (this.space === 'local') {
          this.object.position.applyQuaternion( this._tempQuaternion.copy(this.quaternionStart).invert()); // inverse is deprecated, used invert instead

          if (this.axis.search('X') !== -1) {
            this.object.position.x = Math.round(this.object.position.x / this.translationSnap) * this.translationSnap; // only slightly rounds it ?
          }

          if (this.axis.search('Y') !== -1) {
            this.object.position.y = Math.round(this.object.position.y / this.translationSnap) * this.translationSnap; // only slightly rounds it ?
          }

          if (this.axis.search('Z') !== -1) {
            this.object.position.z = Math.round(this.object.position.z / this.translationSnap) * this.translationSnap; // only slightly rounds it ?
          }
          
          this.object.position.applyQuaternion(this.quaternionStart);
        }

        if (this.space === 'world') {
          if (this.object.parent) {
            this.object.position.add(this._tempVector.setFromMatrixPosition(this.object.parent.matrixWorld));
          }

          if (this.axis.search('X') !== -1) {
            this.object.position.x = Math.round(this.object.position.x / this.translationSnap) * this.translationSnap;
          }

          if (this.axis.search('Y') !== -1) {
            this.object.position.y = Math.round(this.object.position.y / this.translationSnap) * this.translationSnap;
          }

          if (this.axis.search('Z') !== -1) {
            this.object.position.z = Math.round(this.object.position.z / this.translationSnap) * this.translationSnap;
          }

          // why is this here twice? (see a few lines up)
          if (this.object.parent) {
            this.object.position.add(this._tempVector.setFromMatrixPosition(this.object.parent.matrixWorld));
          }
        }
      }
    } else if (this.mode === 'scale') {
      if (this.axis.search('XYZ') !== -1) {
        let d = this.pointEnd.length() / this.pointStart.length();

        if (this.pointEnd.dot(this.pointStart) < 0) d *= -1;

        this._tempVector2.set(d, d, d);
      } else {
        this._tempVector.copy(this.pointStart);
        this._tempVector2.copy(this.pointEnd);

        this._tempVector.applyQuaternion(this.worldQuaternionInv);
        this._tempVector2.applyQuaternion(this.worldQuaternionInv);

        this._tempVector2.divide(this._tempVector);

        if (this.axis.search('X') === -1) this._tempVector2.x = 1;
        if (this.axis.search('Y') === -1) this._tempVector2.y = 1;
        if (this.axis.search('Z') === -1) this._tempVector2.z = 1;
      }

      // apply scale
      this.object.scale.copy(this.scaleStart).multiple(this._tempVector2);

      if(this.scaleSnap) {
        if(this.axis.search('X') !== -1) this.object.scale.x = Math.round(this.object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
        if(this.axis.search('Y') !== -1) this.object.scale.y = Math.round(this.object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
        if(this.axis.search('Z') !== -1) this.object.scale.z = Math.round(this.object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
      }
    } else if (this.mode === 'rotate') {
      this.offset.copy(this.pointEnd).sub(this.pointStart);
      let ROTATION_SPEED = 20 / this.worldPosition.distanceTo(this._tempVector.setFromMatrixPosition(this.camera.matrixWorld));

      if (this.axis === 'E') {
        this.rotationAxis.copy(this.eye);
        this.rotationAngle = this.pointEnd.angleTo(this.pointStart);
        this.startNorm.copy(this.pointStart).normalize();
        this.endNorm.copy(this.pointEnd).normalize();
        this.rotationAngle *= (this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1);
      } else if (this.axis === 'XYZE') {
        this.rotationAxis.copy(this.offset).cross(this.eye).normalize();
        this.rotationAngle = this.offset.dot(this._tempVector.copy(this.rotationAxis).cross(this.eye)) * ROTATION_SPEED;
      } else if (this.axis === 'X' || this.axis === 'Y' || this.axis === 'Z') {
        this.rotationAxis.copy(this._unit[this.axis]);
        this._tempVector.copy(this._unit[this.axis]);
        if (this.space === 'local') {
          this._tempVector.applyQuaternion(this.worldQuaternion);
        }
        this.rotationAngle = this.offset.dot(this._tempVector.cross(this.eye).normalize()) * ROTATION_SPEED;
      }

      // Apply rotation snap
      if (this.rotationSnap) this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap;
      // this.rotationAngle = rotationAngle because used to have 2 

      // Apply rotate
      if (this.space === 'local' && this.axis !== 'E' && this.axis !== 'XYZE') {
        this.object.quaternion.copy(this.quaternionStart);
        this.object.quaternion.multiply(this._tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize();
      } else {
        this.rotationAxis.applyQuaternion(this.parentQuaternionInv);
        this.object.quaternion.copy(this._tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle));
        this.object.quaternion.multiply(this.quaternionStart).normalize();
      }
    }
    this.dispatchEvent(this.changeEvent);
    this.dispatchEvent(this.objectChangeEvent);
  };

  pointerUp (pointer: any) {
    if(pointer.button !== undefined && pointer.button !== 0) return;
    if (this.dragging && (this.axis !== null)) {
      this.mouseUpEvent.mode = this.mode;
      this.dispatchEvent(this.mouseUpEvent);
    }

    this.dragging = false;

    if (pointer.button === undefined) this.axis = null;
  };

  getPointer(event: any) {
    if (this.document.pointerLockElement) {
      return {
        x: 0,
        y: 0,
        button: event.button
      };
    } else {
      let pointer = event.changedTouches ? event.changedTouches[0] : event;
      
      let rect = this.domElement.getBoundingClientRect();

      return {
        x: ( pointer.clientX - rect.left ) / rect.width * 2 - 1,
        y: - ( pointer.clientY - rect.top ) / rect.height * 2 + 1,
				button: event.button,
      };
    }
  }

  // mouse / touch event handlers
  onPointerHover(event: any) {
    if (!this.scope.enabled) return;
    this.scope.pointerHover(this.getPointer(event));
  }

  onPointerDown(event: any) {
    if (!this.scope.enabled) return;
    this.document.addEventListener("mousemove", this.onPointerMove, false);
    this.scope.pointerHover(this.getPointer(event));
    this.scope.pointerDown(this.getPointer(event));
  }

  onPointerMove(event: any) {
    if (!this.scope.enabled) return;
    this.scope.pointerMove(this.getPointer(event));
  }

  onPointerUp(event: any) {
    if (!this.scope.enabled) return;
    this.document.removeEventListener("mousemove", this.onPointerMove, false);
    this.scope.pointerUp(this.getPointer(event));
  }
};
  
  // previous code says "TODO: deprecate" -- should we try to deprecate this -- might already be deprecated? never called (left commented out)
  /*
  getMode () {
    return this.mode;
  }

  setMode (mode: any) {
    this.mode = mode;
  }

  setTranslationSnap (translationSnap: number) {
    this.translationSnap = translationSnap;
  }

  setRotationSnap (rotationSnap: number) {
    this.rotationSnap = rotationSnap;
  }

  setScaleSnap (scaleSnap: number) {
    this.scaleSnap = scaleSnap;
  }

  setSize (size: any) {
    this.size = size; // there is no this.size or this.scope.size anywhere else in this code... 
  }

  setSpace (space: any) {
    this.space = space;
  }
  
  update() {
    console.warn('TransformControls: update unction has no more functionality and has therefore been deprecated');
  }
  */

// there was originally a THREE.TransformControls.prototype assignment but do we need that since it's already a class component?


// might need to extend THREE.Object3D instead
class TransformControlsGizmo extends TransformControls {
  // 'use strict'; in the legacy codebase on line 698

  // THREE.Object3D.call(this); in the legacy codebase, commenting out
  gizmoMaterial: any
  gizmoLineMaterial: any
  matInvisible: any
  matHelper: any
  matRed: any
  matBlue: any
  matGreen: any
  matWhiteTransparent: any
  matYellowTransparent: any
  matCyanTransparent: any
  matMagentaTransparent: any
  matYellow: any
  matLineRed: any
  matLineGreen: any
  matLineBlue: any
  matLineCyan: any
  matLineMagenta: any
  matLineYellow: any
  matLineGray: any
  matLineYellowTransparent: any
  gizmoTranslate: obj
  pickerTranslate: obj
  helperTranslate: obj
  gizmoRotate: obj
  helperRotate: obj
  pickerRotate: obj
  gizmoScale: obj
  pickerScale: obj
  helperScale: obj
  
  // reusable geometries
  arrowGeometry: THREE.CylinderBufferGeometry;
  scaleHandleGeometry: THREE.BoxBufferGeometry;
  lineGeometry: THREE.BufferGeometry;

  // reusable utility variables
  tempVector: THREE.Vector3;
	tempEuler: THREE.Euler;
	alignVector: THREE.Vector3;
	zeroVector: THREE.Vector3;
	lookAtMatrix: THREE.Matrix4;
	tempQuaternion: THREE.Quaternion;
	tempQuaternion2: THREE.Quaternion;
	identityQuaternion: THREE.Quaternion;

	unitX: THREE.Vector3;
	unitY: THREE.Vector3;
	unitZ: THREE.Vector3;

	// Gizmo creation
	gizmo: any;
	picker: any;
	helper: any;
  

  constructor(camera: THREE.Camera,
    domElement: any,){
    super(camera, domElement); // if we extent a class, we need a super

    this.type = 'TransformControlsGizmo';

    this.gizmoMaterial = new THREE.MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      side: THREE.DoubleSide,
      fog: false
    });
  
    this.gizmoLineMaterial = new LineBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      linewidth: 1,
      fog: false
    });
    
    this.matInvisible = this.gizmoMaterial.clone();
    this.matInvisible.opacity = 0.15;
    
    this.matHelper = this.gizmoMaterial.clone();
    this.matHelper.opacity = 0.33;

    this.matRed = this.gizmoMaterial.clone();
    this.matRed.color.set(0xff0000);
    
    this.matBlue = this.gizmoMaterial.clone();
    this.matBlue.color.set( 0x0000ff );

    this.matWhiteTransparent = this.gizmoMaterial.clone();
    this.matWhiteTransparent.opacity = 0.25;

    this.matYellowTransparent = this.matWhiteTransparent.clone();
    this.matYellowTransparent.color.set( 0xffff00 );

    this.matCyanTransparent = this.matWhiteTransparent.clone();
    this.matCyanTransparent.color.set( 0x00ffff );

    this.matMagentaTransparent = this.matWhiteTransparent.clone();
    this.matMagentaTransparent.color.set( 0xff00ff );

    this.matYellow = this.gizmoMaterial.clone();
    this.matYellow.color.set( 0xffff00 );

    this.matLineRed = this.gizmoLineMaterial.clone();
    this.matLineRed.color.set( 0xff0000 );

    this.matLineGreen = this.gizmoLineMaterial.clone();
    this.matLineGreen.color.set( 0x00ff00 );

    this.matLineBlue = this.gizmoLineMaterial.clone();
    this.matLineBlue.color.set( 0x0000ff );

    this.matLineCyan = this.gizmoLineMaterial.clone();
    this.matLineCyan.color.set( 0x00ffff );

    this.matLineMagenta = this.gizmoLineMaterial.clone();
    this.matLineMagenta.color.set( 0xff00ff );

    this.matLineYellow = this.gizmoLineMaterial.clone();
    this.matLineYellow.color.set( 0xffff00 );

    this.matLineGray = this.gizmoLineMaterial.clone();
    this.matLineGray.color.set( 0x787878 );

    this.matLineYellowTransparent = this.matLineYellow.clone();
    this.matLineYellowTransparent.opacity = 0.25;


    // reusable geometry
    this.arrowGeometry = new THREE.CylinderBufferGeometry(0, 0.05, 0.2, 12, 1, false);
    this.scaleHandleGeometry = new THREE.BoxBufferGeometry(0.125, 0.125, 0.125);
    this.lineGeometry = new THREE.BufferGeometry();
    this.lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3))

    this.gizmoTranslate = {
      X: [
        [ new THREE.Mesh( this.arrowGeometry, this.matRed ), [ 1, 0, 0 ], [ 0, 0, - Math.PI / 2 ], null, 'fwd' ],
        [ new THREE.Mesh( this.arrowGeometry, this.matRed ), [ 1, 0, 0 ], [ 0, 0, Math.PI / 2 ], null, 'bwd' ],
        [ new THREE.Line( this.lineGeometry, this.matLineRed ) ]
      ],
      Y: [
        [ new THREE.Mesh( this.arrowGeometry, this.matGreen ), [ 0, 1, 0 ], null, null, 'fwd' ],
        [ new THREE.Mesh( this.arrowGeometry, this.matGreen ), [ 0, 1, 0 ], [ Math.PI, 0, 0 ], null, 'bwd' ],
        [ new THREE.Line( this.lineGeometry, this.matLineGreen ), null, [ 0, 0, Math.PI / 2 ]]
      ],
      Z: [
        [ new THREE.Mesh( this.arrowGeometry, this.matBlue ), [ 0, 0, 1 ], [ Math.PI / 2, 0, 0 ], null, 'fwd' ],
        [ new THREE.Mesh( this.arrowGeometry, this.matBlue ), [ 0, 0, 1 ], [ - Math.PI / 2, 0, 0 ], null, 'bwd' ],
        [ new THREE.Line( this.lineGeometry, this.matLineBlue ), null, [ 0, - Math.PI / 2, 0 ]]
      ],
      XYZ: [
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.1, 0 ), this.matWhiteTransparent.clone() ), [ 0, 0, 0 ], [ 0, 0, 0 ]]
      ],
      XY: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.295, 0.295 ), this.matYellowTransparent.clone() ), [ 0.15, 0.15, 0 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineYellow ), [ 0.18, 0.3, 0 ], null, [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineYellow ), [ 0.3, 0.18, 0 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]]
      ],
      YZ: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.295, 0.295 ), this.matCyanTransparent.clone() ), [ 0, 0.15, 0.15 ], [ 0, Math.PI / 2, 0 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineCyan ), [ 0, 0.18, 0.3 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineCyan ), [ 0, 0.3, 0.18 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
      ],
      XZ: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.295, 0.295 ), this.matMagentaTransparent.clone() ), [ 0.15, 0, 0.15 ], [ - Math.PI / 2, 0, 0 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineMagenta ), [ 0.18, 0, 0.3 ], null, [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineMagenta ), [ 0.3, 0, 0.18 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
      ]
    };
  
    this.pickerTranslate = {
      X: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 1, 4, 1, false ), this.matInvisible ), [ 0.6, 0, 0 ], [ 0, 0, - Math.PI / 2 ]]
      ],
      Y: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 1, 4, 1, false ), this.matInvisible ), [ 0, 0.6, 0 ]]
      ],
      Z: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 1, 4, 1, false ), this.matInvisible ), [ 0, 0, 0.6 ], [ Math.PI / 2, 0, 0 ]]
      ],
      XYZ: [
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.2, 0 ), this.matInvisible ) ]
      ],
      XY: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.4, 0.4 ), this.matInvisible ), [ 0.2, 0.2, 0 ]]
      ],
      YZ: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.4, 0.4 ), this.matInvisible ), [ 0, 0.2, 0.2 ], [ 0, Math.PI / 2, 0 ]]
      ],
      XZ: [
        [ new THREE.Mesh( new THREE.PlaneBufferGeometry( 0.4, 0.4 ), this.matInvisible ), [ 0.2, 0, 0.2 ], [ - Math.PI / 2, 0, 0 ]]
      ]
    };
  
    this.helperTranslate = {
      START: [
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.01, 2 ), this.matHelper ), null, null, null, 'helper' ]
      ],
      END: [
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.01, 2 ), this.matHelper ), null, null, null, 'helper' ]
      ],
      DELTA: [
        [ new THREE.Line( this.TranslateHelperGeometry(), this.matHelper ), null, null, null, 'helper' ]
      ],
      X: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ - 1e3, 0, 0 ], null, [ 1e6, 1, 1 ], 'helper' ]
      ],
      Y: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ 0, - 1e3, 0 ], [ 0, 0, Math.PI / 2 ], [ 1e6, 1, 1 ], 'helper' ]
      ],
      Z: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ 0, 0, - 1e3 ], [ 0, - Math.PI / 2, 0 ], [ 1e6, 1, 1 ], 'helper' ]
      ]
    };
  
    this.gizmoRotate = {
      X: [
        [ new THREE.Line( this.CircleGeometry( 1, 0.5 ), this.matLineRed ) ],
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.04, 0 ), this.matRed ), [ 0, 0, 0.99 ], null, [ 1, 3, 1 ]],
      ],
      Y: [
        [ new THREE.Line( this.CircleGeometry( 1, 0.5 ), this.matLineGreen ), null, [ 0, 0, - Math.PI / 2 ]],
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.04, 0 ), this.matGreen ), [ 0, 0, 0.99 ], null, [ 3, 1, 1 ]],
      ],
      Z: [
        [ new THREE.Line( this.CircleGeometry( 1, 0.5 ), this.matLineBlue ), null, [ 0, Math.PI / 2, 0 ]],
        [ new THREE.Mesh( new THREE.OctahedronBufferGeometry( 0.04, 0 ), this.matBlue ), [ 0.99, 0, 0 ], null, [ 1, 3, 1 ]],
      ],
      E: [
        [ new THREE.Line( this.CircleGeometry( 1.25, 1 ), this.matLineYellowTransparent ), null, [ 0, Math.PI / 2, 0 ]],
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.03, 0, 0.15, 4, 1, false ), this.matLineYellowTransparent ), [ 1.17, 0, 0 ], [ 0, 0, - Math.PI / 2 ], [ 1, 1, 0.001 ]],
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.03, 0, 0.15, 4, 1, false ), this.matLineYellowTransparent ), [ - 1.17, 0, 0 ], [ 0, 0, Math.PI / 2 ], [ 1, 1, 0.001 ]],
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.03, 0, 0.15, 4, 1, false ), this.matLineYellowTransparent ), [ 0, - 1.17, 0 ], [ Math.PI, 0, 0 ], [ 1, 1, 0.001 ]],
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.03, 0, 0.15, 4, 1, false ), this.matLineYellowTransparent ), [ 0, 1.17, 0 ], [ 0, 0, 0 ], [ 1, 1, 0.001 ]],
      ],
      XYZE: [
        [ new THREE.Line( this.CircleGeometry( 1, 1 ), this.matLineGray ), null, [ 0, Math.PI / 2, 0 ]]
      ]
    };
  
    this.helperRotate = {
      AXIS: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ - 1e3, 0, 0 ], null, [ 1e6, 1, 1 ], 'helper' ]
      ]
    };
  
    this.pickerRotate = {
      X: [
        [ new THREE.Mesh( new THREE.TorusBufferGeometry( 1, 0.1, 4, 24 ), this.matInvisible ), [ 0, 0, 0 ], [ 0, - Math.PI / 2, - Math.PI / 2 ]],
      ],
      Y: [
        [ new THREE.Mesh( new THREE.TorusBufferGeometry( 1, 0.1, 4, 24 ), this.matInvisible ), [ 0, 0, 0 ], [ Math.PI / 2, 0, 0 ]],
      ],
      Z: [
        [ new THREE.Mesh( new THREE.TorusBufferGeometry( 1, 0.1, 4, 24 ), this.matInvisible ), [ 0, 0, 0 ], [ 0, 0, - Math.PI / 2 ]],
      ],
      E: [
        [ new THREE.Mesh( new THREE.TorusBufferGeometry( 1.25, 0.1, 2, 24 ), this.matInvisible ) ]
      ],
      XYZE: [
        [ new THREE.Mesh( new THREE.SphereBufferGeometry( 0.7, 10, 8 ), this.matInvisible ) ]
      ]
    };
  
    this.gizmoScale = {
      X: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matRed ), [ 0.8, 0, 0 ], [ 0, 0, - Math.PI / 2 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineRed ), null, null, [ 0.8, 1, 1 ]]
      ],
      Y: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matGreen ), [ 0, 0.8, 0 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineGreen ), null, [ 0, 0, Math.PI / 2 ], [ 0.8, 1, 1 ]]
      ],
      Z: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matBlue ), [ 0, 0, 0.8 ], [ Math.PI / 2, 0, 0 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineBlue ), null, [ 0, - Math.PI / 2, 0 ], [ 0.8, 1, 1 ]]
      ],
      XY: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matYellowTransparent ), [ 0.85, 0.85, 0 ], null, [ 2, 2, 0.2 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineYellow ), [ 0.855, 0.98, 0 ], null, [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineYellow ), [ 0.98, 0.855, 0 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]]
      ],
      YZ: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matCyanTransparent ), [ 0, 0.85, 0.85 ], null, [ 0.2, 2, 2 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineCyan ), [ 0, 0.855, 0.98 ], [ 0, 0, Math.PI / 2 ], [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineCyan ), [ 0, 0.98, 0.855 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
      ],
      XZ: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matMagentaTransparent ), [ 0.85, 0, 0.85 ], null, [ 2, 0.2, 2 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineMagenta ), [ 0.855, 0, 0.98 ], null, [ 0.125, 1, 1 ]],
        [ new THREE.Line( this.lineGeometry, this.matLineMagenta ), [ 0.98, 0, 0.855 ], [ 0, - Math.PI / 2, 0 ], [ 0.125, 1, 1 ]]
      ],
      XYZX: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.125, 0.125, 0.125 ), this.matWhiteTransparent.clone() ), [ 1.1, 0, 0 ]],
      ],
      XYZY: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.125, 0.125, 0.125 ), this.matWhiteTransparent.clone() ), [ 0, 1.1, 0 ]],
      ],
      XYZZ: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.125, 0.125, 0.125 ), this.matWhiteTransparent.clone() ), [ 0, 0, 1.1 ]],
      ]
    };
  
    this.pickerScale = {
      X: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 0.8, 4, 1, false ), this.matInvisible ), [ 0.5, 0, 0 ], [ 0, 0, - Math.PI / 2 ]]
      ],
      Y: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 0.8, 4, 1, false ), this.matInvisible ), [ 0, 0.5, 0 ]]
      ],
      Z: [
        [ new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.2, 0, 0.8, 4, 1, false ), this.matInvisible ), [ 0, 0, 0.5 ], [ Math.PI / 2, 0, 0 ]]
      ],
      XY: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matInvisible ), [ 0.85, 0.85, 0 ], null, [ 3, 3, 0.2 ]],
      ],
      YZ: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matInvisible ), [ 0, 0.85, 0.85 ], null, [ 0.2, 3, 3 ]],
      ],
      XZ: [
        [ new THREE.Mesh( this.scaleHandleGeometry, this.matInvisible ), [ 0.85, 0, 0.85 ], null, [ 3, 0.2, 3 ]],
      ],
      XYZX: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 0.2, 0.2 ), this.matInvisible ), [ 1.1, 0, 0 ]],
      ],
      XYZY: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 0.2, 0.2 ), this.matInvisible ), [ 0, 1.1, 0 ]],
      ],
      XYZZ: [
        [ new THREE.Mesh( new THREE.BoxBufferGeometry( 0.2, 0.2, 0.2 ), this.matInvisible ), [ 0, 0, 1.1 ]],
      ]
    };
  
    this.helperScale = {
      X: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ - 1e3, 0, 0 ], null, [ 1e6, 1, 1 ], 'helper' ]
      ],
      Y: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ 0, - 1e3, 0 ], [ 0, 0, Math.PI / 2 ], [ 1e6, 1, 1 ], 'helper' ]
      ],
      Z: [
        [ new THREE.Line( this.lineGeometry, this.matHelper.clone() ), [ 0, 0, - 1e3 ], [ 0, - Math.PI / 2, 0 ], [ 1e6, 1, 1 ], 'helper' ]
      ]
    };

    // line 1031 in the legacy code --- katie stopped here --- alyssa ported in this function (setupGizmo) outside the constructor

    // reusable utility variables 
    this.tempVector = new THREE.Vector3( 0, 0, 0 );
    this.tempEuler = new THREE.Euler();
    this.alignVector = new THREE.Vector3( 0, 1, 0 );
    this.zeroVector = new THREE.Vector3( 0, 0, 0 );
    this.lookAtMatrix = new THREE.Matrix4();
    this.tempQuaternion = new THREE.Quaternion();
    this.tempQuaternion2 = new THREE.Quaternion();
    this.identityQuaternion = new THREE.Quaternion();

    this.unitX = new THREE.Vector3( 1, 0, 0 );
    this.unitY = new THREE.Vector3( 0, 1, 0 );
    this.unitZ = new THREE.Vector3( 0, 0, 1 );

    // Gizmo creation
    this.gizmo = {};
    this.picker = {};
    this.helper = {};

    this.add( this.gizmo[ "translate" ] = this.setupGizmo( this.gizmoTranslate ) );
    this.add( this.gizmo[ "rotate" ] = this.setupGizmo( this.gizmoRotate ) );
    this.add( this.gizmo[ "scale" ] = this.setupGizmo( this.gizmoScale ) );
    this.add( this.picker[ "translate" ] = this.setupGizmo( this.pickerTranslate ) );
    this.add( this.picker[ "rotate" ] = this.setupGizmo( this.pickerRotate ) );
    this.add( this.picker[ "scale" ] = this.setupGizmo( this.pickerScale ) );
    this.add( this.helper[ "translate" ] = this.setupGizmo( this.helperTranslate ) );
    this.add( this.helper[ "rotate" ] = this.setupGizmo( this.helperRotate ) );
    this.add( this.helper[ "scale" ] = this.setupGizmo( this.helperScale ) );

    // Pickers should be hidden always

    this.picker[ "translate" ].visible = false;
    this.picker[ "rotate" ].visible = false;
    this.picker[ "scale" ].visible = false;
  }
   
  // reusable geometry -- line 787 in legacy code
  CircleGeometry (radius: number, arc: number) {
    let geometry = new THREE.BufferGeometry();
    let vertices = [];

    for (let i = 0; i <= 64 * arc; ++i) {
      vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }
  
  // special geometry for transform helper -- if scaled with position vector it spans from [0, 0, 0] to position
  TranslateHelperGeometry (){
    let geometry = new THREE.BufferGeometry();

    geometry.setAttribute('position', new THREE.Float32BufferAttribute([ 0, 0, 0, 1, 1, 1], 3))

    return geometry;
  }

  setupGizmo (gizmoMap: obj) {
    let gizmo = new THREE.Object3D();

    for (let name in gizmoMap) {
      for (let i = gizmoMap[name].length; i--; ) {
        let object = gizmoMap[name][i][0].clone();
        let position = gizmoMap[name][i][1];
        let rotation = gizmoMap[name][i][2];
        let scale = gizmoMap[name][i][3];
        let tag = gizmoMap[name][i][4];

        // name and tag properties are essential for picking and updating logic
        object.name = name;
        object.tag = tag;

        if (position) {
          object.position.set(position[0], position[1], position[2]);
        }
        if (rotation) {
          object.rotation.set(rotation[0], rotation[1], rotation[2]);
        }
        if (scale) {
          object.scale.set(scale[0], scale[1], scale[2]);
        }

        object.updateMatrix();

        let tempGeometry = object.geometry.clone();
        tempGeometry.applyMatrix(object.matrix);
        object.geometry = tempGeometry;
        object.renderOrder = Infinity;

        object.position.set(0, 0, 0);
        object.rotation.set(0, 0, 0);
        object.scale.set(1, 1, 1);

        gizmo.add(object);
      }
    }
    return gizmo;
  }

  // update Matrix World will update transformations
  updateMatrixWorld(): void {
    if (this.mode === 'scale') this.space = 'local'; // scale always oriented to local rotation

    let quaternion = this.space === 'local' ? this.worldQuaternion : this.identityQuaternion;

    // show only gizmos for current transform mode 
    this.gizmo[ "translate" ].visible = this.mode === "translate";
		this.gizmo[ "rotate" ].visible = this.mode === "rotate";
		this.gizmo[ "scale" ].visible = this.mode === "scale";

		this.helper[ "translate" ].visible = this.mode === "translate";
		this.helper[ "rotate" ].visible = this.mode === "rotate";
		this.helper[ "scale" ].visible = this.mode === "scale";

    let handles: any[] = [];
    handles = handles.concat(this.picker[ this.mode ].children);
    handles = handles.concat( this.gizmo[ this.mode ].children );
		handles = handles.concat( this.helper[ this.mode ].children );

    for (let i = 0; i < handles.length; i++) {
      let handle = handles[i];

      // hide aligned to camera 
      handle.visible = true;
      handle.rotation.set(0, 0, 0);
      handle.position.copy(this.worldPosition);

      let eyeDistance = this.worldPosition.distanceTo(this.cameraPosition);
      handle.scale.set(1, 1, 1).multiplyScalar(eyeDistance * this.size / 7);

      // from line 1162
      // TODO: simplify helpers and consider decoupling from gizmo
      if (handle.tag === 'helper') {
        handle.visible = false;
        if (handle.name === 'AXIS') {
          handle.position.copy(this.worldPositionStart);
          handle.visible = !! this.axis;
          
          if (this.axis === 'X') {
            this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0));
            handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);

            if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'Y') {
            this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2));
            handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);

            if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'Z') {
            this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
            handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);

            if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
              handle.visible = false;
            }
          }

          if (this.axis === 'XYZE') {
            this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
            this.alignVector.copy(this.rotationAxis);
            handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY));
            handle.quaternion.multiply(this.tempQuaternion);
            handle.visible = this.dragging;
          }

          if (this.axis === 'E') {
            handle.visible = false;
          }
        } else if (handle.name === 'START') {
          handle.position.copy(this.worldPositionStart);
          handle.visible = this.dragging;
        } else if (handle.name === 'END') {
          handle.position.copy(this.worldPosition);
          handle.visible = this.dragging;
        } else if (handle.name === 'DELTA') {
          handle.position.copy(this.worldPositionStart);
          handle.quaternion.copy(this.worldQuaternionStart);
          this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
          this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().inverse());
          handle.scale.copy(this.tempVector);
          handle.visible = this.dragging;
        } else {
          handle.quaternion.copy(quaternion);
          if(this.dragging) {
            handle.position.copy(this.worldPositionStart);
          } else {
            handle.position.copy(this.worldPosition);
          }

          if (this.axis) {
            handle.visible = this.axis.search(handle.name) !== -1;
          }
        }
        // if updating helper, skip rest of loop
        continue;
      }

      // align handles to current local / world rotation
      // legacy codebase line 1277
      handle.quaternion.copy(quaternion);

      if(this.mode === 'translate' || this.mode === 'scale'){
        let AXIS_HIDE_TRESHOLD = 0.99;
        let PLANE_HIDE_TRESHOLD = 0.2;
        let AXIS_FLIP_TRESHOLD = 0.0;
        
        if(handle.name === 'X' || handle.name === 'XYZX'){
          if(Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }
        if(handle.name === 'Y' || handle.name === 'XYZY'){
          if(Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }
        if(handle.name === 'Z' || handle.name === 'XYZZ'){
          if(Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }
        if(handle.name === 'XY'){
          if(Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }
        if(handle.name === 'YZ'){
          if(Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }
        if(handle.name === 'XZ'){
          if(Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD){
            handle.scale.set(1e-10, 1e-10, 1e-10);
            handle.visible = false;
          }
        }

        // Flip translate and scale axis ocluded behind another axis
        if (handle.name.search('X') !== - 1) {
          if (this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
            if (handle.tag === 'fwd') {
              handle.visible = false;
            } else {
              handle.scale.x *= -1;
            }
          } else if (handle.tag === 'bwd') {
            handle.visible = false;
          }
        }
        
        if(handle.name.search('Y') !== -1){ // line 1373 in legacy code
          if(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD){
            if(handle.tag === 'fwd'){
              handle.visible = false;
            } else {
              handle.scale.y *= -1;
            }
          } else if (handle.tag === 'bwd'){
            handle.visible = false;
          }
        }

        if (handle.name.search('Z') !== - 1) {
          if (this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
            if (handle.tag === 'fwd') {
              handle.visible = false;
            } else {
              handle.scale.z *= -1;
            }
          } else if (handle.tag === 'bwd') {
            handle.visible = false;
          }
        }
      } else if (this.mode === 'rotate') {
        // aligns handles to current local or world rotation
        this.tempQuaternion2.copy(quaternion);
        this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(quaternion).invert()); // legacy was using .inverse in case functionality changes

        if (handle.name.search("E") !== -1) {
          handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY));
        }
        
        if (handle.name === 'X') {
          this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z));
          this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
          handle.quaternion.copy(this.tempQuaternion);
        }
        
        if (handle.name === 'Y') {
          this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(-this.alignVector.x, this.alignVector.z));
          this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
          handle.quaternion.copy(this.tempQuaternion);
        }

        if (handle.name === 'Z') {
          this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(-this.alignVector.y, this.alignVector.x));
          this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
          handle.quaternion.copy(this.tempQuaternion);
        }
      }
      
      // hide disabled axes on line 1456 in the legacy code
      handle.visible = handle.visible && (handle.name.indexOf("X") === -1 || this.showX);
      handle.visible = handle.visible && (handle.name.indexOf("Y") === -1 || this.showY);
      handle.visible = handle.visible && (handle.name.indexOf("Z") === -1 || this.showZ);
      handle.visible = handle.visible && (handle.name.indexOf("E") === -1 || (this.showX && this.showY && this.showZ));

      handle.material._opacity = handle.material._opacity || handle.material.opacity;
      handle.material._color = handle.material._color || handle.material.color.clone();
    
      // line 1470 in legacy codebase 
      if (!this.enabled) {
        handle.material.opacity *= 0.5;
        handle.material.color.lerp(new THREE.Color(1, 1, 1), 0.5);
      } else if (this.axis) {
        if (handle.name === this.axis) {
          handle.material.opacity = 1.0;
          handle.material.color.lerp(new THREE.Color(1, 1, 1), 0.5);
        } else if (this.axis.split('').some(function(a: string) {
          return handle.name === a;
        })) {
          handle.material.opacity = 1.0;
          handle.material.color.lerp(new THREE.Color(1, 1, 1), 0.5);
        } else {
          handle.material.opacity *= 0.25;
          handle.material.color.lerp(new THREE.Color(1, 1, 1), 0.5);
        }
      }
    }
    // leave the below line commented out -- extending off the THREE.Object3D should have the same effect!
    // THREE.Object3D.prototype.updateMatrixWorld.call(this);
  }
};


// might need to extend THREE.Object3D instead
class TransformControlsPlane extends TransformControls {
  type: string;
  unitX: THREE.Vector3;
	unitY: THREE.Vector3;
	unitZ: THREE.Vector3;

	tempVector: THREE.Vector3;
	dirVector: THREE.Vector3;
	alignVector: THREE.Vector3;
	tempMatrix: THREE.Matrix4;
	identityQuaternion: THREE.Quaternion;
  
  constructor(camera: THREE.Camera,
    domElement: any,){
    super(camera, domElement); // if we extent a class, we need a super

    // leave commented out unless does not follow proper functionality
    // THREE.Mesh.call(this, 
    //   new THREE.PlaneBufferGeometry(100000, 100000, 2, 2),
    //   new THREE.MeshBasicMaterial({ visible: false, wireframe: true, side: THREE.DoubleSide, transparent: true, opacity: 0.1}))

    this.type = 'TransformControlsPlane'

    this.unitX = new THREE.Vector3( 1, 0, 0 );
    this.unitY = new THREE.Vector3( 0, 1, 0 );
    this.unitZ = new THREE.Vector3( 0, 0, 1 );

    this.tempVector = new THREE.Vector3(); // line 1532 in legacy codebase
    this.dirVector = new THREE.Vector3();
    this.alignVector = new THREE.Vector3();
    this.tempMatrix = new THREE.Matrix4();
    this.identityQuaternion = new THREE.Quaternion();
  }
   
  // 'use strict';  -- line 1519 in legacy codebase

  updateMatrixWorld () {
    this.position.copy(this.worldPosition);
    if (this.mode === 'scale') this.space = 'local'; // scale always oriented to local rotation

    this.unitX.set(1, 0, 0).applyQuaternion(this.space === 'local' ? this.worldQuaternion : this.identityQuaternion);
    this.unitY.set(0, 1, 0).applyQuaternion(this.space === 'local' ? this.worldQuaternion : this.identityQuaternion);
    this.unitZ.set(0, 0, 1).applyQuaternion(this.space === 'local' ? this.worldQuaternion : this.identityQuaternion);

    // align the plane for current transofrm mode, axis and space
    this.alignVector.copy(this.unitY);
    
    switch(this.mode) {
      case 'translate': 
      case 'scale':
        switch(this.axis) {
          case 'X':
            this.alignVector.copy(this.eye).cross(this.unitX);
            this.dirVector.copy(this.unitX).cross(this.alignVector);
            break;
          case 'Y':
            this.alignVector.copy(this.eye).cross(this.unitY);
            this.dirVector.copy(this.unitY).cross(this.alignVector);
            break;
          case 'Z':
            this.alignVector.copy(this.eye).cross(this.unitZ);
            this.dirVector.copy(this.unitZ).cross(this.alignVector);
            break;
          case 'XY':
            this.dirVector.copy(this.unitZ);
            break;
          case 'YZ':
            this.dirVector.copy(this.unitZ);
            break;
          case 'XZ':
            this.alignVector.copy(this.unitZ);
            this.dirVector.copy(this.unitY);
            break;
          case 'XYZ':
          case 'E':
            this.dirVector.set(0, 0, 0);
            break;
        }
        break;
      case 'rotate':
        default: 
          // special case for rotate?
          this.dirVector.set(0, 0, 0);
    }

    if (this.dirVector.length() === 0) {
      // if in rotate mode, make the plane parallel to the camera 
      this.quaternion.copy(this.cameraQuaternion);
    } else {
      this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector);
      this.quaternion.setFromRotationMatrix(this.tempMatrix);
    }

    // leave commented out/remove unless functionality is not behaving as expected
    // THREE.Object3D.prototype.updateMatrixWorld.call(this);
  }
}

console.log('this is at the end of transform controls');
// THREE.TransformControlsPlane.prototype assigned to Object -- needed??

// interface TransformControlsType {
//   visible: boolean
//   domElement: any
// }

// was a functional component as a parameter on THREE -- this doesn't work without redefining THREE ourselves
// we converted it to a class component in hopes it wouldn't require a redefinition of THREE.js
// const TransformControls = function (camera: THREE.Camera, domElement: any) {
//   // visible: boolean;
//   // const [visible, setVisible] = useState(false);
  
//   if ( domElement === undefined ) {
//     console.warn( 'TransformControls: The second parameter "domElement" is now mandatory.' );
//     domElement = document;
//   }

//   THREE.Object3D.call(this);

//   this.visible = false;
//   this.domElement = domElement;

//   return;

// }
  return TransformControls;
};

console.log('this is at the end of transform controls');