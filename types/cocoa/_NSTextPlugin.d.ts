/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextPlugin<T = any> extends _NSTextFieldPlugin {}
  namespace classes {
    export interface _NSTextPlugin<T = any> extends _NSTextFieldPlugin {
      alloc<R = _NSTextPlugin>(): R;
      new: <R = _NSTextPlugin>() => R;
    }
  }
}
