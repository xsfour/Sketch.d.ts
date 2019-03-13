/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClStr<T = any> extends NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSClStr<T = any> extends NSString {
      alloc<R = _NSClStr>(): R;
      new: <R = _NSClStr>() => R;
    }
  }
}
