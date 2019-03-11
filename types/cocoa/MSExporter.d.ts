/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExporter<T = any> extends cocoa.NSObject, cocoa.MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    exportToFileURL<R = boolean, P0 = unknown>(_exportToFileURL: P0): R;
    drawRect_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGContext>(_drawRect: P0, _context: P1): R;
    drawSliceBackgroundIfNecessary<R = void, P0 = cocoa.CGContext>(_drawSliceBackgroundIfNecessary: P0): R;
    previewImage<R = unknown>(): R;
    bitmapImageRep<R = unknown>(): R;
    basicBitmapImageRep<R = unknown>(): R;
    draw<R = void, P0 = cocoa.CGContext>(_draw: P0): R;
    image<R = unknown>(): R;
    data<R = unknown>(): R;
    boundsForVectorRender<R = cocoa.CGRect>(): R;
    initWithRequest_colorSpace_driver<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithRequest: P0, _colorSpace: P1, _driver: P2): R;
    allowSubpixelAntialiasing<R = boolean>(): R;
    setAllowSubpixelAntialiasing<R = void, P0 = boolean>(_v: P0): R;
    bounds<R = cocoa.CGRect>(): R;
    setBounds<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    cache<R = cocoa.BCCache>(): R;
    setCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    colorSpace<R = cocoa.NSColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    driver<R = cocoa.MSRenderingDriver>(): R;
    setDriver<R = void, P0 = cocoa.MSRenderingDriver>(_v: P0): R;
    isPrinting<R = boolean>(): R;
    setIsPrinting<R = void, P0 = boolean>(_v: P0): R;
    request<R = cocoa.MSExportRequest>(): R;
    setRequest<R = void, P0 = cocoa.MSExportRequest>(_v: P0): R;
    zoomIndependentCache<R = cocoa.BCCache>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExporter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSRenderingContextCacheProviderProtocol {
      alloc<R = MSExporter>(): R;
      new: <R = MSExporter>() => R;
      exporterForRequest_colorSpace_driver<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_exporterForRequest: P0, _colorSpace: P1, _driver: P2): R;
      exporterForRequest_colorSpace<R = unknown, P0 = unknown, P1 = unknown>(_exporterForRequest: P0, _colorSpace: P1): R;
      registerExporterClass_forFormat<R = void, P0 = unknown, P1 = unknown>(_registerExporterClass: P0, _forFormat: P1): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSExporter: cocoa.classes.MSExporter;
