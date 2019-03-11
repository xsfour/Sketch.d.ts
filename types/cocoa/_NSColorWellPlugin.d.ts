/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSColorWellPlugin<T = any> extends cocoa._NSValueBinderPlugin {}
  namespace classes {
    export interface _NSColorWellPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSColorWellPlugin>(): R;
      new: <R = _NSColorWellPlugin>() => R;
    }
  }
}
