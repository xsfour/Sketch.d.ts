/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserAuxiliary<T = any> extends NSObject {}
  namespace classes {
    export interface _NSBrowserAuxiliary<T = any> extends NSObject {
      alloc<R = _NSBrowserAuxiliary>(): R;
      new: <R = _NSBrowserAuxiliary>() => R;
    }
  }
}
