/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignCenterAction<T = any> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignCenter<R = void, P0 = unknown>(_alignCenter: P0): R;
  }
  namespace classes {
    export interface MSAlignCenterAction<T = any> extends MSBaseAlignAction {
      alloc<R = MSAlignCenterAction>(): R;
      new: <R = MSAlignCenterAction>() => R;
    }
  }
}

declare const MSAlignCenterAction: cocoa.classes.MSAlignCenterAction;
