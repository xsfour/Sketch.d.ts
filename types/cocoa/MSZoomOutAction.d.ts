/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomOutAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    zoomOut<R = void, P0 = unknown>(_zoomOut: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSZoomOutAction<T = any> extends MSDocumentAction {
      alloc<R = MSZoomOutAction>(): R;
      new: <R = MSZoomOutAction>() => R;
    }
  }
}

declare const MSZoomOutAction: cocoa.classes.MSZoomOutAction;
