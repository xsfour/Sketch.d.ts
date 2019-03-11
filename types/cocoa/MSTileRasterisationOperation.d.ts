/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileRasterisationOperation<T = any> extends cocoa.NSOperation {
    cxx_destruct<R = void>(): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.CGColorSpace>(_v: P0): R;
    cacheProvider<R = cocoa.MSRenderingContextCacheProvider>(): R;
    setCacheProvider<R = void, P0 = cocoa.MSRenderingContextCacheProvider>(_v: P0): R;
    contextPool<R = cocoa.MSCGContextPool>(): R;
    setContextPool<R = void, P0 = cocoa.MSCGContextPool>(_v: P0): R;
    driver<R = cocoa.MSRenderingDriver>(): R;
    setDriver<R = void, P0 = cocoa.MSRenderingDriver>(_v: P0): R;
    document<R = cocoa.MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = cocoa.MSImmutableDocumentData>(_v: P0): R;
    page<R = cocoa.MSImmutablePage>(): R;
    setPage<R = void, P0 = cocoa.MSImmutablePage>(_v: P0): R;
    backingScaleFactor<R = number>(): R;
    setBackingScaleFactor<R = void, P0 = number>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    rect<R = unknown>(): R;
    setRect<R = void, P0 = unknown>(_v: P0): R;
    bytesPerRow<R = number>(): R;
    setBytesPerRow<R = void, P0 = number>(_v: P0): R;
    memory<R = void>(): R;
    setMemory<R = void, P0 = void>(_v: P0): R;
  }
  namespace classes {
    export interface MSTileRasterisationOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = MSTileRasterisationOperation>(): R;
      new: <R = MSTileRasterisationOperation>() => R;
      operationWithMemory_bytesPerRow_rect_zoomValue_backingScaleFactor_page_document_driver_contextPool_cacheProvider_colorSpace<R = unknown, P0 = void, P1 = number, P2 = unknown, P3 = number, P4 = number, P5 = unknown, P6 = unknown, P7 = unknown, P8 = unknown, P9 = unknown, P10 = cocoa.CGColorSpace>(_operationWithMemory: P0, _bytesPerRow: P1, _rect: P2, _zoomValue: P3, _backingScaleFactor: P4, _page: P5, _document: P6, _driver: P7, _contextPool: P8, _cacheProvider: P9, _colorSpace: P10): R;
    }
  }
}

declare const MSTileRasterisationOperation: cocoa.classes.MSTileRasterisationOperation;
