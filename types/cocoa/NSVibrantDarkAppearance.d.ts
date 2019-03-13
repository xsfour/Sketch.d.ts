/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantDarkAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSVibrantDarkAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSVibrantDarkAppearance>(): R;
      new: <R = NSVibrantDarkAppearance>() => R;
    }
  }
}

declare const NSVibrantDarkAppearance: cocoa.classes.NSVibrantDarkAppearance;
