/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollerImpDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    scrollerImp_overlayScrollerStateChangedTo<R = void, P0 = cocoa.NSScrollerImp, P1 = number>(_scrollerImp: P0, _overlayScrollerStateChangedTo: P1): R;
    scrollerImp_animateTrackAlphaTo_duration<R = void, P0 = cocoa.NSScrollerImp, P1 = number, P2 = number>(_scrollerImp: P0, _animateTrackAlphaTo: P1, _duration: P2): R;
    scrollerImp_animateKnobAlphaTo_duration<R = void, P0 = cocoa.NSScrollerImp, P1 = number, P2 = number>(_scrollerImp: P0, _animateKnobAlphaTo: P1, _duration: P2): R;
    layer<R = cocoa.CALayer>(): R;
    convertRectFromBacking<R = cocoa.CGRect, P0 = cocoa.CGRect>(_convertRectFromBacking: P0): R;
    convertRectToBacking<R = cocoa.CGRect, P0 = cocoa.CGRect>(_convertRectToBacking: P0): R;
    shouldUseLayerPerPartForScrollerImp<R = boolean, P0 = cocoa.NSScrollerImp>(_shouldUseLayerPerPartForScrollerImp: P0): R;
    convertRectToLayer<R = cocoa.CGRect, P0 = cocoa.CGRect>(_convertRectToLayer: P0): R;
    mouseLocationInScrollerForScrollerImp<R = cocoa.CGPoint, P0 = cocoa.NSScrollerImp>(_mouseLocationInScrollerForScrollerImp: P0): R;
    scrollerImp_animateExpansionTransitionWithDuration<R = void, P0 = cocoa.NSScrollerImp, P1 = number>(_scrollerImp: P0, _animateExpansionTransitionWithDuration: P1): R;
    scrollerImp_animateUIStateTransitionWithDuration<R = void, P0 = cocoa.NSScrollerImp, P1 = number>(_scrollerImp: P0, _animateUIStateTransitionWithDuration: P1): R;
  }
  namespace classes {
    export interface NSScrollerImpDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSScrollerImpDelegateProtocol: cocoa.classes.NSScrollerImpDelegateProtocol;
