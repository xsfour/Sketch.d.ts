/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRedoAction<T = any> extends MSUndoBaseAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    redo<R = void, P0 = unknown>(_redo: P0): R;
  }
  namespace classes {
    export interface MSRedoAction<T = any> extends MSUndoBaseAction {
      alloc<R = MSRedoAction>(): R;
      new: <R = MSRedoAction>() => R;
    }
  }
}

declare const MSRedoAction: cocoa.classes.MSRedoAction;
