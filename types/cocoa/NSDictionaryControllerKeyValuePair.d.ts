/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryControllerKeyValuePair<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    _init<R = unknown>(): R;
    explicitlyIncluded<R = boolean>(): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
    key<R = cocoa.NSString>(): R;
    setKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
    localizedKey<R = cocoa.NSString>(): R;
    setLocalizedKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSDictionaryControllerKeyValuePair<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDictionaryControllerKeyValuePair>(): R;
      new: <R = NSDictionaryControllerKeyValuePair>() => R;
    }
  }
}

declare const NSDictionaryControllerKeyValuePair: cocoa.classes.NSDictionaryControllerKeyValuePair;
