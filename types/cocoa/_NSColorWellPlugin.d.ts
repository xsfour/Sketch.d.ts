/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSColorWellPlugin<T = any> extends _NSValueBinderPlugin {}
  namespace classes {
    export interface _NSColorWellPlugin<T = any> extends _NSValueBinderPlugin {
      alloc<R = _NSColorWellPlugin>(): R;
      new: <R = _NSColorWellPlugin>() => R;
    }
  }
}
