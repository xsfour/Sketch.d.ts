/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerXFocusAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerXFocusAction<T = any> extends MSDocumentAction {
      alloc<R = MSLayerXFocusAction>(): R;
      new: <R = MSLayerXFocusAction>() => R;
    }
  }
}

declare const MSLayerXFocusAction: cocoa.classes.MSLayerXFocusAction;
