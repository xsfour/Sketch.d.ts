/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageAuxiliary<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSImageAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSImageAuxiliary>(): R;
      new: <R = _NSImageAuxiliary>() => R;
    }
  }
}
