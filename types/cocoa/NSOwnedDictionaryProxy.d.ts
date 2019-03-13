/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwnedDictionaryProxy<T = any> extends NSDictionary {
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    keyEnumerator<R = unknown>(): R;
    count<R = number>(): R;
    superRelease<R = void>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    initWithOwner<R = unknown, P0 = unknown>(_initWithOwner: P0): R;
  }
  namespace classes {
    export interface NSOwnedDictionaryProxy<T = any> extends NSDictionary {  }
  }
}

declare const NSOwnedDictionaryProxy: cocoa.classes.NSOwnedDictionaryProxy;
