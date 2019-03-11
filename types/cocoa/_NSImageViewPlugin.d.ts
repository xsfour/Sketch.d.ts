/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewPlugin<T = any> extends cocoa._NSValueBinderPlugin {}
  namespace classes {
    export interface _NSImageViewPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSImageViewPlugin>(): R;
      new: <R = _NSImageViewPlugin>() => R;
    }
  }
}
