/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineResult<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    drawAtZoomValue<R = void, P0 = number>(_drawAtZoomValue: P0): R;
    initWithPoint_guides<R = unknown, P0 = cocoa.CGPoint, P1 = unknown>(_initWithPoint: P0, _guides: P1): R;
    guides<R = cocoa.NSArray>(): R;
    point<R = cocoa.CGPoint>(): R;
  }
  namespace classes {
    export interface MSAlignmentEngineResult<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSAlignmentEngineResult>(): R;
      new: <R = MSAlignmentEngineResult>() => R;
      snappingResultWithPoint<R = unknown, P0 = cocoa.CGPoint>(_snappingResultWithPoint: P0): R;
    }
  }
}

declare const MSAlignmentEngineResult: cocoa.classes.MSAlignmentEngineResult;
