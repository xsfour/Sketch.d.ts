/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveForwardAction<T = any> extends cocoa.MSBaseMoveForwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveForward<R = void, P0 = unknown>(_moveForward: P0): R;
  }
  namespace classes {
    export interface MSMoveForwardAction<T = any> extends cocoa.classes.MSBaseMoveForwardAction {
      alloc<R = MSMoveForwardAction>(): R;
      new: <R = MSMoveForwardAction>() => R;
    }
  }
}

declare const MSMoveForwardAction: cocoa.classes.MSMoveForwardAction;
