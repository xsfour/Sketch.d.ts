/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPathPlugin<T = any> extends _NSValueBinderPlugin {}
  namespace classes {
    export interface _NSPathPlugin<T = any> extends _NSValueBinderPlugin {
      alloc<R = _NSPathPlugin>(): R;
      new: <R = _NSPathPlugin>() => R;
    }
  }
}
