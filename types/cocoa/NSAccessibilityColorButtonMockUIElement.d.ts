/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityColorButtonMockUIElement<T = any> extends NSAccessibilityIndexedMockUIElement {}
  namespace classes {
    export interface NSAccessibilityColorButtonMockUIElement<T = any> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilityColorButtonMockUIElement>(): R;
      new: <R = NSAccessibilityColorButtonMockUIElement>() => R;
    }
  }
}

declare const NSAccessibilityColorButtonMockUIElement: cocoa.classes.NSAccessibilityColorButtonMockUIElement;
