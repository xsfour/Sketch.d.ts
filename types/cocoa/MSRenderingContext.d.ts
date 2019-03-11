/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContext<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    shouldLog<R = boolean>(): R;
    applyShadow<R = void, P0 = unknown>(_applyShadow: P0): R;
    applyStrokeColor<R = void, P0 = unknown>(_applyStrokeColor: P0): R;
    applyFillColor<R = void, P0 = unknown>(_applyFillColor: P0): R;
    shouldSkipDrawingShadow<R = boolean, P0 = unknown>(_shouldSkipDrawingShadow: P0): R;
    isDrawingSymbol<R = boolean>(): R;
    isDrawingSymbolInstance<R = boolean>(): R;
    drawSymbolInstance_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_drawSymbolInstance: P0, _inBlock: P1): R;
    drawSymbolMaster_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_drawSymbolMaster: P0, _inBlock: P1): R;
    canDrawSymbolMasterWithoutRiskingRecursion<R = boolean, P0 = unknown>(_canDrawSymbolMasterWithoutRiskingRecursion: P0): R;
    drawingAreaIntersectsLayer<R = boolean, P0 = unknown>(_drawingAreaIntersectsLayer: P0): R;
    shouldDrawLayer_withMaskingShapeGroup_ignoreDrawingArea<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean>(_shouldDrawLayer: P0, _withMaskingShapeGroup: P1, _ignoreDrawingArea: P2): R;
    clipToRect<R = void, P0 = cocoa.CGRect>(_clipToRect: P0): R;
    applyLayerTransform_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_applyLayerTransform: P0, _inBlock: P1): R;
    applySettings_withOptions_inBlock<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_applySettings: P0, _withOptions: P1, _inBlock: P2): R;
    prepareLayerDrawing_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_prepareLayerDrawing: P0, _inBlock: P1): R;
    setBlendMode<R = number, P0 = number>(_setBlendMode: P0): R;
    setAlpha<R = number, P0 = number>(_setAlpha: P0): R;
    multiplyAlphaBy<R = number, P0 = number>(_multiplyAlphaBy: P0): R;
    beginTransparencyLayerInRect_inheritClip<R = number, P0 = cocoa.CGRect, P1 = boolean>(_beginTransparencyLayerInRect: P0, _inheritClip: P1): R;
    beginTransparencyLayerInRect<R = number, P0 = cocoa.CGRect>(_beginTransparencyLayerInRect: P0): R;
    endTransparencyLayer<R = void, P0 = number>(_endTransparencyLayer: P0): R;
    beginTransparencyLayer<R = number>(): R;
    transparencyLayerInRect_inBlock<R = void, P0 = cocoa.CGRect, P1 = cocoa.CDUnknownBlockType>(_transparencyLayerInRect: P0, _inBlock: P1): R;
    transparencyLayerInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_transparencyLayerInBlock: P0): R;
    cancel<R = void>(): R;
    depthOfLayer<R = number, P0 = unknown>(_depthOfLayer: P0): R;
    layer_isSiblingOfLayer<R = boolean, P0 = unknown, P1 = unknown>(_layer: P0, _isSiblingOfLayer: P1): R;
    popParentGroup<R = unknown>(): R;
    pushParentGroup<R = void, P0 = unknown>(_pushParentGroup: P0): R;
    parentGroupForLayer<R = unknown, P0 = unknown>(_parentGroupForLayer: P0): R;
    popGraphicsState<R = void>(): R;
    pushGraphicsState<R = void>(): R;
    accumulatedRotateFlipTransform<R = cocoa.CGAffineTransform>(): R;
    accumulatedTransform<R = cocoa.CGAffineTransform>(): R;
    concatTransform<R = void, P0 = cocoa.CGAffineTransform>(_concatTransform: P0): R;
    setCachedValue_forModelObject_key_zoomIndependent<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_setCachedValue: P0, _forModelObject: P1, _key: P2, _zoomIndependent: P3): R;
    cachedValueForModelObject_key_zoomIndependent_orCreateWithBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(_cachedValueForModelObject: P0, _key: P1, _zoomIndependent: P2, _orCreateWithBlock: P3): R;
    tearDown<R = void>(): R;
    setUp<R = void>(): R;
    renderInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_renderInBlock: P0): R;
    renderRect_withStyle<R = void, P0 = cocoa.CGRect, P1 = unknown>(_renderRect: P0, _withStyle: P1): R;
    renderLayer_ignoreCacheAndDrawingArea<R = void, P0 = unknown, P1 = boolean>(_renderLayer: P0, _ignoreCacheAndDrawingArea: P1): R;
    initWithName_driver_renderingRequest<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _driver: P1, _renderingRequest: P2): R;
    totalTransform<R = cocoa.CGAffineTransform>(): R;
    setTotalTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    symbolInstanceStack<R = cocoa.NSMutableArray>(): R;
    setSymbolInstanceStack<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    symbolMasterStack<R = cocoa.NSMutableArray>(): R;
    setSymbolMasterStack<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    parentGroupStack<R = cocoa.NSMutableArray>(): R;
    setParentGroupStack<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    internalBlendMode<R = number>(): R;
    setInternalBlendMode<R = void, P0 = number>(_v: P0): R;
    alphaValue<R = number>(): R;
    setAlphaValue<R = void, P0 = number>(_v: P0): R;
    rotateFlipTransform<R = cocoa.CGAffineTransform>(): R;
    setRotateFlipTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    driver<R = cocoa.MSRenderingDriver>(): R;
    drawingArea<R = cocoa.CGRect>(): R;
    setDrawingArea<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    cancelled<R = boolean>(): R;
    setCancelled<R = void, P0 = boolean>(_v: P0): R;
    renderingRequest<R = cocoa.MSRenderingRequest>(): R;
    zoomLevelForShadows<R = number>(): R;
    rootLayer<R = cocoa.MSImmutableLayerGroup>(): R;
  }
  namespace classes {
    export interface MSRenderingContext<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSRenderingContext>(): R;
      new: <R = MSRenderingContext>() => R;
    }
  }
}

declare const MSRenderingContext: cocoa.classes.MSRenderingContext;
