/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableGradient<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    stops<R = cocoa.NSArray>(): R;
    setStops<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    to<R = cocoa.CGPoint>(): R;
    setTo<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    gradientType<R = number>(): R;
    setGradientType<R = void, P0 = number>(_v: P0): R;
    from<R = cocoa.CGPoint>(): R;
    setFrom<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    elipseLength<R = number>(): R;
    setElipseLength<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableGradient<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableGradient>(): R;
      new: <R = _MSImmutableGradient>() => R;
    }
  }
}
