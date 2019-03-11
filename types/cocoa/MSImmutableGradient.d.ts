/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableGradient<T = any> extends cocoa._MSImmutableGradient {
    ellipseTransformInRect<R = cocoa.CGAffineTransform, P0 = cocoa.CGRect>(_ellipseTransformInRect: P0): R;
    NSGradientWithColorSpace<R = unknown, P0 = unknown>(_NSGradientWithColorSpace: P0): R;
    newCGGradientForColorSpace<R = cocoa.CGGradient, P0 = cocoa.CGColorSpace>(_newCGGradientForColorSpace: P0): R;
    newCGGradientForColorSpace_colorConverter<R = cocoa.CGGradient, P0 = cocoa.CGColorSpace, P1 = cocoa.CDUnknownBlockType>(_newCGGradientForColorSpace: P0, _colorConverter: P1): R;
    conditionedEllipseLength<R = number>(): R;
    pointAtIndex<R = cocoa.CGPoint, P0 = number>(_pointAtIndex: P0): R;
    stopAtIndex<R = unknown, P0 = number>(_stopAtIndex: P0): R;
    defaultStopsArray<R = unknown>(): R;
    drawAngularGradientInRect_context_cacheKey<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_drawAngularGradientInRect: P0, _context: P1, _cacheKey: P2): R;
    drawRadialFillInRect_gradient_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGGradient, P2 = unknown>(_drawRadialFillInRect: P0, _gradient: P1, _context: P2): R;
    drawRadialGradientInRect_gradient_firstPoint_length_ellipseTransform_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGGradient, P2 = cocoa.CGPoint, P3 = number, P4 = cocoa.CGAffineTransform, P5 = cocoa.CGContext>(_drawRadialGradientInRect: P0, _gradient: P1, _firstPoint: P2, _length: P3, _ellipseTransform: P4, _context: P5): R;
    drawLinearFillInRect_gradient_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGGradient, P2 = unknown>(_drawLinearFillInRect: P0, _gradient: P1, _context: P2): R;
    drawGradientWithTransparentStopsInRect_gradient_context_gradientDrawingBlock<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGGradient, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_drawGradientWithTransparentStopsInRect: P0, _gradient: P1, _context: P2, _gradientDrawingBlock: P3): R;
    createMaskGradientWithContext<R = cocoa.CGGradient, P0 = unknown>(_createMaskGradientWithContext: P0): R;
    drawFillInRect_forBorderThickness_context_cacheKey<R = void, P0 = cocoa.CGRect, P1 = number, P2 = unknown, P3 = unknown>(_drawFillInRect: P0, _forBorderThickness: P1, _context: P2, _cacheKey: P3): R;
    angularGradientImageInRect_colorSpace_cache_cacheKey<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown, P3 = unknown>(_angularGradientImageInRect: P0, _colorSpace: P1, _cache: P2, _cacheKey: P3): R;
    interpolatedStartAndStopColorForStops<R = unknown, P0 = unknown>(_interpolatedStartAndStopColorForStops: P0): R;
    newAngularGradientImageInRect_stops_colorSpace<R = cocoa.CGImage, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_newAngularGradientImageInRect: P0, _stops: P1, _colorSpace: P2): R;
    sortedStops<R = unknown>(): R;
    angularGradientImageInRect_colorSpace<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_angularGradientImageInRect: P0, _colorSpace: P1): R;
    hasOpacity<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableGradient<T = any> extends cocoa.classes._MSImmutableGradient {
      alloc<R = MSImmutableGradient>(): R;
      new: <R = MSImmutableGradient>() => R;
      gradientFromStops_colorSpace<R = unknown, P0 = unknown, P1 = unknown>(_gradientFromStops: P0, _colorSpace: P1): R;
      defaultGradientStops<R = unknown>(): R;
    }
  }
}

declare const MSImmutableGradient: cocoa.classes.MSImmutableGradient;
