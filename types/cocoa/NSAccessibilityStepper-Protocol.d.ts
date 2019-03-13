/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStepperProtocol<T = any> extends NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityLabel<R = NSString>(): R;
    accessibilityValue<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityStepperProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}
