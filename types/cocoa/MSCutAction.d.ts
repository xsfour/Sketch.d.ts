/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCutAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
  }
  namespace classes {
    export interface MSCutAction<T = any> extends MSDocumentAction {
      alloc<R = MSCutAction>(): R;
      new: <R = MSCutAction>() => R;
    }
  }
}

declare const MSCutAction: cocoa.classes.MSCutAction;
