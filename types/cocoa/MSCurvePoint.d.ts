/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePoint<T = any> extends cocoa._MSCurvePoint, cocoa.MSCurvePointProtocol, cocoa.NSCopyingProtocol {
    multiplyBy<R = void, P0 = number>(_multiplyBy: P0): R;
    moveCurveFromTo<R = void, P0 = cocoa.CGPoint>(_moveCurveFromTo: P0): R;
    moveCurveToTo<R = void, P0 = cocoa.CGPoint>(_moveCurveToTo: P0): R;
    movePointTo<R = void, P0 = cocoa.CGPoint>(_movePointTo: P0): R;
    locationOfPoint<R = cocoa.CGPoint, P0 = number>(_locationOfPoint: P0): R;
    inferCurveMode<R = void>(): R;
    isRounded<R = boolean>(): R;
    changeCurveModeTo_usingPoint<R = void, P0 = number, P1 = number>(_changeCurveModeTo: P0, _usingPoint: P1): R;
    currentBehaviour<R = unknown>(): R;
    initWithPoint_curveTo_curveFrom<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint>(_initWithPoint: P0, _curveTo: P1, _curveFrom: P2): R;
    initWithPoint<R = unknown, P0 = cocoa.CGPoint>(_initWithPoint: P0): R;
    description<R = cocoa.NSString>(): R;
    isEffectivelyStraight<R = boolean>(): R;
    isStraight<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCurvePoint<T = any> extends cocoa.classes._MSCurvePoint, cocoa.classes.MSCurvePointProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSCurvePoint>(): R;
      new: <R = MSCurvePoint>() => R;
      pointWithPoint_curveTo_curveFrom<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint>(_pointWithPoint: P0, _curveTo: P1, _curveFrom: P2): R;
      pointWithPoint<R = unknown, P0 = cocoa.CGPoint>(_pointWithPoint: P0): R;
      point<R = unknown>(): R;
    }
  }
}

declare const MSCurvePoint: cocoa.classes.MSCurvePoint;
