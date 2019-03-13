/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCheckBoxProtocol<T = any> extends NSAccessibilityButtonProtocol {
    accessibilityValue<R = NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityCheckBoxProtocol<T = any> extends NSAccessibilityButtonProtocol {  }
  }
}
