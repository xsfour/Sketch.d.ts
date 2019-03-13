/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySwitchProtocol<T = any> extends NSAccessibilityButtonProtocol {
    accessibilityValue<R = NSString>(): R;
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySwitchProtocol<T = any> extends NSAccessibilityButtonProtocol {  }
  }
}
