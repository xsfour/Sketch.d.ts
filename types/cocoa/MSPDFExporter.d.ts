/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSPDFExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSPDFExporter>(): R;
      new: <R = MSPDFExporter>() => R;
    }
  }
}

declare const MSPDFExporter: cocoa.classes.MSPDFExporter;
