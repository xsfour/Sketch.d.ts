/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultStyleAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    setStyleAsDefault<R = void, P0 = unknown>(_setStyleAsDefault: P0): R;
  }
  namespace classes {
    export interface MSDefaultStyleAction<T = any> extends MSDocumentAction {
      alloc<R = MSDefaultStyleAction>(): R;
      new: <R = MSDefaultStyleAction>() => R;
    }
  }
}

declare const MSDefaultStyleAction: cocoa.classes.MSDefaultStyleAction;
