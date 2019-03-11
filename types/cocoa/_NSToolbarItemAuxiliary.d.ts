/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSToolbarItemAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSToolbarItemAuxiliary>(): R;
      new: <R = _NSToolbarItemAuxiliary>() => R;
    }
  }
}
