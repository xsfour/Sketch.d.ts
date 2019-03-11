/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBContainmentResult<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    initWithTestContour_inGraph_evenOddInside_nonZeroInside_testEdge_intersections<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown>(_initWithTestContour: P0, _inGraph: P1, _evenOddInside: P2, _nonZeroInside: P3, _testEdge: P4, _intersections: P5): R;
    container<R = cocoa.FBBezierContour>(): R;
    setContainer<R = void, P0 = cocoa.FBBezierContour>(_v: P0): R;
    containerDetermined<R = boolean>(): R;
    setContainerDetermined<R = void, P0 = boolean>(_v: P0): R;
    graph<R = cocoa.FBBezierGraph>(): R;
    testContour<R = cocoa.FBBezierContour>(): R;
    intersections<R = cocoa.NSArray>(): R;
    testEdge<R = cocoa.FBBezierCurve>(): R;
    nonZero<R = number>(): R;
    evenOdd<R = number>(): R;
  }
  namespace classes {
    export interface FBContainmentResult<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBContainmentResult>(): R;
      new: <R = FBContainmentResult>() => R;
    }
  }
}

declare const FBContainmentResult: cocoa.classes.FBContainmentResult;
