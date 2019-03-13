/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSliceAction<T = any> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertSlice<R = void, P0 = unknown>(_insertSlice: P0): R;
  }
  namespace classes {
    export interface MSInsertSliceAction<T = any> extends MSDocumentAction {
      alloc<R = MSInsertSliceAction>(): R;
      new: <R = MSInsertSliceAction>() => R;
    }
  }
}

declare const MSInsertSliceAction: cocoa.classes.MSInsertSliceAction;
