/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadPerformInfo<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSThreadPerformInfo<T = any> extends NSObject {
      alloc<R = _NSThreadPerformInfo>(): R;
      new: <R = _NSThreadPerformInfo>() => R;
    }
  }
}
