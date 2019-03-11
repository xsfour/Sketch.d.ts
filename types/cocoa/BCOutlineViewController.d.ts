/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewController<T = any> extends cocoa.NSViewController, cocoa.NSMenuDelegateProtocol, cocoa.NSTextFieldDelegateProtocol, cocoa.BCTableCellViewDelegateProtocol, cocoa.BCTableRowViewDelegateProtocol, cocoa.NSOutlineViewDataSourceProtocol, cocoa.BCOutlineViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    handleTabFromControl_forward<R = void, P0 = unknown, P1 = boolean>(_handleTabFromControl: P0, _forward: P1): R;
    performNecessaryRefreshOperations<R = void>(): R;
    queueRefreshIfRequired<R = void>(): R;
    refreshWithMask<R = void, P0 = number>(_refreshWithMask: P0): R;
    refreshPreviewImages<R = void>(): R;
    internalRefreshPreviewImages<R = void>(): R;
    executeAfterRefreshCompleted<R = void, P0 = cocoa.CDUnknownBlockType>(_executeAfterRefreshCompleted: P0): R;
    refresh<R = void>(): R;
    internalRefresh<R = void>(): R;
    renameNode<R = void>(): R;
    flagsChangedNotification<R = void>(): R;
    tableCellViewForNode<R = unknown, P0 = unknown>(_tableCellViewForNode: P0): R;
    updateDisplayStateOnView<R = void, P0 = unknown>(_updateDisplayStateOnView: P0): R;
    setCurrentlyHoveredNode_notifyDelegate<R = void, P0 = unknown, P1 = boolean>(_setCurrentlyHoveredNode: P0, _notifyDelegate: P1): R;
    setCurrentlyHoveredView_notifyDelegate<R = void, P0 = unknown, P1 = boolean>(_setCurrentlyHoveredView: P0, _notifyDelegate: P1): R;
    viewAtCurrentMousePoint<R = unknown>(): R;
    nodeAtCurrentMousePoint<R = unknown>(): R;
    rowAtCurrentMousePoint<R = number>(): R;
    determineCopyStateFromDraggingInfo<R = boolean, P0 = unknown>(_determineCopyStateFromDraggingInfo: P0): R;
    translateDropIndex_toParentOfChild<R = number, P0 = number, P1 = unknown>(_translateDropIndex: P0, _toParentOfChild: P1): R;
    enableGroupRowFloatingIfNeeded<R = void>(): R;
    temporarilyDisableGroupRowFloating<R = void>(): R;
    rowIsFloatingAndHasBeenScrolledUp<R = boolean, P0 = number>(_rowIsFloatingAndHasBeenScrolledUp: P0): R;
    updateSelectionFromNotification<R = void, P0 = unknown>(_updateSelectionFromNotification: P0): R;
    updateSelectionStateScrollingToVisible<R = void, P0 = boolean>(_updateSelectionStateScrollingToVisible: P0): R;
    modifySelectionInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_modifySelectionInBlock: P0): R;
    determineCollapsionStateForNode<R = number, P0 = unknown>(_determineCollapsionStateForNode: P0): R;
    determineExpansionStateForNode<R = number, P0 = unknown>(_determineExpansionStateForNode: P0): R;
    notifyExpansionStateChanged_forNode<R = void, P0 = number, P1 = unknown>(_notifyExpansionStateChanged: P0, _forNode: P1): R;
    updateExpansionStateForNodesUnder<R = void, P0 = unknown>(_updateExpansionStateForNodesUnder: P0): R;
    updateSelectionAndExpansion<R = void>(): R;
    modifyExpansionInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_modifyExpansionInBlock: P0): R;
    childrenForItem<R = unknown, P0 = unknown>(_childrenForItem: P0): R;
    awakeFromNib<R = void>(): R;
    initWithDataController<R = unknown, P0 = unknown>(_initWithDataController: P0): R;
    postRefreshBlocks<R = cocoa.NSArray>(): R;
    setPostRefreshBlocks<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    viewHasAppearedBefore<R = boolean>(): R;
    setViewHasAppearedBefore<R = void, P0 = boolean>(_v: P0): R;
    refreshMask<R = number>(): R;
    setRefreshMask<R = void, P0 = number>(_v: P0): R;
    referencedNodes<R = cocoa.NSMutableSet>(): R;
    setReferencedNodes<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    menuDisabledTextField<R = cocoa.NSTextField>(): R;
    setMenuDisabledTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    currentlyHoveredNode<R = unknown>(): R;
    contextMenuSelection<R = cocoa.NSArray>(): R;
    setContextMenuSelection<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    shouldRestoreGroupFloatingAfterDragDrop<R = boolean>(): R;
    setShouldRestoreGroupFloatingAfterDragDrop<R = void, P0 = boolean>(_v: P0): R;
    draggingInProgress<R = boolean>(): R;
    setDraggingInProgress<R = void, P0 = boolean>(_v: P0): R;
    ignoreExpansionChangingEvent<R = cocoa.NSEvent>(): R;
    setIgnoreExpansionChangingEvent<R = void, P0 = cocoa.NSEvent>(_v: P0): R;
    ignoreSelectionChangingEvent<R = cocoa.NSEvent>(): R;
    setIgnoreSelectionChangingEvent<R = void, P0 = cocoa.NSEvent>(_v: P0): R;
    expansionStateUpdating<R = boolean>(): R;
    setExpansionStateUpdating<R = void, P0 = boolean>(_v: P0): R;
    selectionStateUpdating<R = boolean>(): R;
    setSelectionStateUpdating<R = void, P0 = boolean>(_v: P0): R;
    outlineView<R = cocoa.BCOutlineView>(): R;
    setOutlineView<R = void, P0 = cocoa.BCOutlineView>(_v: P0): R;
    dataController<R = cocoa.BCOutlineViewDataController>(): R;
    setDataController<R = void, P0 = cocoa.BCOutlineViewDataController>(_v: P0): R;
    isLayoutDirty<R = boolean>(): R;
    setIsLayoutDirty<R = void, P0 = boolean>(_v: P0): R;
    arePreviewImagesDirty<R = boolean>(): R;
    setArePreviewImagesDirty<R = void, P0 = boolean>(_v: P0): R;
    isExpansionDirty<R = boolean>(): R;
    setIsExpansionDirty<R = void, P0 = boolean>(_v: P0): R;
    isSelectionDirty<R = boolean>(): R;
    setIsSelectionDirty<R = void, P0 = boolean>(_v: P0): R;
    currentlyHoveredView<R = cocoa.BCTableCellView>(): R;
    filter<R = cocoa.BCFilterInfo>(): R;
    setFilter<R = void, P0 = cocoa.BCFilterInfo>(_v: P0): R;
    selectedItems<R = cocoa.NSArray>(): R;
    preferredHeight<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface BCOutlineViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSTextFieldDelegateProtocol, cocoa.classes.BCTableCellViewDelegateProtocol, cocoa.classes.BCTableRowViewDelegateProtocol, cocoa.classes.NSOutlineViewDataSourceProtocol, cocoa.classes.BCOutlineViewDelegateProtocol {
      alloc<R = BCOutlineViewController>(): R;
      new: <R = BCOutlineViewController>() => R;
      itemRowCanFloat<R = boolean, P0 = unknown>(_itemRowCanFloat: P0): R;
    }
  }
}

declare const BCOutlineViewController: cocoa.classes.BCOutlineViewController;
