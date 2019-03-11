/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFullScreenWindow<T = any> extends cocoa.NSWindow {
    appearance<R = unknown>(): R;
    setAppearance<R = void, P0 = unknown>(_setAppearance: P0): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    _newFirstResponderIsInToolbar<R = boolean, P0 = unknown>(__newFirstResponderIsInToolbar: P0): R;
    canHide<R = boolean>(): R;
    updateForceToolbarVisible<R = void>(): R;
    description<R = unknown>(): R;
    _originalWindow<R = unknown>(): R;
    isMainWindow<R = boolean>(): R;
    _setChildWindowOrderingPriority<R = void, P0 = number>(__setChildWindowOrderingPriority: P0): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isMovable<R = boolean>(): R;
  }
  namespace classes {
    export interface NSToolbarFullScreenWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSToolbarFullScreenWindow>(): R;
      new: <R = NSToolbarFullScreenWindow>() => R;
    }
  }
}

declare const NSToolbarFullScreenWindow: cocoa.classes.NSToolbarFullScreenWindow;
