/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleRulerDragLockingAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    toggleRulerDragLocking<R = void, P0 = unknown>(_toggleRulerDragLocking: P0): R;
  }
  namespace classes {
    export interface MSToggleRulerDragLockingAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSToggleRulerDragLockingAction>(): R;
      new: <R = MSToggleRulerDragLockingAction>() => R;
    }
  }
}

declare const MSToggleRulerDragLockingAction: cocoa.classes.MSToggleRulerDragLockingAction;
