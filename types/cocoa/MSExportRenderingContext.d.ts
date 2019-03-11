/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportRenderingContext<T = any> extends cocoa.MSRenderingContextCG {
    rendererShouldSkipDrawingLayer<R = boolean, P0 = unknown>(_rendererShouldSkipDrawingLayer: P0): R;
    exportRequest<R = cocoa.MSExportRequest>(): R;
    setExportRequest<R = void, P0 = cocoa.MSExportRequest>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportRenderingContext<T = any> extends cocoa.classes.MSRenderingContextCG {
      alloc<R = MSExportRenderingContext>(): R;
      new: <R = MSExportRenderingContext>() => R;
    }
  }
}

declare const MSExportRenderingContext: cocoa.classes.MSExportRenderingContext;
