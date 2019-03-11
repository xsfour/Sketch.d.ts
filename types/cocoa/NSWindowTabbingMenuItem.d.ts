/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabbingMenuItem<T = any> extends cocoa.NSMenuItem {}
  namespace classes {
    export interface NSWindowTabbingMenuItem<T = any> extends cocoa.classes.NSMenuItem {
      alloc<R = NSWindowTabbingMenuItem>(): R;
      new: <R = NSWindowTabbingMenuItem>() => R;
    }
  }
}

declare const NSWindowTabbingMenuItem: cocoa.classes.NSWindowTabbingMenuItem;
