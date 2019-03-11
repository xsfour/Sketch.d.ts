/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUUID<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _cfUUIDString<R = cocoa.__CFString>(): R;
    getUUIDBytes<R = void, P0 = number>(_getUUIDBytes: P0): R;
    hash<R = number>(): R;
    initWithUUIDBytes<R = unknown, P0 = number>(_initWithUUIDBytes: P0): R;
    initWithUUIDString<R = unknown, P0 = unknown>(_initWithUUIDString: P0): R;
    UUIDString<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSUUID<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUUID>(): R;
      new: <R = NSUUID>() => R;
      UUID<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSUUID: cocoa.classes.NSUUID;
