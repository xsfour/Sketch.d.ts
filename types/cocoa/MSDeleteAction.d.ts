/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDeleteAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
  }
  namespace classes {
    export interface MSDeleteAction<T = any> extends MSDocumentAction {
      alloc<R = MSDeleteAction>(): R;
      new: <R = MSDeleteAction>() => R;
    }
  }
}

declare const MSDeleteAction: cocoa.classes.MSDeleteAction;
