/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutAreaProtocol<T = any> extends NSAccessibilityGroupProtocol {
    accessibilitySelectedChildren<R = NSArray>(): R;
    accessibilityChildren<R = NSArray>(): R;
    accessibilityLabel<R = NSString>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityLayoutAreaProtocol<T = any> extends NSAccessibilityGroupProtocol {  }
  }
}
