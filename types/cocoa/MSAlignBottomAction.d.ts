/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignBottomAction<T = any> extends MSTextVerticalAlignmentAction {
    label<R = unknown>(): R;
    alignBottom<R = void, P0 = unknown>(_alignBottom: P0): R;
  }
  namespace classes {
    export interface MSAlignBottomAction<T = any> extends MSTextVerticalAlignmentAction {
      alloc<R = MSAlignBottomAction>(): R;
      new: <R = MSAlignBottomAction>() => R;
    }
  }
}

declare const MSAlignBottomAction: cocoa.classes.MSAlignBottomAction;
