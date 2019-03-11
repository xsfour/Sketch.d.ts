/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoReplaceCharacters<T = any> extends cocoa.NSUndoTextOperation {
    initWithAffectedRange_layoutManager_undoManager_replacementRange<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = cocoa._NSRange>(_initWithAffectedRange: P0, _layoutManager: P1, _undoManager: P2, _replacementRange: P3): R;
  }
  namespace classes {
    export interface NSUndoReplaceCharacters<T = any> extends cocoa.classes.NSUndoTextOperation {
      alloc<R = NSUndoReplaceCharacters>(): R;
      new: <R = NSUndoReplaceCharacters>() => R;
    }
  }
}

declare const NSUndoReplaceCharacters: cocoa.classes.NSUndoReplaceCharacters;
