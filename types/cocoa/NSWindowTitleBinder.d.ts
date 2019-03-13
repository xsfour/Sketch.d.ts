/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTitleBinder<T = any> extends NSTitleBinder {
    window_didSetTitle<R = void, P0 = unknown, P1 = unknown>(_window: P0, _didSetTitle: P1): R;
  }
  namespace classes {
    export interface NSWindowTitleBinder<T = any> extends NSTitleBinder {
      alloc<R = NSWindowTitleBinder>(): R;
      new: <R = NSWindowTitleBinder>() => R;
    }
  }
}

declare const NSWindowTitleBinder: cocoa.classes.NSWindowTitleBinder;
