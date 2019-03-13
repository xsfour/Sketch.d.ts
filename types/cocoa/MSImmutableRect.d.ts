/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRect<T = any> extends _MSImmutableRect, MSRectProtocol {
    initWithRect_constrainProportions<R = unknown, P0 = CGRect, P1 = boolean>(_initWithRect: P0, _constrainProportions: P1): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
    origin<R = CGPoint>(): R;
    size<R = CGSize>(): R;
    rect<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSImmutableRect<T = any> extends _MSImmutableRect, MSRectProtocol {
      alloc<R = MSImmutableRect>(): R;
      new: <R = MSImmutableRect>() => R;
    }
  }
}

declare const MSImmutableRect: cocoa.classes.MSImmutableRect;
