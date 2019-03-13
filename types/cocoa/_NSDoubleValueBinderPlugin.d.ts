/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDoubleValueBinderPlugin<T = any> extends _NSValueBinderPlugin {}
  namespace classes {
    export interface _NSDoubleValueBinderPlugin<T = any> extends _NSValueBinderPlugin {
      alloc<R = _NSDoubleValueBinderPlugin>(): R;
      new: <R = _NSDoubleValueBinderPlugin>() => R;
    }
  }
}
