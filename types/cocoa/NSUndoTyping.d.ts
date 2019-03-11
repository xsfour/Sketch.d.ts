/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoTyping<T = any> extends cocoa.NSUndoTextOperation {
    coalesceAffectedRange_replacementRange_selectedRange_text<R = boolean, P0 = cocoa._NSRange, P1 = cocoa._NSRange, P2 = cocoa._NSRange, P3 = unknown>(_coalesceAffectedRange: P0, _replacementRange: P1, _selectedRange: P2, _text: P3): R;
    initWithAffectedRange_layoutManager_undoManager_replacementRange<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = cocoa._NSRange>(_initWithAffectedRange: P0, _layoutManager: P1, _undoManager: P2, _replacementRange: P3): R;
  }
  namespace classes {
    export interface NSUndoTyping<T = any> extends cocoa.classes.NSUndoTextOperation {
      alloc<R = NSUndoTyping>(): R;
      new: <R = NSUndoTyping>() => R;
    }
  }
}

declare const NSUndoTyping: cocoa.classes.NSUndoTyping;
