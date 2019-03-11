/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySystemAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSAccessibilitySystemAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSAccessibilitySystemAppearance>(): R;
      new: <R = NSAccessibilitySystemAppearance>() => R;
    }
  }
}

declare const NSAccessibilitySystemAppearance: cocoa.classes.NSAccessibilitySystemAppearance;
