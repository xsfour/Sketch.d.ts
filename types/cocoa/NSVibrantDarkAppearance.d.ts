/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantDarkAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSVibrantDarkAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSVibrantDarkAppearance>(): R;
      new: <R = NSVibrantDarkAppearance>() => R;
    }
  }
}

declare const NSVibrantDarkAppearance: cocoa.classes.NSVibrantDarkAppearance;
