/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarAccessoryViewController<T = any> extends NSViewController, NSAnimationDelegateProtocol, NSAnimatablePropertyContainerProtocol {
    cxx_destruct<R = void>(): R;
    _animatorClass<R = unknown>(): R;
    _makeFloatingTrailingWidget<R = unknown>(): R;
    recalculateKeyViewLoop<R = void>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    view<R = unknown>(): R;
    _registerForFrameChangedNotifications<R = void>(): R;
    _unregisterForFrameChangeNotifications<R = void>(): R;
    _finishVisibilityAnimation<R = void, P0 = number>(__finishVisibilityAnimation: P0): R;
    _updateVisibilityAnimationWithProgress<R = void, P0 = number>(__updateVisibilityAnimationWithProgress: P0): R;
    _startAnimatingPlacement<R = void, P0 = boolean>(__startAnimatingPlacement: P0): R;
    _setHidden_animated<R = void, P0 = boolean, P1 = boolean>(__setHidden: P0, _animated: P1): R;
    animationData<R = unknown>(): R;
    _updateClipViewFrame<R = void>(): R;
    _currentClipViewFrame<R = CGRect>(): R;
    _auxiliaryViewFrameChanged<R = void, P0 = unknown>(__auxiliaryViewFrameChanged: P0): R;
    _endUpdates<R = void>(): R;
    _beginUpdates<R = void>(): R;
    _setUpdatingFrame<R = void, P0 = boolean>(__setUpdatingFrame: P0): R;
    _clipViewAutoresizingMask<R = number>(): R;
    _viewAutoresizingMask<R = number>(): R;
    _commonInit<R = void>(): R;
    isToolbarAccessoryView<R = boolean>(): R;
    setIsToolbarAccessoryView<R = void, P0 = boolean>(_v: P0): R;
    inFullScreen<R = boolean>(): R;
    setInFullScreen<R = void, P0 = boolean>(_v: P0): R;
    layoutAttribute<R = number>(): R;
    setLayoutAttribute<R = void, P0 = number>(_v: P0): R;
    animations<R = NSDictionary>(): R;
    setAnimations<R = void, P0 = NSDictionary>(_v: P0): R;
    fullScreenMinHeight<R = number>(): R;
    setFullScreenMinHeight<R = void, P0 = number>(_v: P0): R;
    visibleAmount<R = number>(): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    revealAmount<R = number>(): R;
    setRevealAmount<R = void, P0 = number>(_v: P0): R;
    containingClipView<R = NSClipView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTitlebarAccessoryViewController<T = any> extends NSViewController, NSAnimationDelegateProtocol, NSAnimatablePropertyContainerProtocol {
      alloc<R = NSTitlebarAccessoryViewController>(): R;
      new: <R = NSTitlebarAccessoryViewController>() => R;
    }
  }
}

declare const NSTitlebarAccessoryViewController: cocoa.classes.NSTitlebarAccessoryViewController;
