/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveForwardAction<T = any> extends MSBaseMoveAction {}
  namespace classes {
    export interface MSBaseMoveForwardAction<T = any> extends MSBaseMoveAction {
      alloc<R = MSBaseMoveForwardAction>(): R;
      new: <R = MSBaseMoveForwardAction>() => R;
    }
  }
}

declare const MSBaseMoveForwardAction: cocoa.classes.MSBaseMoveForwardAction;
