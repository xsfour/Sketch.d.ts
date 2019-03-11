/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIdleTimer<T = any> extends cocoa.NSObject {
    resume<R = void>(): R;
    suspend<R = void>(): R;
    idle<R = void>(): R;
    dealloc<R = void>(): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    setHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSIdleTimer<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSIdleTimer>(): R;
      new: <R = _NSIdleTimer>() => R;
      removeIdleTimer<R = void, P0 = unknown>(_removeIdleTimer: P0): R;
      addIdleTimer<R = void, P0 = unknown>(_addIdleTimer: P0): R;
    }
  }
}
