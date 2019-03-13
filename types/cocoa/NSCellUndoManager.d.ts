/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellUndoManager<T = any> extends NSUndoManager {
    redoMenuItemTitle<R = unknown>(): R;
    undoMenuItemTitle<R = unknown>(): R;
    canRedo<R = boolean>(): R;
    canUndo<R = boolean>(): R;
    setNextUndoManager<R = void, P0 = unknown>(_setNextUndoManager: P0): R;
  }
  namespace classes {
    export interface NSCellUndoManager<T = any> extends NSUndoManager {
      alloc<R = NSCellUndoManager>(): R;
      new: <R = NSCellUndoManager>() => R;
    }
  }
}

declare const NSCellUndoManager: cocoa.classes.NSCellUndoManager;
