/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMatrixPrivateIvars<T = any> extends NSObject {}
  namespace classes {
    export interface _NSMatrixPrivateIvars<T = any> extends NSObject {
      alloc<R = _NSMatrixPrivateIvars>(): R;
      new: <R = _NSMatrixPrivateIvars>() => R;
    }
  }
}
