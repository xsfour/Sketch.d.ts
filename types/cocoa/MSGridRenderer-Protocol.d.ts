/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridRendererProtocol<T = any> extends cocoa.MSRendererProtocol {
    renderGrid_in_origin_context<R = void, P0 = cocoa.MSImmutableBaseGrid, P1 = cocoa.CGRect, P2 = cocoa.CGPoint, P3 = cocoa.MSRenderingContext>(_renderGrid: P0, _in: P1, _origin: P2, _context: P3): R;
  }
  namespace classes {
    export interface MSGridRendererProtocol<T = any> extends cocoa.classes.MSRendererProtocol {  }
  }
}

declare const MSGridRendererProtocol: cocoa.classes.MSGridRendererProtocol;
