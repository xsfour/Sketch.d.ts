/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuItemPlugin<T = any> extends cocoa._NSValueBinderPlugin {}
  namespace classes {
    export interface _NSMenuItemPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSMenuItemPlugin>(): R;
      new: <R = _NSMenuItemPlugin>() => R;
    }
  }
}
