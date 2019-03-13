/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEditableBinderPlugin<T = any> extends _NSBinderPlugin {}
  namespace classes {
    export interface _NSEditableBinderPlugin<T = any> extends _NSBinderPlugin {
      alloc<R = _NSEditableBinderPlugin>(): R;
      new: <R = _NSEditableBinderPlugin>() => R;
    }
  }
}
