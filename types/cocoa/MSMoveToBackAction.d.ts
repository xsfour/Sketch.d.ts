/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToBackAction<T = any> extends cocoa.MSBaseMoveBackwardAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveToBack<R = void, P0 = unknown>(_moveToBack: P0): R;
  }
  namespace classes {
    export interface MSMoveToBackAction<T = any> extends cocoa.classes.MSBaseMoveBackwardAction {
      alloc<R = MSMoveToBackAction>(): R;
      new: <R = MSMoveToBackAction>() => R;
    }
  }
}

declare const MSMoveToBackAction: cocoa.classes.MSMoveToBackAction;
