/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGGaussianBlur<T = any> extends cocoa.MSSVGfeFilterPrimitive {
    in<R = cocoa.NSString>(): R;
    setIn<R = void, P0 = cocoa.NSString>(_v: P0): R;
    stdDeviation<R = cocoa.NSString>(): R;
    setStdDeviation<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGGaussianBlur<T = any> extends cocoa.classes.MSSVGfeFilterPrimitive {
      alloc<R = MSSVGGaussianBlur>(): R;
      new: <R = MSSVGGaussianBlur>() => R;
    }
  }
}

declare const MSSVGGaussianBlur: cocoa.classes.MSSVGGaussianBlur;
