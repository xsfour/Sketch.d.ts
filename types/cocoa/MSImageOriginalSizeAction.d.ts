/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOriginalSizeAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    imageOriginalSize<R = void, P0 = unknown>(_imageOriginalSize: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImageOriginalSizeAction<T = any> extends MSDocumentAction {
      alloc<R = MSImageOriginalSizeAction>(): R;
      new: <R = MSImageOriginalSizeAction>() => R;
    }
  }
}

declare const MSImageOriginalSizeAction: cocoa.classes.MSImageOriginalSizeAction;
