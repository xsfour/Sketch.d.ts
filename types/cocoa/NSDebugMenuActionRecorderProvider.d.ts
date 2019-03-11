/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuActionRecorderProvider<T = any> extends cocoa.NSObject, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol, cocoa.NSDebugMenuItemProviderProtocol {
    _createActionRecordWindow<R = unknown>(): R;
    _toggleFilter<R = void, P0 = unknown>(__toggleFilter: P0): R;
    _toggleActionRecorder<R = void, P0 = unknown>(__toggleActionRecorder: P0): R;
    dealloc<R = void>(): R;
    menuItem<R = cocoa.NSMenuItem>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuActionRecorderProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuActionRecorderProvider>(): R;
      new: <R = NSDebugMenuActionRecorderProvider>() => R;
    }
  }
}

declare const NSDebugMenuActionRecorderProvider: cocoa.classes.NSDebugMenuActionRecorderProvider;
