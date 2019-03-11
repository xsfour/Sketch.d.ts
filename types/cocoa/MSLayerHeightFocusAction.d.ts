/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerHeightFocusAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerHeightFocusAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSLayerHeightFocusAction>(): R;
      new: <R = MSLayerHeightFocusAction>() => R;
    }
  }
}

declare const MSLayerHeightFocusAction: cocoa.classes.MSLayerHeightFocusAction;
