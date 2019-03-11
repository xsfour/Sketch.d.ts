/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextColorBinderPlugin<T = any> extends cocoa._NSBinderPlugin, cocoa._NSTextColorBinderPluginProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTextColorBinderPlugin<T = any> extends cocoa.classes._NSBinderPlugin, cocoa.classes._NSTextColorBinderPluginProtocol {
      alloc<R = _NSTextColorBinderPlugin>(): R;
      new: <R = _NSTextColorBinderPlugin>() => R;
    }
  }
}
