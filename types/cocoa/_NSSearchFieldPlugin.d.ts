/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSearchFieldPlugin<T = any> extends _NSTextFieldPlugin {}
  namespace classes {
    export interface _NSSearchFieldPlugin<T = any> extends _NSTextFieldPlugin {
      alloc<R = _NSSearchFieldPlugin>(): R;
      new: <R = _NSSearchFieldPlugin>() => R;
    }
  }
}
