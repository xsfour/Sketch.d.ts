/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHotspotLayer<T = any> extends _MSHotspotLayer, MSLayerPreviewabilityProtocol {
    resetFlow<R = void>(): R;
    canRotate<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    setFlow<R = void, P0 = unknown>(_setFlow: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    isActive<R = boolean>(): R;
    filterTypeMask<R = number>(): R;
    applyOverride_document<R = void, P0 = unknown, P1 = unknown>(_applyOverride: P0, _document: P1): R;
    badgeType<R = number>(): R;
  }
  namespace classes {
    export interface MSHotspotLayer<T = any> extends _MSHotspotLayer, MSLayerPreviewabilityProtocol {
      alloc<R = MSHotspotLayer>(): R;
      new: <R = MSHotspotLayer>() => R;
      hotspotLayerFromLayer<R = unknown, P0 = unknown>(_hotspotLayerFromLayer: P0): R;
    }
  }
}

declare const MSHotspotLayer: cocoa.classes.MSHotspotLayer;
