/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGGaussianBlur<T = any> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    stdDeviation<R = NSString>(): R;
    setStdDeviation<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGGaussianBlur<T = any> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGGaussianBlur>(): R;
      new: <R = MSSVGGaussianBlur>() => R;
    }
  }
}

declare const MSSVGGaussianBlur: cocoa.classes.MSSVGGaussianBlur;
