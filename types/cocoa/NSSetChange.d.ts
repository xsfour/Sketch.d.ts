/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetChange<T = any> extends NSObject {
    initWithType_object<R = unknown, P0 = number, P1 = unknown>(_initWithType: P0, _object: P1): R;
    value<R = unknown>(): R;
    changeType<R = number>(): R;
  }
  namespace classes {
    export interface NSSetChange<T = any> extends NSObject {
      alloc<R = NSSetChange>(): R;
      new: <R = NSSetChange>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSSetChange: cocoa.classes.NSSetChange;
