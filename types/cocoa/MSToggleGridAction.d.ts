/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleGridAction<T = any> extends cocoa.MSToggleBaseAction {
    validate<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleGrid<R = void, P0 = unknown>(_toggleGrid: P0): R;
  }
  namespace classes {
    export interface MSToggleGridAction<T = any> extends cocoa.classes.MSToggleBaseAction {
      alloc<R = MSToggleGridAction>(): R;
      new: <R = MSToggleGridAction>() => R;
    }
  }
}

declare const MSToggleGridAction: cocoa.classes.MSToggleGridAction;
