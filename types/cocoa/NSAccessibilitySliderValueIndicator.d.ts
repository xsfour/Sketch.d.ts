/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySliderValueIndicator<T = any> extends NSAccessibilityMockUIElement {
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySliderValueIndicator<T = any> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilitySliderValueIndicator>(): R;
      new: <R = NSAccessibilitySliderValueIndicator>() => R;
    }
  }
}

declare const NSAccessibilitySliderValueIndicator: cocoa.classes.NSAccessibilitySliderValueIndicator;
