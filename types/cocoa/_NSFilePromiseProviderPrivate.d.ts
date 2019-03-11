/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilePromiseProviderPrivate<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    provideItemGroup<R = cocoa.OS_dispatch_group>(): R;
    setProvideItemGroup<R = void, P0 = cocoa.OS_dispatch_group>(_v: P0): R;
    provideItemErrorOrNil<R = cocoa.NSError>(): R;
    setProvideItemErrorOrNil<R = void, P0 = cocoa.NSError>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFilePromiseProviderPrivate<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFilePromiseProviderPrivate>(): R;
      new: <R = _NSFilePromiseProviderPrivate>() => R;
    }
  }
}
