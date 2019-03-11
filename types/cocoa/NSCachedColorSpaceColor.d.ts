/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedColorSpaceColor<T = any> extends cocoa.NSColorSpaceColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedColorSpaceColor<T = any> extends cocoa.classes.NSColorSpaceColor {
      alloc<R = NSCachedColorSpaceColor>(): R;
      new: <R = NSCachedColorSpaceColor>() => R;
    }
  }
}

declare const NSCachedColorSpaceColor: cocoa.classes.NSCachedColorSpaceColor;
