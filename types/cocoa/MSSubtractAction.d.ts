/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtractAction<T = any> extends cocoa.MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanSubtract<R = void, P0 = unknown>(_booleanSubtract: P0): R;
  }
  namespace classes {
    export interface MSSubtractAction<T = any> extends cocoa.classes.MSBaseBooleanAction {
      alloc<R = MSSubtractAction>(): R;
      new: <R = MSSubtractAction>() => R;
    }
  }
}

declare const MSSubtractAction: cocoa.classes.MSSubtractAction;
