/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClStr<T = any> extends cocoa.NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSClStr<T = any> extends cocoa.classes.NSString {
      alloc<R = _NSClStr>(): R;
      new: <R = _NSClStr>() => R;
    }
  }
}
