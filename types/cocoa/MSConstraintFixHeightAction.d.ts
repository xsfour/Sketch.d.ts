/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintFixHeightAction<T = any> extends cocoa.MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    fixHeightAction<R = void, P0 = unknown>(_fixHeightAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintFixHeightAction<T = any> extends cocoa.classes.MSConstraintAction {
      alloc<R = MSConstraintFixHeightAction>(): R;
      new: <R = MSConstraintFixHeightAction>() => R;
    }
  }
}

declare const MSConstraintFixHeightAction: cocoa.classes.MSConstraintFixHeightAction;
