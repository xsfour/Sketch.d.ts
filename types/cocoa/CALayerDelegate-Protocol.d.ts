/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALayerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    actionForLayer_forKey<R = cocoa.CAAction, P0 = cocoa.CALayer, P1 = cocoa.NSString>(_actionForLayer: P0, _forKey: P1): R;
    layoutSublayersOfLayer<R = void, P0 = cocoa.CALayer>(_layoutSublayersOfLayer: P0): R;
    layerWillDraw<R = void, P0 = cocoa.CALayer>(_layerWillDraw: P0): R;
    drawLayer_inContext<R = void, P0 = cocoa.CALayer, P1 = cocoa.CGContext>(_drawLayer: P0, _inContext: P1): R;
    displayLayer<R = void, P0 = cocoa.CALayer>(_displayLayer: P0): R;
  }
  namespace classes {
    export interface CALayerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const CALayerDelegateProtocol: cocoa.classes.CALayerDelegateProtocol;
