/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStaticTextProtocol<T = any> extends cocoa.NSAccessibilityElementProtocol {
    accessibilityValue<R = cocoa.NSString>(): R;
    accessibilityVisibleCharacterRange<R = cocoa._NSRange>(): R;
    accessibilityAttributedStringForRange<R = cocoa.NSAttributedString, P0 = cocoa._NSRange>(_accessibilityAttributedStringForRange: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityStaticTextProtocol<T = any> extends cocoa.classes.NSAccessibilityElementProtocol {  }
  }
}

declare const NSAccessibilityStaticTextProtocol: cocoa.classes.NSAccessibilityStaticTextProtocol;
