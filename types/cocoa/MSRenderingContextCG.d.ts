/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContextCG<T = any> extends cocoa.MSRenderingContext {
    shouldDrawFills<R = boolean>(): R;
    ifCondition_skipDrawingFillsInBlock<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_ifCondition: P0, _skipDrawingFillsInBlock: P1): R;
    shouldClipFills<R = boolean>(): R;
    doNotClipFillsInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_doNotClipFillsInBlock: P0): R;
    applyShadow_withXOffset_respectFlipped<R = void, P0 = unknown, P1 = number, P2 = boolean>(_applyShadow: P0, _withXOffset: P1, _respectFlipped: P2): R;
    applyShadow_withXOffset<R = void, P0 = unknown, P1 = number>(_applyShadow: P0, _withXOffset: P1): R;
    applyShadow_respectFlipped<R = void, P0 = unknown, P1 = boolean>(_applyShadow: P0, _respectFlipped: P1): R;
    shouldDisableSubpixelQuantization<R = boolean>(): R;
    setupCGContext_withRenderingRequest<R = void, P0 = cocoa.CGContext, P1 = unknown>(_setupCGContext: P0, _withRenderingRequest: P1): R;
    hasGraphicsContext<R = boolean>(): R;
    zoomLevelForShadows<R = number>(): R;
    endBitmapTransparencyLayer<R = void, P0 = number>(_endBitmapTransparencyLayer: P0): R;
    endQuartzTransparencyLayer<R = void, P0 = number>(_endQuartzTransparencyLayer: P0): R;
    beginQuartzTransparencyLayerInRect<R = number, P0 = cocoa.CGRect>(_beginQuartzTransparencyLayerInRect: P0): R;
    beginBitmapTransparencyLayerInRect_inheritClip<R = number, P0 = cocoa.CGRect, P1 = boolean>(_beginBitmapTransparencyLayerInRect: P0, _inheritClip: P1): R;
    newTransparencyLayerContextForContext_size<R = cocoa.CGContext, P0 = cocoa.CGContext, P1 = cocoa.CGSize>(_newTransparencyLayerContextForContext: P0, _size: P1): R;
    setContextRef<R = void, P0 = cocoa.CGContext>(_setContextRef: P0): R;
    subContextForBackgroundBlurWithCGContext_backgroundBlurLayer_pointScale_rect<R = unknown, P0 = cocoa.CGContext, P1 = unknown, P2 = number, P3 = cocoa.CGRect>(_subContextForBackgroundBlurWithCGContext: P0, _backgroundBlurLayer: P1, _pointScale: P2, _rect: P3): R;
    subContextWithCGContext_contextIsVectorBacked_pointScale_zoomLevel_options<R = unknown, P0 = cocoa.CGContext, P1 = boolean, P2 = number, P3 = number, P4 = number>(_subContextWithCGContext: P0, _contextIsVectorBacked: P1, _pointScale: P2, _zoomLevel: P3, _options: P4): R;
    subContextWithCGContext_contextIsVectorBacked_renderingRequest<R = unknown, P0 = cocoa.CGContext, P1 = boolean, P2 = unknown>(_subContextWithCGContext: P0, _contextIsVectorBacked: P1, _renderingRequest: P2): R;
    dealloc<R = void>(): R;
    initWithName_driver_cgContext_contextIsVectorBacked_renderingRequest<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGContext, P3 = boolean, P4 = unknown>(_initWithName: P0, _driver: P1, _cgContext: P2, _contextIsVectorBacked: P3, _renderingRequest: P4): R;
    initWithName_driver_context_renderingRequest<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGContext, P3 = unknown>(_initWithName: P0, _driver: P1, _context: P2, _renderingRequest: P3): R;
    disableDrawingFillsCounter<R = number>(): R;
    setDisableDrawingFillsCounter<R = void, P0 = number>(_v: P0): R;
    disableClippingFillsCounter<R = number>(): R;
    setDisableClippingFillsCounter<R = void, P0 = number>(_v: P0): R;
    bitmapTransparencyLayerSavedStates<R = cocoa.NSMutableArray>(): R;
    setBitmapTransparencyLayerSavedStates<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    savedContextRef<R = cocoa.CGContext>(): R;
    setSavedContextRef<R = void, P0 = cocoa.CGContext>(_v: P0): R;
    graphicsContext<R = cocoa.NSGraphicsContext>(): R;
    setGraphicsContext<R = void, P0 = cocoa.NSGraphicsContext>(_v: P0): R;
    contextPool<R = cocoa.MSCGContextPool>(): R;
    setContextPool<R = void, P0 = cocoa.MSCGContextPool>(_v: P0): R;
    contextRef<R = cocoa.CGContext>(): R;
    contextIsVectorBacked<R = boolean>(): R;
  }
  namespace classes {
    export interface MSRenderingContextCG<T = any> extends cocoa.classes.MSRenderingContext {
      alloc<R = MSRenderingContextCG>(): R;
      new: <R = MSRenderingContextCG>() => R;
    }
  }
}

declare const MSRenderingContextCG: cocoa.classes.MSRenderingContextCG;
