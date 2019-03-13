/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRenderInContextlessLayer<T = any> extends _NSBackingLayer {
    renderInContext<R = void, P0 = CGContext>(_renderInContext: P0): R;
  }
  namespace classes {
    export interface NSRenderInContextlessLayer<T = any> extends _NSBackingLayer {  }
  }
}

declare const NSRenderInContextlessLayer: cocoa.classes.NSRenderInContextlessLayer;
