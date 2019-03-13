/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowExitFullScreenTransitionController<T = any> extends _NSExitFullScreenTransitionController {
    _getPossibleCustomWindowsForExitingFullScreen<R = unknown>(): R;
    initForExitingContentController<R = unknown, P0 = unknown>(_initForExitingContentController: P0): R;
  }
  namespace classes {
    export interface _NSWindowExitFullScreenTransitionController<T = any> extends _NSExitFullScreenTransitionController {
      alloc<R = _NSWindowExitFullScreenTransitionController>(): R;
      new: <R = _NSWindowExitFullScreenTransitionController>() => R;
    }
  }
}
