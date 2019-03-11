/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputProtocol<T = any> {
    validAttributesForMarkedText<R = cocoa.NSArray>(): R;
    characterIndexForPoint<R = number, P0 = cocoa.CGPoint>(_characterIndexForPoint: P0): R;
    firstRectForCharacterRange<R = cocoa.CGRect, P0 = cocoa._NSRange>(_firstRectForCharacterRange: P0): R;
    selectedRange<R = cocoa._NSRange>(): R;
    markedRange<R = cocoa._NSRange>(): R;
    attributedSubstringFromRange<R = cocoa.NSAttributedString, P0 = cocoa._NSRange>(_attributedSubstringFromRange: P0): R;
    conversationIdentifier<R = number>(): R;
    hasMarkedText<R = boolean>(): R;
    unmarkText<R = void>(): R;
    setMarkedText_selectedRange<R = void, P0 = unknown, P1 = cocoa._NSRange>(_setMarkedText: P0, _selectedRange: P1): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText<R = void, P0 = unknown>(_insertText: P0): R;
  }
  namespace classes {
    export interface NSTextInputProtocol<T = any> {  }
  }
}

declare const NSTextInputProtocol: cocoa.classes.NSTextInputProtocol;
