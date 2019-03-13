/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPDFReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardPDFReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardPDFReader>(): R;
      new: <R = MSPasteboardPDFReader>() => R;
    }
  }
}

declare const MSPasteboardPDFReader: cocoa.classes.MSPasteboardPDFReader;
