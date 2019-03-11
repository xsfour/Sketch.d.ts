/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarNewTabButtonCell<T = any> extends cocoa.NSTabBarDelayedPopUpButtonCell {}
  namespace classes {
    export interface NSTabBarNewTabButtonCell<T = any> extends cocoa.classes.NSTabBarDelayedPopUpButtonCell {
      alloc<R = NSTabBarNewTabButtonCell>(): R;
      new: <R = NSTabBarNewTabButtonCell>() => R;
    }
  }
}

declare const NSTabBarNewTabButtonCell: cocoa.classes.NSTabBarNewTabButtonCell;
