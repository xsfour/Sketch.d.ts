/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityButtonProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    accessibilityPerformPress<R = boolean>(): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilityButtonProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilityButtonProtocol: cocoa.classes.NSAccessibilityButtonProtocol;
