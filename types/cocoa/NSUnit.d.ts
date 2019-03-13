/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnit<T = any> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithSymbol<R = unknown, P0 = unknown>(_initWithSymbol: P0): R;
    symbol<R = NSString>(): R;
  }
  namespace classes {
    export interface NSUnit<T = any> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSUnit>(): R;
      new: <R = NSUnit>() => R;
      new<R = unknown>(): R;
    }
  }
}

declare const NSUnit: cocoa.classes.NSUnit;
