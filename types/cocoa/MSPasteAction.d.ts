/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
  }
  namespace classes {
    export interface MSPasteAction<T = any> extends MSDocumentAction {
      alloc<R = MSPasteAction>(): R;
      new: <R = MSPasteAction>() => R;
    }
  }
}

declare const MSPasteAction: cocoa.classes.MSPasteAction;
