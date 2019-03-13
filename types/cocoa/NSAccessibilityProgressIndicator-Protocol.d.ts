/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityProgressIndicatorProtocol<T = any> extends NSAccessibilityGroupProtocol {
    accessibilityValue<R = NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityProgressIndicatorProtocol<T = any> extends NSAccessibilityGroupProtocol {  }
  }
}
