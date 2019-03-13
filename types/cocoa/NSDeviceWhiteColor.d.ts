/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceWhiteColor<T = any> extends NSCalibratedWhiteColor {}
  namespace classes {
    export interface NSDeviceWhiteColor<T = any> extends NSCalibratedWhiteColor {
      alloc<R = NSDeviceWhiteColor>(): R;
      new: <R = NSDeviceWhiteColor>() => R;
    }
  }
}

declare const NSDeviceWhiteColor: cocoa.classes.NSDeviceWhiteColor;
