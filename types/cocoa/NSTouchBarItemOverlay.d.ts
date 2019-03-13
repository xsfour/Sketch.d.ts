/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemOverlay<T = any> extends NSObject, NSTouchBarPressAndHoldTransposerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    trackTouches<R = void>(): R;
    trackTouch_fromSourceFrame_toFrame<R = void, P0 = unknown, P1 = CGRect, P2 = CGRect>(_trackTouch: P0, _fromSourceFrame: P1, _toFrame: P2): R;
    _setContainerView<R = void, P0 = unknown>(__setContainerView: P0): R;
    hide<R = void>(): R;
    showWithOptions<R = void, P0 = unknown>(_showWithOptions: P0): R;
    show<R = void>(): R;
    dealloc<R = void>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
    _cleanupFromPressAndHold<R = void>(): R;
    trackingTouches<R = boolean>(): R;
    currentRecommendedOptions<R = NSTouchBarItemOverlayOptions>(): R;
    touchBarView<R = NSTouchBarView>(): R;
    showsControlStripForOverlay<R = boolean>(): R;
    setShowsControlStripForOverlay<R = void, P0 = boolean>(_v: P0): R;
    showsCloseButtonForOverlay<R = boolean>(): R;
    setShowsCloseButtonForOverlay<R = void, P0 = boolean>(_v: P0): R;
    popoverTouchBar<R = NSTouchBar>(): R;
    setPopoverTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    overlayTouchBar<R = NSTouchBar>(): R;
    setOverlayTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    item<R = NSTouchBarItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemOverlay<T = any> extends NSObject, NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarItemOverlay>(): R;
      new: <R = NSTouchBarItemOverlay>() => R;
      runHidePopoverAnimationWithTouchBarView_colorView_closeButton_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_runHidePopoverAnimationWithTouchBarView: P0, _colorView: P1, _closeButton: P2, _completionHandler: P3): R;
      runShowPopoverAnimationWithContainerView_touchBarView_colorView_closeButton_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_runShowPopoverAnimationWithContainerView: P0, _touchBarView: P1, _colorView: P2, _closeButton: P3, _completionHandler: P4): R;
      _createContainerViewWithFrame<R = unknown, P0 = CGRect>(__createContainerViewWithFrame: P0): R;
      makePopoverCloseButtonWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_makePopoverCloseButtonWithTarget: P0, _action: P1): R;
      activeOverlay<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarItemOverlay: cocoa.classes.NSTouchBarItemOverlay;
