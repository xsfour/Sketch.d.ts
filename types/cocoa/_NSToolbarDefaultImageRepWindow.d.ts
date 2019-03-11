/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarDefaultImageRepWindow<T = any> extends cocoa.NSWindow {}
  namespace classes {
    export interface _NSToolbarDefaultImageRepWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = _NSToolbarDefaultImageRepWindow>(): R;
      new: <R = _NSToolbarDefaultImageRepWindow>() => R;
    }
  }
}
