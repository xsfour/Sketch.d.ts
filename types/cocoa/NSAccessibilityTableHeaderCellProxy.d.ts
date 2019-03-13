/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityTableHeaderCellProxy<T = any> extends NSAccessibilityReparentingCellProxy {}
  namespace classes {
    export interface NSAccessibilityTableHeaderCellProxy<T = any> extends NSAccessibilityReparentingCellProxy {
      alloc<R = NSAccessibilityTableHeaderCellProxy>(): R;
      new: <R = NSAccessibilityTableHeaderCellProxy>() => R;
    }
  }
}

declare const NSAccessibilityTableHeaderCellProxy: cocoa.classes.NSAccessibilityTableHeaderCellProxy;
