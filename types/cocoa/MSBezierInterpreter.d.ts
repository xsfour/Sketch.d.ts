/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierInterpreter<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    points<R = unknown>(): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    bezierPath<R = cocoa.NSBezierPath>(): R;
    setBezierPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
  }
  namespace classes {
    export interface MSBezierInterpreter<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBezierInterpreter>(): R;
      new: <R = MSBezierInterpreter>() => R;
      pointsFromBezierPath_inRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect>(_pointsFromBezierPath: P0, _inRect: P1): R;
    }
  }
}

declare const MSBezierInterpreter: cocoa.classes.MSBezierInterpreter;
