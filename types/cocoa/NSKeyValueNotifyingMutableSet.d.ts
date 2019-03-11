/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNotifyingMutableSet<T = any> extends cocoa.NSKeyValueMutableSet {
    unionSet<R = void, P0 = unknown>(_unionSet: P0): R;
    setSet<R = void, P0 = unknown>(_setSet: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    removeAllObjects<R = void>(): R;
    minusSet<R = void, P0 = unknown>(_minusSet: P0): R;
    intersectSet<R = void, P0 = unknown>(_intersectSet: P0): R;
    addObjectsFromArray<R = void, P0 = unknown>(_addObjectsFromArray: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace classes {
    export interface NSKeyValueNotifyingMutableSet<T = any> extends cocoa.classes.NSKeyValueMutableSet {  }
  }
}

declare const NSKeyValueNotifyingMutableSet: cocoa.classes.NSKeyValueNotifyingMutableSet;
