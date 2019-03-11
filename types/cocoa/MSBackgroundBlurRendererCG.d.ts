/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurRendererCG<T = any> extends cocoa.NSObject, cocoa.MSBackgroundBlurRendererProtocol {
    renderDocumentContentUnderLayer_inContext_rect_scale_forRenderingContext<R = void, P0 = unknown, P1 = cocoa.CGContext, P2 = cocoa.CGRect, P3 = number, P4 = unknown>(_renderDocumentContentUnderLayer: P0, _inContext: P1, _rect: P2, _scale: P3, _forRenderingContext: P4): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBackgroundBlurRendererCG<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSBackgroundBlurRendererProtocol {
      alloc<R = MSBackgroundBlurRendererCG>(): R;
      new: <R = MSBackgroundBlurRendererCG>() => R;
    }
  }
}

declare const MSBackgroundBlurRendererCG: cocoa.classes.MSBackgroundBlurRendererCG;
