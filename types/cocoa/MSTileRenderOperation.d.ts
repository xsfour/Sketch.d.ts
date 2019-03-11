/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileRenderOperation<T = any> extends cocoa.NSOperation {
    cxx_destruct<R = void>(): R;
    renderComplete<R = void, P0 = unknown>(_renderComplete: P0): R;
    renderNextPass_image<R = void, P0 = unknown, P1 = cocoa.CGImage>(_renderNextPass: P0, _image: P1): R;
    asynchronous<R = boolean>(): R;
    isFinished<R = boolean>(): R;
    setIsFinished<R = void, P0 = boolean>(_v: P0): R;
    isExecuting<R = boolean>(): R;
    setIsExecuting<R = void, P0 = boolean>(_v: P0): R;
    colorSettings<R = cocoa.MSOverlayColorSettings>(): R;
    setColorSettings<R = void, P0 = cocoa.MSOverlayColorSettings>(_v: P0): R;
    renderPassQueue<R = cocoa.NSOperationQueue>(): R;
    setRenderPassQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    renderer<R = cocoa.MSTiledRenderer>(): R;
    setRenderer<R = void, P0 = cocoa.MSTiledRenderer>(_v: P0): R;
    canvasColorSpace<R = cocoa.NSColorSpace>(): R;
    setCanvasColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    cacheProvider<R = cocoa.MSRenderingContextCacheProvider>(): R;
    setCacheProvider<R = void, P0 = cocoa.MSRenderingContextCacheProvider>(_v: P0): R;
    pageOverlayRenderOptions<R = number>(): R;
    setPageOverlayRenderOptions<R = void, P0 = number>(_v: P0): R;
    pixelated<R = boolean>(): R;
    setPixelated<R = void, P0 = boolean>(_v: P0): R;
    pixelViewSize<R = cocoa.CGSize>(): R;
    setPixelViewSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    backingScaleFactor<R = number>(): R;
    setBackingScaleFactor<R = void, P0 = number>(_v: P0): R;
    visibleContentRect<R = cocoa.CGRect>(): R;
    setVisibleContentRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    renderPasses<R = cocoa.NSArray>(): R;
    setRenderPasses<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    renderedImage<R = cocoa.NSBitmapImageRep>(): R;
    setRenderedImage<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
  }
  namespace classes {
    export interface MSTileRenderOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = MSTileRenderOperation>(): R;
      new: <R = MSTileRenderOperation>() => R;
      renderOperationWithPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = number, P4 = cocoa.CGSize, P5 = number, P6 = boolean, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(_renderOperationWithPage: P0, _inDocument: P1, _visibleContentRect: P2, _backingScaleFactor: P3, _pixelViewSize: P4, _zoomValue: P5, _pixelated: P6, _pageOverlayRenderOptions: P7, _cacheProvider: P8, _canvasColorSpace: P9, _colorSettings: P10): R;
      renderOperationWithRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = number, P3 = cocoa.CGSize, P4 = boolean, P5 = number, P6 = unknown, P7 = unknown, P8 = unknown>(_renderOperationWithRenderPasses: P0, _visibleContentRect: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _pixelated: P4, _pageOverlayRenderOptions: P5, _cacheProvider: P6, _canvasColorSpace: P7, _colorSettings: P8): R;
      bitmapImageFromRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = number, P3 = cocoa.CGSize, P4 = boolean, P5 = number, P6 = unknown, P7 = unknown, P8 = unknown>(_bitmapImageFromRenderPasses: P0, _visibleContentRect: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _pixelated: P4, _pageOverlayRenderOptions: P5, _cacheProvider: P6, _canvasColorSpace: P7, _colorSettings: P8): R;
      bitmapImageRenderForPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = number, P4 = cocoa.CGSize, P5 = number, P6 = boolean, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(_bitmapImageRenderForPage: P0, _inDocument: P1, _visibleContentRect: P2, _backingScaleFactor: P3, _pixelViewSize: P4, _zoomValue: P5, _pixelated: P6, _pageOverlayRenderOptions: P7, _cacheProvider: P8, _canvasColorSpace: P9, _colorSettings: P10): R;
    }
  }
}

declare const MSTileRenderOperation: cocoa.classes.MSTileRenderOperation;
