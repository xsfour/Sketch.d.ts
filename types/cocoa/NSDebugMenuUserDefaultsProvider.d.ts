/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuUserDefaultsProvider<T = any> extends cocoa.NSObject, cocoa.NSMenuDelegateProtocol, cocoa.NSDebugMenuItemProviderProtocol {
    updateMenu_withEvent_withFlags<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_updateMenu: P0, _withEvent: P1, _withFlags: P2): R;
    _defaultControllersDidChange<R = void, P0 = unknown>(__defaultControllersDidChange: P0): R;
    defaultsMenuCreateIfNecessary<R = unknown>(): R;
    dealloc<R = void>(): R;
    menuItem<R = cocoa.NSMenuItem>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuUserDefaultsProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuUserDefaultsProvider>(): R;
      new: <R = NSDebugMenuUserDefaultsProvider>() => R;
      registerUserDefaultController<R = void, P0 = unknown>(_registerUserDefaultController: P0): R;
      _userDefaultControllers<R = unknown>(): R;
    }
  }
}

declare const NSDebugMenuUserDefaultsProvider: cocoa.classes.NSDebugMenuUserDefaultsProvider;
