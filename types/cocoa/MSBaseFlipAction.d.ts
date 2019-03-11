/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseFlipAction<T = any> extends cocoa.MSDocumentAction {
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseFlipAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSBaseFlipAction>(): R;
      new: <R = MSBaseFlipAction>() => R;
    }
  }
}

declare const MSBaseFlipAction: cocoa.classes.MSBaseFlipAction;
