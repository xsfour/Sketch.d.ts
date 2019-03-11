/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALinearMaskLayerDelegateProtocol<T = any> extends cocoa.CALayerDelegateProtocol {
    drawLayer_inLinearMaskContext<R = void, P0 = cocoa.CALayer, P1 = cocoa.CALinearMaskContext>(_drawLayer: P0, _inLinearMaskContext: P1): R;
  }
  namespace classes {
    export interface CALinearMaskLayerDelegateProtocol<T = any> extends cocoa.classes.CALayerDelegateProtocol {  }
  }
}

declare const CALinearMaskLayerDelegateProtocol: cocoa.classes.CALinearMaskLayerDelegateProtocol;
