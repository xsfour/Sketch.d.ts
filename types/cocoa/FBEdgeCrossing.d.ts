/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBEdgeCrossing<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    description<R = unknown>(): R;
    isEqualToEdgeCrossing<R = boolean, P0 = unknown>(_isEqualToEdgeCrossing: P0): R;
    isCoincidentWith<R = boolean, P0 = unknown>(_isCoincidentWith: P0): R;
    previousUsingNonself<R = unknown, P0 = boolean>(_previousUsingNonself: P0): R;
    nextUsingNonself<R = unknown, P0 = boolean>(_nextUsingNonself: P0): R;
    removeFromEdge<R = void>(): R;
    initWithIntersection<R = unknown, P0 = unknown>(_initWithIntersection: P0): R;
    intersection<R = cocoa.FBBezierIntersection>(): R;
    suspicious<R = boolean>(): R;
    setSuspicious<R = void, P0 = boolean>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
    overlapRun<R = cocoa.FBEdgeOverlapRun>(): R;
    setOverlapRun<R = void, P0 = cocoa.FBEdgeOverlapRun>(_v: P0): R;
    selfCrossing<R = boolean>(): R;
    setSelfCrossing<R = void, P0 = boolean>(_v: P0): R;
    processed<R = boolean>(): R;
    setProcessed<R = void, P0 = boolean>(_v: P0): R;
    entry<R = boolean>(): R;
    setEntry<R = void, P0 = boolean>(_v: P0): R;
    counterpart<R = cocoa.FBEdgeCrossing>(): R;
    setCounterpart<R = void, P0 = cocoa.FBEdgeCrossing>(_v: P0): R;
    edge<R = cocoa.FBBezierCurve>(): R;
    setEdge<R = void, P0 = cocoa.FBBezierCurve>(_v: P0): R;
    fromCrossingOverlap<R = boolean>(): R;
    atEnd<R = boolean>(): R;
    atStart<R = boolean>(): R;
    rightCurve<R = cocoa.FBBezierCurve>(): R;
    leftCurve<R = cocoa.FBBezierCurve>(): R;
    curve<R = cocoa.FBBezierCurve>(): R;
    location<R = cocoa.CGPoint>(): R;
    parameter<R = number>(): R;
    previous<R = cocoa.FBEdgeCrossing>(): R;
    next<R = cocoa.FBEdgeCrossing>(): R;
    order<R = number>(): R;
  }
  namespace classes {
    export interface FBEdgeCrossing<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBEdgeCrossing>(): R;
      new: <R = FBEdgeCrossing>() => R;
      crossingWithIntersection<R = unknown, P0 = unknown>(_crossingWithIntersection: P0): R;
    }
  }
}

declare const FBEdgeCrossing: cocoa.classes.FBEdgeCrossing;
