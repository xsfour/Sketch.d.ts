/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverFrame<T = any> extends cocoa.NSVisualEffectView {
    _verticalRangesForAreasOfInterest<R = unknown>(): R;
    setRangeOfInterest_sourceRange<R = void, P0 = unknown, P1 = unknown>(_setRangeOfInterest: P0, _sourceRange: P1): R;
    _closeButtonPressed<R = void, P0 = unknown>(__closeButtonPressed: P0): R;
    _hasTitlebar<R = boolean>(): R;
    titlebarRect<R = cocoa.CGRect>(): R;
    _markAnchorRectAsNeedingDisplay<R = void>(): R;
    _isBorderView<R = boolean>(): R;
    _drawFrameShadowAndFlushContext<R = void, P0 = unknown>(__drawFrameShadowAndFlushContext: P0): R;
    tileAndSetWindowShape_updateContentView<R = void, P0 = boolean, P1 = boolean>(_tileAndSetWindowShape: P0, _updateContentView: P1): R;
    tileAndSetWindowShape<R = void, P0 = boolean>(_tileAndSetWindowShape: P0): R;
    shapeWindow<R = void>(): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    opaqueAncestor<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    dragRectForFrameRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_dragRectForFrameRect: P0): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    styleMask<R = number>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    _drawFrameMaskInRect<R = void, P0 = cocoa.CGRect>(__drawFrameMaskInRect: P0): R;
    _clearFrameMask<R = void>(): R;
    _frameMask<R = unknown>(): R;
    _createWindowShapeMask_centerRect_scale<R = boolean, P0 = cocoa.CGImage, P1 = cocoa.CGRect, P2 = number>(__createWindowShapeMask: P0, _centerRect: P1, _scale: P2): R;
    _cuiOptionsForCornerMaskForWindowType<R = unknown, P0 = cocoa.__CFString>(__cuiOptionsForCornerMaskForWindowType: P0): R;
    _updatePopoverCornerMaskOnLayer<R = void, P0 = unknown>(__updatePopoverCornerMaskOnLayer: P0): R;
    _adjustedForBoundsAnchorPoint_anchorEdge<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = number>(__adjustedForBoundsAnchorPoint: P0, _anchorEdge: P1): R;
    _popoverIfAvailable<R = unknown>(): R;
    drawBackgroundInRect_ofView_anchorEdge_anchorPoint<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number, P3 = cocoa.CGPoint>(_drawBackgroundInRect: P0, _ofView: P1, _anchorEdge: P2, _anchorPoint: P3): R;
    _coreUIOptionsWithAnchorEdge_anchorPoint_anchorSize_shouldInsetForAnchor_areasOfInterest<R = unknown, P0 = number, P1 = cocoa.CGPoint, P2 = cocoa.CGSize, P3 = boolean, P4 = unknown>(__coreUIOptionsWithAnchorEdge: P0, _anchorPoint: P1, _anchorSize: P2, _shouldInsetForAnchor: P3, _areasOfInterest: P4): R;
    _cui_alignmentRectInsets<R = cocoa.NSEdgeInsets>(): R;
    _cui_optionsForCurrentState<R = unknown>(): R;
    _isBackdropCompatible<R = boolean>(): R;
    _newMinimalAppearancePathInBounds_anchorEdge_anchorPoint_topCapOnly_arrowOffset<R = cocoa.CGPath, P0 = cocoa.CGRect, P1 = number, P2 = cocoa.CGPoint, P3 = boolean, P4 = number>(__newMinimalAppearancePathInBounds: P0, _anchorEdge: P1, _anchorPoint: P2, _topCapOnly: P3, _arrowOffset: P4): R;
    _newMinimalAppearancePathInBounds_anchorEdge_arrowPosition_topCapOnly_arrowOffset<R = cocoa.CGPath, P0 = cocoa.CGRect, P1 = number, P2 = number, P3 = boolean, P4 = number>(__newMinimalAppearancePathInBounds: P0, _anchorEdge: P1, _arrowPosition: P2, _topCapOnly: P3, _arrowOffset: P4): R;
    _setHasDragWindowAppearance<R = void, P0 = boolean>(__setHasDragWindowAppearance: P0): R;
    _hasDragWindowAppearance<R = boolean>(): R;
    _arrowRect<R = cocoa.CGRect>(): R;
    _addTitlebarAnimated_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(__addTitlebarAnimated: P0, _completionHandler: P1): R;
    _removeTitlebarAnimated_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(__removeTitlebarAnimated: P0, _completionHandler: P1): R;
    _metricsForPopoverFrame<R = unknown>(): R;
    _tileAndRedisplay_updateContentView<R = void, P0 = boolean, P1 = boolean>(__tileAndRedisplay: P0, _updateContentView: P1): R;
    contentRectForFrameRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    _setDragImage<R = void, P0 = unknown>(__setDragImage: P0): R;
    _dragImage<R = unknown>(): R;
    _setAnchorPoint_reshape<R = void, P0 = cocoa.CGPoint, P1 = boolean>(__setAnchorPoint: P0, _reshape: P1): R;
    effectiveAnchorEdge<R = number>(): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    _commonPopoverInit<R = void>(): R;
    rangeOfInterest2<R = cocoa.NSFloatRange>(): R;
    setRangeOfInterest2<R = void, P0 = cocoa.NSFloatRange>(_v: P0): R;
    rangeOfInterest1<R = cocoa.NSFloatRange>(): R;
    setRangeOfInterest1<R = void, P0 = cocoa.NSFloatRange>(_v: P0): R;
    _wantsDragWindowAppearance<R = boolean>(): R;
    set_wantsDragWindowAppearance<R = void, P0 = boolean>(_v: P0): R;
    shouldBlurBackground<R = boolean>(): R;
    setShouldBlurBackground<R = void, P0 = boolean>(_v: P0): R;
    shouldInsetForAnchor<R = boolean>(): R;
    setShouldInsetForAnchor<R = void, P0 = boolean>(_v: P0): R;
    anchorPoint<R = cocoa.CGPoint>(): R;
    setAnchorPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    contentInset<R = cocoa.NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    anchorSize<R = cocoa.CGSize>(): R;
    setAnchorSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    anchorEdge<R = number>(): R;
    setAnchorEdge<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSPopoverFrame<T = any> extends cocoa.classes.NSVisualEffectView {
      alloc<R = NSPopoverFrame>(): R;
      new: <R = NSPopoverFrame>() => R;
      contentRectForFrameRect_appearance_anchorSize_contentInset_hasTitlebar<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets, P4 = boolean>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      frameRectForContentRect_appearance_anchorSize_contentInset_hasTitlebar<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets, P4 = boolean>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      contentRectForFrameRect_appearance_anchorSize_contentInset<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3): R;
      frameRectForContentRect_appearance_anchorSize_contentInset<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3): R;
      minFrameSizeForMinContentSize_styleMask<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
      automaticallyNotifiesObserversOfAnchorPoint<R = boolean>(): R;
    }
  }
}

declare const NSPopoverFrame: cocoa.classes.NSPopoverFrame;
