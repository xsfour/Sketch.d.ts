/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinTopAction<T = any> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinTopAction<R = void, P0 = unknown>(_pinTopAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintPinTopAction<T = any> extends MSConstraintAction {
      alloc<R = MSConstraintPinTopAction>(): R;
      new: <R = MSConstraintPinTopAction>() => R;
    }
  }
}

declare const MSConstraintPinTopAction: cocoa.classes.MSConstraintPinTopAction;
