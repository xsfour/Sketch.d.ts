/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolsMenuAction<T = any> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSToolsMenuAction<T = any> extends MSDocumentAction {
      alloc<R = MSToolsMenuAction>(): R;
      new: <R = MSToolsMenuAction>() => R;
    }
  }
}

declare const MSToolsMenuAction: cocoa.classes.MSToolsMenuAction;
