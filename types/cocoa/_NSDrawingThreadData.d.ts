/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDrawingThreadData<T = any> extends NSObject {}
  namespace classes {
    export interface _NSDrawingThreadData<T = any> extends NSObject {
      alloc<R = _NSDrawingThreadData>(): R;
      new: <R = _NSDrawingThreadData>() => R;
    }
  }
}
