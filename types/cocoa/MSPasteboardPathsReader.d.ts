/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPathsReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
    imageImportMode<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardPathsReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardPathsReader>(): R;
      new: <R = MSPasteboardPathsReader>() => R;
    }
  }
}

declare const MSPasteboardPathsReader: cocoa.classes.MSPasteboardPathsReader;
