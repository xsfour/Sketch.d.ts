/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarEmptyRegionPlaceholderButton<T = any> extends NSTabButton, NSTabBarSyncedButtonProtocol {
    _setHasPressedHighlight_notifyNSTabBarSyncedButtonDelegate<R = void, P0 = boolean, P1 = boolean>(__setHasPressedHighlight: P0, _notifyNSTabBarSyncedButtonDelegate: P1): R;
    _setHasMouseOverHighlight_animated_notifyNSTabBarSyncedButtonDelegate<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__setHasMouseOverHighlight: P0, _animated: P1, _notifyNSTabBarSyncedButtonDelegate: P2): R;
    syncedWithOtherButton<R = boolean>(): R;
    setSyncedWithOtherButton<R = void, P0 = boolean>(_v: P0): R;
    buttonInTabSyncGroupDelegate<R = NSTabBarSyncedButtonDelegate>(): R;
    setButtonInTabSyncGroupDelegate<R = void, P0 = NSTabBarSyncedButtonDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabBarEmptyRegionPlaceholderButton<T = any> extends NSTabButton, NSTabBarSyncedButtonProtocol {
      alloc<R = NSTabBarEmptyRegionPlaceholderButton>(): R;
      new: <R = NSTabBarEmptyRegionPlaceholderButton>() => R;
    }
  }
}

declare const NSTabBarEmptyRegionPlaceholderButton: cocoa.classes.NSTabBarEmptyRegionPlaceholderButton;
