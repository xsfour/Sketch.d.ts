/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardTextWriting<T = any> extends NSObject {}
  namespace classes {
    export interface MSPasteboardTextWriting<T = any> extends NSObject {
      alloc<R = MSPasteboardTextWriting>(): R;
      new: <R = MSPasteboardTextWriting>() => R;
      writeAttributedString_toPasteboard_type_documentColorSpace<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_writeAttributedString: P0, _toPasteboard: P1, _type: P2, _documentColorSpace: P3): R;
      supportedTypes<R = unknown>(): R;
    }
  }
}

declare const MSPasteboardTextWriting: cocoa.classes.MSPasteboardTextWriting;
