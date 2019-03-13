/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardWriterProtocol<T = any> extends NSObjectProtocol {
    writeData_toPasteboard<R = void, P0 = MSPasteboardLayers, P1 = NSPasteboard>(_writeData: P0, _toPasteboard: P1): R;
    supportedPasteboardTypes<R = NSArray>(): R;
    canWriteDataToPasteboard<R = boolean, P0 = NSPasteboard>(_canWriteDataToPasteboard: P0): R;
  }
  namespace classes {
    export interface MSPasteboardWriterProtocol<T = any> extends NSObjectProtocol {  }
  }
}
