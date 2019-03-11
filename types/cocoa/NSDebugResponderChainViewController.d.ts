/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainViewController<T = any> extends cocoa.NSViewController, cocoa.NSDebugResponderChainUIDelegateProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol {
    logDisplayedItemsToConsole<R = void, P0 = unknown>(_logDisplayedItemsToConsole: P0): R;
    displayedItems<R = cocoa.NSArray>(): R;
    setDisplayedItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugResponderChainViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSDebugResponderChainUIDelegateProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol {
      alloc<R = NSDebugResponderChainViewController>(): R;
      new: <R = NSDebugResponderChainViewController>() => R;
    }
  }
}

declare const NSDebugResponderChainViewController: cocoa.classes.NSDebugResponderChainViewController;
