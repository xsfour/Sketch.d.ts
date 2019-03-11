/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCalculatorBase<T = any> extends cocoa._NSScrollingMomentumCalculator {
    setDecelerationRate<R = void, P0 = number>(_setDecelerationRate: P0): R;
    decelerationRate<R = number>(): R;
    setTolerance<R = void, P0 = cocoa.CGSize>(_setTolerance: P0): R;
    tolerance<R = cocoa.CGSize>(): R;
    setClippingSize<R = void, P0 = cocoa.CGSize>(_setClippingSize: P0): R;
    clippingSize<R = cocoa.CGSize>(): R;
    setConstrainedClippingOrigin<R = void, P0 = cocoa.CGPoint>(_setConstrainedClippingOrigin: P0): R;
    constrainedClippingOrigin<R = cocoa.CGPoint>(): R;
    setInitialVelocity<R = void, P0 = cocoa.CGPoint>(_setInitialVelocity: P0): R;
    initialVelocity<R = cocoa.CGPoint>(): R;
    setDocumentFrame<R = void, P0 = cocoa.CGRect>(_setDocumentFrame: P0): R;
    documentFrame<R = cocoa.CGRect>(): R;
    setDestinationOrigin<R = void, P0 = cocoa.CGPoint>(_setDestinationOrigin: P0): R;
    destinationOrigin<R = cocoa.CGPoint>(): R;
    setInitialOrigin<R = void, P0 = cocoa.CGPoint>(_setInitialOrigin: P0): R;
    initialOrigin<R = cocoa.CGPoint>(): R;
    setVerticalScrollDecelerationFactor<R = void, P0 = number>(_setVerticalScrollDecelerationFactor: P0): R;
    verticalScrollDecelerationFactor<R = number>(): R;
    setHorizontalScrollDecelerationFactor<R = void, P0 = number>(_setHorizontalScrollDecelerationFactor: P0): R;
    horizontalScrollDecelerationFactor<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSScrollingMomentumCalculatorBase<T = any> extends cocoa.classes._NSScrollingMomentumCalculator {
      alloc<R = _NSScrollingMomentumCalculatorBase>(): R;
      new: <R = _NSScrollingMomentumCalculatorBase>() => R;
    }
  }
}
