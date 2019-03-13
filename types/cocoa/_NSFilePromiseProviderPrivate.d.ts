/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilePromiseProviderPrivate<T = any> extends NSObject {
    dealloc<R = void>(): R;
    provideItemGroup<R = OS_dispatch_group>(): R;
    setProvideItemGroup<R = void, P0 = OS_dispatch_group>(_v: P0): R;
    provideItemErrorOrNil<R = NSError>(): R;
    setProvideItemErrorOrNil<R = void, P0 = NSError>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFilePromiseProviderPrivate<T = any> extends NSObject {
      alloc<R = _NSFilePromiseProviderPrivate>(): R;
      new: <R = _NSFilePromiseProviderPrivate>() => R;
    }
  }
}
