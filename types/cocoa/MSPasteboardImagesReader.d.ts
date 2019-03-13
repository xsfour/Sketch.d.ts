/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImagesReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardImagesReader<T = any> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardImagesReader>(): R;
      new: <R = MSPasteboardImagesReader>() => R;
    }
  }
}

declare const MSPasteboardImagesReader: cocoa.classes.MSPasteboardImagesReader;
