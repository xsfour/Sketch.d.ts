/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorAdjustmentHandle<T = any> extends cocoa.MSVectorHandle {
    locationOfMainPoint<R = cocoa.CGPoint>(): R;
    setLocationOfMainPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSVectorAdjustmentHandle<T = any> extends cocoa.classes.MSVectorHandle {
      alloc<R = MSVectorAdjustmentHandle>(): R;
      new: <R = MSVectorAdjustmentHandle>() => R;
    }
  }
}

declare const MSVectorAdjustmentHandle: cocoa.classes.MSVectorAdjustmentHandle;
