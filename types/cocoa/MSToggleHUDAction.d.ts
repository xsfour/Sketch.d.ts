/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleHUDAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    mainHUD<R = unknown>(): R;
    toggleHUD<R = void, P0 = unknown>(_toggleHUD: P0): R;
  }
  namespace classes {
    export interface MSToggleHUDAction<T = any> extends MSAction {
      alloc<R = MSToggleHUDAction>(): R;
      new: <R = MSToggleHUDAction>() => R;
    }
  }
}

declare const MSToggleHUDAction: cocoa.classes.MSToggleHUDAction;
