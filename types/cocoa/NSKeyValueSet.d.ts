/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSet<T = any> extends cocoa.NSSet, cocoa.NSKeyValueProxyCachingProtocol {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSKeyValueSet<T = any> extends cocoa.classes.NSSet, cocoa.classes.NSKeyValueProxyCachingProtocol {  }
  }
}

declare const NSKeyValueSet: cocoa.classes.NSKeyValueSet;
