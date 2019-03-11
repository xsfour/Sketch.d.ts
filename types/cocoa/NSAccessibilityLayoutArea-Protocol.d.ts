/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutAreaProtocol<T = any> extends cocoa.NSAccessibilityGroupProtocol {
    accessibilitySelectedChildren<R = cocoa.NSArray>(): R;
    accessibilityChildren<R = cocoa.NSArray>(): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityLayoutAreaProtocol<T = any> extends cocoa.classes.NSAccessibilityGroupProtocol {  }
  }
}

declare const NSAccessibilityLayoutAreaProtocol: cocoa.classes.NSAccessibilityLayoutAreaProtocol;
