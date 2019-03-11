/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugAppearance<T = any> extends cocoa.NSAquaAppearance {}
  namespace classes {
    export interface NSDebugAppearance<T = any> extends cocoa.classes.NSAquaAppearance {
      alloc<R = NSDebugAppearance>(): R;
      new: <R = NSDebugAppearance>() => R;
    }
  }
}

declare const NSDebugAppearance: cocoa.classes.NSDebugAppearance;
