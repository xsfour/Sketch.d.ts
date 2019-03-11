/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseStyleAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseStyleAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSBaseStyleAction>(): R;
      new: <R = MSBaseStyleAction>() => R;
    }
  }
}

declare const MSBaseStyleAction: cocoa.classes.MSBaseStyleAction;
