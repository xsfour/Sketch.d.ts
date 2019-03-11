/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderProxy<T = any> extends cocoa.NSFileReactorProxy {
    wantsWriteNotifications<R = boolean>(): R;
    setWantsWriteNotifications<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSFileProviderProxy<T = any> extends cocoa.classes.NSFileReactorProxy {
      alloc<R = NSFileProviderProxy>(): R;
      new: <R = NSFileProviderProxy>() => R;
    }
  }
}

declare const NSFileProviderProxy: cocoa.classes.NSFileProviderProxy;
