/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPathsReader<T = any> extends cocoa.NSObject, cocoa.MSPasteboardReaderProtocol {
    imageImportMode<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardPathsReader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardPathsReader>(): R;
      new: <R = MSPasteboardPathsReader>() => R;
    }
  }
}

declare const MSPasteboardPathsReader: cocoa.classes.MSPasteboardPathsReader;
