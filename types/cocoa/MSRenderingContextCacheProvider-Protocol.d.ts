/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContextCacheProviderProtocol<T = any> extends NSObjectProtocol {
    cacheForZoomLevel<R = BCCache, P0 = number>(_cacheForZoomLevel: P0): R;
    zoomIndependentCache<R = BCCache>(): R;
  }
  namespace classes {
    export interface MSRenderingContextCacheProviderProtocol<T = any> extends NSObjectProtocol {  }
  }
}
