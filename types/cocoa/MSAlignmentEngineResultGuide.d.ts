/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineResultGuide<T = any> extends NSObject, NSCopyingProtocol {
    drawWithLineWidth<R = void, P0 = number>(_drawWithLineWidth: P0): R;
    bezierPath<R = unknown>(): R;
    initWithLineSegment<R = unknown, P0 = MSLineSegment>(_initWithLineSegment: P0): R;
    lineSegment<R = MSLineSegment>(): R;
  }
  namespace classes {
    export interface MSAlignmentEngineResultGuide<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = MSAlignmentEngineResultGuide>(): R;
      new: <R = MSAlignmentEngineResultGuide>() => R;
    }
  }
}

declare const MSAlignmentEngineResultGuide: cocoa.classes.MSAlignmentEngineResultGuide;
