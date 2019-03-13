/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteHereAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    pasteHere<R = void, P0 = unknown>(_pasteHere: P0): R;
  }
  namespace classes {
    export interface MSPasteHereAction<T = any> extends MSDocumentAction {
      alloc<R = MSPasteHereAction>(): R;
      new: <R = MSPasteHereAction>() => R;
    }
  }
}

declare const MSPasteHereAction: cocoa.classes.MSPasteHereAction;
