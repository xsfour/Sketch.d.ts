/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRadioButtonProtocol<T = any> extends cocoa.NSAccessibilityButtonProtocol {
    accessibilityValue<R = cocoa.NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityRadioButtonProtocol<T = any> extends cocoa.classes.NSAccessibilityButtonProtocol {  }
  }
}

declare const NSAccessibilityRadioButtonProtocol: cocoa.classes.NSAccessibilityRadioButtonProtocol;
