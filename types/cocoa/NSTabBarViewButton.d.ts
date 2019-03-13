/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarViewButton<T = any> extends _NSKeyLoopSplicingContainerView {
    _removeVisualEffectViewForFullScreenToolbarWindow<R = void>(): R;
    _addVisualEffectViewForFullScreenToolbarWindow<R = void>(): R;
    _unregisterBackgroundHighlightLayer<R = void, P0 = unknown>(__unregisterBackgroundHighlightLayer: P0): R;
    _registerBackgroundHighlightLayer<R = void, P0 = unknown>(__registerBackgroundHighlightLayer: P0): R;
    _setBackgroundColor_withAnimation<R = void, P0 = unknown, P1 = unknown>(__setBackgroundColor: P0, _withAnimation: P1): R;
    _isAnimatingBackgroundColor<R = boolean>(): R;
    setHasMouseOverHighlight_animated<R = void, P0 = boolean, P1 = boolean>(_setHasMouseOverHighlight: P0, _animated: P1): R;
    _updateBackgroundLayerImagesForActiveTab_inActiveWindow<R = void, P0 = boolean, P1 = boolean>(__updateBackgroundLayerImagesForActiveTab: P0, _inActiveWindow: P1): R;
    wantsUpdateLayer<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    _reconfigureFullscreenViewsUsingVisualEffectViews<R = void, P0 = boolean>(__reconfigureFullscreenViewsUsingVisualEffectViews: P0): R;
    _reconfigureFullscreenViewsIfNeeded<R = void>(): R;
    _isInFullscreenToolbarWindow<R = boolean>(): R;
    _makeTopBorderView<R = unknown>(): R;
    _makeBoxInVibrantContentView<R = unknown>(): R;
    _makeViewInVibrantContentView<R = unknown>(): R;
    _setUpBackgroundViews<R = void>(): R;
    nonVibrantContentView<R = NSView>(): R;
    vibrantContentView<R = NSView>(): R;
    contentView<R = NSView>(): R;
    useModalCollapsedLayout<R = boolean>(): R;
    setUseModalCollapsedLayout<R = void, P0 = boolean>(_v: P0): R;
    hasMouseOverHighlight<R = boolean>(): R;
    setHasMouseOverHighlight<R = void, P0 = boolean>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    forcesActiveWindowState<R = boolean>(): R;
    setForcesActiveWindowState<R = void, P0 = boolean>(_v: P0): R;
    shouldReduceTransparency<R = boolean>(): R;
    setShouldReduceTransparency<R = void, P0 = boolean>(_v: P0): R;
    backdropGroupName<R = NSString>(): R;
    setBackdropGroupName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabBarViewButton<T = any> extends _NSKeyLoopSplicingContainerView {
      alloc<R = NSTabBarViewButton>(): R;
      new: <R = NSTabBarViewButton>() => R;
    }
  }
}

declare const NSTabBarViewButton: cocoa.classes.NSTabBarViewButton;
