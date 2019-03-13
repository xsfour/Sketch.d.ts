/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsStackLayer<T = any> extends CALayer {
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_setAnchorPoint: P0): R;
    dealloc<R = void>(): R;
    backdropLayer<R = CABackdropLayer>(): R;
    setBackdropLayer<R = void, P0 = CABackdropLayer>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsStackLayer<T = any> extends CALayer {  }
  }
}

declare const NSDocumentRevisionsStackLayer: cocoa.classes.NSDocumentRevisionsStackLayer;
