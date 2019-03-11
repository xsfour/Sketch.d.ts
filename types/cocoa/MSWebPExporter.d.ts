/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebPExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSWebPExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSWebPExporter>(): R;
      new: <R = MSWebPExporter>() => R;
    }
  }
}

declare const MSWebPExporter: cocoa.classes.MSWebPExporter;
