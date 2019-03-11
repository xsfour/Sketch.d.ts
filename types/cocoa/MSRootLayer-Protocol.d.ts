/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRootLayerProtocol<T = any> extends cocoa.MSLayerTraitsProtocol {
    rect<R = cocoa.CGRect>(): R;
    contentBounds<R = cocoa.CGRect>(): R;
    rulerBase<R = cocoa.CGPoint>(): R;
    setRulerBase<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    verticalRulerData<R = cocoa.MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    horizontalRulerData<R = cocoa.MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    layout<R = cocoa.MSLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSLayoutGrid>(_v: P0): R;
    grid<R = cocoa.MSSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSSimpleGrid>(_v: P0): R;
  }
  namespace classes {
    export interface MSRootLayerProtocol<T = any> extends cocoa.classes.MSLayerTraitsProtocol {  }
  }
}

declare const MSRootLayerProtocol: cocoa.classes.MSRootLayerProtocol;
