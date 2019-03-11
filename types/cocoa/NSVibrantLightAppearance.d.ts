/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantLightAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSVibrantLightAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSVibrantLightAppearance>(): R;
      new: <R = NSVibrantLightAppearance>() => R;
    }
  }
}

declare const NSVibrantLightAppearance: cocoa.classes.NSVibrantLightAppearance;
