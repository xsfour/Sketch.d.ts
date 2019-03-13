/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRadioButtonProtocol<T = any> extends NSAccessibilityButtonProtocol {
    accessibilityValue<R = NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityRadioButtonProtocol<T = any> extends NSAccessibilityButtonProtocol {  }
  }
}
