/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet1<T = any> extends NSKeyValueFastMutableSet {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableSet1<T = any> extends NSKeyValueFastMutableSet {  }
  }
}

declare const NSKeyValueFastMutableSet1: cocoa.classes.NSKeyValueFastMutableSet1;
