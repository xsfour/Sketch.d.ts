/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMatrixPrivateIvars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSMatrixPrivateIvars<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSMatrixPrivateIvars>(): R;
      new: <R = _NSMatrixPrivateIvars>() => R;
    }
  }
}
