/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet2<T = any> extends cocoa.NSKeyValueFastMutableSet {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    _nonNilSetValueWithSelector<R = unknown, P0 = string>(__nonNilSetValueWithSelector: P0): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableSet2<T = any> extends cocoa.classes.NSKeyValueFastMutableSet {  }
  }
}

declare const NSKeyValueFastMutableSet2: cocoa.classes.NSKeyValueFastMutableSet2;
