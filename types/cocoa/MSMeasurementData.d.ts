/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMeasurementData<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    targetLines<R = cocoa.NSArray>(): R;
    setTargetLines<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    targetRect<R = cocoa.CGRect>(): R;
    setTargetRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    sourceRect<R = cocoa.CGRect>(): R;
    setSourceRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSMeasurementData<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSMeasurementData>(): R;
      new: <R = MSMeasurementData>() => R;
    }
  }
}

declare const MSMeasurementData: cocoa.classes.MSMeasurementData;
