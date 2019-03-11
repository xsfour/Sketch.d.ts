/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSWindowData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface __NSWindowData<T = any> extends cocoa.classes.NSObject {
      alloc<R = __NSWindowData>(): R;
      new: <R = __NSWindowData>() => R;
    }
  }
}
