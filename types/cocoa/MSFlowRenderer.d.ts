/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowRenderer<T0 = void, T1 = void, T2 = void> extends MSOverlayRenderer {
    drawDotInContext<R = void, P0 = unknown>(_drawDotInContext: P0): R;
    drawTipInContext<R = void, P0 = unknown>(_drawTipInContext: P0): R;
    drawLineAndTipInContext<R = void, P0 = unknown>(_drawLineAndTipInContext: P0): R;
    drawRect_context_selectedLayerIDs<R = void, P0 = CGRect, P1 = unknown, P2 = unknown>(_drawRect: P0, _context: P1, _selectedLayerIDs: P2): R;
    flowClipPath<R = NSBezierPath>(): R;
    setFlowClipPath<R = void, P0 = NSBezierPath>(_v: P0): R;
    flowPath<R = NSBezierPath>(): R;
    setFlowPath<R = void, P0 = NSBezierPath>(_v: P0): R;
    flowType<R = number>(): R;
    setFlowType<R = void, P0 = number>(_v: P0): R;
    sourceLayerBounds<R = CGRect>(): R;
    setSourceLayerBounds<R = void, P0 = CGRect>(_v: P0): R;
    shouldDrawSourceLayerBounds<R = boolean>(): R;
    setShouldDrawSourceLayerBounds<R = void, P0 = boolean>(_v: P0): R;
    flowInfluencingLayerIDs<R = NSArray>(): R;
    setFlowInfluencingLayerIDs<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSFlowRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverlayRenderer {
      alloc<R = MSFlowRenderer>(): R;
      new: <R = MSFlowRenderer>() => R;
    }
  }
}

declare const MSFlowRenderer: cocoa.MSFlowRenderer.CLASS;
