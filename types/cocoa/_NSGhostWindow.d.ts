/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGhostWindow<T = any> extends NSWindow {}
  namespace classes {
    export interface _NSGhostWindow<T = any> extends NSWindow {
      alloc<R = _NSGhostWindow>(): R;
      new: <R = _NSGhostWindow>() => R;
    }
  }
}
