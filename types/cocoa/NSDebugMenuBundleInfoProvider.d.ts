/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuBundleInfoProvider<T = any> extends NSObject, NSDebugMenuItemProviderProtocol {
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuBundleInfoProvider<T = any> extends NSObject, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuBundleInfoProvider>(): R;
      new: <R = NSDebugMenuBundleInfoProvider>() => R;
    }
  }
}

declare const NSDebugMenuBundleInfoProvider: cocoa.classes.NSDebugMenuBundleInfoProvider;
