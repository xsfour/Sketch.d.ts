/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathRendererProtocol<T = any> extends cocoa.MSRendererProtocol {
    renderBordersForPath_style_rect_context<R = void, P0 = cocoa.MSPath, P1 = cocoa.MSImmutableStyle, P2 = cocoa.CGRect, P3 = cocoa.MSRenderingContext>(_renderBordersForPath: P0, _style: P1, _rect: P2, _context: P3): R;
    renderFillsForPath_style_layer_rect_context<R = void, P0 = cocoa.MSPath, P1 = cocoa.MSImmutableStyle, P2 = cocoa.MSImmutableStyledLayer, P3 = cocoa.CGRect, P4 = cocoa.MSRenderingContext>(_renderFillsForPath: P0, _style: P1, _layer: P2, _rect: P3, _context: P4): R;
    renderPath_style_layer_inRect_fallbackColor_context<R = void, P0 = cocoa.MSPath, P1 = cocoa.MSImmutableStyle, P2 = cocoa.MSImmutableStyledLayer, P3 = cocoa.CGRect, P4 = cocoa.CGColor, P5 = cocoa.MSRenderingContext>(_renderPath: P0, _style: P1, _layer: P2, _inRect: P3, _fallbackColor: P4, _context: P5): R;
  }
  namespace classes {
    export interface MSPathRendererProtocol<T = any> extends cocoa.classes.MSRendererProtocol {  }
  }
}

declare const MSPathRendererProtocol: cocoa.classes.MSPathRendererProtocol;
