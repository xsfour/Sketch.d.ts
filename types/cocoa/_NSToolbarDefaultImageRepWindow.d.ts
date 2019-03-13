/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarDefaultImageRepWindow<T = any> extends NSWindow {}
  namespace classes {
    export interface _NSToolbarDefaultImageRepWindow<T = any> extends NSWindow {
      alloc<R = _NSToolbarDefaultImageRepWindow>(): R;
      new: <R = _NSToolbarDefaultImageRepWindow>() => R;
    }
  }
}
