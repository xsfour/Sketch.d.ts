/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowEnterFullScreenTransitionController<T = any> extends _NSEnterFullScreenTransitionController {
    _getPossibleCustomWindowsForEnteringIntoFullScreen<R = unknown>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace classes {
    export interface _NSWindowEnterFullScreenTransitionController<T = any> extends _NSEnterFullScreenTransitionController {
      alloc<R = _NSWindowEnterFullScreenTransitionController>(): R;
      new: <R = _NSWindowEnterFullScreenTransitionController>() => R;
    }
  }
}
