/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClipView<T = any> extends NSView {
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _setDocumentViewAlignment<R = void, P0 = number>(__setDocumentViewAlignment: P0): R;
    _documentViewAlignment<R = number>(): R;
    _setAnimationCompletionHandler<R = void, P0 = CDUnknownBlockType>(__setAnimationCompletionHandler: P0): R;
    _animatingScrollTargetOrigin<R = CGPoint>(): R;
    _isAnimatingScroll<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    _shouldAdjustPatternPhase<R = boolean>(): R;
    _scrollInProgress<R = boolean>(): R;
    scrollToPoint<R = void, P0 = CGPoint>(_scrollToPoint: P0): R;
    _needsClipViewAncestorDidScroll<R = boolean>(): R;
    _oldImmediateScrollToPoint<R = void, P0 = CGPoint>(__oldImmediateScrollToPoint: P0): R;
    _immediateScrollToPoint<R = void, P0 = CGPoint>(__immediateScrollToPoint: P0): R;
    _invalidateFocusRingIfItBleedsIntoOurBounds<R = void>(): R;
    _invalidateIntersectionsWithSiblingViews<R = void>(): R;
    _animatedScrollToPoint<R = void, P0 = CGPoint>(__animatedScrollToPoint: P0): R;
    _shouldShowOverlayScrollersForScrollToPoint<R = boolean, P0 = CGPoint>(__shouldShowOverlayScrollersForScrollToPoint: P0): R;
    _canCopyOnScrollForDeltaX_deltaY<R = boolean, P0 = number, P1 = number>(__canCopyOnScrollForDeltaX: P0, _deltaY: P1): R;
    _setHasOverlappingViews<R = void, P0 = boolean>(__setHasOverlappingViews: P0): R;
    _animateCurrentScroll<R = boolean>(): R;
    _setAnimateCurrentScroll<R = void, P0 = boolean>(__setAnimateCurrentScroll: P0): R;
    _setIsScrollDueToUserAction<R = void, P0 = boolean>(__setIsScrollDueToUserAction: P0): R;
    _isScrollDueToUserAction<R = boolean>(): R;
    _setDontConstrainBoundsChange<R = void, P0 = boolean>(__setDontConstrainBoundsChange: P0): R;
    _shouldDontConstrainScroll<R = boolean>(): R;
    _setDontConstrainScroll<R = void, P0 = boolean>(__setDontConstrainScroll: P0): R;
    _setCanAnimateScrolls<R = void, P0 = boolean>(__setCanAnimateScrolls: P0): R;
    _canAnimateScrolls<R = boolean>(): R;
    constrainScrollPoint<R = CGPoint, P0 = CGPoint>(_constrainScrollPoint: P0): R;
    _scrollTo_animateScroll_flashScrollerKnobs<R = boolean, P0 = CGPoint, P1 = number, P2 = number>(__scrollTo: P0, _animateScroll: P1, _flashScrollerKnobs: P2): R;
    _scrollTo_animate<R = boolean, P0 = CGPoint, P1 = boolean>(__scrollTo: P0, _animate: P1): R;
    _scrollTo<R = boolean, P0 = CGPoint>(__scrollTo: P0): R;
    _scrollRectToVisible_fromView_animateScroll_flashScrollerKnobs<R = boolean, P0 = CGRect, P1 = unknown, P2 = number, P3 = number>(__scrollRectToVisible: P0, _fromView: P1, _animateScroll: P2, _flashScrollerKnobs: P3): R;
    _scrollAmountForLineScroll_percentageTowardsMax_limitingSize_multiplier<R = number, P0 = number, P1 = number, P2 = number, P3 = number>(__scrollAmountForLineScroll: P0, _percentageTowardsMax: P1, _limitingSize: P2, _multiplier: P3): R;
    _extendNextScrollRelativeToCurrentPosition<R = void>(): R;
    _proposedScrollPositionIsPixelAligned<R = boolean, P0 = CGPoint>(__proposedScrollPositionIsPixelAligned: P0): R;
    _pixelAlignProposedScrollPosition<R = CGPoint, P0 = CGPoint>(__pixelAlignProposedScrollPosition: P0): R;
    _alignCoords<R = void>(): R;
    isFlipped<R = boolean>(): R;
    viewBoundsChanged<R = void, P0 = unknown>(_viewBoundsChanged: P0): R;
    _reflectDocumentViewBoundsChange<R = void>(): R;
    viewFrameChanged<R = void, P0 = unknown>(_viewFrameChanged: P0): R;
    _reflectDocumentViewFrameChange<R = void>(): R;
    _dirtyRectUncoveredFromOldDocFrame_byNewDocFrame<R = CGRect, P0 = CGRect, P1 = CGRect>(__dirtyRectUncoveredFromOldDocFrame: P0, _byNewDocFrame: P1): R;
    _selfBoundsChanged<R = void>(): R;
    _shouldRedisplayOnChanges<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    setBoundsRotation<R = void, P0 = number>(_setBoundsRotation: P0): R;
    setFrameRotation<R = void, P0 = number>(_setFrameRotation: P0): R;
    _convertedContentInsetsToProposedBounds<R = NSEdgeInsets, P0 = CGRect>(__convertedContentInsetsToProposedBounds: P0): R;
    _insetBounds<R = CGRect>(): R;
    setAutomaticallyCalculatesContentSize<R = void, P0 = boolean>(_setAutomaticallyCalculatesContentSize: P0): R;
    automaticallyCalculatesContentSize<R = boolean>(): R;
    setContentSize<R = void, P0 = CGSize>(_setContentSize: P0): R;
    contentSize<R = CGSize>(): R;
    setContentInset<R = void, P0 = NSEdgeInsets>(_setContentInset: P0): R;
    contentInset<R = NSEdgeInsets>(): R;
    setScrollVelocity<R = void, P0 = CGPoint>(_setScrollVelocity: P0): R;
    scrollVelocity<R = CGPoint>(): R;
    _forcePixelAlignedClipViewFrame<R = boolean>(): R;
    _magnificationAnchorPointForCursorPoint<R = CGPoint, P0 = CGPoint>(__magnificationAnchorPointForCursorPoint: P0): R;
    constrainBoundsRect<R = CGRect, P0 = CGRect>(_constrainBoundsRect: P0): R;
    _constrainBoundsRect<R = CGRect, P0 = CGRect>(__constrainBoundsRect: P0): R;
    _constrainBoundsRectAndAlignIfNeeded<R = CGRect, P0 = CGRect>(__constrainBoundsRectAndAlignIfNeeded: P0): R;
    _checkAlignmentOfOriginOfBoundsRectIfNeeded<R = void, P0 = CGRect>(__checkAlignmentOfOriginOfBoundsRectIfNeeded: P0): R;
    _alignOriginOfBoundsRectToBackingIfNeeded<R = boolean, P0 = CGRect>(__alignOriginOfBoundsRectToBackingIfNeeded: P0): R;
    _currentDocViewFrame<R = CGRect>(): R;
    _pinDocRect<R = void>(): R;
    _cuiSourceListBackgroundOptions<R = unknown>(): R;
    _addOverhangSubviewsIfNeeded<R = void>(): R;
    _updateOverhangSubviewsIfNeeded<R = void>(): R;
    _getOverhangFrames<R = void, P0 = CGRect>(__getOverhangFrames: P0): R;
    _removeOverhangSubviewsIfNeeded<R = void>(): R;
    _setNeedsDisplayInOverhang<R = void, P0 = boolean>(__setNeedsDisplayInOverhang: P0): R;
    _setOverhangSubviews<R = void, P0 = unknown>(__setOverhangSubviews: P0): R;
    _overhangSubviews<R = unknown>(): R;
    _drawsOverhangRects<R = boolean>(): R;
    _drawOverhangShadowsInRect<R = void, P0 = CGRect>(__drawOverhangShadowsInRect: P0): R;
    _drawShadowAroundRect_clipRect<R = void, P0 = CGRect, P1 = CGRect>(__drawShadowAroundRect: P0, _clipRect: P1): R;
    _newShadowOfSize_fromOffset_inImage<R = unknown, P0 = CGSize, P1 = CGPoint, P2 = unknown>(__newShadowOfSize: P0, _fromOffset: P1, _inImage: P2): R;
    setDrawsContentShadow<R = void, P0 = boolean>(_setDrawsContentShadow: P0): R;
    drawsContentShadow<R = boolean>(): R;
    _isUsedByCell<R = boolean>(): R;
    _markUsedByCell<R = unknown>(): R;
    _effectiveContentFrame<R = CGRect>(): R;
    _setDocViewFromRead<R = void, P0 = unknown>(__setDocViewFromRead: P0): R;
    _unregisterForDocViewFrameAndBoundsChangeNotifications<R = void>(): R;
    _registerForDocViewFrameAndBoundsChangeNotifications<R = void>(): R;
    isOpaque<R = boolean>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    documentCursor<R = NSCursor>(): R;
    setDocumentCursor<R = void, P0 = NSCursor>(_v: P0): R;
    copiesOnScroll<R = boolean>(): R;
    setCopiesOnScroll<R = void, P0 = boolean>(_v: P0): R;
    automaticallyAdjustsContentInsets<R = boolean>(): R;
    setAutomaticallyAdjustsContentInsets<R = void, P0 = boolean>(_v: P0): R;
    contentInsets<R = NSEdgeInsets>(): R;
    setContentInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    documentVisibleRect<R = CGRect>(): R;
    documentRect<R = CGRect>(): R;
    documentView<R = NSView>(): R;
    setDocumentView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSClipView<T = any> extends NSView {
      alloc<R = NSClipView>(): R;
      new: <R = NSClipView>() => R;
      _contentShadow<R = unknown>(): R;
      _autoscrollResponseMultiplier<R = number>(): R;
      _setAutoscrollResponseMultiplier<R = void, P0 = number>(__setAutoscrollResponseMultiplier: P0): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSClipView: cocoa.classes.NSClipView;
