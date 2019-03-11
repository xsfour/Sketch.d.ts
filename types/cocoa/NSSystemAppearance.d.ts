/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSSystemAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSSystemAppearance>(): R;
      new: <R = NSSystemAppearance>() => R;
    }
  }
}

declare const NSSystemAppearance: cocoa.classes.NSSystemAppearance;
