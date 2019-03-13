/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerHeightFocusAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerHeightFocusAction<T = any> extends MSDocumentAction {
      alloc<R = MSLayerHeightFocusAction>(): R;
      new: <R = MSLayerHeightFocusAction>() => R;
    }
  }
}

declare const MSLayerHeightFocusAction: cocoa.classes.MSLayerHeightFocusAction;
