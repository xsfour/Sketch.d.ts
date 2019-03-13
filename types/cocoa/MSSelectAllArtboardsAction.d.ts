/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectAllArtboardsAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    selectAllArtboards<R = void, P0 = unknown>(_selectAllArtboards: P0): R;
  }
  namespace classes {
    export interface MSSelectAllArtboardsAction<T = any> extends MSDocumentAction {
      alloc<R = MSSelectAllArtboardsAction>(): R;
      new: <R = MSSelectAllArtboardsAction>() => R;
    }
  }
}

declare const MSSelectAllArtboardsAction: cocoa.classes.MSSelectAllArtboardsAction;
