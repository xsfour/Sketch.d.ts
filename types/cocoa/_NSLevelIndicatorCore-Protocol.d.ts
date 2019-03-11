/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorCoreProtocol<T = any> extends cocoa.NSObjectProtocol {
    alignmentRectInsetsForState<R = cocoa.NSEdgeInsets, P0 = unknown>(_alignmentRectInsetsForState: P0): R;
    indicatorSizeForState<R = cocoa.CGSize, P0 = unknown>(_indicatorSizeForState: P0): R;
    vibrancyBlendModeForState<R = number, P0 = unknown>(_vibrancyBlendModeForState: P0): R;
    drawInRect_inContext_forState<R = void, P0 = cocoa.CGRect, P1 = cocoa.NSGraphicsContext, P2 = unknown>(_drawInRect: P0, _inContext: P1, _forState: P2): R;
    drawFocusRingMaskInRect_inContext_forState<R = void, P0 = cocoa.CGRect, P1 = cocoa.NSGraphicsContext, P2 = unknown>(_drawFocusRingMaskInRect: P0, _inContext: P1, _forState: P2): R;
    layoutSublayersOfLayer_forState<R = void, P0 = cocoa.CALayer, P1 = unknown>(_layoutSublayersOfLayer: P0, _forState: P1): R;
    updateLayer_forState<R = void, P0 = cocoa.CALayer, P1 = unknown>(_updateLayer: P0, _forState: P1): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorCoreProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
