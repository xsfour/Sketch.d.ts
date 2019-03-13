/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderOverlayWindow<T = any> extends NSWindow {}
  namespace classes {
    export interface _NSTextFinderOverlayWindow<T = any> extends NSWindow {
      alloc<R = _NSTextFinderOverlayWindow>(): R;
      new: <R = _NSTextFinderOverlayWindow>() => R;
    }
  }
}
