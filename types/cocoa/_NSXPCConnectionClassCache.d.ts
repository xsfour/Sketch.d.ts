/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionClassCache<T = any> extends cocoa.NSObject {
    clear<R = void>(): R;
    addClass<R = void, P0 = unknown>(_addClass: P0): R;
    containsClass<R = boolean, P0 = unknown>(_containsClass: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSXPCConnectionClassCache<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXPCConnectionClassCache>(): R;
      new: <R = _NSXPCConnectionClassCache>() => R;
    }
  }
}
