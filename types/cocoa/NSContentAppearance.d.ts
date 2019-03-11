/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSContentAppearance<T = any> extends cocoa.NSAppearance {}
  namespace classes {
    export interface NSContentAppearance<T = any> extends cocoa.classes.NSAppearance {
      alloc<R = NSContentAppearance>(): R;
      new: <R = NSContentAppearance>() => R;
    }
  }
}

declare const NSContentAppearance: cocoa.classes.NSContentAppearance;
