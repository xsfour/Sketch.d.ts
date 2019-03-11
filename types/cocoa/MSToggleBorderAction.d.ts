/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleBorderAction<T = any> extends cocoa.MSToggleStylePartAction {
    label<R = unknown>(): R;
    toggleBorder<R = void, P0 = unknown>(_toggleBorder: P0): R;
  }
  namespace classes {
    export interface MSToggleBorderAction<T = any> extends cocoa.classes.MSToggleStylePartAction {
      alloc<R = MSToggleBorderAction>(): R;
      new: <R = MSToggleBorderAction>() => R;
    }
  }
}

declare const MSToggleBorderAction: cocoa.classes.MSToggleBorderAction;
