/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarAuxiliary<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSToolbarAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSToolbarAuxiliary>(): R;
      new: <R = _NSToolbarAuxiliary>() => R;
    }
  }
}
