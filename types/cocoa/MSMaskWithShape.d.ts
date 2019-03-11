/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMaskWithShape<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSMaskWithShape<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSMaskWithShape>(): R;
      new: <R = MSMaskWithShape>() => R;
      nameForMaskWithLayers<R = unknown, P0 = unknown>(_nameForMaskWithLayers: P0): R;
      createMaskWithShapeFromMultipleLayers<R = unknown, P0 = unknown>(_createMaskWithShapeFromMultipleLayers: P0): R;
      toggleMaskForSingleShape<R = unknown, P0 = unknown>(_toggleMaskForSingleShape: P0): R;
      createMaskForSingleBitmap<R = unknown, P0 = unknown>(_createMaskForSingleBitmap: P0): R;
      createMaskWithShapeForLayers<R = unknown, P0 = unknown>(_createMaskWithShapeForLayers: P0): R;
    }
  }
}

declare const MSMaskWithShape: cocoa.classes.MSMaskWithShape;
