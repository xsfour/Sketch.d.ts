/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollerImpPairDelegateProtocol<T = any> {
    scrollerImpPair_updateScrollerStyleForNewRecommendedScrollerStyle<R = void, P0 = cocoa.NSScrollerImpPair, P1 = number>(_scrollerImpPair: P0, _updateScrollerStyleForNewRecommendedScrollerStyle: P1): R;
    scrollerImpPair_setContentAreaNeedsDisplayInRect<R = void, P0 = cocoa.NSScrollerImpPair, P1 = cocoa.CGRect>(_scrollerImpPair: P0, _setContentAreaNeedsDisplayInRect: P1): R;
    scrollerImpPair_convertContentPoint_toScrollerImp<R = cocoa.CGPoint, P0 = cocoa.NSScrollerImpPair, P1 = cocoa.CGPoint, P2 = cocoa.NSScrollerImp>(_scrollerImpPair: P0, _convertContentPoint: P1, _toScrollerImp: P2): R;
    mouseLocationInContentAreaForScrollerImpPair<R = cocoa.CGPoint, P0 = cocoa.NSScrollerImpPair>(_mouseLocationInContentAreaForScrollerImpPair: P0): R;
    inLiveResizeForScrollerImpPair<R = boolean, P0 = cocoa.NSScrollerImpPair>(_inLiveResizeForScrollerImpPair: P0): R;
    contentAreaRectForScrollerImpPair<R = cocoa.CGRect, P0 = cocoa.NSScrollerImpPair>(_contentAreaRectForScrollerImpPair: P0): R;
    scrollerImpPair_isContentPointVisible<R = boolean, P0 = cocoa.NSScrollerImpPair, P1 = cocoa.CGPoint>(_scrollerImpPair: P0, _isContentPointVisible: P1): R;
  }
  namespace classes {
    export interface NSScrollerImpPairDelegateProtocol<T = any> {  }
  }
}

declare const NSScrollerImpPairDelegateProtocol: cocoa.classes.NSScrollerImpPairDelegateProtocol;
