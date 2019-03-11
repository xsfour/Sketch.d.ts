/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionBinderPlugin<T = any> extends cocoa._NSBinderPlugin, cocoa._NSActionBinderPluginProtocol {
    _clearCachedTransientStateOfObject<R = void, P0 = unknown>(__clearCachedTransientStateOfObject: P0): R;
    _cacheTransientStateOfObject<R = void, P0 = unknown>(__cacheTransientStateOfObject: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSActionBinderPlugin<T = any> extends cocoa.classes._NSBinderPlugin, cocoa.classes._NSActionBinderPluginProtocol {
      alloc<R = _NSActionBinderPlugin>(): R;
      new: <R = _NSActionBinderPlugin>() => R;
    }
  }
}
