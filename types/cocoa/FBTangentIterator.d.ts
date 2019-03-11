/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBTangentIterator<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    updateCurves<R = void>(): R;
    next<R = boolean, P0 = cocoa.CGPoint>(_next: P0): R;
    sync<R = void, P0 = unknown>(_sync: P0): R;
    commonInit<R = void>(): R;
    initWithIntersection_onCurve<R = unknown, P0 = unknown, P1 = unknown>(_initWithIntersection: P0, _onCurve: P1): R;
    offsetMaximum<R = number>(): R;
    setOffsetMaximum<R = void, P0 = number>(_v: P0): R;
    offsetStep<R = number>(): R;
    setOffsetStep<R = void, P0 = number>(_v: P0): R;
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
    rightCurve<R = cocoa.FBBezierCurve>(): R;
    setRightCurve<R = void, P0 = cocoa.FBBezierCurve>(_v: P0): R;
    leftCurve<R = cocoa.FBBezierCurve>(): R;
    setLeftCurve<R = void, P0 = cocoa.FBBezierCurve>(_v: P0): R;
    rightOffset<R = number>(): R;
    leftOffset<R = number>(): R;
  }
  namespace classes {
    export interface FBTangentIterator<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBTangentIterator>(): R;
      new: <R = FBTangentIterator>() => R;
      tangentIteratorWithIntersection_onCurve<R = unknown, P0 = unknown, P1 = unknown>(_tangentIteratorWithIntersection: P0, _onCurve: P1): R;
    }
  }
}

declare const FBTangentIterator: cocoa.classes.FBTangentIterator;
