/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSliceLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSliceLayer, MSImmutableLayerPreviewabilityProtocol, MSLayerWithBackgroundColorProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableSliceLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSliceLayer, MSImmutableLayerPreviewabilityProtocol, MSLayerWithBackgroundColorProtocol {
      alloc<R = MSImmutableSliceLayer>(): R;
      new: <R = MSImmutableSliceLayer>() => R;
    }
  }
}

declare const MSImmutableSliceLayer: cocoa.MSImmutableSliceLayer.CLASS;
