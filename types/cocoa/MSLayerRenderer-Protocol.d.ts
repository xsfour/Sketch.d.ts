/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerRendererProtocol<T = any> extends cocoa.MSRendererProtocol {
    renderLayerUncached_ignoreDrawingArea_context<R = void, P0 = cocoa.MSImmutableLayer, P1 = boolean, P2 = cocoa.MSRenderingContext>(_renderLayerUncached: P0, _ignoreDrawingArea: P1, _context: P2): R;
    renderLayer_ignoreDrawingArea_context<R = void, P0 = cocoa.MSImmutableLayer, P1 = boolean, P2 = cocoa.MSRenderingContext>(_renderLayer: P0, _ignoreDrawingArea: P1, _context: P2): R;
  }
  namespace classes {
    export interface MSLayerRendererProtocol<T = any> extends cocoa.classes.MSRendererProtocol {  }
  }
}

declare const MSLayerRendererProtocol: cocoa.classes.MSLayerRendererProtocol;
