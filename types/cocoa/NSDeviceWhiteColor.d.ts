/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceWhiteColor<T = any> extends cocoa.NSCalibratedWhiteColor {}
  namespace classes {
    export interface NSDeviceWhiteColor<T = any> extends cocoa.classes.NSCalibratedWhiteColor {
      alloc<R = NSDeviceWhiteColor>(): R;
      new: <R = NSDeviceWhiteColor>() => R;
    }
  }
}

declare const NSDeviceWhiteColor: cocoa.classes.NSDeviceWhiteColor;
