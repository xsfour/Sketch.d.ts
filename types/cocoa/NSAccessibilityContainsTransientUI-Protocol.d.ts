/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityContainsTransientUIProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    isAccessibilityAlternateUIVisible<R = boolean>(): R;
    accessibilityPerformShowDefaultUI<R = boolean>(): R;
    accessibilityPerformShowAlternateUI<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilityContainsTransientUIProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilityContainsTransientUIProtocol: cocoa.classes.NSAccessibilityContainsTransientUIProtocol;
