/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerRootViewController<T = any> extends NSViewController, NSVisualTabPickerSearchFieldDelegateProtocol, NSVisualTabPickerGridViewDataSourceProtocol, NSVisualTabPickerGridViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _updateTabsShouldBeClosable<R = void>(): R;
    tabPickerItemsDidChange<R = void>(): R;
    _tabFilterInfoForOrderedTabs<R = unknown>(): R;
    _resetFilterState<R = void>(): R;
    _doesSearchResultsContainSelectedTab<R = boolean>(): R;
    _performAsynchronousFilter<R = void>(): R;
    _reloadGridView<R = void>(): R;
    _reloadLocalTabData<R = void>(): R;
    _filterObjectsInArray_usingBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(__filterObjectsInArray: P0, _usingBlock: P1): R;
    _updateSearchTextWithValue<R = void, P0 = unknown>(__updateSearchTextWithValue: P0): R;
    _resetSearch<R = void>(): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    isSearching<R = boolean>(): R;
    focusSearchField<R = void>(): R;
    contentLayoutRect<R = CGRect>(): R;
    selectTabBarItem<R = void, P0 = unknown>(_selectTabBarItem: P0): R;
    reloadTabBarItem<R = void, P0 = unknown>(_reloadTabBarItem: P0): R;
    didInsertTabBarItem<R = void, P0 = unknown>(_didInsertTabBarItem: P0): R;
    willInsertTabBarItem<R = void>(): R;
    postponeClosingVisualTabPickerWhenNewTabIsInserted<R = void>(): R;
    indexOfSelectedTab<R = number>(): R;
    shouldStackMultipleThumbnailsInOneContainerIfPossible<R = boolean>(): R;
    shouldDisplayRealWebViews<R = boolean>(): R;
    entryOrExitAnimationInProgress<R = boolean>(): R;
    startEntryAnimation<R = void>(): R;
    removeVisualTabPickerFromViewHierarchy<R = void>(): R;
    closeVisualTabPickerAnimated<R = void, P0 = boolean>(_closeVisualTabPickerAnimated: P0): R;
    closeVisualTabPicker<R = void>(): R;
    _cancelSearchAndCloseAfterDelay<R = void>(): R;
    tabPickerAnimationDuration<R = number>(): R;
    _makeTabPickerBackdropVisualEffectViewWithFrame<R = unknown, P0 = CGRect>(__makeTabPickerBackdropVisualEffectViewWithFrame: P0): R;
    isClosing<R = boolean>(): R;
    setIsClosing<R = void, P0 = boolean>(_v: P0): R;
    shouldShowCloseButtons<R = boolean>(): R;
    setShouldShowCloseButtons<R = void, P0 = boolean>(_v: P0): R;
    shouldHighlightTiles<R = boolean>(): R;
    setShouldHighlightTiles<R = void, P0 = boolean>(_v: P0): R;
    shouldShowNewTabButton<R = boolean>(): R;
    setShouldShowNewTabButton<R = void, P0 = boolean>(_v: P0): R;
    sidebarSnapshot<R = NSImage>(): R;
    setSidebarSnapshot<R = void, P0 = NSImage>(_v: P0): R;
    tabBarSnapshot<R = NSImage>(): R;
    setTabBarSnapshot<R = void, P0 = NSImage>(_v: P0): R;
    addingNewTab<R = boolean>(): R;
    tabsShouldBeClosable<R = boolean>(): R;
    setTabsShouldBeClosable<R = void, P0 = boolean>(_v: P0): R;
    shouldStackThumbnails<R = boolean>(): R;
    setShouldStackThumbnails<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = NSVisualTabPickerDelegate>(): R;
    setDelegate<R = void, P0 = NSVisualTabPickerDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerRootViewController<T = any> extends NSViewController, NSVisualTabPickerSearchFieldDelegateProtocol, NSVisualTabPickerGridViewDataSourceProtocol, NSVisualTabPickerGridViewDelegateProtocol {
      alloc<R = NSVisualTabPickerRootViewController>(): R;
      new: <R = NSVisualTabPickerRootViewController>() => R;
      springAnimationForVisualTabPicker<R = unknown>(): R;
    }
  }
}

declare const NSVisualTabPickerRootViewController: cocoa.classes.NSVisualTabPickerRootViewController;
