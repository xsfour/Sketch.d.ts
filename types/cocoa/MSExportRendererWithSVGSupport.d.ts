/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportRendererWithSVGSupport<T = any> extends MSExporter {}
  namespace classes {
    export interface MSExportRendererWithSVGSupport<T = any> extends MSExporter {
      alloc<R = MSExportRendererWithSVGSupport>(): R;
      new: <R = MSExportRendererWithSVGSupport>() => R;
    }
  }
}

declare const MSExportRendererWithSVGSupport: cocoa.classes.MSExportRendererWithSVGSupport;
