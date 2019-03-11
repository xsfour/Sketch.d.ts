/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerYFocusAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerYFocusAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSLayerYFocusAction>(): R;
      new: <R = MSLayerYFocusAction>() => R;
    }
  }
}

declare const MSLayerYFocusAction: cocoa.classes.MSLayerYFocusAction;
