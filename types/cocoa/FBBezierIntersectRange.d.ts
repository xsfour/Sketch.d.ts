/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierIntersectRange<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    clearCache<R = void>(): R;
    merge<R = void, P0 = unknown>(_merge: P0): R;
    flip<R = unknown>(): R;
    computeCurve2<R = void>(): R;
    computeCurve1<R = void>(): R;
    initWithCurve1_parameterRange1_curve2_parameterRange2_reversed<R = unknown, P0 = unknown, P1 = cocoa.FBRange, P2 = unknown, P3 = cocoa.FBRange, P4 = boolean>(_initWithCurve1: P0, _parameterRange1: P1, _curve2: P2, _parameterRange2: P3, _reversed: P4): R;
    reversed<R = boolean>(): R;
    parameterRange2<R = cocoa.FBRange>(): R;
    curve2<R = cocoa.FBBezierCurve>(): R;
    parameterRange1<R = cocoa.FBRange>(): R;
    curve1<R = cocoa.FBBezierCurve>(): R;
    stopIntersection<R = cocoa.FBBezierIntersection>(): R;
    middleIntersection<R = cocoa.FBBezierIntersection>(): R;
    startIntersection<R = cocoa.FBBezierIntersection>(): R;
    atStopOfCurve2<R = boolean>(): R;
    atStartOfCurve2<R = boolean>(): R;
    atStopOfCurve1<R = boolean>(): R;
    atStartOfCurve1<R = boolean>(): R;
    curve2RightBezier<R = cocoa.FBBezierCurve>(): R;
    curve2OverlappingBezier<R = cocoa.FBBezierCurve>(): R;
    curve2LeftBezier<R = cocoa.FBBezierCurve>(): R;
    curve1RightBezier<R = cocoa.FBBezierCurve>(): R;
    curve1OverlappingBezier<R = cocoa.FBBezierCurve>(): R;
    curve1LeftBezier<R = cocoa.FBBezierCurve>(): R;
  }
  namespace classes {
    export interface FBBezierIntersectRange<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBBezierIntersectRange>(): R;
      new: <R = FBBezierIntersectRange>() => R;
      intersectRangeWithCurve1_parameterRange1_curve2_parameterRange2_reversed<R = unknown, P0 = unknown, P1 = cocoa.FBRange, P2 = unknown, P3 = cocoa.FBRange, P4 = boolean>(_intersectRangeWithCurve1: P0, _parameterRange1: P1, _curve2: P2, _parameterRange2: P3, _reversed: P4): R;
    }
  }
}

declare const FBBezierIntersectRange: cocoa.classes.FBBezierIntersectRange;
