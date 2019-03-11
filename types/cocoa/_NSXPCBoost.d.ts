/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCBoost<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _initWithEvent<R = unknown, P0 = unknown>(__initWithEvent: P0): R;
  }
  namespace classes {
    export interface _NSXPCBoost<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXPCBoost>(): R;
      new: <R = _NSXPCBoost>() => R;
    }
  }
}
