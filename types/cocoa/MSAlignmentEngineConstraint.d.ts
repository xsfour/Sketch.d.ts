/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineConstraint<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    initWithPoint_line<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.MSLine>(_initWithPoint: P0, _line: P1): R;
    line<R = cocoa.MSLine>(): R;
    sourcePoint<R = cocoa.CGPoint>(): R;
  }
  namespace classes {
    export interface MSAlignmentEngineConstraint<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSAlignmentEngineConstraint>(): R;
      new: <R = MSAlignmentEngineConstraint>() => R;
      orthogonalOrDiagonalConstraintFromPoint_toPoint<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_orthogonalOrDiagonalConstraintFromPoint: P0, _toPoint: P1): R;
      constraintWithSourcePoint_toPoint<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_constraintWithSourcePoint: P0, _toPoint: P1): R;
    }
  }
}

declare const MSAlignmentEngineConstraint: cocoa.classes.MSAlignmentEngineConstraint;
