/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRadialGradientEventHandler<T = any> extends cocoa.MSGradientEventHandler {
    setEllipsePoint<R = void, P0 = cocoa.CGPoint>(_setEllipsePoint: P0): R;
    ellipsePoint<R = cocoa.CGPoint>(): R;
    ovalPath<R = unknown>(): R;
    mouseIsNearEllipsePoint<R = boolean, P0 = cocoa.CGPoint>(_mouseIsNearEllipsePoint: P0): R;
  }
  namespace classes {
    export interface MSRadialGradientEventHandler<T = any> extends cocoa.classes.MSGradientEventHandler {
      alloc<R = MSRadialGradientEventHandler>(): R;
      new: <R = MSRadialGradientEventHandler>() => R;
    }
  }
}

declare const MSRadialGradientEventHandler: cocoa.classes.MSRadialGradientEventHandler;
