/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateAction<T = any> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    rotationBarAction<R = void, P0 = unknown>(_rotationBarAction: P0): R;
    rotate<R = void, P0 = unknown>(_rotate: P0): R;
  }
  namespace classes {
    export interface MSRotateAction<T = any> extends MSEventHandlerAction {
      alloc<R = MSRotateAction>(): R;
      new: <R = MSRotateAction>() => R;
    }
  }
}

declare const MSRotateAction: cocoa.classes.MSRotateAction;
