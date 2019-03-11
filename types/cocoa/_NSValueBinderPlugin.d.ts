/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSValueBinderPlugin<T = any> extends cocoa._NSBinderPlugin, cocoa._NSValueBinderPluginProtocol {
    _valueClass<R = unknown, P0 = unknown>(__valueClass: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSValueBinderPlugin<T = any> extends cocoa.classes._NSBinderPlugin, cocoa.classes._NSValueBinderPluginProtocol {
      alloc<R = _NSValueBinderPlugin>(): R;
      new: <R = _NSValueBinderPlugin>() => R;
    }
  }
}
