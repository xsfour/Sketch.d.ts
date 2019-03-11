/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToActualSizeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    actualSize<R = void, P0 = unknown>(_actualSize: P0): R;
  }
  namespace classes {
    export interface MSZoomToActualSizeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSZoomToActualSizeAction>(): R;
      new: <R = MSZoomToActualSizeAction>() => R;
    }
  }
}

declare const MSZoomToActualSizeAction: cocoa.classes.MSZoomToActualSizeAction;
