/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowFontsAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    showFontsAction<R = void, P0 = unknown>(_showFontsAction: P0): R;
  }
  namespace classes {
    export interface MSShowFontsAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSShowFontsAction>(): R;
      new: <R = MSShowFontsAction>() => R;
    }
  }
}

declare const MSShowFontsAction: cocoa.classes.MSShowFontsAction;
