/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadData<T = any> extends NSObject {}
  namespace classes {
    export interface _NSThreadData<T = any> extends NSObject {
      alloc<R = _NSThreadData>(): R;
      new: <R = _NSThreadData>() => R;
    }
  }
}
