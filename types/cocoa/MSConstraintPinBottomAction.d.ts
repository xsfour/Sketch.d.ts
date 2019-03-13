/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinBottomAction<T = any> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinBottomAction<R = void, P0 = unknown>(_pinBottomAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintPinBottomAction<T = any> extends MSConstraintAction {
      alloc<R = MSConstraintPinBottomAction>(): R;
      new: <R = MSConstraintPinBottomAction>() => R;
    }
  }
}

declare const MSConstraintPinBottomAction: cocoa.classes.MSConstraintPinBottomAction;
