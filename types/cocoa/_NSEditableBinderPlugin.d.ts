/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEditableBinderPlugin<T = any> extends cocoa._NSBinderPlugin {}
  namespace classes {
    export interface _NSEditableBinderPlugin<T = any> extends cocoa.classes._NSBinderPlugin {
      alloc<R = _NSEditableBinderPlugin>(): R;
      new: <R = _NSEditableBinderPlugin>() => R;
    }
  }
}
