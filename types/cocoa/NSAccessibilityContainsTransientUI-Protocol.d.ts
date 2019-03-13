/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityContainsTransientUIProtocol<T = any> extends NSAccessibilityElementProtocol {
    isAccessibilityAlternateUIVisible<R = boolean>(): R;
    accessibilityPerformShowDefaultUI<R = boolean>(): R;
    accessibilityPerformShowAlternateUI<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilityContainsTransientUIProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}
