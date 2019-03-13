/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceRGBColor<T = any> extends NSCalibratedRGBColor {}
  namespace classes {
    export interface NSDeviceRGBColor<T = any> extends NSCalibratedRGBColor {
      alloc<R = NSDeviceRGBColor>(): R;
      new: <R = NSDeviceRGBColor>() => R;
    }
  }
}

declare const NSDeviceRGBColor: cocoa.classes.NSDeviceRGBColor;
