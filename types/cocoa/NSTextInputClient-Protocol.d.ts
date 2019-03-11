/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputClientProtocol<T = any> {
    characterIndexForPoint<R = number, P0 = cocoa.CGPoint>(_characterIndexForPoint: P0): R;
    firstRectForCharacterRange_actualRange<R = cocoa.CGRect, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_firstRectForCharacterRange: P0, _actualRange: P1): R;
    validAttributesForMarkedText<R = cocoa.NSArray>(): R;
    attributedSubstringForProposedRange_actualRange<R = cocoa.NSAttributedString, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_attributedSubstringForProposedRange: P0, _actualRange: P1): R;
    hasMarkedText<R = boolean>(): R;
    markedRange<R = cocoa._NSRange>(): R;
    selectedRange<R = cocoa._NSRange>(): R;
    unmarkText<R = void>(): R;
    setMarkedText_selectedRange_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_setMarkedText: P0, _selectedRange: P1, _replacementRange: P2): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange>(_insertText: P0, _replacementRange: P1): R;
    drawsVerticallyForCharacterAtIndex<R = boolean, P0 = number>(_drawsVerticallyForCharacterAtIndex: P0): R;
    windowLevel<R = number>(): R;
    baselineDeltaForCharacterAtIndex<R = number, P0 = number>(_baselineDeltaForCharacterAtIndex: P0): R;
    fractionOfDistanceThroughGlyphForPoint<R = number, P0 = cocoa.CGPoint>(_fractionOfDistanceThroughGlyphForPoint: P0): R;
    attributedString<R = cocoa.NSAttributedString>(): R;
  }
  namespace classes {
    export interface NSTextInputClientProtocol<T = any> {  }
  }
}

declare const NSTextInputClientProtocol: cocoa.classes.NSTextInputClientProtocol;
