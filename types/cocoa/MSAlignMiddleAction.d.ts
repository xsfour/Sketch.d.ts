/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignMiddleAction<T = any> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignMiddle<R = void, P0 = unknown>(_alignMiddle: P0): R;
  }
  namespace classes {
    export interface MSAlignMiddleAction<T = any> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignMiddleAction>(): R;
      new: <R = MSAlignMiddleAction>() => R;
    }
  }
}

declare const MSAlignMiddleAction: cocoa.classes.MSAlignMiddleAction;
