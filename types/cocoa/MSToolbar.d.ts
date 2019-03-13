/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbar<T = any> extends NSToolbar {
    toolbarHeight_ms<R = number>(): R;
    setSizeMode<R = void, P0 = number>(_setSizeMode: P0): R;
  }
  namespace classes {
    export interface MSToolbar<T = any> extends NSToolbar {
      alloc<R = MSToolbar>(): R;
      new: <R = MSToolbar>() => R;
    }
  }
}

declare const MSToolbar: cocoa.classes.MSToolbar;
