/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextVerticalAlignmentAction<T = any> extends MSDocumentAction {
    validate<R = boolean>(): R;
    verticalAlignment<R = number>(): R;
  }
  namespace classes {
    export interface MSTextVerticalAlignmentAction<T = any> extends MSDocumentAction {
      alloc<R = MSTextVerticalAlignmentAction>(): R;
      new: <R = MSTextVerticalAlignmentAction>() => R;
    }
  }
}

declare const MSTextVerticalAlignmentAction: cocoa.classes.MSTextVerticalAlignmentAction;
