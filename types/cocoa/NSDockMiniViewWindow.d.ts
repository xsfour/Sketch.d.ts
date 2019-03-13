/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockMiniViewWindow<T = any> extends NSWindow {
    _setShown<R = void, P0 = boolean>(__setShown: P0): R;
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDockMiniViewWindow<T = any> extends NSWindow {
      alloc<R = NSDockMiniViewWindow>(): R;
      new: <R = NSDockMiniViewWindow>() => R;
    }
  }
}

declare const NSDockMiniViewWindow: cocoa.classes.NSDockMiniViewWindow;
