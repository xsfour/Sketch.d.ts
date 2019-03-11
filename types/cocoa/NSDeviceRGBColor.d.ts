/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceRGBColor<T = any> extends cocoa.NSCalibratedRGBColor {}
  namespace classes {
    export interface NSDeviceRGBColor<T = any> extends cocoa.classes.NSCalibratedRGBColor {
      alloc<R = NSDeviceRGBColor>(): R;
      new: <R = NSDeviceRGBColor>() => R;
    }
  }
}

declare const NSDeviceRGBColor: cocoa.classes.NSDeviceRGBColor;
