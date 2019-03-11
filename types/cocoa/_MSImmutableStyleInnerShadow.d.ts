/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleInnerShadow<T = any> extends cocoa.MSImmutableStyleShadow {}
  namespace classes {
    export interface _MSImmutableStyleInnerShadow<T = any> extends cocoa.classes.MSImmutableStyleShadow {
      alloc<R = _MSImmutableStyleInnerShadow>(): R;
      new: <R = _MSImmutableStyleInnerShadow>() => R;
    }
  }
}
