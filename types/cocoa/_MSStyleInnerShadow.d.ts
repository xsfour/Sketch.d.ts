/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleInnerShadow<T = any> extends cocoa.MSStyleShadow {}
  namespace classes {
    export interface _MSStyleInnerShadow<T = any> extends cocoa.classes.MSStyleShadow {
      alloc<R = _MSStyleInnerShadow>(): R;
      new: <R = _MSStyleInnerShadow>() => R;
    }
  }
}
