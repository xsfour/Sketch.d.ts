/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EPSParser<T = any> extends cocoa.NSObject, cocoa.PDFParserProtocol {
    cxx_destruct<R = void>(): R;
    debugConvertedFile<R = void, P0 = unknown>(_debugConvertedFile: P0): R;
    parser<R = cocoa.PDFParser>(): R;
    setParser<R = void, P0 = cocoa.PDFParser>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface EPSParser<T = any> extends cocoa.classes.NSObject, cocoa.classes.PDFParserProtocol {
      alloc<R = EPSParser>(): R;
      new: <R = EPSParser>() => R;
    }
  }
}

declare const EPSParser: cocoa.classes.EPSParser;
