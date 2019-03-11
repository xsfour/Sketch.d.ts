/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLQueryItem<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _value: P1): R;
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    value<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSURLQueryItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSURLQueryItem>(): R;
      new: <R = NSURLQueryItem>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      queryItemWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_queryItemWithName: P0, _value: P1): R;
    }
  }
}

declare const NSURLQueryItem: cocoa.classes.NSURLQueryItem;
