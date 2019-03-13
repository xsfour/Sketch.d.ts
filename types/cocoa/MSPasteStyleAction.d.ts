/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteStyleAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    pasteStyle<R = void, P0 = unknown>(_pasteStyle: P0): R;
  }
  namespace classes {
    export interface MSPasteStyleAction<T = any> extends MSDocumentAction {
      alloc<R = MSPasteStyleAction>(): R;
      new: <R = MSPasteStyleAction>() => R;
    }
  }
}

declare const MSPasteStyleAction: cocoa.classes.MSPasteStyleAction;
