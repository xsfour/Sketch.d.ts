/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityNavigableStaticTextProtocol<T = any> extends cocoa.NSAccessibilityStaticTextProtocol {
    accessibilityFrameForRange<R = cocoa.CGRect, P0 = cocoa._NSRange>(_accessibilityFrameForRange: P0): R;
    accessibilityRangeForLine<R = cocoa._NSRange, P0 = number>(_accessibilityRangeForLine: P0): R;
    accessibilityLineForIndex<R = number, P0 = number>(_accessibilityLineForIndex: P0): R;
    accessibilityStringForRange<R = cocoa.NSString, P0 = cocoa._NSRange>(_accessibilityStringForRange: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityNavigableStaticTextProtocol<T = any> extends cocoa.classes.NSAccessibilityStaticTextProtocol {  }
  }
}

declare const NSAccessibilityNavigableStaticTextProtocol: cocoa.classes.NSAccessibilityNavigableStaticTextProtocol;
