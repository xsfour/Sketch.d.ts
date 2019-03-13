/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintResetAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    resetConstraintAction<R = void, P0 = unknown>(_resetConstraintAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintResetAction<T = any> extends MSDocumentAction {
      alloc<R = MSConstraintResetAction>(): R;
      new: <R = MSConstraintResetAction>() => R;
    }
  }
}

declare const MSConstraintResetAction: cocoa.classes.MSConstraintResetAction;
