/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFParser<T = any> extends NSObject, PDFParserProtocol {
    cxx_destruct<R = void>(): R;
    parseWithProgress_isPasted<R = void, P0 = CDUnknownBlockType, P1 = boolean>(_parseWithProgress: P0, _isPasted: P1): R;
    document<R = CGPDFDocument>(): R;
    setDocument<R = void, P0 = CGPDFDocument>(_v: P0): R;
    scanner<R = PDFScanner>(): R;
    setScanner<R = void, P0 = PDFScanner>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface PDFParser<T = any> extends NSObject, PDFParserProtocol {
      alloc<R = PDFParser>(): R;
      new: <R = PDFParser>() => R;
    }
  }
}

declare const PDFParser: cocoa.classes.PDFParser;
