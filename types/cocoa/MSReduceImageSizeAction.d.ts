/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReduceImageSizeAction<T = any> extends cocoa.MSDocumentAction {
    reduceImageSize<R = void, P0 = unknown>(_reduceImageSize: P0): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSReduceImageSizeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSReduceImageSizeAction>(): R;
      new: <R = MSReduceImageSizeAction>() => R;
    }
  }
}

declare const MSReduceImageSizeAction: cocoa.classes.MSReduceImageSizeAction;
