/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowRenderer<T = any> extends cocoa.MSOverlayRenderer {
    drawDotInContext<R = void, P0 = unknown>(_drawDotInContext: P0): R;
    drawTipInContext<R = void, P0 = unknown>(_drawTipInContext: P0): R;
    drawLineAndTipInContext<R = void, P0 = unknown>(_drawLineAndTipInContext: P0): R;
    drawRect_context_selectedLayerIDs<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_drawRect: P0, _context: P1, _selectedLayerIDs: P2): R;
    flowClipPath<R = cocoa.NSBezierPath>(): R;
    setFlowClipPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    flowPath<R = cocoa.NSBezierPath>(): R;
    setFlowPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    flowType<R = number>(): R;
    setFlowType<R = void, P0 = number>(_v: P0): R;
    sourceLayerBounds<R = cocoa.CGRect>(): R;
    setSourceLayerBounds<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    shouldDrawSourceLayerBounds<R = boolean>(): R;
    setShouldDrawSourceLayerBounds<R = void, P0 = boolean>(_v: P0): R;
    flowInfluencingLayerIDs<R = cocoa.NSArray>(): R;
    setFlowInfluencingLayerIDs<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowRenderer<T = any> extends cocoa.classes.MSOverlayRenderer {
      alloc<R = MSFlowRenderer>(): R;
      new: <R = MSFlowRenderer>() => R;
    }
  }
}

declare const MSFlowRenderer: cocoa.classes.MSFlowRenderer;
