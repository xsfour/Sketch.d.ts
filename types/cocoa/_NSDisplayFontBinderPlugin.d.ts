/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayFontBinderPlugin<T = any> extends _NSBinderPlugin, _NSDisplayFontBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDisplayFontBinderPlugin<T = any> extends _NSBinderPlugin, _NSDisplayFontBinderPluginProtocol {
      alloc<R = _NSDisplayFontBinderPlugin>(): R;
      new: <R = _NSDisplayFontBinderPlugin>() => R;
    }
  }
}
