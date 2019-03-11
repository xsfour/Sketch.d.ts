/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebExportableRootLayerProtocol<T = any> extends cocoa.MSImmutableRootLayerProtocol {
    rectInFixedViewportWithRect_fromFixingLayer<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.MSImmutableLayer>(_rectInFixedViewportWithRect: P0, _fromFixingLayer: P1): R;
    webExportLayerBehaviorWithRect_fromLayer<R = number, P0 = cocoa.CGRect, P1 = cocoa.MSImmutableLayer>(_webExportLayerBehaviorWithRect: P0, _fromLayer: P1): R;
    containsFixedLayers<R = boolean>(): R;
    preset<R = cocoa.MSArtboardPreset>(): R;
    isFlowHome<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = cocoa.MSImmutableColor>(): R;
  }
  namespace classes {
    export interface MSWebExportableRootLayerProtocol<T = any> extends cocoa.classes.MSImmutableRootLayerProtocol {  }
  }
}

declare const MSWebExportableRootLayerProtocol: cocoa.classes.MSWebExportableRootLayerProtocol;
