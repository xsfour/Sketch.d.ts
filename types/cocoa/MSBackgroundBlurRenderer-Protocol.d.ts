/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurRendererProtocol<T = any> extends cocoa.MSRendererProtocol {
    renderBackgroundBlurBehindLayer_context_clippedToPath<R = void, P0 = cocoa.MSImmutableStyledLayer, P1 = cocoa.MSRenderingContext, P2 = cocoa.MSPath>(_renderBackgroundBlurBehindLayer: P0, _context: P1, _clippedToPath: P2): R;
  }
  namespace classes {
    export interface MSBackgroundBlurRendererProtocol<T = any> extends cocoa.classes.MSRendererProtocol {  }
  }
}

declare const MSBackgroundBlurRendererProtocol: cocoa.classes.MSBackgroundBlurRendererProtocol;
