/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveForwardAction<T = any> extends cocoa.MSBaseMoveAction {}
  namespace classes {
    export interface MSBaseMoveForwardAction<T = any> extends cocoa.classes.MSBaseMoveAction {
      alloc<R = MSBaseMoveForwardAction>(): R;
      new: <R = MSBaseMoveForwardAction>() => R;
    }
  }
}

declare const MSBaseMoveForwardAction: cocoa.classes.MSBaseMoveForwardAction;
