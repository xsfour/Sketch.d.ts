/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarNewTabButtonCell<T = any> extends NSTabBarDelayedPopUpButtonCell {}
  namespace classes {
    export interface NSTabBarNewTabButtonCell<T = any> extends NSTabBarDelayedPopUpButtonCell {
      alloc<R = NSTabBarNewTabButtonCell>(): R;
      new: <R = NSTabBarNewTabButtonCell>() => R;
    }
  }
}

declare const NSTabBarNewTabButtonCell: cocoa.classes.NSTabBarNewTabButtonCell;
