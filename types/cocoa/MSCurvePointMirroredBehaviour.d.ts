/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointMirroredBehaviour<T = any> extends MSCurvePointBehaviour {}
  namespace classes {
    export interface MSCurvePointMirroredBehaviour<T = any> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointMirroredBehaviour>(): R;
      new: <R = MSCurvePointMirroredBehaviour>() => R;
    }
  }
}

declare const MSCurvePointMirroredBehaviour: cocoa.classes.MSCurvePointMirroredBehaviour;
