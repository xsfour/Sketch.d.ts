/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutGuideAux<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSLayoutGuideAux<T = any> extends NSObject {
      alloc<R = _NSLayoutGuideAux>(): R;
      new: <R = _NSLayoutGuideAux>() => R;
    }
  }
}
