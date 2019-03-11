/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSlideAndCrossFadeAnimationProjectionWindow<T = any> extends cocoa._NSBorderlessLayerTreeProjectionWindow {
    startAnimationWithDuration_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_startAnimationWithDuration: P0, _completionHandler: P1): R;
    initWithBeforeLayer_initialScreenRect_finalScreenRect_afterLayer_initialScreenRect_finalScreenRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGRect, P3 = unknown, P4 = cocoa.CGRect, P5 = cocoa.CGRect>(_initWithBeforeLayer: P0, _initialScreenRect: P1, _finalScreenRect: P2, _afterLayer: P3, _initialScreenRect1: P4, _finalScreenRect1: P5): R;
    layerFrameFromScreenRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_layerFrameFromScreenRect: P0): R;
  }
  namespace classes {
    export interface _NSSlideAndCrossFadeAnimationProjectionWindow<T = any> extends cocoa.classes._NSBorderlessLayerTreeProjectionWindow {
      alloc<R = _NSSlideAndCrossFadeAnimationProjectionWindow>(): R;
      new: <R = _NSSlideAndCrossFadeAnimationProjectionWindow>() => R;
    }
  }
}
