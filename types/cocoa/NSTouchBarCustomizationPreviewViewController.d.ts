/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewViewController<T = any> extends NSViewController, NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol, NSCollectionViewDelegateDFRCustomizationLayoutProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPreviewFlexibleSectionLayoutDelegateProtocol, NSTouchBarCustomizationPreviewMiniControlStripSectionLayoutDelegateProtocol {
    cxx_destruct<R = void>(): R;
    indexPathForInsertingItemWithFrame_withApproximateIndex<R = unknown, P0 = CGRect, P1 = unknown>(_indexPathForInsertingItemWithFrame: P0, _withApproximateIndex: P1): R;
    isItemAtIndexPathEditable<R = boolean, P0 = unknown>(_isItemAtIndexPathEditable: P0): R;
    _priorityIndexForItem<R = number, P0 = unknown>(__priorityIndexForItem: P0): R;
    paddingForSection<R = NSEdgeInsets, P0 = number>(_paddingForSection: P0): R;
    containmentRectForSection<R = CGRect, P0 = number>(_containmentRectForSection: P0): R;
    numberOfItemsInSection<R = number, P0 = number>(_numberOfItemsInSection: P0): R;
    _notifyDelegateOfBarUpdate_inTree<R = void, P0 = unknown, P1 = unknown>(__notifyDelegateOfBarUpdate: P0, _inTree: P1): R;
    removeItem_inSection_reload<R = void, P0 = unknown, P1 = number, P2 = boolean>(_removeItem: P0, _inSection: P1, _reload: P2): R;
    removeItemAtIndex_inSection_reload<R = void, P0 = number, P1 = number, P2 = boolean>(_removeItemAtIndex: P0, _inSection: P1, _reload: P2): R;
    canRemoveItem_inSection<R = boolean, P0 = unknown, P1 = number>(_canRemoveItem: P0, _inSection: P1): R;
    canRemoveItemAtIndex_inSection<R = boolean, P0 = number, P1 = number>(_canRemoveItemAtIndex: P0, _inSection: P1): R;
    moveItemAtIndex_toIndex_inSection_reload<R = void, P0 = number, P1 = number, P2 = number, P3 = boolean>(_moveItemAtIndex: P0, _toIndex: P1, _inSection: P2, _reload: P3): R;
    canMoveItemAtIndex_toIndex_inSection<R = boolean, P0 = number, P1 = number, P2 = number>(_canMoveItemAtIndex: P0, _toIndex: P1, _inSection: P2): R;
    canReorderItemAtIndex_inSection<R = boolean, P0 = number, P1 = number>(_canReorderItemAtIndex: P0, _inSection: P1): R;
    prepareToInsertItem_inSection_reload<R = void, P0 = unknown, P1 = number, P2 = boolean>(_prepareToInsertItem: P0, _inSection: P1, _reload: P2): R;
    insertItem_atIndex_inSection_reload<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(_insertItem: P0, _atIndex: P1, _inSection: P2, _reload: P3): R;
    canInsertItem_atIndex_inSection<R = boolean, P0 = unknown, P1 = number, P2 = number>(_canInsertItem: P0, _atIndex: P1, _inSection: P2): R;
    _presentedExpandedControlStripItems<R = unknown>(): R;
    _presentedMiniControlStripItems<R = unknown>(): R;
    _presentedApplicationItems<R = unknown>(): R;
    _presentedItemsInSection<R = unknown, P0 = number>(__presentedItemsInSection: P0): R;
    updateModel_animated<R = void, P0 = CDUnknownBlockType, P1 = boolean>(_updateModel: P0, _animated: P1): R;
    _setPendingItem_inSection_reload<R = void, P0 = unknown, P1 = number, P2 = boolean>(__setPendingItem: P0, _inSection: P1, _reload: P2): R;
    _pendingItemInSection<R = unknown, P0 = number>(__pendingItemInSection: P0): R;
    _setPendingExpandedControlStripItem_reload<R = void, P0 = unknown, P1 = boolean>(__setPendingExpandedControlStripItem: P0, _reload: P1): R;
    _setExpandedControlStripItemTree_reload<R = void, P0 = unknown, P1 = boolean>(__setExpandedControlStripItemTree: P0, _reload: P1): R;
    _invalidateExpandedControlStripPresentedItemsReload<R = void, P0 = boolean>(__invalidateExpandedControlStripPresentedItemsReload: P0): R;
    _setPendingMiniControlStripItem_reload<R = void, P0 = unknown, P1 = boolean>(__setPendingMiniControlStripItem: P0, _reload: P1): R;
    _setMiniControlStripItemTree_reload<R = void, P0 = unknown, P1 = boolean>(__setMiniControlStripItemTree: P0, _reload: P1): R;
    _invalidateMiniControlStripPresentedItemsReload<R = void, P0 = boolean>(__invalidateMiniControlStripPresentedItemsReload: P0): R;
    _setPendingApplicationItem_reload<R = void, P0 = unknown, P1 = boolean>(__setPendingApplicationItem: P0, _reload: P1): R;
    _setApplicationItemTree_reload<R = void, P0 = unknown, P1 = boolean>(__setApplicationItemTree: P0, _reload: P1): R;
    _invalidateApplicationPresentedItemsReload<R = void, P0 = boolean>(__invalidateApplicationPresentedItemsReload: P0): R;
    reloadItemsInSection<R = void, P0 = number>(_reloadItemsInSection: P0): R;
    _setItemTree_inSection_reload<R = void, P0 = unknown, P1 = number, P2 = boolean>(__setItemTree: P0, _inSection: P1, _reload: P2): R;
    setItemTree_inSection<R = void, P0 = unknown, P1 = number>(_setItemTree: P0, _inSection: P1): R;
    itemTreeInSection<R = unknown, P0 = number>(_itemTreeInSection: P0): R;
    selectSection<R = void, P0 = unknown>(_selectSection: P0): R;
    applicationSectionIsCustomizable<R = boolean>(): R;
    toggleGrabber<R = void, P0 = unknown>(_toggleGrabber: P0): R;
    done<R = void, P0 = unknown>(_done: P0): R;
    updateForAnimationOut<R = void>(): R;
    prepareToAnimateOut<R = void>(): R;
    updateForAnimationIn<R = void>(): R;
    prepareToAnimateIn<R = void>(): R;
    cursorCancelled<R = void>(): R;
    cursorMouseUpAtPoint<R = CGPoint, P0 = CGPoint>(_cursorMouseUpAtPoint: P0): R;
    cursorMouseDownAtPoint<R = void, P0 = CGPoint>(_cursorMouseDownAtPoint: P0): R;
    cursorMovedToPoint_withDelta_mouseIsDown<R = CGPoint, P0 = CGPoint, P1 = CGSize, P2 = boolean>(_cursorMovedToPoint: P0, _withDelta: P1, _mouseIsDown: P2): R;
    cursorExitAtPoint_withItem<R = void, P0 = CGPoint, P1 = unknown>(_cursorExitAtPoint: P0, _withItem: P1): R;
    cursorEnterAtPoint_mouseIsDown_withPreset<R = CGPoint, P0 = CGPoint, P1 = boolean, P2 = unknown>(_cursorEnterAtPoint: P0, _mouseIsDown: P1, _withPreset: P2): R;
    cursorEnterAtPoint_mouseIsDown_withItem<R = CGPoint, P0 = CGPoint, P1 = boolean, P2 = unknown>(_cursorEnterAtPoint: P0, _mouseIsDown: P1, _withItem: P2): R;
    cursorCanEnterCustomizationWithItem_orPreset<R = boolean, P0 = unknown, P1 = unknown>(_cursorCanEnterCustomizationWithItem: P0, _orPreset: P1): R;
    accessibilityResetToPreset<R = void, P0 = unknown>(_accessibilityResetToPreset: P0): R;
    accessibilityAddItem<R = void, P0 = unknown>(_accessibilityAddItem: P0): R;
    accessibilityRemoveItem<R = void, P0 = unknown>(_accessibilityRemoveItem: P0): R;
    systemBarRect<R = CGRect>(): R;
    setSystemBarRect<R = void, P0 = CGRect>(_v: P0): R;
    cursorPoint<R = CGPoint>(): R;
    setCursorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    systemTrayRect<R = CGRect>(): R;
    setSystemTrayRect<R = void, P0 = CGRect>(_v: P0): R;
    applicationRect<R = CGRect>(): R;
    setApplicationRect<R = void, P0 = CGRect>(_v: P0): R;
    escKeyRect<R = CGRect>(): R;
    setEscKeyRect<R = void, P0 = CGRect>(_v: P0): R;
    delegate<R = NSTouchBarCustomizationPreviewViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarCustomizationPreviewViewControllerDelegate>(_v: P0): R;
    expandedControlStripItemTree<R = NSTouchBarItemTree>(): R;
    setExpandedControlStripItemTree<R = void, P0 = NSTouchBarItemTree>(_v: P0): R;
    miniControlStripItemTree<R = NSTouchBarItemTree>(): R;
    setMiniControlStripItemTree<R = void, P0 = NSTouchBarItemTree>(_v: P0): R;
    applicationItemTree<R = NSTouchBarItemTree>(): R;
    setApplicationItemTree<R = void, P0 = NSTouchBarItemTree>(_v: P0): R;
    currentSection<R = number>(): R;
    setCurrentSection<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewViewController<T = any> extends NSViewController, NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol, NSCollectionViewDelegateDFRCustomizationLayoutProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPreviewFlexibleSectionLayoutDelegateProtocol, NSTouchBarCustomizationPreviewMiniControlStripSectionLayoutDelegateProtocol {
      alloc<R = NSTouchBarCustomizationPreviewViewController>(): R;
      new: <R = NSTouchBarCustomizationPreviewViewController>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewViewController: cocoa.classes.NSTouchBarCustomizationPreviewViewController;
