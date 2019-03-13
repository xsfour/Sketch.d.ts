/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedDeviceWhiteColor<T = any> extends NSDeviceWhiteColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedDeviceWhiteColor<T = any> extends NSDeviceWhiteColor {
      alloc<R = NSCachedDeviceWhiteColor>(): R;
      new: <R = NSCachedDeviceWhiteColor>() => R;
    }
  }
}

declare const NSCachedDeviceWhiteColor: cocoa.classes.NSCachedDeviceWhiteColor;
