/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEventObserver<T = any> extends cocoa.NSObject {
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initMatchingEvents_handler<R = unknown, P0 = number, P1 = unknown>(_initMatchingEvents: P0, _handler: P1): R;
  }
  namespace classes {
    export interface _NSEventObserver<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSEventObserver>(): R;
      new: <R = _NSEventObserver>() => R;
    }
  }
}
