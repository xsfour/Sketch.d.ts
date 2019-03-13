/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSnapshotWindow<T = any> extends NSWindow {
    isKeyWindow<R = boolean>(): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSToolbarSnapshotWindow<T = any> extends NSWindow {
      alloc<R = NSToolbarSnapshotWindow>(): R;
      new: <R = NSToolbarSnapshotWindow>() => R;
    }
  }
}

declare const NSToolbarSnapshotWindow: cocoa.classes.NSToolbarSnapshotWindow;
