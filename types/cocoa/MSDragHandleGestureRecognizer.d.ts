/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragHandleGestureRecognizer<T = any> extends MSDragToMoveOrCopyGestureRecognizer {
    lockingConstraint<R = MSAlignmentEngineConstraint>(): R;
    setLockingConstraint<R = void, P0 = MSAlignmentEngineConstraint>(_v: P0): R;
    originalHandleLocation<R = CGPoint>(): R;
    setOriginalHandleLocation<R = void, P0 = CGPoint>(_v: P0): R;
    effectiveLockingConstraint<R = MSAlignmentEngineConstraint>(): R;
  }
  namespace classes {
    export interface MSDragHandleGestureRecognizer<T = any> extends MSDragToMoveOrCopyGestureRecognizer {
      alloc<R = MSDragHandleGestureRecognizer>(): R;
      new: <R = MSDragHandleGestureRecognizer>() => R;
    }
  }
}

declare const MSDragHandleGestureRecognizer: cocoa.classes.MSDragHandleGestureRecognizer;
