/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAllRenderersProtocol<T = any> extends cocoa.MSLayerRendererProtocol, cocoa.MSPathRendererProtocol, cocoa.MSFillRendererProtocol, cocoa.MSBackgroundBlurRendererProtocol, cocoa.MSShadowRendererProtocol, cocoa.MSGridRendererProtocol {}
  namespace classes {
    export interface MSAllRenderersProtocol<T = any> extends cocoa.classes.MSLayerRendererProtocol, cocoa.classes.MSPathRendererProtocol, cocoa.classes.MSFillRendererProtocol, cocoa.classes.MSBackgroundBlurRendererProtocol, cocoa.classes.MSShadowRendererProtocol, cocoa.classes.MSGridRendererProtocol {  }
  }
}

declare const MSAllRenderersProtocol: cocoa.classes.MSAllRenderersProtocol;
