/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardWriterProtocol<T = any> extends cocoa.NSObjectProtocol {
    writeData_toPasteboard<R = void, P0 = cocoa.MSPasteboardLayers, P1 = cocoa.NSPasteboard>(_writeData: P0, _toPasteboard: P1): R;
    supportedPasteboardTypes<R = cocoa.NSArray>(): R;
    canWriteDataToPasteboard<R = boolean, P0 = cocoa.NSPasteboard>(_canWriteDataToPasteboard: P0): R;
  }
  namespace classes {
    export interface MSPasteboardWriterProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSPasteboardWriterProtocol: cocoa.classes.MSPasteboardWriterProtocol;
