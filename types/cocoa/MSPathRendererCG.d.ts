/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathRendererCG<T = any> extends cocoa.NSObject, cocoa.MSPathRendererProtocol {
    drawInnerShadowsForPath_style_layer_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_drawInnerShadowsForPath: P0, _style: P1, _layer: P2, _context: P3): R;
    shadowFillShouldClipForStyle<R = boolean, P0 = unknown>(_shadowFillShouldClipForStyle: P0): R;
    drawShadowsForPath_style_layer_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_drawShadowsForPath: P0, _style: P1, _layer: P2, _context: P3): R;
    clipFillsWithPath_style_layer_context_block<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_clipFillsWithPath: P0, _style: P1, _layer: P2, _context: P3, _block: P4): R;
    drawFillForPath_style_layer_fallbackColor_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CGColor, P4 = cocoa.CGRect, P5 = unknown>(_drawFillForPath: P0, _style: P1, _layer: P2, _fallbackColor: P3, _rect: P4, _context: P5): R;
    shouldAdvancedClipToAvoidOuterStrokeStrokeBleedForStyle<R = boolean, P0 = unknown>(_shouldAdvancedClipToAvoidOuterStrokeStrokeBleedForStyle: P0): R;
    shouldAdvancedClipToAvoidInnerStrokeBleedForStyle_layer<R = boolean, P0 = unknown, P1 = unknown>(_shouldAdvancedClipToAvoidInnerStrokeBleedForStyle: P0, _layer: P1): R;
    clipPathForOuterStrokeForStyle_path_layer_context<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_clipPathForOuterStrokeForStyle: P0, _path: P1, _layer: P2, _context: P3): R;
    addClipForPath_style_layer_context_block<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_addClipForPath: P0, _style: P1, _layer: P2, _context: P3, _block: P4): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPathRendererCG<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSPathRendererProtocol {
      alloc<R = MSPathRendererCG>(): R;
      new: <R = MSPathRendererCG>() => R;
    }
  }
}

declare const MSPathRendererCG: cocoa.classes.MSPathRendererCG;
