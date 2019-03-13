/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewMenuAction<T = any> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSViewMenuAction<T = any> extends MSDocumentAction {
      alloc<R = MSViewMenuAction>(): R;
      new: <R = MSViewMenuAction>() => R;
    }
  }
}

declare const MSViewMenuAction: cocoa.classes.MSViewMenuAction;
