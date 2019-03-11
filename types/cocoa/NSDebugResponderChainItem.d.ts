/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainItem<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    responderDescription<R = cocoa.NSString>(): R;
    setResponderDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    className<R = cocoa.NSString>(): R;
    setClassName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    address<R = void>(): R;
    setAddress<R = void, P0 = void>(_v: P0): R;
    prettyDescription<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSDebugResponderChainItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDebugResponderChainItem>(): R;
      new: <R = NSDebugResponderChainItem>() => R;
    }
  }
}

declare const NSDebugResponderChainItem: cocoa.classes.NSDebugResponderChainItem;
