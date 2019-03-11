/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutYAxisAnchor<T = any> extends cocoa.NSLayoutAnchor {
    offsetBy<R = unknown, P0 = number>(_offsetBy: P0): R;
    offsetByDimension<R = unknown, P0 = unknown>(_offsetByDimension: P0): R;
    offsetByDimension_times_plus<R = unknown, P0 = unknown, P1 = number, P2 = number>(_offsetByDimension: P0, _times: P1, _plus: P2): R;
    distanceTo<R = unknown, P0 = unknown>(_distanceTo: P0): R;
    offsetTo<R = unknown, P0 = unknown>(_offsetTo: P0): R;
    anchorByOffsettingWithConstant<R = unknown, P0 = number>(_anchorByOffsettingWithConstant: P0): R;
    anchorByOffsettingWithDimension_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = number>(_anchorByOffsettingWithDimension: P0, _multiplier: P1, _constant: P2): R;
    anchorByOffsettingWithDimension<R = unknown, P0 = unknown>(_anchorByOffsettingWithDimension: P0): R;
    anchorWithOffsetToAnchor<R = unknown, P0 = unknown>(_anchorWithOffsetToAnchor: P0): R;
  }
  namespace classes {
    export interface NSLayoutYAxisAnchor<T = any> extends cocoa.classes.NSLayoutAnchor {
      alloc<R = NSLayoutYAxisAnchor>(): R;
      new: <R = NSLayoutYAxisAnchor>() => R;
    }
  }
}

declare const NSLayoutYAxisAnchor: cocoa.classes.NSLayoutYAxisAnchor;
