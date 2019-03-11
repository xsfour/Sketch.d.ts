/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewMenuAction<T = any> extends cocoa.MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSViewMenuAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSViewMenuAction>(): R;
      new: <R = MSViewMenuAction>() => R;
    }
  }
}

declare const MSViewMenuAction: cocoa.classes.MSViewMenuAction;
