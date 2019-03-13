/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayRenderingDelegateProtocol<T = any> {
    renderOverlayInRect_context_pageOverlayRenderOptions<R = void, P0 = CGRect, P1 = CGContext, P2 = number>(_renderOverlayInRect: P0, _context: P1, _pageOverlayRenderOptions: P2): R;
  }
  namespace classes {
    export interface MSOverlayRenderingDelegateProtocol<T = any> {  }
  }
}
