/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertVectorAction<T = any> extends MSDocumentAction {
    isSelectable<R = boolean>(): R;
    isActive<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertVector<R = void, P0 = unknown>(_insertVector: P0): R;
  }
  namespace classes {
    export interface MSInsertVectorAction<T = any> extends MSDocumentAction {
      alloc<R = MSInsertVectorAction>(): R;
      new: <R = MSInsertVectorAction>() => R;
    }
  }
}

declare const MSInsertVectorAction: cocoa.classes.MSInsertVectorAction;
