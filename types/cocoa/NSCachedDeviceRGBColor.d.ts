/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedDeviceRGBColor<T = any> extends cocoa.NSDeviceRGBColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedDeviceRGBColor<T = any> extends cocoa.classes.NSDeviceRGBColor {
      alloc<R = NSCachedDeviceRGBColor>(): R;
      new: <R = NSCachedDeviceRGBColor>() => R;
    }
  }
}

declare const NSCachedDeviceRGBColor: cocoa.classes.NSCachedDeviceRGBColor;
