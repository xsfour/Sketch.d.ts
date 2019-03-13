/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderTextFieldPlugin<T = any> extends _NSTextFieldPlugin {}
  namespace classes {
    export interface _NSPlaceholderTextFieldPlugin<T = any> extends _NSTextFieldPlugin {
      alloc<R = _NSPlaceholderTextFieldPlugin>(): R;
      new: <R = _NSPlaceholderTextFieldPlugin>() => R;
    }
  }
}
