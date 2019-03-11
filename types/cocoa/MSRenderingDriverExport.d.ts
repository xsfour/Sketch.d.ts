/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverExport<T = any> extends cocoa.MSRenderingDriverCG {}
  namespace classes {
    export interface MSRenderingDriverExport<T = any> extends cocoa.classes.MSRenderingDriverCG {
      alloc<R = MSRenderingDriverExport>(): R;
      new: <R = MSRenderingDriverExport>() => R;
    }
  }
}

declare const MSRenderingDriverExport: cocoa.classes.MSRenderingDriverExport;
