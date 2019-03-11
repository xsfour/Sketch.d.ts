/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleBaseAction<T = any> extends cocoa.MSDocumentAction {
    isActive<R = boolean>(): R;
    root<R = unknown>(): R;
    setGrid<R = void, P0 = unknown>(_setGrid: P0): R;
    grid<R = unknown>(): R;
    prepareNewGrid<R = unknown>(): R;
  }
  namespace classes {
    export interface MSToggleBaseAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSToggleBaseAction>(): R;
      new: <R = MSToggleBaseAction>() => R;
    }
  }
}

declare const MSToggleBaseAction: cocoa.classes.MSToggleBaseAction;
