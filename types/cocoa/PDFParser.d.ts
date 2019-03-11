/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFParser<T = any> extends cocoa.NSObject, cocoa.PDFParserProtocol {
    cxx_destruct<R = void>(): R;
    parseWithProgress_isPasted<R = void, P0 = cocoa.CDUnknownBlockType, P1 = boolean>(_parseWithProgress: P0, _isPasted: P1): R;
    document<R = cocoa.CGPDFDocument>(): R;
    setDocument<R = void, P0 = cocoa.CGPDFDocument>(_v: P0): R;
    scanner<R = cocoa.PDFScanner>(): R;
    setScanner<R = void, P0 = cocoa.PDFScanner>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface PDFParser<T = any> extends cocoa.classes.NSObject, cocoa.classes.PDFParserProtocol {
      alloc<R = PDFParser>(): R;
      new: <R = PDFParser>() => R;
    }
  }
}

declare const PDFParser: cocoa.classes.PDFParser;
