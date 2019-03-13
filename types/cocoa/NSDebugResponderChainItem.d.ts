/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainItem<T = any> extends NSObject {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    responderDescription<R = NSString>(): R;
    setResponderDescription<R = void, P0 = NSString>(_v: P0): R;
    className<R = NSString>(): R;
    setClassName<R = void, P0 = NSString>(_v: P0): R;
    address<R = void>(): R;
    setAddress<R = void, P0 = void>(_v: P0): R;
    prettyDescription<R = NSString>(): R;
  }
  namespace classes {
    export interface NSDebugResponderChainItem<T = any> extends NSObject {
      alloc<R = NSDebugResponderChainItem>(): R;
      new: <R = NSDebugResponderChainItem>() => R;
    }
  }
}

declare const NSDebugResponderChainItem: cocoa.classes.NSDebugResponderChainItem;
