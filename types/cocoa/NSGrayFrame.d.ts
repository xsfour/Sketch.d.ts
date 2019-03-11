/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGrayFrame<T = any> extends cocoa.NSThemeFrame {}
  namespace classes {
    export interface NSGrayFrame<T = any> extends cocoa.classes.NSThemeFrame {
      alloc<R = NSGrayFrame>(): R;
      new: <R = NSGrayFrame>() => R;
    }
  }
}

declare const NSGrayFrame: cocoa.classes.NSGrayFrame;
