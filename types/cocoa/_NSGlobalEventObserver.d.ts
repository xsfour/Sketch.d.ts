/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGlobalEventObserver<T = any> extends _NSEventObserver {}
  namespace classes {
    export interface _NSGlobalEventObserver<T = any> extends _NSEventObserver {
      alloc<R = _NSGlobalEventObserver>(): R;
      new: <R = _NSGlobalEventObserver>() => R;
    }
  }
}
