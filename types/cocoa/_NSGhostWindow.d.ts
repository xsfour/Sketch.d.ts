/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGhostWindow<T = any> extends cocoa.NSWindow {}
  namespace classes {
    export interface _NSGhostWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = _NSGhostWindow>(): R;
      new: <R = _NSGhostWindow>() => R;
    }
  }
}
