/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainViewController<T = any> extends NSViewController, NSDebugResponderChainUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
    logDisplayedItemsToConsole<R = void, P0 = unknown>(_logDisplayedItemsToConsole: P0): R;
    displayedItems<R = NSArray>(): R;
    setDisplayedItems<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugResponderChainViewController<T = any> extends NSViewController, NSDebugResponderChainUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
      alloc<R = NSDebugResponderChainViewController>(): R;
      new: <R = NSDebugResponderChainViewController>() => R;
    }
  }
}

declare const NSDebugResponderChainViewController: cocoa.classes.NSDebugResponderChainViewController;
