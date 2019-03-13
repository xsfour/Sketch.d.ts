/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDetachedTabDraggingImageToWindowTransitionController<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    _updateAnimationWithProgress<R = void, P0 = number>(__updateAnimationWithProgress: P0): R;
    _startAnimation<R = void>(): R;
    _startNonFullScreenAnimation<R = void>(): R;
    _startFullScreenAnimation<R = void>(): R;
    _setUpWindow<R = void>(): R;
    _setUpWindowAnimationEndFrame<R = void>(): R;
    _setUpWindowAnimationStartFrameWithMiniWindowWidth<R = void, P0 = number>(__setUpWindowAnimationStartFrameWithMiniWindowWidth: P0): R;
    _willDestinationWindowMoveToFullScreen<R = boolean>(): R;
    _initWithMiniWindow_ofWidth_dropLocation_delegate<R = unknown, P0 = unknown, P1 = number, P2 = CGPoint, P3 = unknown>(__initWithMiniWindow: P0, _ofWidth: P1, _dropLocation: P2, _delegate: P3): R;
  }
  namespace classes {
    export interface NSDetachedTabDraggingImageToWindowTransitionController<T = any> extends NSObject {
      alloc<R = NSDetachedTabDraggingImageToWindowTransitionController>(): R;
      new: <R = NSDetachedTabDraggingImageToWindowTransitionController>() => R;
      detachTabAtPointOnScreen_withDraggedMiniWindow_ofWidth_withDelegate<R = void, P0 = CGPoint, P1 = unknown, P2 = number, P3 = unknown>(_detachTabAtPointOnScreen: P0, _withDraggedMiniWindow: P1, _ofWidth: P2, _withDelegate: P3): R;
    }
  }
}

declare const NSDetachedTabDraggingImageToWindowTransitionController: cocoa.classes.NSDetachedTabDraggingImageToWindowTransitionController;
