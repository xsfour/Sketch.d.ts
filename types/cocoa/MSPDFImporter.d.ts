/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFImporter<T = any> extends cocoa.NSObject, cocoa.MSImporterProtocol {
    cxx_destruct<R = void>(): R;
    unwrappedLayer<R = unknown, P0 = unknown>(_unwrappedLayer: P0): R;
    name<R = unknown>(): R;
    type<R = cocoa.NSString>(): R;
    setType<R = void, P0 = cocoa.NSString>(_v: P0): R;
    scanner<R = cocoa.MSPDFScanner>(): R;
    setScanner<R = void, P0 = cocoa.MSPDFScanner>(_v: P0): R;
    parser<R = cocoa.PDFParser>(): R;
    setParser<R = void, P0 = cocoa.PDFParser>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPDFImporter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSImporterProtocol {
      alloc<R = MSPDFImporter>(): R;
      new: <R = MSPDFImporter>() => R;
      epsImporter<R = unknown>(): R;
      pdfImporter<R = unknown>(): R;
    }
  }
}

declare const MSPDFImporter: cocoa.classes.MSPDFImporter;
