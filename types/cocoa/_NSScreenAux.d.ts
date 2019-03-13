/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScreenAux<T = any> extends NSObject {}
  namespace classes {
    export interface _NSScreenAux<T = any> extends NSObject {
      alloc<R = _NSScreenAux>(): R;
      new: <R = _NSScreenAux>() => R;
    }
  }
}
