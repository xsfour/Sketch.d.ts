/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoTextOperation<T = any> extends cocoa.NSObject {
    isSupportingCoalescing<R = boolean>(): R;
    firstTextViewForTextStorage<R = unknown, P0 = unknown>(_firstTextViewForTextStorage: P0): R;
    undoRedo<R = void, P0 = unknown>(_undoRedo: P0): R;
    dealloc<R = void>(): R;
    initWithAffectedRange_layoutManager_undoManager<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown>(_initWithAffectedRange: P0, _layoutManager: P1, _undoManager: P2): R;
    affectedRange<R = cocoa._NSRange>(): R;
    setAffectedRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    undoManager<R = cocoa.NSUndoManager>(): R;
    setUndoManager<R = void, P0 = cocoa.NSUndoManager>(_v: P0): R;
  }
  namespace classes {
    export interface NSUndoTextOperation<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSUndoTextOperation>(): R;
      new: <R = NSUndoTextOperation>() => R;
    }
  }
}

declare const NSUndoTextOperation: cocoa.classes.NSUndoTextOperation;
