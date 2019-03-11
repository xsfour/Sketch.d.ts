/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSliceLayer<T = any> extends cocoa._MSImmutableSliceLayer, cocoa.MSImmutableLayerPreviewabilityProtocol, cocoa.MSLayerWithBackgroundColorProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableSliceLayer<T = any> extends cocoa.classes._MSImmutableSliceLayer, cocoa.classes.MSImmutableLayerPreviewabilityProtocol, cocoa.classes.MSLayerWithBackgroundColorProtocol {
      alloc<R = MSImmutableSliceLayer>(): R;
      new: <R = MSImmutableSliceLayer>() => R;
    }
  }
}

declare const MSImmutableSliceLayer: cocoa.classes.MSImmutableSliceLayer;
