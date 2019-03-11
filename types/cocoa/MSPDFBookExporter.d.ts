/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFBookExporter<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSPDFBookExporter<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPDFBookExporter>(): R;
      new: <R = MSPDFBookExporter>() => R;
      pdfFromArtboard<R = unknown, P0 = unknown>(_pdfFromArtboard: P0): R;
      exportPages_defaultFilename<R = void, P0 = unknown, P1 = unknown>(_exportPages: P0, _defaultFilename: P1): R;
    }
  }
}

declare const MSPDFBookExporter: cocoa.classes.MSPDFBookExporter;
