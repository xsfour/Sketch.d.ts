/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuSystemInfoProvider<T = any> extends NSObject, NSDebugMenuItemProviderProtocol {
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuSystemInfoProvider<T = any> extends NSObject, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuSystemInfoProvider>(): R;
      new: <R = NSDebugMenuSystemInfoProvider>() => R;
    }
  }
}

declare const NSDebugMenuSystemInfoProvider: cocoa.classes.NSDebugMenuSystemInfoProvider;
