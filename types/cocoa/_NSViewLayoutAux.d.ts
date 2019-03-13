/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayoutAux<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSViewLayoutAux<T = any> extends NSObject {
      alloc<R = _NSViewLayoutAux>(): R;
      new: <R = _NSViewLayoutAux>() => R;
    }
  }
}
