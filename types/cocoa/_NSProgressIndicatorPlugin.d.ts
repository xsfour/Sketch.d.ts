/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressIndicatorPlugin<T = any> extends _NSDoubleValueBinderPlugin {}
  namespace classes {
    export interface _NSProgressIndicatorPlugin<T = any> extends _NSDoubleValueBinderPlugin {
      alloc<R = _NSProgressIndicatorPlugin>(): R;
      new: <R = _NSProgressIndicatorPlugin>() => R;
    }
  }
}
