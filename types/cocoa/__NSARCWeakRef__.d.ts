/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSARCWeakRef__<T = any> extends NSObject {
    storeWeak<R = void, P0 = unknown>(_storeWeak: P0): R;
    loadWeakRetained<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface __NSARCWeakRef__<T = any> extends NSObject {
      alloc<R = __NSARCWeakRef__>(): R;
      new: <R = __NSARCWeakRef__>() => R;
    }
  }
}
