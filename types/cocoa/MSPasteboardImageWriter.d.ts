/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImageWriter<T = any> extends cocoa.NSObject, cocoa.MSPasteboardWriterProtocol {
    includedObjectIDsForLayers<R = unknown, P0 = unknown>(_includedObjectIDsForLayers: P0): R;
    containsSingleArtboard<R = boolean, P0 = unknown>(_containsSingleArtboard: P0): R;
    bitmapRectForLayers<R = cocoa.CGRect, P0 = unknown>(_bitmapRectForLayers: P0): R;
    exportRequestForPasteboardLayers<R = unknown, P0 = unknown>(_exportRequestForPasteboardLayers: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardImageWriter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardWriterProtocol {
      alloc<R = MSPasteboardImageWriter>(): R;
      new: <R = MSPasteboardImageWriter>() => R;
    }
  }
}

declare const MSPasteboardImageWriter: cocoa.classes.MSPasteboardImageWriter;
