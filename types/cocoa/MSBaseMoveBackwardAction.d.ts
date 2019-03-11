/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveBackwardAction<T = any> extends cocoa.MSBaseMoveAction {}
  namespace classes {
    export interface MSBaseMoveBackwardAction<T = any> extends cocoa.classes.MSBaseMoveAction {
      alloc<R = MSBaseMoveBackwardAction>(): R;
      new: <R = MSBaseMoveBackwardAction>() => R;
    }
  }
}

declare const MSBaseMoveBackwardAction: cocoa.classes.MSBaseMoveBackwardAction;
