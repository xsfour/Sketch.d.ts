/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardTextReader<T = any> extends cocoa.NSObject, cocoa.MSPasteboardReaderProtocol {
    attributedStringFromPasteboard_options<R = unknown, P0 = unknown, P1 = number>(_attributedStringFromPasteboard: P0, _options: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardTextReader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardTextReader>(): R;
      new: <R = MSPasteboardTextReader>() => R;
    }
  }
}

declare const MSPasteboardTextReader: cocoa.classes.MSPasteboardTextReader;
