/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSearchFieldPlugin<T = any> extends cocoa._NSTextFieldPlugin {}
  namespace classes {
    export interface _NSSearchFieldPlugin<T = any> extends cocoa.classes._NSTextFieldPlugin {
      alloc<R = _NSSearchFieldPlugin>(): R;
      new: <R = _NSSearchFieldPlugin>() => R;
    }
  }
}
