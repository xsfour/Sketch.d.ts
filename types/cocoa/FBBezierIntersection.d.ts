/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierIntersection<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    description<R = unknown>(): R;
    enumerateAliasesWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateAliasesWithBlock: P0): R;
    enumerateAliasesOfCurve_atParameter_withBlock<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_enumerateAliasesOfCurve: P0, _atParameter: P1, _withBlock: P2): R;
    computeCurve2<R = void>(): R;
    computeCurve1<R = void>(): R;
    curve2Threshold<R = number>(): R;
    curve1Threshold<R = number>(): R;
    curve2ExactThreshold<R = number>(): R;
    curve1ExactThreshold<R = number>(): R;
    curve2ThresholdWithWeight_maximum<R = number, P0 = number, P1 = number>(_curve2ThresholdWithWeight: P0, _maximum: P1): R;
    curve1ThresholdWithWeight_maximum<R = number, P0 = number, P1 = number>(_curve1ThresholdWithWeight: P0, _maximum: P1): R;
    curve2WindingCount<R = number>(): R;
    curve1WindingCount<R = number>(): R;
    curve2Direction<R = cocoa.CGPoint>(): R;
    curve1Direction<R = cocoa.CGPoint>(): R;
    initWithCurve1_parameter1_curve2_parameter2<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_initWithCurve1: P0, _parameter1: P1, _curve2: P2, _parameter2: P3): R;
    parameter2<R = number>(): R;
    curve2<R = cocoa.FBBezierCurve>(): R;
    parameter1<R = number>(): R;
    curve1<R = cocoa.FBBezierCurve>(): R;
    atEndPointOfCurve<R = boolean>(): R;
    atEndPointOfCurve2<R = boolean>(): R;
    atStopOfCurve2<R = boolean>(): R;
    atStartOfCurve2<R = boolean>(): R;
    atEndPointOfCurve1<R = boolean>(): R;
    atStopOfCurve1<R = boolean>(): R;
    atStartOfCurve1<R = boolean>(): R;
    isAtExactStopOfCurve2<R = boolean>(): R;
    isAtExactStartOfCurve2<R = boolean>(): R;
    isAtExactStopOfCurve1<R = boolean>(): R;
    isAtExactStartOfCurve1<R = boolean>(): R;
    curve2RightBezier<R = cocoa.FBBezierCurve>(): R;
    curve2LeftBezier<R = cocoa.FBBezierCurve>(): R;
    curve1RightBezier<R = cocoa.FBBezierCurve>(): R;
    curve1LeftBezier<R = cocoa.FBBezierCurve>(): R;
    tangent<R = boolean>(): R;
    location<R = cocoa.CGPoint>(): R;
  }
  namespace classes {
    export interface FBBezierIntersection<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBBezierIntersection>(): R;
      new: <R = FBBezierIntersection>() => R;
      intersectionWithCurve1_parameter1_curve2_parameter2<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_intersectionWithCurve1: P0, _parameter1: P1, _curve2: P2, _parameter2: P3): R;
    }
  }
}

declare const FBBezierIntersection: cocoa.classes.FBBezierIntersection;
