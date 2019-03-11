/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemStatusBar<T = any> extends cocoa.NSStatusBar {
    _updateReplicantKeys<R = void>(): R;
    thickness<R = number>(): R;
  }
  namespace classes {
    export interface NSSystemStatusBar<T = any> extends cocoa.classes.NSStatusBar {
      alloc<R = NSSystemStatusBar>(): R;
      new: <R = NSSystemStatusBar>() => R;
    }
  }
}

declare const NSSystemStatusBar: cocoa.classes.NSSystemStatusBar;
