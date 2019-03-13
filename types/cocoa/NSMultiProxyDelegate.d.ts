/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultiProxyDelegate<T = any> extends NSObject {
    forwardingTargetForSelector<R = unknown, P0 = string>(_forwardingTargetForSelector: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSMultiProxyDelegate<T = any> extends NSObject {
      alloc<R = NSMultiProxyDelegate>(): R;
      new: <R = NSMultiProxyDelegate>() => R;
    }
  }
}

declare const NSMultiProxyDelegate: cocoa.classes.NSMultiProxyDelegate;
