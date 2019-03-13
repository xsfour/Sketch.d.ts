/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarViewController<T = any> extends NSViewController, NSDebugTouchBarUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
    logDisplayedItemsToConsole<R = void, P0 = unknown>(_logDisplayedItemsToConsole: P0): R;
    displayedItems<R = NSArray>(): R;
    setDisplayedItems<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugTouchBarViewController<T = any> extends NSViewController, NSDebugTouchBarUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
      alloc<R = NSDebugTouchBarViewController>(): R;
      new: <R = NSDebugTouchBarViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarViewController: cocoa.classes.NSDebugTouchBarViewController;
