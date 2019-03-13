/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintPinLeftAction<T = any> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    pinLeftAction<R = void, P0 = unknown>(_pinLeftAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintPinLeftAction<T = any> extends MSConstraintAction {
      alloc<R = MSConstraintPinLeftAction>(): R;
      new: <R = MSConstraintPinLeftAction>() => R;
    }
  }
}

declare const MSConstraintPinLeftAction: cocoa.classes.MSConstraintPinLeftAction;
