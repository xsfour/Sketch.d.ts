/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMediumLightAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSMediumLightAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSMediumLightAppearance>(): R;
      new: <R = NSMediumLightAppearance>() => R;
    }
  }
}

declare const NSMediumLightAppearance: cocoa.classes.NSMediumLightAppearance;
