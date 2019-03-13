/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBezierPathItem<T = any> extends NSObject {
    debugDescription<R = unknown>(): R;
    isEqual_withAccuracy<R = boolean, P0 = unknown, P1 = number>(_isEqual: P0, _withAccuracy: P1): R;
    description<R = unknown>(): R;
    bezierPathStartingAtPoint<R = unknown, P0 = CGPoint>(_bezierPathStartingAtPoint: P0): R;
    points<R = CGPoint>(): R;
    setPoints<R = void, P0 = CGPoint>(_setPoints: P0): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSBezierPathItem<T = any> extends NSObject {
      alloc<R = NSBezierPathItem>(): R;
      new: <R = NSBezierPathItem>() => R;
    }
  }
}

declare const NSBezierPathItem: cocoa.classes.NSBezierPathItem;
