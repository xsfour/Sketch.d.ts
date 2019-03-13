/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenWindow<T = any> extends NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSFullScreenWindow<T = any> extends NSWindow {
      alloc<R = _NSFullScreenWindow>(): R;
      new: <R = _NSFullScreenWindow>() => R;
    }
  }
}
