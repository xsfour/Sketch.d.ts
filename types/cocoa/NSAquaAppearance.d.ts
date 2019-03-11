/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAquaAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSAquaAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSAquaAppearance>(): R;
      new: <R = NSAquaAppearance>() => R;
    }
  }
}

declare const NSAquaAppearance: cocoa.classes.NSAquaAppearance;
