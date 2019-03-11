/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabButton<T = any> extends cocoa.NSTabBarViewButton, cocoa._NSVibrancyTransitioningImageViewDelegateProtocol, cocoa.NSRolloverButtonDelegateProtocol {
    springLoadingExited<R = void, P0 = unknown>(_springLoadingExited: P0): R;
    springLoadingActivated_draggingInfo<R = void, P0 = boolean, P1 = unknown>(_springLoadingActivated: P0, _draggingInfo: P1): R;
    springLoadingHighlightChanged<R = void, P0 = unknown>(_springLoadingHighlightChanged: P0): R;
    springLoadingUpdated<R = number, P0 = unknown>(_springLoadingUpdated: P0): R;
    springLoadingEntered<R = number, P0 = unknown>(_springLoadingEntered: P0): R;
    springLoadingTarget<R = unknown>(): R;
    isSpringLoaded<R = boolean>(): R;
    draggingDestination<R = unknown>(): R;
    associatedWindow<R = unknown>(): R;
    pinnedTabDragImageOfSize<R = unknown, P0 = cocoa.CGSize>(_pinnedTabDragImageOfSize: P0): R;
    tabDragImageOfSize<R = unknown, P0 = cocoa.CGSize>(_tabDragImageOfSize: P0): R;
    tabImageOfSize<R = unknown, P0 = cocoa.CGSize>(_tabImageOfSize: P0): R;
    _titleStringAttributesForMainWindow_activeTab_isDragging<R = unknown, P0 = boolean, P1 = boolean, P2 = boolean>(__titleStringAttributesForMainWindow: P0, _activeTab: P1, _isDragging: P2): R;
    _updateTitleTextFieldAndAccessibilityProperties<R = void>(): R;
    setHasPressedHighlight<R = void, P0 = boolean>(_setHasPressedHighlight: P0): R;
    setHasMouseOverHighlight_shouldAnimateCloseButton<R = void, P0 = boolean, P1 = boolean>(_setHasMouseOverHighlight: P0, _shouldAnimateCloseButton: P1): R;
    _closeButtonClicked<R = void, P0 = unknown>(__closeButtonClicked: P0): R;
    _shouldShowCloseButton<R = boolean>(): R;
    _updatePinnedTabImageViewAnimated<R = void, P0 = boolean>(__updatePinnedTabImageViewAnimated: P0): R;
    _removeWebsiteIconVisualEffectViewForFullScreenToolbarWindow<R = void>(): R;
    _addWebsiteIconVisualEffectViewForFullScreenToolbarWindow<R = void>(): R;
    _updatePinnedTabFaviconFullscreenBackgroundColor<R = void>(): R;
    _windowIsActive<R = boolean>(): R;
    _updateConstraints<R = void>(): R;
    _setUpConstraints<R = void>(): R;
    _updateTitleContainerConstraints<R = void>(): R;
    setActive<R = void, P0 = boolean>(_setActive: P0): R;
    setTitleTextFieldCenterOffset_animated<R = void, P0 = number, P1 = boolean>(_setTitleTextFieldCenterOffset: P0, _animated: P1): R;
    setMainContentContainerCenterOffset_animated<R = void, P0 = number, P1 = boolean>(_setMainContentContainerCenterOffset: P0, _animated: P1): R;
    setButtonWidthForTitleLayout_animated<R = void, P0 = number, P1 = boolean>(_setButtonWidthForTitleLayout: P0, _animated: P1): R;
    _updateAccessoryViews<R = void>(): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    _keysToObserve<R = unknown>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    initWithFrame_tabBarViewItem<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _tabBarViewItem: P1): R;
    showingCloseButton<R = boolean>(): R;
    setShowingCloseButton<R = void, P0 = boolean>(_v: P0): R;
    alternateImage<R = cocoa.NSImage>(): R;
    setAlternateImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    pinned<R = boolean>(): R;
    setPinned<R = void, P0 = boolean>(_v: P0): R;
    tabBarViewItem<R = cocoa.NSTabBarItem>(): R;
    accessoryViews<R = cocoa.NSArray>(): R;
    setAccessoryViews<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityHelper<R = unknown>(): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    delegate<R = cocoa.NSTabButtonDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTabButtonDelegate>(_v: P0): R;
    test_titleTextField<R = cocoa.NSTextField>(): R;
    test_closeButton<R = cocoa.NSRolloverButton>(): R;
    canShowCloseButton<R = boolean>(): R;
    setCanShowCloseButton<R = void, P0 = boolean>(_v: P0): R;
    titleTextFieldCenterOffset<R = number>(): R;
    setTitleTextFieldCenterOffset<R = void, P0 = number>(_v: P0): R;
    mainContentContainerCenterOffset<R = number>(): R;
    setMainContentContainerCenterOffset<R = void, P0 = number>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    buttonWidthForTitleLayout<R = number>(): R;
    setButtonWidthForTitleLayout<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabButton<T = any> extends cocoa.classes.NSTabBarViewButton, cocoa.classes._NSVibrancyTransitioningImageViewDelegateProtocol, cocoa.classes.NSRolloverButtonDelegateProtocol {
      alloc<R = NSTabButton>(): R;
      new: <R = NSTabButton>() => R;
      _titleFont<R = unknown>(): R;
    }
  }
}

declare const NSTabButton: cocoa.classes.NSTabButton;
