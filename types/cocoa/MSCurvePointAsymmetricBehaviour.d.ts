/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointAsymmetricBehaviour<T = any> extends cocoa.MSCurvePointBehaviour {}
  namespace classes {
    export interface MSCurvePointAsymmetricBehaviour<T = any> extends cocoa.classes.MSCurvePointBehaviour {
      alloc<R = MSCurvePointAsymmetricBehaviour>(): R;
      new: <R = MSCurvePointAsymmetricBehaviour>() => R;
    }
  }
}

declare const MSCurvePointAsymmetricBehaviour: cocoa.classes.MSCurvePointAsymmetricBehaviour;
