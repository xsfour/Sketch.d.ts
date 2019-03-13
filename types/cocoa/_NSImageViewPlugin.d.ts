/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewPlugin<T = any> extends _NSValueBinderPlugin {}
  namespace classes {
    export interface _NSImageViewPlugin<T = any> extends _NSValueBinderPlugin {
      alloc<R = _NSImageViewPlugin>(): R;
      new: <R = _NSImageViewPlugin>() => R;
    }
  }
}
