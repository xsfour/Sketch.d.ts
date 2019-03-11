/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarNewTabButton<T = any> extends cocoa.NSButton, cocoa.NSDraggingDestinationProtocol, cocoa.NSTabBarSyncedButtonProtocol {
    cxx_destruct<R = void>(): R;
    draggingDestination<R = unknown>(): R;
    associatedWindow<R = unknown>(): R;
    _windowIsActive<R = boolean>(): R;
    _leadingBorderDefaultColor<R = unknown>(): R;
    _backgroundDefaultColor<R = unknown>(): R;
    _updateButtonColors<R = void>(): R;
    awakeFromNib<R = void>(): R;
    _finishInitialization<R = void>(): R;
    _setLeadingBorderColor_withAnimation<R = void, P0 = unknown, P1 = unknown>(__setLeadingBorderColor: P0, _withAnimation: P1): R;
    _setBackgroundColor_withAnimation<R = void, P0 = unknown, P1 = unknown>(__setBackgroundColor: P0, _withAnimation: P1): R;
    _updateButtonHighlightWhenPressed_hovered_notifyNSTabBarSyncedButtonDelegate<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__updateButtonHighlightWhenPressed: P0, _hovered: P1, _notifyNSTabBarSyncedButtonDelegate: P2): R;
    _updateButtonHighlightWhenPressed_hovered<R = void, P0 = boolean, P1 = boolean>(__updateButtonHighlightWhenPressed: P0, _hovered: P1): R;
    syncedWithOtherButton<R = boolean>(): R;
    setSyncedWithOtherButton<R = void, P0 = boolean>(_v: P0): R;
    buttonInTabSyncGroupDelegate<R = cocoa.NSTabBarSyncedButtonDelegate>(): R;
    setButtonInTabSyncGroupDelegate<R = void, P0 = cocoa.NSTabBarSyncedButtonDelegate>(_v: P0): R;
    forcesActiveWindowState<R = boolean>(): R;
    setForcesActiveWindowState<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabBarNewTabButton<T = any> extends cocoa.classes.NSButton, cocoa.classes.NSDraggingDestinationProtocol, cocoa.classes.NSTabBarSyncedButtonProtocol {
      alloc<R = NSTabBarNewTabButton>(): R;
      new: <R = NSTabBarNewTabButton>() => R;
      width<R = number>(): R;
      installNewTabButtonInView<R = unknown, P0 = unknown>(_installNewTabButtonInView: P0): R;
    }
  }
}

declare const NSTabBarNewTabButton: cocoa.classes.NSTabBarNewTabButton;
