/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSet<T = any> extends NSSet, NSKeyValueProxyCachingProtocol {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueSet<T = any> extends NSSet, NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueSet: cocoa.classes.NSKeyValueSet;
