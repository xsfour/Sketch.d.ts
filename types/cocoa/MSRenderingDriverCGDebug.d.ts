/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCGDebug<T = any> extends MSRenderingDriverCG {}
  namespace classes {
    export interface MSRenderingDriverCGDebug<T = any> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverCGDebug>(): R;
      new: <R = MSRenderingDriverCGDebug>() => R;
    }
  }
}

declare const MSRenderingDriverCGDebug: cocoa.classes.MSRenderingDriverCGDebug;
