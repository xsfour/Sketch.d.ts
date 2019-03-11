/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowMenuItem<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSWindowMenuItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWindowMenuItem>(): R;
      new: <R = NSWindowMenuItem>() => R;
    }
  }
}

declare const NSWindowMenuItem: cocoa.classes.NSWindowMenuItem;
