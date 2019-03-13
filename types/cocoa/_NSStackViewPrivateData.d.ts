/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStackViewPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSStackViewPrivateData<T = any> extends NSObject {
      alloc<R = _NSStackViewPrivateData>(): R;
      new: <R = _NSStackViewPrivateData>() => R;
    }
  }
}
