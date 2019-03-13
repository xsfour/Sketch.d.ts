/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySliderProtocol<T = any> extends NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityValue<R = unknown>(): R;
    accessibilityLabel<R = NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySliderProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}
