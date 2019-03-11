/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuBundleInfoProvider<T = any> extends cocoa.NSObject, cocoa.NSDebugMenuItemProviderProtocol {
    menuItem<R = cocoa.NSMenuItem>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuBundleInfoProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuBundleInfoProvider>(): R;
      new: <R = NSDebugMenuBundleInfoProvider>() => R;
    }
  }
}

declare const NSDebugMenuBundleInfoProvider: cocoa.classes.NSDebugMenuBundleInfoProvider;
