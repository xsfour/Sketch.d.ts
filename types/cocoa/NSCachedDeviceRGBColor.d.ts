/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedDeviceRGBColor<T = any> extends NSDeviceRGBColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedDeviceRGBColor<T = any> extends NSDeviceRGBColor {
      alloc<R = NSCachedDeviceRGBColor>(): R;
      new: <R = NSCachedDeviceRGBColor>() => R;
    }
  }
}

declare const NSCachedDeviceRGBColor: cocoa.classes.NSCachedDeviceRGBColor;
