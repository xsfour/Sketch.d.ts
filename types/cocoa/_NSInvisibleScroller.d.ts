/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInvisibleScroller<T = any> extends cocoa.NSScroller {}
  namespace classes {
    export interface _NSInvisibleScroller<T = any> extends cocoa.classes.NSScroller {
      alloc<R = _NSInvisibleScroller>(): R;
      new: <R = _NSInvisibleScroller>() => R;
    }
  }
}
