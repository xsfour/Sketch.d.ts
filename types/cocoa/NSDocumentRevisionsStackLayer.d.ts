/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsStackLayer<T = any> extends cocoa.CALayer {
    anchorPoint<R = cocoa.CGPoint>(): R;
    setAnchorPoint<R = void, P0 = cocoa.CGPoint>(_setAnchorPoint: P0): R;
    dealloc<R = void>(): R;
    backdropLayer<R = cocoa.CABackdropLayer>(): R;
    setBackdropLayer<R = void, P0 = cocoa.CABackdropLayer>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsStackLayer<T = any> extends cocoa.classes.CALayer {  }
  }
}

declare const NSDocumentRevisionsStackLayer: cocoa.classes.NSDocumentRevisionsStackLayer;
