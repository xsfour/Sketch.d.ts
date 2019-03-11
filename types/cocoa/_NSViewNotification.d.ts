/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewNotification<T = any> extends cocoa.NSNotification {
    dealloc<R = void>(): R;
    userInfo<R = unknown>(): R;
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    object<R = unknown>(): R;
    setObject<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface _NSViewNotification<T = any> extends cocoa.classes.NSNotification {
      alloc<R = _NSViewNotification>(): R;
      new: <R = _NSViewNotification>() => R;
    }
  }
}
