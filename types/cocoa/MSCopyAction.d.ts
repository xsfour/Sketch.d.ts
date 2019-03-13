/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
  }
  namespace classes {
    export interface MSCopyAction<T = any> extends MSDocumentAction {
      alloc<R = MSCopyAction>(): R;
      new: <R = MSCopyAction>() => R;
    }
  }
}

declare const MSCopyAction: cocoa.classes.MSCopyAction;
