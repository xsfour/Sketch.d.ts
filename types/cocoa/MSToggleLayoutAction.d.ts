/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayoutAction<T = any> extends MSToggleBaseAction {
    validate<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleLayout<R = void, P0 = unknown>(_toggleLayout: P0): R;
  }
  namespace classes {
    export interface MSToggleLayoutAction<T = any> extends MSToggleBaseAction {
      alloc<R = MSToggleLayoutAction>(): R;
      new: <R = MSToggleLayoutAction>() => R;
    }
  }
}

declare const MSToggleLayoutAction: cocoa.classes.MSToggleLayoutAction;
