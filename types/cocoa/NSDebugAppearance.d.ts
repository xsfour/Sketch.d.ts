/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugAppearance<T = any> extends NSAquaAppearance {}
  namespace classes {
    export interface NSDebugAppearance<T = any> extends NSAquaAppearance {
      alloc<R = NSDebugAppearance>(): R;
      new: <R = NSDebugAppearance>() => R;
    }
  }
}

declare const NSDebugAppearance: cocoa.classes.NSDebugAppearance;
