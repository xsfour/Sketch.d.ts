/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomInAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    zoomIn<R = void, P0 = unknown>(_zoomIn: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSZoomInAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSZoomInAction>(): R;
      new: <R = MSZoomInAction>() => R;
    }
  }
}

declare const MSZoomInAction: cocoa.classes.MSZoomInAction;
