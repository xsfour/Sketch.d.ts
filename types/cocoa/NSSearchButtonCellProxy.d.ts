/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchButtonCellProxy<T = any> extends cocoa.NSAccessibilityReparentingCellProxy {
    _accessibilityPressAction<R = void, P0 = unknown>(__accessibilityPressAction: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSearchButtonCellProxy<T = any> extends cocoa.classes.NSAccessibilityReparentingCellProxy {
      alloc<R = NSSearchButtonCellProxy>(): R;
      new: <R = NSSearchButtonCellProxy>() => R;
    }
  }
}

declare const NSSearchButtonCellProxy: cocoa.classes.NSSearchButtonCellProxy;
