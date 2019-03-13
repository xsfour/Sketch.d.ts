/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteOverSelectionAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    pasteOverSelection<R = void, P0 = unknown>(_pasteOverSelection: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSPasteOverSelectionAction<T = any> extends MSDocumentAction {
      alloc<R = MSPasteOverSelectionAction>(): R;
      new: <R = MSPasteOverSelectionAction>() => R;
    }
  }
}

declare const MSPasteOverSelectionAction: cocoa.classes.MSPasteOverSelectionAction;
