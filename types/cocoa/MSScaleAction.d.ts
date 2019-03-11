/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScaleAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    validate<R = boolean>(): R;
    scale<R = void, P0 = unknown>(_scale: P0): R;
  }
  namespace classes {
    export interface MSScaleAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSScaleAction>(): R;
      new: <R = MSScaleAction>() => R;
    }
  }
}

declare const MSScaleAction: cocoa.classes.MSScaleAction;
