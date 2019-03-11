/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContextCacheProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    cacheForZoomLevel<R = cocoa.BCCache, P0 = number>(_cacheForZoomLevel: P0): R;
    zoomIndependentCache<R = cocoa.BCCache>(): R;
  }
  namespace classes {
    export interface MSRenderingContextCacheProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSRenderingContextCacheProviderProtocol: cocoa.classes.MSRenderingContextCacheProviderProtocol;
