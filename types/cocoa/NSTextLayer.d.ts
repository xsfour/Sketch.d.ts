/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextLayer<T = any> extends cocoa._NSBackingLayer, cocoa.CALinearMaskLayerDelegateProtocol {
    setSublayerTransform<R = void, P0 = cocoa.CATransform3D>(_setSublayerTransform: P0): R;
    _renderForegroundInContext<R = void, P0 = cocoa.CGContext>(__renderForegroundInContext: P0): R;
    renderInContext<R = void, P0 = cocoa.CGContext>(_renderInContext: P0): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    NS_didChangeDefaultContentsScale<R = void, P0 = number>(_NS_didChangeDefaultContentsScale: P0): R;
    drawInContext<R = void, P0 = cocoa.CGContext>(_drawInContext: P0): R;
    dealloc<R = void>(): R;
    drawingContext<R = cocoa.NSGraphicsContext>(): R;
    bezelLayer<R = cocoa.CALayer>(): R;
    setBezelLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTextLayer<T = any> extends cocoa.classes._NSBackingLayer, cocoa.classes.CALinearMaskLayerDelegateProtocol {  }
  }
}

declare const NSTextLayer: cocoa.classes.NSTextLayer;
