/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet1<T = any> extends cocoa.NSKeyValueFastMutableSet {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableSet1<T = any> extends cocoa.classes.NSKeyValueFastMutableSet {  }
  }
}

declare const NSKeyValueFastMutableSet1: cocoa.classes.NSKeyValueFastMutableSet1;
