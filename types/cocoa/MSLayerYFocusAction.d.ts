/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerYFocusAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerYFocusAction<T = any> extends MSDocumentAction {
      alloc<R = MSLayerYFocusAction>(): R;
      new: <R = MSLayerYFocusAction>() => R;
    }
  }
}

declare const MSLayerYFocusAction: cocoa.classes.MSLayerYFocusAction;
