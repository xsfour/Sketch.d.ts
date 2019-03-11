/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityProgressIndicatorProtocol<T = any> extends cocoa.NSAccessibilityGroupProtocol {
    accessibilityValue<R = cocoa.NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityProgressIndicatorProtocol<T = any> extends cocoa.classes.NSAccessibilityGroupProtocol {  }
  }
}

declare const NSAccessibilityProgressIndicatorProtocol: cocoa.classes.NSAccessibilityProgressIndicatorProtocol;
