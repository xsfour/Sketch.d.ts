/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCalculator<T = any> extends cocoa.NSObject {
    calculateToReachDestination<R = void>(): R;
    calculateDestination<R = void>(): R;
    positionAfterDuration<R = cocoa.CGPoint, P0 = number>(_positionAfterDuration: P0): R;
    velocityAfterDuration<R = number, P0 = number>(_velocityAfterDuration: P0): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGRect, P3 = cocoa.CGPoint, P4 = cocoa.CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize_tolerance<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGRect, P3 = cocoa.CGPoint, P4 = cocoa.CGSize, P5 = cocoa.CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4, _tolerance: P5): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize_tolerance_maxDuration<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = cocoa.CGRect, P3 = cocoa.CGPoint, P4 = cocoa.CGSize, P5 = cocoa.CGSize, P6 = number>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4, _tolerance: P5, _maxDuration: P6): R;
    durationUntilStop<R = number>(): R;
    documentFrame<R = cocoa.CGRect>(): R;
    setDocumentFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    destinationOrigin<R = cocoa.CGPoint>(): R;
    setDestinationOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    initialOrigin<R = cocoa.CGPoint>(): R;
    setInitialOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    tolerance<R = cocoa.CGSize>(): R;
    setTolerance<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    shouldRoundCalculations<R = boolean>(): R;
    setShouldRoundCalculations<R = void, P0 = boolean>(_v: P0): R;
    clippingSize<R = cocoa.CGSize>(): R;
    setClippingSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    constrainedClippingOrigin<R = cocoa.CGPoint>(): R;
    setConstrainedClippingOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    decelerationRate<R = number>(): R;
    setDecelerationRate<R = void, P0 = number>(_v: P0): R;
    horizontalScrollDecelerationFactor<R = number>(): R;
    setHorizontalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
    initialVelocity<R = cocoa.CGPoint>(): R;
    setInitialVelocity<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    verticalScrollDecelerationFactor<R = number>(): R;
    setVerticalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingMomentumCalculator<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingMomentumCalculator>(): R;
      new: <R = _NSScrollingMomentumCalculator>() => R;
    }
  }
}
