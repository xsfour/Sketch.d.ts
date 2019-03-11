/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageController<T = any> extends cocoa.NSViewController, cocoa.NSAnimatablePropertyContainerProtocol, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    _animatorClass<R = unknown>(): R;
    _prepareViewController_withObject<R = void, P0 = unknown, P1 = unknown>(__prepareViewController: P0, _withObject: P1): R;
    _frameOfRepresentedObjectFromDelegate_defaultFrame<R = cocoa.CGRect, P0 = unknown, P1 = cocoa.CGRect>(__frameOfRepresentedObjectFromDelegate: P0, _defaultFrame: P1): R;
    _isInSwipeGesture<R = boolean>(): R;
    _useCachedImageViewsForTransition<R = boolean>(): R;
    _initializeTransitionViewHierarchy<R = void>(): R;
    _terminateCurrentAnimation<R = boolean>(): R;
    _destinationAlphaOfFilterTansitionViewForDirection_destinationValid<R = number, P0 = number, P1 = boolean>(__destinationAlphaOfFilterTansitionViewForDirection: P0, _destinationValid: P1): R;
    _destinationAlphaOfDestinationTransitionViewForDirection<R = number, P0 = number>(__destinationAlphaOfDestinationTransitionViewForDirection: P0): R;
    _destinationAlphaOfSourceTansitionViewForDirection_destinationValid<R = number, P0 = number, P1 = boolean>(__destinationAlphaOfSourceTansitionViewForDirection: P0, _destinationValid: P1): R;
    _destinationFrameOfSourceTansitionViewForDirection_destinationValid<R = cocoa.CGRect, P0 = number, P1 = boolean>(__destinationFrameOfSourceTansitionViewForDirection: P0, _destinationValid: P1): R;
    _teardownTransitionHierarchy<R = void>(): R;
    _setupTransitionHierarchyWithSourceView_frame_destinationView_frame_forDirection_destinationValid<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = cocoa.CGRect, P4 = number, P5 = boolean>(__setupTransitionHierarchyWithSourceView: P0, _frame: P1, _destinationView: P2, _frame1: P3, _forDirection: P4, _destinationValid: P5): R;
    _sourceTransitionView<R = unknown>(): R;
    _destinationTransitionView<R = unknown>(): R;
    _cgSnapshotOfView<R = unknown, P0 = unknown>(__cgSnapshotOfView: P0): R;
    _cacheViewController_withSize_toCompletionHandler<R = void, P0 = unknown, P1 = cocoa.CGSize, P2 = cocoa.CDUnknownBlockType>(__cacheViewController: P0, _withSize: P1, _toCompletionHandler: P2): R;
    _snapshotOfViewController_withSize<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(__snapshotOfViewController: P0, _withSize: P1): R;
    _snapshotOfView<R = unknown, P0 = unknown>(__snapshotOfView: P0): R;
    _cachePotentialViewControllers<R = void>(): R;
    _updateTemplateImageCache<R = void>(): R;
    _cacheViewControllerForRepresentedObjectIfNeeded<R = boolean, P0 = unknown>(__cacheViewControllerForRepresentedObjectIfNeeded: P0): R;
    _makeViewControllerWithIdentifier<R = unknown, P0 = unknown>(__makeViewControllerWithIdentifier: P0): R;
    _cacheReusableViewController_identifier<R = void, P0 = unknown, P1 = unknown>(__cacheReusableViewController: P0, _identifier: P1): R;
    _effectiveContentView<R = unknown>(): R;
    _updateContentView<R = void>(): R;
    _removeFromResponderChainOfView<R = void, P0 = unknown>(__removeFromResponderChainOfView: P0): R;
    _viewFrameChanged<R = void, P0 = unknown>(__viewFrameChanged: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopObservingView<R = void, P0 = unknown>(__stopObservingView: P0): R;
    _startObservingView<R = void, P0 = unknown>(__startObservingView: P0): R;
    takeSelectedIndexFrom<R = void, P0 = unknown>(_takeSelectedIndexFrom: P0): R;
    navigateForward<R = void, P0 = unknown>(_navigateForward: P0): R;
    navigateBack<R = void, P0 = unknown>(_navigateBack: P0): R;
    _navigateToIndex_animated<R = void, P0 = number, P1 = boolean>(__navigateToIndex: P0, _animated: P1): R;
    _animateImage_frame_toImage_frame_direction<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = cocoa.CGRect, P4 = number>(__animateImage: P0, _frame: P1, _toImage: P2, _frame1: P3, _direction: P4): R;
    _animateView_frame_toView_frame_direction<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = cocoa.CGRect, P4 = number>(__animateView: P0, _frame: P1, _toView: P2, _frame1: P3, _direction: P4): R;
    _performAnimationWithDirection_destinationFrame<R = void, P0 = number, P1 = cocoa.CGRect>(__performAnimationWithDirection: P0, _destinationFrame: P1): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    hideTransitionView<R = void>(): R;
    completeTransition<R = void>(): R;
    navigateForwardToObject<R = void, P0 = unknown>(_navigateForwardToObject: P0): R;
    removeForwardNavigableObjects<R = void>(): R;
    _setShouldDrawEdgeShadow<R = void, P0 = boolean>(__setShouldDrawEdgeShadow: P0): R;
    _shouldDrawEdgeShadow<R = boolean>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    dontCacheViewControllers<R = boolean>(): R;
    setDontCacheViewControllers<R = void, P0 = boolean>(_setDontCacheViewControllers: P0): R;
    currentIdentifier<R = cocoa.NSString>(): R;
    setCurrentIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    selectedViewController<R = cocoa.NSViewController>(): R;
    setSelectedViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    transitionStyle<R = number>(): R;
    setTransitionStyle<R = void, P0 = number>(_v: P0): R;
    animations<R = cocoa.NSDictionary>(): R;
    setAnimations<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    delegate<R = cocoa.NSPageControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSPageControllerDelegate>(_v: P0): R;
    arrangedObjects<R = cocoa.NSArray>(): R;
    setArrangedObjects<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    selectedIndex<R = number>(): R;
    setSelectedIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSPageController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSAnimatablePropertyContainerProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSPageController>(): R;
      new: <R = NSPageController>() => R;
      _performWithoutAnimation<R = void, P0 = cocoa.CDUnknownBlockType>(__performWithoutAnimation: P0): R;
    }
  }
}

declare const NSPageController: cocoa.classes.NSPageController;
