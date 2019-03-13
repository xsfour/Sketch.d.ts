/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALinearMaskLayerDelegateProtocol<T = any> extends CALayerDelegateProtocol {
    drawLayer_inLinearMaskContext<R = void, P0 = CALayer, P1 = CALinearMaskContext>(_drawLayer: P0, _inLinearMaskContext: P1): R;
  }
  namespace classes {
    export interface CALinearMaskLayerDelegateProtocol<T = any> extends CALayerDelegateProtocol {  }
  }
}
