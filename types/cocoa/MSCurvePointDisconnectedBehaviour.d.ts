/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointDisconnectedBehaviour<T = any> extends cocoa.MSCurvePointBehaviour {}
  namespace classes {
    export interface MSCurvePointDisconnectedBehaviour<T = any> extends cocoa.classes.MSCurvePointBehaviour {
      alloc<R = MSCurvePointDisconnectedBehaviour>(): R;
      new: <R = MSCurvePointDisconnectedBehaviour>() => R;
    }
  }
}

declare const MSCurvePointDisconnectedBehaviour: cocoa.classes.MSCurvePointDisconnectedBehaviour;
