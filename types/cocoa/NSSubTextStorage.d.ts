/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubTextStorage<T = any> extends cocoa.NSTextStorage {
    allowsOriginalFontMetricsOverride<R = boolean>(): R;
    range<R = cocoa._NSRange>(): R;
    setTextStorage<R = void, P0 = unknown>(_setTextStorage: P0): R;
    textStorage<R = unknown>(): R;
    textStorage_edited_range_changeInLength_invalidatedRange<R = void, P0 = unknown, P1 = number, P2 = cocoa._NSRange, P3 = number, P4 = cocoa._NSRange>(_textStorage: P0, _edited: P1, _range: P2, _changeInLength: P3, _invalidatedRange: P4): R;
    processEditingForTextStorage_edited_range_changeInLength_invalidatedRange<R = void, P0 = unknown, P1 = number, P2 = cocoa._NSRange, P3 = number, P4 = cocoa._NSRange>(_processEditingForTextStorage: P0, _edited: P1, _range: P2, _changeInLength: P3, _invalidatedRange: P4): R;
    _subtextStorageFromRange<R = unknown, P0 = cocoa._NSRange>(__subtextStorageFromRange: P0): R;
    setAttributes_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_setAttributes: P0, _range: P1): R;
    replaceCharactersInRange_withString<R = void, P0 = cocoa._NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    attributesAtIndex_effectiveRange<R = unknown, P0 = number, P1 = cocoa._NSRange>(_attributesAtIndex: P0, _effectiveRange: P1): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    release<R = void>(): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    classForCoder<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    initWithAttributedString<R = unknown, P0 = unknown>(_initWithAttributedString: P0): R;
    initWithString_attributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _attributes: P1): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithTextStorage_range<R = unknown, P0 = unknown, P1 = cocoa._NSRange>(_initWithTextStorage: P0, _range: P1): R;
  }
  namespace classes {
    export interface NSSubTextStorage<T = any> extends cocoa.classes.NSTextStorage {  }
  }
}

declare const NSSubTextStorage: cocoa.classes.NSSubTextStorage;
