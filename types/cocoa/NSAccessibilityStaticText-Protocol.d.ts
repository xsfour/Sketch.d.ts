/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStaticTextProtocol<T = any> extends NSAccessibilityElementProtocol {
    accessibilityValue<R = NSString>(): R;
    accessibilityVisibleCharacterRange<R = _NSRange>(): R;
    accessibilityAttributedStringForRange<R = NSAttributedString, P0 = _NSRange>(_accessibilityAttributedStringForRange: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityStaticTextProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}
