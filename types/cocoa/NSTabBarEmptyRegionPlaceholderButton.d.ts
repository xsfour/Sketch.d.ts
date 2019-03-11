/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarEmptyRegionPlaceholderButton<T = any> extends cocoa.NSTabButton, cocoa.NSTabBarSyncedButtonProtocol {
    _setHasPressedHighlight_notifyNSTabBarSyncedButtonDelegate<R = void, P0 = boolean, P1 = boolean>(__setHasPressedHighlight: P0, _notifyNSTabBarSyncedButtonDelegate: P1): R;
    _setHasMouseOverHighlight_animated_notifyNSTabBarSyncedButtonDelegate<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__setHasMouseOverHighlight: P0, _animated: P1, _notifyNSTabBarSyncedButtonDelegate: P2): R;
    syncedWithOtherButton<R = boolean>(): R;
    setSyncedWithOtherButton<R = void, P0 = boolean>(_v: P0): R;
    buttonInTabSyncGroupDelegate<R = cocoa.NSTabBarSyncedButtonDelegate>(): R;
    setButtonInTabSyncGroupDelegate<R = void, P0 = cocoa.NSTabBarSyncedButtonDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabBarEmptyRegionPlaceholderButton<T = any> extends cocoa.classes.NSTabButton, cocoa.classes.NSTabBarSyncedButtonProtocol {
      alloc<R = NSTabBarEmptyRegionPlaceholderButton>(): R;
      new: <R = NSTabBarEmptyRegionPlaceholderButton>() => R;
    }
  }
}

declare const NSTabBarEmptyRegionPlaceholderButton: cocoa.classes.NSTabBarEmptyRegionPlaceholderButton;
