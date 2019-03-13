/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignTopAction<T = any> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignTop<R = void, P0 = unknown>(_alignTop: P0): R;
  }
  namespace classes {
    export interface MSAlignTopAction<T = any> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignTopAction>(): R;
      new: <R = MSAlignTopAction>() => R;
    }
  }
}

declare const MSAlignTopAction: cocoa.classes.MSAlignTopAction;
