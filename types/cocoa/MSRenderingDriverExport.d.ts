/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverExport<T = any> extends MSRenderingDriverCG {}
  namespace classes {
    export interface MSRenderingDriverExport<T = any> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverExport>(): R;
      new: <R = MSRenderingDriverExport>() => R;
    }
  }
}

declare const MSRenderingDriverExport: cocoa.classes.MSRenderingDriverExport;
