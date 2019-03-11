/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreenLayout<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    description<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithScreen<R = unknown, P0 = unknown>(_initWithScreen: P0): R;
    hash<R = number>(): R;
    size<R = cocoa.CGSize>(): R;
    UUIDString<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSScreenLayout<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSScreenLayout>(): R;
      new: <R = NSScreenLayout>() => R;
      layoutWithScreen<R = unknown, P0 = unknown>(_layoutWithScreen: P0): R;
    }
  }
}

declare const NSScreenLayout: cocoa.classes.NSScreenLayout;
