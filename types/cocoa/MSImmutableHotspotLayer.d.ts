/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableHotspotLayer<T = any> extends cocoa._MSImmutableHotspotLayer, cocoa.MSImmutableLayerPreviewabilityProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    flowDestination<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableHotspotLayer<T = any> extends cocoa.classes._MSImmutableHotspotLayer, cocoa.classes.MSImmutableLayerPreviewabilityProtocol {
      alloc<R = MSImmutableHotspotLayer>(): R;
      new: <R = MSImmutableHotspotLayer>() => R;
    }
  }
}

declare const MSImmutableHotspotLayer: cocoa.classes.MSImmutableHotspotLayer;
