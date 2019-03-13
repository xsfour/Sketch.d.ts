/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerRendererProtocol<T = any> extends MSRendererProtocol {
    renderLayerUncached_ignoreDrawingArea_context<R = void, P0 = MSImmutableLayer, P1 = boolean, P2 = MSRenderingContext>(_renderLayerUncached: P0, _ignoreDrawingArea: P1, _context: P2): R;
    renderLayer_ignoreDrawingArea_context<R = void, P0 = MSImmutableLayer, P1 = boolean, P2 = MSRenderingContext>(_renderLayer: P0, _ignoreDrawingArea: P1, _context: P2): R;
  }
  namespace classes {
    export interface MSLayerRendererProtocol<T = any> extends MSRendererProtocol {  }
  }
}
