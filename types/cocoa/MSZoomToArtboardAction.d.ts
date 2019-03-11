/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToArtboardAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    zoomToArtboard<R = void, P0 = unknown>(_zoomToArtboard: P0): R;
  }
  namespace classes {
    export interface MSZoomToArtboardAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSZoomToArtboardAction>(): R;
      new: <R = MSZoomToArtboardAction>() => R;
    }
  }
}

declare const MSZoomToArtboardAction: cocoa.classes.MSZoomToArtboardAction;
