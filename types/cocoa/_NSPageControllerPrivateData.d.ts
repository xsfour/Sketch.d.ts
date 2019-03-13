/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPageControllerPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSPageControllerPrivateData<T = any> extends NSObject {
      alloc<R = _NSPageControllerPrivateData>(): R;
      new: <R = _NSPageControllerPrivateData>() => R;
    }
  }
}
