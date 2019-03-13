/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanMenuAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBooleanMenuAction<T = any> extends MSDocumentAction {
      alloc<R = MSBooleanMenuAction>(): R;
      new: <R = MSBooleanMenuAction>() => R;
    }
  }
}

declare const MSBooleanMenuAction: cocoa.classes.MSBooleanMenuAction;
