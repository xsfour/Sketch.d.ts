/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHackyPopoverTouchBarItem<T = any> extends NSPopoverTouchBarItem {
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSHackyPopoverTouchBarItem<T = any> extends NSPopoverTouchBarItem {
      alloc<R = NSHackyPopoverTouchBarItem>(): R;
      new: <R = NSHackyPopoverTouchBarItem>() => R;
    }
  }
}

declare const NSHackyPopoverTouchBarItem: cocoa.classes.NSHackyPopoverTouchBarItem;
