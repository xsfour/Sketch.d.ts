/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableHotspotLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableHotspotLayer, MSImmutableLayerPreviewabilityProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    flowDestination<R = unknown>(): R;
  }
  namespace MSImmutableHotspotLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableHotspotLayer, MSImmutableLayerPreviewabilityProtocol {
      alloc<R = MSImmutableHotspotLayer>(): R;
      new: <R = MSImmutableHotspotLayer>() => R;
    }
  }
}

declare const MSImmutableHotspotLayer: cocoa.MSImmutableHotspotLayer.CLASS;
