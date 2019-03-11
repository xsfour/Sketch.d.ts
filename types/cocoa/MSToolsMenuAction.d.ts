/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolsMenuAction<T = any> extends cocoa.MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSToolsMenuAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSToolsMenuAction>(): R;
      new: <R = MSToolsMenuAction>() => R;
    }
  }
}

declare const MSToolsMenuAction: cocoa.classes.MSToolsMenuAction;
