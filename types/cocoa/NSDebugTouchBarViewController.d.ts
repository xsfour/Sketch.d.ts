/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarViewController<T = any> extends cocoa.NSViewController, cocoa.NSDebugTouchBarUIDelegateProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol {
    logDisplayedItemsToConsole<R = void, P0 = unknown>(_logDisplayedItemsToConsole: P0): R;
    displayedItems<R = cocoa.NSArray>(): R;
    setDisplayedItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugTouchBarViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSDebugTouchBarUIDelegateProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol {
      alloc<R = NSDebugTouchBarViewController>(): R;
      new: <R = NSDebugTouchBarViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarViewController: cocoa.classes.NSDebugTouchBarViewController;
