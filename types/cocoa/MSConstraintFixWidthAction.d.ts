/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintFixWidthAction<T = any> extends MSConstraintAction {
    label<R = unknown>(): R;
    validationKeyPath<R = unknown>(): R;
    actionKeyPath<R = unknown>(): R;
    fixWidthAction<R = void, P0 = unknown>(_fixWidthAction: P0): R;
  }
  namespace classes {
    export interface MSConstraintFixWidthAction<T = any> extends MSConstraintAction {
      alloc<R = MSConstraintFixWidthAction>(): R;
      new: <R = MSConstraintFixWidthAction>() => R;
    }
  }
}

declare const MSConstraintFixWidthAction: cocoa.classes.MSConstraintFixWidthAction;
