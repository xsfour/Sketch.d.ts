/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorAdjustmentHandle<T = any> extends MSVectorHandle {
    locationOfMainPoint<R = CGPoint>(): R;
    setLocationOfMainPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSVectorAdjustmentHandle<T = any> extends MSVectorHandle {
      alloc<R = MSVectorAdjustmentHandle>(): R;
      new: <R = MSVectorAdjustmentHandle>() => R;
    }
  }
}

declare const MSVectorAdjustmentHandle: cocoa.classes.MSVectorAdjustmentHandle;
