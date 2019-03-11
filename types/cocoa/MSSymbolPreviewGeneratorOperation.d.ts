/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolPreviewGeneratorOperation<T = any> extends cocoa.NSOperation, cocoa.MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    renderingCache<R = cocoa.BCCache>(): R;
    setRenderingCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    imageBlock<R = cocoa.CDUnknownBlockType>(): R;
    setImageBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    colorSpace<R = cocoa.NSColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    size<R = cocoa.CGSize>(): R;
    setSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    symbolAncestry<R = cocoa.MSImmutableLayerAncestry>(): R;
    setSymbolAncestry<R = void, P0 = cocoa.MSImmutableLayerAncestry>(_v: P0): R;
    zoomIndependentCache<R = cocoa.BCCache>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSymbolPreviewGeneratorOperation<T = any> extends cocoa.classes.NSOperation, cocoa.classes.MSRenderingContextCacheProviderProtocol {
      alloc<R = MSSymbolPreviewGeneratorOperation>(): R;
      new: <R = MSSymbolPreviewGeneratorOperation>() => R;
    }
  }
}

declare const MSSymbolPreviewGeneratorOperation: cocoa.classes.MSSymbolPreviewGeneratorOperation;
