/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityScrollerPart<T = any> extends NSAccessibilityMockUIElement {
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    partCode<R = number>(): R;
    initWithPartCode_parent<R = unknown, P0 = number, P1 = unknown>(_initWithPartCode: P0, _parent: P1): R;
  }
  namespace classes {
    export interface NSAccessibilityScrollerPart<T = any> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityScrollerPart>(): R;
      new: <R = NSAccessibilityScrollerPart>() => R;
      partWithCode_parent<R = unknown, P0 = number, P1 = unknown>(_partWithCode: P0, _parent: P1): R;
    }
  }
}

declare const NSAccessibilityScrollerPart: cocoa.classes.NSAccessibilityScrollerPart;
