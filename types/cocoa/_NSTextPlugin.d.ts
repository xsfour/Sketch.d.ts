/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextPlugin<T = any> extends cocoa._NSTextFieldPlugin {}
  namespace classes {
    export interface _NSTextPlugin<T = any> extends cocoa.classes._NSTextFieldPlugin {
      alloc<R = _NSTextPlugin>(): R;
      new: <R = _NSTextPlugin>() => R;
    }
  }
}
