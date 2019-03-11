/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUndoAction<T = any> extends cocoa.MSUndoBaseAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    undo<R = void, P0 = unknown>(_undo: P0): R;
  }
  namespace classes {
    export interface MSUndoAction<T = any> extends cocoa.classes.MSUndoBaseAction {
      alloc<R = MSUndoAction>(): R;
      new: <R = MSUndoAction>() => R;
    }
  }
}

declare const MSUndoAction: cocoa.classes.MSUndoAction;
