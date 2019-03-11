/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReversePathAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    reversePath<R = void, P0 = unknown>(_reversePath: P0): R;
  }
  namespace classes {
    export interface MSReversePathAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSReversePathAction>(): R;
      new: <R = MSReversePathAction>() => R;
    }
  }
}

declare const MSReversePathAction: cocoa.classes.MSReversePathAction;
