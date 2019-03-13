/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputProtocol<T = any> {
    validAttributesForMarkedText<R = NSArray>(): R;
    characterIndexForPoint<R = number, P0 = CGPoint>(_characterIndexForPoint: P0): R;
    firstRectForCharacterRange<R = CGRect, P0 = _NSRange>(_firstRectForCharacterRange: P0): R;
    selectedRange<R = _NSRange>(): R;
    markedRange<R = _NSRange>(): R;
    attributedSubstringFromRange<R = NSAttributedString, P0 = _NSRange>(_attributedSubstringFromRange: P0): R;
    conversationIdentifier<R = number>(): R;
    hasMarkedText<R = boolean>(): R;
    unmarkText<R = void>(): R;
    setMarkedText_selectedRange<R = void, P0 = unknown, P1 = _NSRange>(_setMarkedText: P0, _selectedRange: P1): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText<R = void, P0 = unknown>(_insertText: P0): R;
  }
  namespace classes {
    export interface NSTextInputProtocol<T = any> {  }
  }
}
