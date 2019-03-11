/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityElementProtocol<T = any> extends cocoa.NSObjectProtocol {
    accessibilityParent<R = unknown>(): R;
    accessibilityFrame<R = cocoa.CGRect>(): R;
    accessibilityIdentifier<R = cocoa.NSString>(): R;
    isAccessibilityFocused<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilityElementProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSAccessibilityElementProtocol: cocoa.classes.NSAccessibilityElementProtocol;
