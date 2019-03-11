/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingRubberbandFilter<T = any> extends cocoa.NSObject {
    addDelta_velocity<R = void, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_addDelta: P0, _velocity: P1): R;
    threadSafeAccess<R = void, P0 = cocoa.CDUnknownBlockType>(_threadSafeAccess: P0): R;
    dealloc<R = void>(): R;
    initWithDocumentFrame_constrainedClippingOrigin_clippingSize_isFlipped_pointsPerPixel<R = unknown, P0 = cocoa.CGRect, P1 = cocoa.CGPoint, P2 = cocoa.CGSize, P3 = boolean, P4 = number>(_initWithDocumentFrame: P0, _constrainedClippingOrigin: P1, _clippingSize: P2, _isFlipped: P3, _pointsPerPixel: P4): R;
    filteredVelocity<R = cocoa.CGPoint>(): R;
    filteredDelta<R = cocoa.CGPoint>(): R;
    stiffness<R = number>(): R;
    setStiffness<R = void, P0 = number>(_v: P0): R;
    pointsPerPixel<R = number>(): R;
    setPointsPerPixel<R = void, P0 = number>(_v: P0): R;
    affineTransformOfContent<R = cocoa.CGAffineTransform>(): R;
    setAffineTransformOfContent<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    documentFrame<R = cocoa.CGRect>(): R;
    setDocumentFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    clippingSize<R = cocoa.CGSize>(): R;
    setClippingSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    constrainedClippingOrigin<R = cocoa.CGPoint>(): R;
    setConstrainedClippingOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    stretched<R = boolean>(): R;
    scrollPosition<R = cocoa.CGPoint>(): R;
    setScrollPosition<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    allowsVerticalRubberbanding<R = boolean>(): R;
    setAllowsVerticalRubberbanding<R = void, P0 = boolean>(_v: P0): R;
    allowsHorizontalRubberbanding<R = boolean>(): R;
    setAllowsHorizontalRubberbanding<R = void, P0 = boolean>(_v: P0): R;
    flipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingRubberbandFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingRubberbandFilter>(): R;
      new: <R = _NSScrollingRubberbandFilter>() => R;
      initialize<R = void>(): R;
    }
  }
}
