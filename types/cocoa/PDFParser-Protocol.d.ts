/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFParserProtocol<T = any> extends cocoa.NSObjectProtocol {
    name<R = cocoa.NSString>(): R;
    pageCount<R = number>(): R;
    parsePastedDocument<R = void>(): R;
    parseWithProgress<R = void, P0 = cocoa.CDUnknownBlockType>(_parseWithProgress: P0): R;
    loadDocumentFromData<R = void, P0 = cocoa.NSData>(_loadDocumentFromData: P0): R;
    loadDocumentFromURL<R = void, P0 = cocoa.NSURL>(_loadDocumentFromURL: P0): R;
    initWithScanner<R = unknown, P0 = cocoa.PDFScanner>(_initWithScanner: P0): R;
  }
  namespace classes {
    export interface PDFParserProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const PDFParserProtocol: cocoa.classes.PDFParserProtocol;
