/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseAlignAction<T = any> extends MSDocumentAction {
    textAlignment<R = number>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseAlignAction<T = any> extends MSDocumentAction {
      alloc<R = MSBaseAlignAction>(): R;
      new: <R = MSBaseAlignAction>() => R;
    }
  }
}

declare const MSBaseAlignAction: cocoa.classes.MSBaseAlignAction;
