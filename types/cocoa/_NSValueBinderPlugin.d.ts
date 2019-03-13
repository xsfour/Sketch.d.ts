/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSValueBinderPlugin<T = any> extends _NSBinderPlugin, _NSValueBinderPluginProtocol {
    _valueClass<R = unknown, P0 = unknown>(__valueClass: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSValueBinderPlugin<T = any> extends _NSBinderPlugin, _NSValueBinderPluginProtocol {
      alloc<R = _NSValueBinderPlugin>(): R;
      new: <R = _NSValueBinderPlugin>() => R;
    }
  }
}
