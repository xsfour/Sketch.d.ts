/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveBackwardAction<T = any> extends MSBaseMoveBackwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveBackward<R = void, P0 = unknown>(_moveBackward: P0): R;
  }
  namespace classes {
    export interface MSMoveBackwardAction<T = any> extends MSBaseMoveBackwardAction {
      alloc<R = MSMoveBackwardAction>(): R;
      new: <R = MSMoveBackwardAction>() => R;
    }
  }
}

declare const MSMoveBackwardAction: cocoa.classes.MSMoveBackwardAction;
