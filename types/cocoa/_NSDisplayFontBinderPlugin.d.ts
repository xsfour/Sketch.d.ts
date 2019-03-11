/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayFontBinderPlugin<T = any> extends cocoa._NSBinderPlugin, cocoa._NSDisplayFontBinderPluginProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDisplayFontBinderPlugin<T = any> extends cocoa.classes._NSBinderPlugin, cocoa.classes._NSDisplayFontBinderPluginProtocol {
      alloc<R = _NSDisplayFontBinderPlugin>(): R;
      new: <R = _NSDisplayFontBinderPlugin>() => R;
    }
  }
}
