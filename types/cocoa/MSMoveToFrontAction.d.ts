/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToFrontAction<T = any> extends cocoa.MSBaseMoveForwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveToFront<R = void, P0 = unknown>(_moveToFront: P0): R;
  }
  namespace classes {
    export interface MSMoveToFrontAction<T = any> extends cocoa.classes.MSBaseMoveForwardAction {
      alloc<R = MSMoveToFrontAction>(): R;
      new: <R = MSMoveToFrontAction>() => R;
    }
  }
}

declare const MSMoveToFrontAction: cocoa.classes.MSMoveToFrontAction;
