/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySwitchProtocol<T = any> extends cocoa.NSAccessibilityButtonProtocol {
    accessibilityValue<R = cocoa.NSString>(): R;
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySwitchProtocol<T = any> extends cocoa.classes.NSAccessibilityButtonProtocol {  }
  }
}

declare const NSAccessibilitySwitchProtocol: cocoa.classes.NSAccessibilitySwitchProtocol;
