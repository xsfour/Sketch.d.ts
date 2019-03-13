/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFExporter<T = any> extends MSExporter {}
  namespace classes {
    export interface MSPDFExporter<T = any> extends MSExporter {
      alloc<R = MSPDFExporter>(): R;
      new: <R = MSPDFExporter>() => R;
    }
  }
}

declare const MSPDFExporter: cocoa.classes.MSPDFExporter;
