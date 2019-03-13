/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateCounterclockwiseAction<T = any> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    rotate90CC<R = void, P0 = unknown>(_rotate90CC: P0): R;
  }
  namespace classes {
    export interface MSRotateCounterclockwiseAction<T = any> extends MSEventHandlerAction {
      alloc<R = MSRotateCounterclockwiseAction>(): R;
      new: <R = MSRotateCounterclockwiseAction>() => R;
    }
  }
}

declare const MSRotateCounterclockwiseAction: cocoa.classes.MSRotateCounterclockwiseAction;
