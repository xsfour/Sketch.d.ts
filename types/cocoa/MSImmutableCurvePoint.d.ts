/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableCurvePoint<T = any> extends _MSImmutableCurvePoint, MSCurvePointProtocol {
    isEffectivelyStraight<R = boolean>(): R;
    isRounded<R = boolean>(): R;
    isStraight<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableCurvePoint<T = any> extends _MSImmutableCurvePoint, MSCurvePointProtocol {
      alloc<R = MSImmutableCurvePoint>(): R;
      new: <R = MSImmutableCurvePoint>() => R;
    }
  }
}

declare const MSImmutableCurvePoint: cocoa.classes.MSImmutableCurvePoint;
