/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignRightAction<T = any> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignRight<R = void, P0 = unknown>(_alignRight: P0): R;
  }
  namespace classes {
    export interface MSAlignRightAction<T = any> extends MSBaseAlignAction {
      alloc<R = MSAlignRightAction>(): R;
      new: <R = MSAlignRightAction>() => R;
    }
  }
}

declare const MSAlignRightAction: cocoa.classes.MSAlignRightAction;
