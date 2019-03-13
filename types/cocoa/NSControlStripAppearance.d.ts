/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSControlStripAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSControlStripAppearance>(): R;
      new: <R = NSControlStripAppearance>() => R;
    }
  }
}

declare const NSControlStripAppearance: cocoa.classes.NSControlStripAppearance;
