/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface DKDistortionTransform<T = any> extends cocoa.NSObject {
    transformPath_inRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect>(_transformPath: P0, _inRect: P1): R;
    transformPoint_fromRect<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = cocoa.CGRect>(_transformPoint: P0, _fromRect: P1): R;
    invert<R = void>(): R;
    differentialPerspectiveBy<R = void, P0 = number>(_differentialPerspectiveBy: P0): R;
    shearVerticallyBy<R = void, P0 = number>(_shearVerticallyBy: P0): R;
    shearHorizontallyBy<R = void, P0 = number>(_shearHorizontallyBy: P0): R;
    offsetByX_byY<R = void, P0 = number, P1 = number>(_offsetByX: P0, _byY: P1): R;
    bounds<R = cocoa.CGRect>(): R;
    getEnvelopePoints<R = void, P0 = cocoa.CGPoint>(_getEnvelopePoints: P0): R;
    setEnvelopePoints<R = void, P0 = cocoa.CGPoint>(_setEnvelopePoints: P0): R;
    initWithEnvelope<R = unknown, P0 = cocoa.CGPoint>(_initWithEnvelope: P0): R;
    initWithRect<R = unknown, P0 = cocoa.CGRect>(_initWithRect: P0): R;
  }
  namespace classes {
    export interface DKDistortionTransform<T = any> extends cocoa.classes.NSObject {
      alloc<R = DKDistortionTransform>(): R;
      new: <R = DKDistortionTransform>() => R;
      transformWithInitialRect<R = unknown, P0 = cocoa.CGRect>(_transformWithInitialRect: P0): R;
    }
  }
}

declare const DKDistortionTransform: cocoa.classes.DKDistortionTransform;
