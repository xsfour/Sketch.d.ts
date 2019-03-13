/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSWindowData<T = any> extends NSObject {}
  namespace classes {
    export interface __NSWindowData<T = any> extends NSObject {
      alloc<R = __NSWindowData>(): R;
      new: <R = __NSWindowData>() => R;
    }
  }
}
