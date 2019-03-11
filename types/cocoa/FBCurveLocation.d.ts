/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBCurveLocation<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithEdge_parameter_distance<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithEdge: P0, _parameter: P1, _distance: P2): R;
    distance<R = number>(): R;
    parameter<R = number>(): R;
    edge<R = cocoa.FBBezierCurve>(): R;
    contour<R = cocoa.FBBezierContour>(): R;
    setContour<R = void, P0 = cocoa.FBBezierContour>(_v: P0): R;
    graph<R = cocoa.FBBezierGraph>(): R;
    setGraph<R = void, P0 = cocoa.FBBezierGraph>(_v: P0): R;
  }
  namespace classes {
    export interface FBCurveLocation<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBCurveLocation>(): R;
      new: <R = FBCurveLocation>() => R;
      curveLocationWithEdge_parameter_distance<R = unknown, P0 = unknown, P1 = number, P2 = number>(_curveLocationWithEdge: P0, _parameter: P1, _distance: P2): R;
    }
  }
}

declare const FBCurveLocation: cocoa.classes.FBCurveLocation;
