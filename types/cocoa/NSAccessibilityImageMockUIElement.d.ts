/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityImageMockUIElement<T = any> extends cocoa.NSAccessibilityIndexedMockUIElement {
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    bounds<R = cocoa.CGRect>(): R;
    initWithParent_index_bounds_description_help<R = unknown, P0 = unknown, P1 = number, P2 = cocoa.CGRect, P3 = unknown, P4 = unknown>(_initWithParent: P0, _index: P1, _bounds: P2, _description: P3, _help: P4): R;
  }
  namespace classes {
    export interface NSAccessibilityImageMockUIElement<T = any> extends cocoa.classes.NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilityImageMockUIElement>(): R;
      new: <R = NSAccessibilityImageMockUIElement>() => R;
    }
  }
}

declare const NSAccessibilityImageMockUIElement: cocoa.classes.NSAccessibilityImageMockUIElement;
