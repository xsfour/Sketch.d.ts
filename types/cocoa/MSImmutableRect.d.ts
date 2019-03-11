/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRect<T = any> extends cocoa._MSImmutableRect, cocoa.MSRectProtocol {
    initWithRect_constrainProportions<R = unknown, P0 = cocoa.CGRect, P1 = boolean>(_initWithRect: P0, _constrainProportions: P1): R;
    initWithRect<R = unknown, P0 = cocoa.CGRect>(_initWithRect: P0): R;
    origin<R = cocoa.CGPoint>(): R;
    size<R = cocoa.CGSize>(): R;
    rect<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSImmutableRect<T = any> extends cocoa.classes._MSImmutableRect, cocoa.classes.MSRectProtocol {
      alloc<R = MSImmutableRect>(): R;
      new: <R = MSImmutableRect>() => R;
    }
  }
}

declare const MSImmutableRect: cocoa.classes.MSImmutableRect;
