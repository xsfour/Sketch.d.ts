/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImagesReader<T = any> extends cocoa.NSObject, cocoa.MSPasteboardReaderProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardImagesReader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardImagesReader>(): R;
      new: <R = MSPasteboardImagesReader>() => R;
    }
  }
}

declare const MSPasteboardImagesReader: cocoa.classes.MSPasteboardImagesReader;
