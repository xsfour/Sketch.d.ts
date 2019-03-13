/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantLightAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSVibrantLightAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSVibrantLightAppearance>(): R;
      new: <R = NSVibrantLightAppearance>() => R;
    }
  }
}

declare const NSVibrantLightAppearance: cocoa.classes.NSVibrantLightAppearance;
