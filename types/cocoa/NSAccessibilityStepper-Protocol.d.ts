/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStepperProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    accessibilityValue<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityStepperProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilityStepperProtocol: cocoa.classes.NSAccessibilityStepperProtocol;
