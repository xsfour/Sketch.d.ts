/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinRightAction<T = any> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinRightAction<R = void, P0 = unknown>(_pinRightAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintPinRightAction<T = any> extends MSConstraintAction {
      alloc<R = MSConstraintPinRightAction>(): R;
      new: <R = MSConstraintPinRightAction>() => R;
    }
  }
}

declare const MSConstraintPinRightAction: cocoa.classes.MSConstraintPinRightAction;
