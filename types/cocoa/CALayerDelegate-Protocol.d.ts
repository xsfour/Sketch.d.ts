/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALayerDelegateProtocol<T = any> extends NSObjectProtocol {
    actionForLayer_forKey<R = CAAction, P0 = CALayer, P1 = NSString>(_actionForLayer: P0, _forKey: P1): R;
    layoutSublayersOfLayer<R = void, P0 = CALayer>(_layoutSublayersOfLayer: P0): R;
    layerWillDraw<R = void, P0 = CALayer>(_layerWillDraw: P0): R;
    drawLayer_inContext<R = void, P0 = CALayer, P1 = CGContext>(_drawLayer: P0, _inContext: P1): R;
    displayLayer<R = void, P0 = CALayer>(_displayLayer: P0): R;
  }
  namespace classes {
    export interface CALayerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
