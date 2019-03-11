/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridView<T = any> extends cocoa.NSView, cocoa.NSVisualTabPickerTileContainerDataSourceProtocol, cocoa.NSVisualTabPickerTileContainerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _additionalHeightTakenByStackedTilesForRow<R = number, P0 = number>(__additionalHeightTakenByStackedTilesForRow: P0): R;
    _getHorizontalLeadingOffset_trailingOffset<R = void, P0 = number, P1 = number>(__getHorizontalLeadingOffset: P0, _trailingOffset: P1): R;
    _computeArrayOfTabItemsPerContainer<R = void>(): R;
    _addCreateNewTabContainerView<R = void>(): R;
    _addContainerViewAtIndex_isVisible<R = void, P0 = number, P1 = boolean>(__addContainerViewAtIndex: P0, _isVisible: P1): R;
    _setUpContainerViews<R = void>(): R;
    _horizontalMargin<R = number>(): R;
    _setUpGridContainer<R = void>(): R;
    _containerViewForTabItem_containerView_indexInContainerView<R = void, P0 = unknown, P1 = unknown, P2 = number>(__containerViewForTabItem: P0, _containerView: P1, _indexInContainerView: P2): R;
    _maximumNumberOfContainersPerRow<R = number>(): R;
    _indexOfContainerForTabViewItem<R = number, P0 = unknown>(__indexOfContainerForTabViewItem: P0): R;
    _tabViewItemAtIndex_inContainerView<R = unknown, P0 = number, P1 = unknown>(__tabViewItemAtIndex: P0, _inContainerView: P1): R;
    _tabViewItemAtIndex_inContainerAtIndex<R = unknown, P0 = number, P1 = number>(__tabViewItemAtIndex: P0, _inContainerAtIndex: P1): R;
    _indexForContainerView<R = number, P0 = unknown>(__indexForContainerView: P0): R;
    _shouldDisplayNewTabContainer<R = boolean>(): R;
    _numberOfRows<R = number>(): R;
    _numberOfTilesInGridView<R = number>(): R;
    _frameForTileAtIndex<R = cocoa.CGRect, P0 = number>(__frameForTileAtIndex: P0): R;
    _computeLayoutConstants<R = void>(): R;
    _hideTilesNotVisibleDuringExitAnimation<R = void>(): R;
    _willStartExitAnimation<R = void>(): R;
    _entryAnimationHasFinished<R = void>(): R;
    _unhideAllTiles<R = void>(): R;
    _rangeOfVisibleTiles<R = cocoa._NSRange>(): R;
    _resetGridView<R = void>(): R;
    _dispatchMouseEventToTileContainers<R = void, P0 = unknown>(__dispatchMouseEventToTileContainers: P0): R;
    selectTabBarItem<R = void, P0 = unknown>(_selectTabBarItem: P0): R;
    _startGridAnimation_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(__startGridAnimation: P0, _completionHandler: P1): R;
    startGridAnimation_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_startGridAnimation: P0, _completionHandler: P1): R;
    frameOfSelectedTile<R = cocoa.CGRect>(): R;
    updateGridViewLayout<R = void>(): R;
    _updateTilePositions<R = void>(): R;
    gridViewContentHeight<R = number>(): R;
    reloadTabViewItem<R = void, P0 = unknown>(_reloadTabViewItem: P0): R;
    removeTabViewItem<R = void, P0 = unknown>(_removeTabViewItem: P0): R;
    addTabViewItem_atIndex<R = void, P0 = unknown, P1 = number>(_addTabViewItem: P0, _atIndex: P1): R;
    hideCloseButtons<R = void>(): R;
    reloadGridView<R = void>(): R;
    _updateSize<R = void>(): R;
    initWithFrame_visualTabPickerViewController<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _visualTabPickerViewController: P1): R;
    shouldShowCloseButtons<R = boolean>(): R;
    setShouldShowCloseButtons<R = void, P0 = boolean>(_v: P0): R;
    shouldHighlightTiles<R = boolean>(): R;
    setShouldHighlightTiles<R = void, P0 = boolean>(_v: P0): R;
    shouldShowNewTabButton<R = boolean>(): R;
    setShouldShowNewTabButton<R = void, P0 = boolean>(_v: P0): R;
    gridAnimationInProgress<R = boolean>(): R;
    shouldDisplayHostnameForThumbnailContainers<R = boolean>(): R;
    visualTabPickerViewController<R = cocoa.NSVisualTabPickerRootViewController>(): R;
    setVisualTabPickerViewController<R = void, P0 = cocoa.NSVisualTabPickerRootViewController>(_v: P0): R;
    delegate<R = cocoa.NSVisualTabPickerGridViewDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSVisualTabPickerGridViewDelegate>(_v: P0): R;
    dataSource<R = cocoa.NSVisualTabPickerGridViewDataSource>(): R;
    setDataSource<R = void, P0 = cocoa.NSVisualTabPickerGridViewDataSource>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerGridView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSVisualTabPickerTileContainerDataSourceProtocol, cocoa.classes.NSVisualTabPickerTileContainerDelegateProtocol {
      alloc<R = NSVisualTabPickerGridView>(): R;
      new: <R = NSVisualTabPickerGridView>() => R;
    }
  }
}

declare const NSVisualTabPickerGridView: cocoa.classes.NSVisualTabPickerGridView;
