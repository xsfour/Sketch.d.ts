/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardAction<T = any> extends MSBaseInsertAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertArtboard<R = void, P0 = unknown>(_insertArtboard: P0): R;
  }
  namespace classes {
    export interface MSInsertArtboardAction<T = any> extends MSBaseInsertAction {
      alloc<R = MSInsertArtboardAction>(): R;
      new: <R = MSInsertArtboardAction>() => R;
    }
  }
}

declare const MSInsertArtboardAction: cocoa.classes.MSInsertArtboardAction;
