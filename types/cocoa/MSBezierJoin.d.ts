/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierJoin<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    initWithSegment1_segment2_joinedSegments<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithSegment1: P0, _segment2: P1, _joinedSegments: P2): R;
    joinedSegments<R = cocoa.NSArray>(): R;
    segment2<R = cocoa.MSBezierSegment>(): R;
    segment1<R = cocoa.MSBezierSegment>(): R;
  }
  namespace classes {
    export interface MSBezierJoin<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBezierJoin>(): R;
      new: <R = MSBezierJoin>() => R;
      segmentsByJoiningSegment1_segment2<R = unknown, P0 = unknown, P1 = unknown>(_segmentsByJoiningSegment1: P0, _segment2: P1): R;
      joinWithSegment1_segment2_strategy<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_joinWithSegment1: P0, _segment2: P1, _strategy: P2): R;
      joinWithSegment1_segment2<R = unknown, P0 = unknown, P1 = unknown>(_joinWithSegment1: P0, _segment2: P1): R;
    }
  }
}

declare const MSBezierJoin: cocoa.classes.MSBezierJoin;
