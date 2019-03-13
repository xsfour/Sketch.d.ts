/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityElementProtocol<T = any> extends NSObjectProtocol {
    accessibilityParent<R = unknown>(): R;
    accessibilityFrame<R = CGRect>(): R;
    accessibilityIdentifier<R = NSString>(): R;
    isAccessibilityFocused<R = boolean>(): R;
  }
  namespace classes {
    export interface NSAccessibilityElementProtocol<T = any> extends NSObjectProtocol {  }
  }
}
