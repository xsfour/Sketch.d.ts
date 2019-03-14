/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleBaseAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    root<R = unknown>(): R;
    setGrid<R = void, P0 = unknown>(_setGrid: P0): R;
    grid<R = unknown>(): R;
    prepareNewGrid<R = unknown>(): R;
  }
  namespace MSToggleBaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleBaseAction>(): R;
      new: <R = MSToggleBaseAction>() => R;
    }
  }
}

declare const MSToggleBaseAction: cocoa.MSToggleBaseAction.CLASS;
