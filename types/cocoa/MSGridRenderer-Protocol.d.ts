/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridRendererProtocol<T = any> extends MSRendererProtocol {
    renderGrid_in_origin_context<R = void, P0 = MSImmutableBaseGrid, P1 = CGRect, P2 = CGPoint, P3 = MSRenderingContext>(_renderGrid: P0, _in: P1, _origin: P2, _context: P3): R;
  }
  namespace classes {
    export interface MSGridRendererProtocol<T = any> extends MSRendererProtocol {  }
  }
}
