/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowFullScreenContentController<T = any> extends cocoa._NSFullScreenContentController {
    maybeAssignWindow<R = boolean, P0 = unknown>(_maybeAssignWindow: P0): R;
    _gatherWindowsToFreeze_wids<R = void, P0 = unknown, P1 = unknown>(__gatherWindowsToFreeze: P0, _wids: P1): R;
    makeDetachedMenuBarCompanionController<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    window<R = cocoa.NSWindow>(): R;
  }
  namespace classes {
    export interface _NSWindowFullScreenContentController<T = any> extends cocoa.classes._NSFullScreenContentController {
      alloc<R = _NSWindowFullScreenContentController>(): R;
      new: <R = _NSWindowFullScreenContentController>() => R;
    }
  }
}
