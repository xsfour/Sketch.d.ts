/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTransitionOverlayWindow<T = any> extends NSPanel {
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    startExitFullScreenAnimationWithDuration_reduced_completionHandler<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_startExitFullScreenAnimationWithDuration: P0, _reduced: P1, _completionHandler: P2): R;
    startEnterFullScreenAnimationWithDuration_reduced_completionHandler<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_startEnterFullScreenAnimationWithDuration: P0, _reduced: P1, _completionHandler: P2): R;
    _adjustedWindowEndFrame<R = CGRect>(): R;
    positionLayersForEnter_reduced<R = void, P0 = boolean, P1 = boolean>(_positionLayersForEnter: P0, _reduced: P1): R;
    adjustedStartFrame<R = CGRect>(): R;
    initWithScreen<R = unknown, P0 = unknown>(_initWithScreen: P0): R;
    shadowAfterDeltaRect<R = CGRect>(): R;
    setShadowAfterDeltaRect<R = void, P0 = CGRect>(_v: P0): R;
    shadowDeltaRect<R = CGRect>(): R;
    setShadowDeltaRect<R = void, P0 = CGRect>(_v: P0): R;
    windowSnapshotStartFrame<R = CGRect>(): R;
    setWindowSnapshotStartFrame<R = void, P0 = CGRect>(_v: P0): R;
    transitionedWindowAfterContents<R = unknown>(): R;
    setTransitionedWindowAfterContents<R = void, P0 = unknown>(_v: P0): R;
    transitionedWindowBeforeContents<R = unknown>(): R;
    setTransitionedWindowBeforeContents<R = void, P0 = unknown>(_v: P0): R;
    transitionedWindowTargetFrame<R = CGRect>(): R;
    setTransitionedWindowTargetFrame<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenTransitionOverlayWindow<T = any> extends NSPanel {
      alloc<R = _NSFullScreenTransitionOverlayWindow>(): R;
      new: <R = _NSFullScreenTransitionOverlayWindow>() => R;
    }
  }
}
