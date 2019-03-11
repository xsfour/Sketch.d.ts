/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserAuxiliary<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSBrowserAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSBrowserAuxiliary>(): R;
      new: <R = _NSBrowserAuxiliary>() => R;
    }
  }
}
