/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorRounding<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSVectorRounding<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSVectorRounding>(): R;
      new: <R = MSVectorRounding>() => R;
      roundPoint<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_roundPoint: P0): R;
      roundPoint_layer<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_roundPoint: P0, _layer: P1): R;
      precision<R = number>(): R;
    }
  }
}

declare const MSVectorRounding: cocoa.classes.MSVectorRounding;
