/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapRendererCG<T = any> extends cocoa.MSLayerRendererCG {
    drawImageWithStyle_layer_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = unknown>(_drawImageWithStyle: P0, _layer: P1, _rect: P2, _context: P3): R;
    imageForLayerWithStyle_layer_context<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_imageForLayerWithStyle: P0, _layer: P1, _context: P2): R;
    drawImageAndFillsForPath_style_layer_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CGRect, P4 = unknown>(_drawImageAndFillsForPath: P0, _style: P1, _layer: P2, _rect: P3, _context: P4): R;
    drawBitmapLayer_context_inRect<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_drawBitmapLayer: P0, _context: P1, _inRect: P2): R;
  }
  namespace classes {
    export interface MSBitmapRendererCG<T = any> extends cocoa.classes.MSLayerRendererCG {
      alloc<R = MSBitmapRendererCG>(): R;
      new: <R = MSBitmapRendererCG>() => R;
    }
  }
}

declare const MSBitmapRendererCG: cocoa.classes.MSBitmapRendererCG;
