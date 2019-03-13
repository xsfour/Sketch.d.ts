/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyStyleAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copyStyle<R = void, P0 = unknown>(_copyStyle: P0): R;
  }
  namespace classes {
    export interface MSCopyStyleAction<T = any> extends MSDocumentAction {
      alloc<R = MSCopyStyleAction>(): R;
      new: <R = MSCopyStyleAction>() => R;
    }
  }
}

declare const MSCopyStyleAction: cocoa.classes.MSCopyStyleAction;
