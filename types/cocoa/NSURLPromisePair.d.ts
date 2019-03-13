/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLPromisePair<T = any> extends NSObject, NSSecureCodingProtocol {
    dealloc<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    physicalURL<R = NSURL>(): R;
    logicalURL<R = NSURL>(): R;
    URL<R = NSURL>(): R;
  }
  namespace classes {
    export interface NSURLPromisePair<T = any> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSURLPromisePair>(): R;
      new: <R = NSURLPromisePair>() => R;
      pairWithLogicalURL_physicalURL<R = unknown, P0 = unknown, P1 = unknown>(_pairWithLogicalURL: P0, _physicalURL: P1): R;
      pairWithURL<R = unknown, P0 = unknown>(_pairWithURL: P0): R;
    }
  }
}

declare const NSURLPromisePair: cocoa.classes.NSURLPromisePair;
