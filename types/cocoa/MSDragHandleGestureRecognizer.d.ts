/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragHandleGestureRecognizer<T = any> extends cocoa.MSDragToMoveOrCopyGestureRecognizer {
    lockingConstraint<R = cocoa.MSAlignmentEngineConstraint>(): R;
    setLockingConstraint<R = void, P0 = cocoa.MSAlignmentEngineConstraint>(_v: P0): R;
    originalHandleLocation<R = cocoa.CGPoint>(): R;
    setOriginalHandleLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    effectiveLockingConstraint<R = cocoa.MSAlignmentEngineConstraint>(): R;
  }
  namespace classes {
    export interface MSDragHandleGestureRecognizer<T = any> extends cocoa.classes.MSDragToMoveOrCopyGestureRecognizer {
      alloc<R = MSDragHandleGestureRecognizer>(): R;
      new: <R = MSDragHandleGestureRecognizer>() => R;
    }
  }
}

declare const MSDragHandleGestureRecognizer: cocoa.classes.MSDragHandleGestureRecognizer;
