/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityImageProtocol<T = any> extends NSAccessibilityElementProtocol {
    accessibilityLabel<R = NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilityImageProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}
