/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPDFReader<T = any> extends cocoa.NSObject, cocoa.MSPasteboardReaderProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardPDFReader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardPDFReader>(): R;
      new: <R = MSPasteboardPDFReader>() => R;
    }
  }
}

declare const MSPasteboardPDFReader: cocoa.classes.MSPasteboardPDFReader;
