/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerView<T = any> extends cocoa.NSView, cocoa.NSScrubberDataSourceProtocol, cocoa.NSScrubberDelegateProtocol, cocoa.NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    scrubber<R = unknown>(): R;
    delegateInsertPresetFromPasteboardData_atIndex<R = boolean, P0 = unknown, P1 = number>(_delegateInsertPresetFromPasteboardData: P0, _atIndex: P1): R;
    delegateDidDragPresetToIndex<R = boolean, P0 = number>(_delegateDidDragPresetToIndex: P0): R;
    delegateSupportsDrop<R = boolean>(): R;
    delegateShowMenuForIndex<R = boolean, P0 = number>(_delegateShowMenuForIndex: P0): R;
    delegateDrawContentInRect_tag<R = void, P0 = cocoa.CGRect, P1 = number>(_delegateDrawContentInRect: P0, _tag: P1): R;
    delegateTooltipForIndex<R = unknown, P0 = number>(_delegateTooltipForIndex: P0): R;
    delegateShouldShowAddButton<R = boolean>(): R;
    delegateRemovePresetAtIndex<R = void, P0 = number>(_delegateRemovePresetAtIndex: P0): R;
    delegatePickPresetAtIndex<R = void, P0 = number>(_delegatePickPresetAtIndex: P0): R;
    addPreset<R = void>(): R;
    delegateNumberOfPresets<R = number>(): R;
    incrementIterator<R = cocoa.MSPresetIteratorStruct, P0 = cocoa.MSPresetIteratorStruct>(_incrementIterator: P0): R;
    columnCount<R = number>(): R;
    newIterator<R = cocoa.MSPresetIteratorStruct>(): R;
    moveDraggedViewToRowAtIndex<R = void, P0 = number>(_moveDraggedViewToRowAtIndex: P0): R;
    hoverIndexForDraggingInfo<R = number, P0 = unknown>(_hoverIndexForDraggingInfo: P0): R;
    canDragFromIndex<R = boolean, P0 = number>(_canDragFromIndex: P0): R;
    isFlipped<R = boolean>(): R;
    removePresetForButton<R = void, P0 = unknown>(_removePresetForButton: P0): R;
    removePresetWithTag<R = void, P0 = number>(_removePresetWithTag: P0): R;
    pickPresetForButton<R = void, P0 = unknown>(_pickPresetForButton: P0): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    shouldShowMenuForButton<R = boolean, P0 = unknown>(_shouldShowMenuForButton: P0): R;
    drawContentForButton_inRect<R = void, P0 = unknown, P1 = cocoa.CGRect>(_drawContentForButton: P0, _inRect: P1): R;
    isInStackView<R = boolean>(): R;
    stackIfPossible<R = void>(): R;
    addPresetButtonWithOffset<R = unknown, P0 = cocoa.CGPoint>(_addPresetButtonWithOffset: P0): R;
    presetButtonForIndex_withOffset<R = unknown, P0 = number, P1 = cocoa.CGPoint>(_presetButtonForIndex: P0, _withOffset: P1): R;
    reloadData<R = void>(): R;
    sourceDragIndex<R = number>(): R;
    setSourceDragIndex<R = void, P0 = number>(_v: P0): R;
    assetType<R = number>(): R;
    setAssetType<R = void, P0 = number>(_v: P0): R;
    assetCollection<R = cocoa.MSAssetCollection>(): R;
    setAssetCollection<R = void, P0 = cocoa.MSAssetCollection>(_v: P0): R;
    currentIndexes<R = cocoa.NSIndexSet>(): R;
    setCurrentIndexes<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    hoveringIndex<R = number>(): R;
    setHoveringIndex<R = void, P0 = number>(_v: P0): R;
    edgeMargins<R = cocoa.NSEdgeInsets>(): R;
    setEdgeMargins<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    tileMargin<R = number>(): R;
    setTileMargin<R = void, P0 = number>(_v: P0): R;
    tileSize<R = cocoa.CGSize>(): R;
    setTileSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    delegate<R = cocoa.MSPresetPickerViewDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSPresetPickerViewDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAssetPickerView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSScrubberDataSourceProtocol, cocoa.classes.NSScrubberDelegateProtocol, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSAssetPickerView>(): R;
      new: <R = MSAssetPickerView>() => R;
    }
  }
}

declare const MSAssetPickerView: cocoa.classes.MSAssetPickerView;
