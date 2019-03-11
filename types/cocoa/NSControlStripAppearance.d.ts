/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSControlStripAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSControlStripAppearance>(): R;
      new: <R = NSControlStripAppearance>() => R;
    }
  }
}

declare const NSControlStripAppearance: cocoa.classes.NSControlStripAppearance;
