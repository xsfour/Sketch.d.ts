/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuImpl<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSMenuImpl<T = any> extends NSObject {
      alloc<R = _NSMenuImpl>(): R;
      new: <R = _NSMenuImpl>() => R;
    }
  }
}
