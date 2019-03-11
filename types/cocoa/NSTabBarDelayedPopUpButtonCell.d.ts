/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarDelayedPopUpButtonCell<T = any> extends cocoa.NSButtonCell {
    cxx_destruct<R = void>(): R;
    _displayDelayedMenu<R = void>(): R;
    displayOffsetContextualMenu<R = void>(): R;
    _invalidateMenuTimer<R = void>(): R;
    _menuDelayTime<R = number>(): R;
  }
  namespace classes {
    export interface NSTabBarDelayedPopUpButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSTabBarDelayedPopUpButtonCell>(): R;
      new: <R = NSTabBarDelayedPopUpButtonCell>() => R;
    }
  }
}

declare const NSTabBarDelayedPopUpButtonCell: cocoa.classes.NSTabBarDelayedPopUpButtonCell;
