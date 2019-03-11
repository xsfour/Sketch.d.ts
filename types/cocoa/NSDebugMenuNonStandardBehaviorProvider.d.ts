/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuNonStandardBehaviorProvider<T = any> extends cocoa.NSObject, cocoa.NSMenuDelegateProtocol, cocoa.NSDebugMenuItemProviderProtocol {
    copyName<R = void, P0 = unknown>(_copyName: P0): R;
    copyArgument<R = void, P0 = unknown>(_copyArgument: P0): R;
    entriesDidChange<R = void, P0 = unknown>(_entriesDidChange: P0): R;
    dealloc<R = void>(): R;
    cachedEntries<R = cocoa.NSArray>(): R;
    setCachedEntries<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    menuItem<R = cocoa.NSMenuItem>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuNonStandardBehaviorProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuNonStandardBehaviorProvider>(): R;
      new: <R = NSDebugMenuNonStandardBehaviorProvider>() => R;
    }
  }
}

declare const NSDebugMenuNonStandardBehaviorProvider: cocoa.classes.NSDebugMenuNonStandardBehaviorProvider;
