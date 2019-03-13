/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowSpringLoadingController<T = any> extends NSObject {}
  namespace classes {
    export interface _NSWindowSpringLoadingController<T = any> extends NSObject {
      alloc<R = _NSWindowSpringLoadingController>(): R;
      new: <R = _NSWindowSpringLoadingController>() => R;
      _sharedSpringLoadingController<R = unknown>(): R;
    }
  }
}
