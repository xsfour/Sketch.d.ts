/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebExportRequest<T = any> extends cocoa.MSExportRequest {
    includedLayerIDs<R = unknown>(): R;
    includedLayerIDsFromLayer_ancestors<R = unknown, P0 = unknown, P1 = unknown>(_includedLayerIDsFromLayer: P0, _ancestors: P1): R;
    layerBehavior<R = number>(): R;
    setLayerBehavior<R = void, P0 = number>(_v: P0): R;
    rootLayer<R = cocoa.MSWebExportableRootLayer>(): R;
    setRootLayer<R = void, P0 = cocoa.MSWebExportableRootLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSWebExportRequest<T = any> extends cocoa.classes.MSExportRequest {
      alloc<R = MSWebExportRequest>(): R;
      new: <R = MSWebExportRequest>() => R;
      webExportRequestForRootLayer_inDocument_atScale<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_webExportRequestForRootLayer: P0, _inDocument: P1, _atScale: P2): R;
    }
  }
}

declare const MSWebExportRequest: cocoa.classes.MSWebExportRequest;
