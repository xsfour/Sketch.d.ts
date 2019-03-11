/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarView<T = any> extends cocoa.NSView, cocoa.NSCodingProtocol {
    fadeFromAlpha_toAlpha_afterDelay_withDuration<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_fadeFromAlpha: P0, _toAlpha: P1, _afterDelay: P2, _withDuration: P3): R;
    adjustFromFrame_toFrame_afterDelay_withDuration<R = unknown, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = number, P3 = number>(_adjustFromFrame: P0, _toFrame: P1, _afterDelay: P2, _withDuration: P3): R;
    adjustFromSize_toSize_afterDelay_withDuration<R = unknown, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = number, P3 = number>(_adjustFromSize: P0, _toSize: P1, _afterDelay: P2, _withDuration: P3): R;
    moveFromOrigin_ToOrigin_afterDelay_withDuration<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = number, P3 = number>(_moveFromOrigin: P0, _ToOrigin: P1, _afterDelay: P2, _withDuration: P3): R;
    _layout<R = void>(): R;
    _notifyCompressionGroupsFrameChangesEnded<R = void>(): R;
    _reattachViews<R = void, P0 = unknown>(__reattachViews: P0): R;
    _detachViews<R = void, P0 = unknown>(__detachViews: P0): R;
    _removeContainerView<R = void, P0 = unknown>(__removeContainerView: P0): R;
    _attachContainerView<R = void, P0 = unknown>(__attachContainerView: P0): R;
    rectForItem<R = cocoa.CGRect, P0 = unknown>(_rectForItem: P0): R;
    _updateTree<R = void>(): R;
    _noteTreeNeedsUpdate<R = void>(): R;
    newContainerViewForItem<R = unknown, P0 = unknown>(_newContainerViewForItem: P0): R;
    _barsAllowTransitionAnimation<R = boolean>(): R;
    _itemPositionChangingForContainerView<R = void, P0 = unknown>(__itemPositionChangingForContainerView: P0): R;
    _refreshSubviews<R = void>(): R;
    _appStateWillChange<R = void>(): R;
    withAnimationsSuppressed<R = void, P0 = cocoa.CDUnknownBlockType>(_withAnimationsSuppressed: P0): R;
    _commonInit<R = void>(): R;
    defaultItemPadding<R = number>(): R;
    setDefaultItemPadding<R = void, P0 = number>(_v: P0): R;
    animationTimingFunction<R = cocoa.CAMediaTimingFunction>(): R;
    setAnimationTimingFunction<R = void, P0 = cocoa.CAMediaTimingFunction>(_v: P0): R;
    animationDuration<R = number>(): R;
    setAnimationDuration<R = void, P0 = number>(_v: P0): R;
    isInCustomizationPalette<R = boolean>(): R;
    setIsInCustomizationPalette<R = void, P0 = boolean>(_v: P0): R;
    allowsTransitionAnimations<R = boolean>(): R;
    setAllowsTransitionAnimations<R = void, P0 = boolean>(_v: P0): R;
    touchBars<R = cocoa.NSArray>(): R;
    setTouchBars<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    itemTree<R = cocoa.NSTouchBarItemTree>(): R;
    setItemTree<R = void, P0 = cocoa.NSTouchBarItemTree>(_v: P0): R;
    shouldAnimateNextLayoutPass<R = boolean>(): R;
    setShouldAnimateNextLayoutPass<R = void, P0 = boolean>(_v: P0): R;
    layingOut<R = boolean>(): R;
    visualCenterXAnchor<R = cocoa.NSLayoutXAxisAnchor>(): R;
  }
  namespace classes {
    export interface NSTouchBarView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCodingProtocol {
      alloc<R = NSTouchBarView>(): R;
      new: <R = NSTouchBarView>() => R;
    }
  }
}

declare const NSTouchBarView: cocoa.classes.NSTouchBarView;
