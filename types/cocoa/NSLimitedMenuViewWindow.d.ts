/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLimitedMenuViewWindow<T = any> extends cocoa.NSWindow {
    isVisible<R = boolean>(): R;
  }
  namespace classes {
    export interface NSLimitedMenuViewWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSLimitedMenuViewWindow>(): R;
      new: <R = NSLimitedMenuViewWindow>() => R;
    }
  }
}

declare const NSLimitedMenuViewWindow: cocoa.classes.NSLimitedMenuViewWindow;
