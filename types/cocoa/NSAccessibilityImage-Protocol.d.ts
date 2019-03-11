/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityImageProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    accessibilityLabel<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilityImageProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilityImageProtocol: cocoa.classes.NSAccessibilityImageProtocol;
