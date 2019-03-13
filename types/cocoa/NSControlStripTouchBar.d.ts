/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripTouchBar<T = any> extends NSTouchBar {}
  namespace classes {
    export interface NSControlStripTouchBar<T = any> extends NSTouchBar {
      alloc<R = NSControlStripTouchBar>(): R;
      new: <R = NSControlStripTouchBar>() => R;
    }
  }
}

declare const NSControlStripTouchBar: cocoa.classes.NSControlStripTouchBar;
