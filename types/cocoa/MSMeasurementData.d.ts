/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMeasurementData<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    targetLines<R = NSArray>(): R;
    setTargetLines<R = void, P0 = NSArray>(_v: P0): R;
    targetRect<R = CGRect>(): R;
    setTargetRect<R = void, P0 = CGRect>(_v: P0): R;
    sourceRect<R = CGRect>(): R;
    setSourceRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSMeasurementData<T = any> extends NSObject {
      alloc<R = MSMeasurementData>(): R;
      new: <R = MSMeasurementData>() => R;
    }
  }
}

declare const MSMeasurementData: cocoa.classes.MSMeasurementData;
