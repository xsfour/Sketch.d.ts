/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedRGBColor<T = any> extends cocoa.NSCalibratedRGBColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedRGBColor<T = any> extends cocoa.classes.NSCalibratedRGBColor {
      alloc<R = NSCachedRGBColor>(): R;
      new: <R = NSCachedRGBColor>() => R;
    }
  }
}

declare const NSCachedRGBColor: cocoa.classes.NSCachedRGBColor;
