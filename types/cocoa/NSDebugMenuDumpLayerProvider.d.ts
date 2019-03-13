/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuDumpLayerProvider<T = any> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
    _dumpLayerForFunctionRow<R = void, P0 = unknown>(__dumpLayerForFunctionRow: P0): R;
    _dumpLayerForView<R = void, P0 = unknown>(__dumpLayerForView: P0): R;
    _dumpLayerForWindow<R = void, P0 = unknown>(__dumpLayerForWindow: P0): R;
    windowsMenuCreateIfNecessary<R = unknown>(): R;
    dealloc<R = void>(): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuDumpLayerProvider<T = any> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuDumpLayerProvider>(): R;
      new: <R = NSDebugMenuDumpLayerProvider>() => R;
    }
  }
}

declare const NSDebugMenuDumpLayerProvider: cocoa.classes.NSDebugMenuDumpLayerProvider;
