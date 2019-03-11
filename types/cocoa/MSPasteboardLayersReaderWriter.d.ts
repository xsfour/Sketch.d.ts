/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayersReaderWriter<T = any> extends cocoa.NSObject, cocoa.MSPasteboardReaderProtocol, cocoa.MSPasteboardWriterProtocol {
    writeData_toPasteboard_withType<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_writeData: P0, _toPasteboard: P1, _withType: P2): R;
    readDataFromPasteboard<R = unknown, P0 = unknown>(_readDataFromPasteboard: P0): R;
    readDataFromPasteboard_withType<R = unknown, P0 = unknown, P1 = unknown>(_readDataFromPasteboard: P0, _withType: P1): R;
    tempFileTypeForType<R = unknown, P0 = unknown>(_tempFileTypeForType: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardLayersReaderWriter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPasteboardReaderProtocol, cocoa.classes.MSPasteboardWriterProtocol {
      alloc<R = MSPasteboardLayersReaderWriter>(): R;
      new: <R = MSPasteboardLayersReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardLayersReaderWriter: cocoa.classes.MSPasteboardLayersReaderWriter;
