/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowReplaceColorSheetAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    showReplaceColorSheet<R = void, P0 = unknown>(_showReplaceColorSheet: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSShowReplaceColorSheetAction<T = any> extends MSDocumentAction {
      alloc<R = MSShowReplaceColorSheetAction>(): R;
      new: <R = MSShowReplaceColorSheetAction>() => R;
    }
  }
}

declare const MSShowReplaceColorSheetAction: cocoa.classes.MSShowReplaceColorSheetAction;
