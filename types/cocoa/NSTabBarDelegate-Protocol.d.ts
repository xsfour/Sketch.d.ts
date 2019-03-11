/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    tabBar_acceptDrop_index<R = boolean, P0 = cocoa.NSTabBar, P1 = cocoa.NSDraggingInfo, P2 = number>(_tabBar: P0, _acceptDrop: P1, _index: P2): R;
    tabBar_validateDrop<R = number, P0 = cocoa.NSTabBar, P1 = cocoa.NSDraggingInfo>(_tabBar: P0, _validateDrop: P1): R;
    tabBar_didFinishTransitionAnimationForWindow<R = void, P0 = cocoa.NSTabBar, P1 = cocoa.NSWindow>(_tabBar: P0, _didFinishTransitionAnimationForWindow: P1): R;
    tabBar_destinationWindowForDetachedTabBarViewItem<R = cocoa.NSWindow, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _destinationWindowForDetachedTabBarViewItem: P1): R;
    tabBar_detachedWindowImageForDraggedTabBarViewItem<R = cocoa.NSImage, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _detachedWindowImageForDraggedTabBarViewItem: P1): R;
    tabBar_acceptTabDrop_index<R = boolean, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabDraggingInfo, P2 = number>(_tabBar: P0, _acceptTabDrop: P1, _index: P2): R;
    tabBar_validateTabDrop<R = number, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabDraggingInfo>(_tabBar: P0, _validateTabDrop: P1): R;
    tabBar_menuForTabBarViewItem_event<R = cocoa.NSMenu, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem, P2 = cocoa.NSEvent>(_tabBar: P0, _menuForTabBarViewItem: P1, _event: P2): R;
    tabBar_didMoveTabBarViewItem_fromIndex_toIndex_isChangingPinnedness<R = void, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem, P2 = number, P3 = number, P4 = boolean>(_tabBar: P0, _didMoveTabBarViewItem: P1, _fromIndex: P2, _toIndex: P3, _isChangingPinnedness: P4): R;
    tabBar_closeTabBarViewItem<R = void, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _closeTabBarViewItem: P1): R;
    selectedTabBarViewItemAfterClosingCurrentTabInTabBar<R = cocoa.NSTabBarItem, P0 = cocoa.NSTabBar>(_selectedTabBarViewItemAfterClosingCurrentTabInTabBar: P0): R;
    tabBar_selectTabBarViewItem<R = void, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _selectTabBarViewItem: P1): R;
    createNewTabInTabBar<R = void, P0 = cocoa.NSTabBar>(_createNewTabInTabBar: P0): R;
    tabBar_showWindowForDraggingItemAtIndex<R = void, P0 = cocoa.NSTabBar, P1 = number>(_tabBar: P0, _showWindowForDraggingItemAtIndex: P1): R;
    tabBar_hideWindowForDraggingItemAtIndex<R = void, P0 = cocoa.NSTabBar, P1 = number>(_tabBar: P0, _hideWindowForDraggingItemAtIndex: P1): R;
    tabBar_canCloseTabBarViewItem<R = boolean, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _canCloseTabBarViewItem: P1): R;
    placeholderTextInEmptyUnpinnedRegionOfTabBar<R = cocoa.NSString, P0 = cocoa.NSTabBar>(_placeholderTextInEmptyUnpinnedRegionOfTabBar: P0): R;
    tabBar_canDetachTabBarViewItem<R = boolean, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _canDetachTabBarViewItem: P1): R;
    tabBar_canDragToPinTab<R = boolean, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _canDragToPinTab: P1): R;
    tabBar_didBeginDraggingTab<R = void, P0 = cocoa.NSTabBar, P1 = cocoa.NSTabBarItem>(_tabBar: P0, _didBeginDraggingTab: P1): R;
    tabBarCanDragItems<R = boolean, P0 = cocoa.NSTabBar>(_tabBarCanDragItems: P0): R;
    tabBar_droppedWindowTabShouldMoveToSpace<R = boolean, P0 = cocoa.NSTabBar, P1 = number>(_tabBar: P0, _droppedWindowTabShouldMoveToSpace: P1): R;
  }
  namespace classes {
    export interface NSTabBarDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabBarDelegateProtocol: cocoa.classes.NSTabBarDelegateProtocol;
