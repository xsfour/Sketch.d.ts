/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EPSParser<T = any> extends NSObject, PDFParserProtocol {
    cxx_destruct<R = void>(): R;
    debugConvertedFile<R = void, P0 = unknown>(_debugConvertedFile: P0): R;
    parser<R = PDFParser>(): R;
    setParser<R = void, P0 = PDFParser>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface EPSParser<T = any> extends NSObject, PDFParserProtocol {
      alloc<R = EPSParser>(): R;
      new: <R = EPSParser>() => R;
    }
  }
}

declare const EPSParser: cocoa.classes.EPSParser;
