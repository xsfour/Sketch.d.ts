/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderOverlayWindow<T = any> extends cocoa.NSWindow {}
  namespace classes {
    export interface _NSTextFinderOverlayWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = _NSTextFinderOverlayWindow>(): R;
      new: <R = _NSTextFinderOverlayWindow>() => R;
    }
  }
}
