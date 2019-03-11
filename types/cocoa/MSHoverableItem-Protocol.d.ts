/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverableItemProtocol<T = any> {
    refreshOverlay<R = void>(): R;
    canBeHoveredOnPage<R = boolean, P0 = cocoa.MSPage>(_canBeHoveredOnPage: P0): R;
    drawHoverWithZoom_color_cache<R = void, P0 = number, P1 = cocoa.NSColor, P2 = cocoa.BCCache>(_drawHoverWithZoom: P0, _color: P1, _cache: P2): R;
    hoveredLayer<R = cocoa.MSLayer>(): R;
  }
  namespace classes {
    export interface MSHoverableItemProtocol<T = any> {  }
  }
}

declare const MSHoverableItemProtocol: cocoa.classes.MSHoverableItemProtocol;
