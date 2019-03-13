/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityNavigableStaticTextProtocol<T = any> extends NSAccessibilityStaticTextProtocol {
    accessibilityFrameForRange<R = CGRect, P0 = _NSRange>(_accessibilityFrameForRange: P0): R;
    accessibilityRangeForLine<R = _NSRange, P0 = number>(_accessibilityRangeForLine: P0): R;
    accessibilityLineForIndex<R = number, P0 = number>(_accessibilityLineForIndex: P0): R;
    accessibilityStringForRange<R = NSString, P0 = _NSRange>(_accessibilityStringForRange: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityNavigableStaticTextProtocol<T = any> extends NSAccessibilityStaticTextProtocol {  }
  }
}
