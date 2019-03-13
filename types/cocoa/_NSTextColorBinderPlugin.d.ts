/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextColorBinderPlugin<T = any> extends _NSBinderPlugin, _NSTextColorBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTextColorBinderPlugin<T = any> extends _NSBinderPlugin, _NSTextColorBinderPluginProtocol {
      alloc<R = _NSTextColorBinderPlugin>(): R;
      new: <R = _NSTextColorBinderPlugin>() => R;
    }
  }
}
