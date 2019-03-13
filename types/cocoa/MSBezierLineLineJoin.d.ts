/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierLineLineJoin<T = any> extends MSBezierJoin {}
  namespace classes {
    export interface MSBezierLineLineJoin<T = any> extends MSBezierJoin {
      alloc<R = MSBezierLineLineJoin>(): R;
      new: <R = MSBezierLineLineJoin>() => R;
      segmentsByJoiningSegment1_segment2_strategy<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_segmentsByJoiningSegment1: P0, _segment2: P1, _strategy: P2): R;
    }
  }
}

declare const MSBezierLineLineJoin: cocoa.classes.MSBezierLineLineJoin;
