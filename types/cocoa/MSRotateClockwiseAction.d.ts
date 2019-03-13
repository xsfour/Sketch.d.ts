/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateClockwiseAction<T = any> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    rotate90C<R = void, P0 = unknown>(_rotate90C: P0): R;
  }
  namespace classes {
    export interface MSRotateClockwiseAction<T = any> extends MSEventHandlerAction {
      alloc<R = MSRotateClockwiseAction>(): R;
      new: <R = MSRotateClockwiseAction>() => R;
    }
  }
}

declare const MSRotateClockwiseAction: cocoa.classes.MSRotateClockwiseAction;
