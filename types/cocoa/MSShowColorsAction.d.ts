/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowColorsAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    showColorsAction<R = void, P0 = unknown>(_showColorsAction: P0): R;
  }
  namespace classes {
    export interface MSShowColorsAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSShowColorsAction>(): R;
      new: <R = MSShowColorsAction>() => R;
    }
  }
}

declare const MSShowColorsAction: cocoa.classes.MSShowColorsAction;
