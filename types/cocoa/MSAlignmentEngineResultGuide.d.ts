/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineResultGuide<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    drawWithLineWidth<R = void, P0 = number>(_drawWithLineWidth: P0): R;
    bezierPath<R = unknown>(): R;
    initWithLineSegment<R = unknown, P0 = cocoa.MSLineSegment>(_initWithLineSegment: P0): R;
    lineSegment<R = cocoa.MSLineSegment>(): R;
  }
  namespace classes {
    export interface MSAlignmentEngineResultGuide<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSAlignmentEngineResultGuide>(): R;
      new: <R = MSAlignmentEngineResultGuide>() => R;
    }
  }
}

declare const MSAlignmentEngineResultGuide: cocoa.classes.MSAlignmentEngineResultGuide;
