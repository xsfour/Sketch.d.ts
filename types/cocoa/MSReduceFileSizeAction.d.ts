/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReduceFileSizeAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    reduceFileSize<R = void, P0 = unknown>(_reduceFileSize: P0): R;
  }
  namespace classes {
    export interface MSReduceFileSizeAction<T = any> extends MSDocumentAction {
      alloc<R = MSReduceFileSizeAction>(): R;
      new: <R = MSReduceFileSizeAction>() => R;
    }
  }
}

declare const MSReduceFileSizeAction: cocoa.classes.MSReduceFileSizeAction;
