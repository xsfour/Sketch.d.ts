/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNaturalCubicSplineInterpolator<T = any> extends NSObject {
    valueAt<R = number, P0 = number>(_valueAt: P0): R;
    _intervalAt<R = number, P0 = number>(__intervalAt: P0): R;
    _intervalLength<R = number, P0 = number>(__intervalLength: P0): R;
    _calculateZiVector<R = void>(): R;
    dealloc<R = void>(): R;
    initWithKnots_length<R = unknown, P0 = unknown, P1 = number>(_initWithKnots: P0, _length: P1): R;
  }
  namespace classes {
    export interface NSNaturalCubicSplineInterpolator<T = any> extends NSObject {
      alloc<R = NSNaturalCubicSplineInterpolator>(): R;
      new: <R = NSNaturalCubicSplineInterpolator>() => R;
    }
  }
}

declare const NSNaturalCubicSplineInterpolator: cocoa.classes.NSNaturalCubicSplineInterpolator;
