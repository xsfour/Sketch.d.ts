/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolRendererCG<T = any> extends cocoa.MSArtboardRendererCG {
    drawErrorPatternInRect_context_error<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(_drawErrorPatternInRect: P0, _context: P1, _error: P2): R;
    drawBrokenLinkSymbolErrorIconInRect_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGContext>(_drawBrokenLinkSymbolErrorIconInRect: P0, _context: P1): R;
    drawRecursiveSymbolErrorIconInRect_context<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGContext>(_drawRecursiveSymbolErrorIconInRect: P0, _context: P1): R;
    renderArtboard_forInstance_influenceBounds_inContext<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = unknown>(_renderArtboard: P0, _forInstance: P1, _influenceBounds: P2, _inContext: P3): R;
    renderSymbolOrErrorPatternForInstance_influenceBounds_context<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_renderSymbolOrErrorPatternForInstance: P0, _influenceBounds: P1, _context: P2): R;
    setupTransparencyIfRequiredForInstance_influenceBounds_context_previousAlpha<R = boolean, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = number>(_setupTransparencyIfRequiredForInstance: P0, _influenceBounds: P1, _context: P2, _previousAlpha: P3): R;
  }
  namespace classes {
    export interface MSSymbolRendererCG<T = any> extends cocoa.classes.MSArtboardRendererCG {
      alloc<R = MSSymbolRendererCG>(): R;
      new: <R = MSSymbolRendererCG>() => R;
    }
  }
}

declare const MSSymbolRendererCG: cocoa.classes.MSSymbolRendererCG;
