/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCheckBoxPlugin<T = any> extends cocoa._NSValueBinderPlugin {}
  namespace classes {
    export interface _NSCheckBoxPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSCheckBoxPlugin>(): R;
      new: <R = _NSCheckBoxPlugin>() => R;
    }
  }
}
