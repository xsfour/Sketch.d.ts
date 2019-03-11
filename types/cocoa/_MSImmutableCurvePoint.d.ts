/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableCurvePoint<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    point<R = cocoa.CGPoint>(): R;
    setPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    hasCurveTo<R = boolean>(): R;
    setHasCurveTo<R = void, P0 = boolean>(_v: P0): R;
    hasCurveFrom<R = boolean>(): R;
    setHasCurveFrom<R = void, P0 = boolean>(_v: P0): R;
    curveTo<R = cocoa.CGPoint>(): R;
    setCurveTo<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    curveMode<R = number>(): R;
    setCurveMode<R = void, P0 = number>(_v: P0): R;
    curveFrom<R = cocoa.CGPoint>(): R;
    setCurveFrom<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableCurvePoint<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableCurvePoint>(): R;
      new: <R = _MSImmutableCurvePoint>() => R;
    }
  }
}
