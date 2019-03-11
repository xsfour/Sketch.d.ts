/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillRendererProtocol<T = any> extends cocoa.MSRendererProtocol {
    renderFill_path_layer_index_rect_hasInnerStroke_context<R = void, P0 = cocoa.MSImmutableStyleFill, P1 = cocoa.MSPath, P2 = cocoa.MSImmutableStyledLayer, P3 = number, P4 = cocoa.CGRect, P5 = boolean, P6 = cocoa.MSRenderingContext>(_renderFill: P0, _path: P1, _layer: P2, _index: P3, _rect: P4, _hasInnerStroke: P5, _context: P6): R;
  }
  namespace classes {
    export interface MSFillRendererProtocol<T = any> extends cocoa.classes.MSRendererProtocol {  }
  }
}

declare const MSFillRendererProtocol: cocoa.classes.MSFillRendererProtocol;
