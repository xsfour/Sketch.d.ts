/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointStraightBehaviour<T = any> extends MSCurvePointBehaviour {}
  namespace classes {
    export interface MSCurvePointStraightBehaviour<T = any> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointStraightBehaviour>(): R;
      new: <R = MSCurvePointStraightBehaviour>() => R;
    }
  }
}

declare const MSCurvePointStraightBehaviour: cocoa.classes.MSCurvePointStraightBehaviour;
