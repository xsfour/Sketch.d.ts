/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCacheManager<T = any> extends cocoa.NSObject, cocoa.MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    clearAllCaches<R = void>(): R;
    clearCachesExceptForOwners<R = void, P0 = unknown>(_clearCachesExceptForOwners: P0): R;
    initWithZoomIndependentCache<R = unknown, P0 = unknown>(_initWithZoomIndependentCache: P0): R;
    zoomLevelForSharedCache<R = number>(): R;
    setZoomLevelForSharedCache<R = void, P0 = number>(_v: P0): R;
    zoomIndependentCache<R = cocoa.BCCache>(): R;
    setZoomIndependentCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    renderingCache<R = cocoa.BCCache>(): R;
    setRenderingCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    modelCache<R = cocoa.BCCache>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCacheManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSRenderingContextCacheProviderProtocol {
      alloc<R = MSCacheManager>(): R;
      new: <R = MSCacheManager>() => R;
    }
  }
}

declare const MSCacheManager: cocoa.classes.MSCacheManager;
