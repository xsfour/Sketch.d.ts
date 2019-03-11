/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAngularGradientEventHandler<T = any> extends cocoa.MSGradientEventHandler {
    positionForStop<R = number, P0 = cocoa.CGPoint>(_positionForStop: P0): R;
    basePointAtIndex<R = cocoa.CGPoint, P0 = number>(_basePointAtIndex: P0): R;
  }
  namespace classes {
    export interface MSAngularGradientEventHandler<T = any> extends cocoa.classes.MSGradientEventHandler {
      alloc<R = MSAngularGradientEventHandler>(): R;
      new: <R = MSAngularGradientEventHandler>() => R;
    }
  }
}

declare const MSAngularGradientEventHandler: cocoa.classes.MSAngularGradientEventHandler;
