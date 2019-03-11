/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteWithStyleAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    pasteWithStyle<R = void, P0 = unknown>(_pasteWithStyle: P0): R;
  }
  namespace classes {
    export interface MSPasteWithStyleAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSPasteWithStyleAction>(): R;
      new: <R = MSPasteWithStyleAction>() => R;
    }
  }
}

declare const MSPasteWithStyleAction: cocoa.classes.MSPasteWithStyleAction;
