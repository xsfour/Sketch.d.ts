/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurRendererCG<T = any> extends NSObject, MSBackgroundBlurRendererProtocol {
    renderDocumentContentUnderLayer_inContext_rect_scale_forRenderingContext<R = void, P0 = unknown, P1 = CGContext, P2 = CGRect, P3 = number, P4 = unknown>(_renderDocumentContentUnderLayer: P0, _inContext: P1, _rect: P2, _scale: P3, _forRenderingContext: P4): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBackgroundBlurRendererCG<T = any> extends NSObject, MSBackgroundBlurRendererProtocol {
      alloc<R = MSBackgroundBlurRendererCG>(): R;
      new: <R = MSBackgroundBlurRendererCG>() => R;
    }
  }
}

declare const MSBackgroundBlurRendererCG: cocoa.classes.MSBackgroundBlurRendererCG;
