/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToSelectionAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    zoomToSelection<R = void, P0 = unknown>(_zoomToSelection: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSZoomToSelectionAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSZoomToSelectionAction>(): R;
      new: <R = MSZoomToSelectionAction>() => R;
    }
  }
}

declare const MSZoomToSelectionAction: cocoa.classes.MSZoomToSelectionAction;
