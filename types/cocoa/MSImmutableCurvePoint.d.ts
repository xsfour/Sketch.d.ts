/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableCurvePoint<T = any> extends cocoa._MSImmutableCurvePoint, cocoa.MSCurvePointProtocol {
    isEffectivelyStraight<R = boolean>(): R;
    isRounded<R = boolean>(): R;
    isStraight<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableCurvePoint<T = any> extends cocoa.classes._MSImmutableCurvePoint, cocoa.classes.MSCurvePointProtocol {
      alloc<R = MSImmutableCurvePoint>(): R;
      new: <R = MSImmutableCurvePoint>() => R;
    }
  }
}

declare const MSImmutableCurvePoint: cocoa.classes.MSImmutableCurvePoint;
