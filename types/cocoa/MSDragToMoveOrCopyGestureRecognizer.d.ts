/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragToMoveOrCopyGestureRecognizer<T = any> extends cocoa.MSDragGestureRecognizer {
    setState<R = void, P0 = number>(_setState: P0): R;
    recalculateAlignmentAxis<R = void>(): R;
    alignmentDistance<R = number>(): R;
    setAlignmentDistance<R = void, P0 = number>(_v: P0): R;
    copiedItems<R = cocoa.NSArray>(): R;
    setCopiedItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    originalDragPositions<R = cocoa.NSArray>(): R;
    setOriginalDragPositions<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    originalDraggedItems<R = cocoa.NSArray>(): R;
    setOriginalDraggedItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    draggedItem<R = unknown>(): R;
    setDraggedItem<R = void, P0 = unknown>(_v: P0): R;
    alignmentAxis<R = number>(): R;
    shouldInterpretAlignment<R = boolean>(): R;
    setShouldInterpretAlignment<R = void, P0 = boolean>(_v: P0): R;
    alignModifierMask<R = number>(): R;
    setAlignModifierMask<R = void, P0 = number>(_v: P0): R;
    align<R = boolean>(): R;
    shouldSnap<R = boolean>(): R;
    shouldCopyDraggedItems<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDragToMoveOrCopyGestureRecognizer<T = any> extends cocoa.classes.MSDragGestureRecognizer {
      alloc<R = MSDragToMoveOrCopyGestureRecognizer>(): R;
      new: <R = MSDragToMoveOrCopyGestureRecognizer>() => R;
    }
  }
}

declare const MSDragToMoveOrCopyGestureRecognizer: cocoa.classes.MSDragToMoveOrCopyGestureRecognizer;
