/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySliderProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityValue<R = unknown>(): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySliderProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilitySliderProtocol: cocoa.classes.NSAccessibilitySliderProtocol;
