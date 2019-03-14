/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSection<T0 = void, T1 = void, T2 = void> extends NSViewController, MSPresetPickerViewDelegateProtocol, MSAssetPickerHeaderViewDelegateProtocol, NSTouchBarDelegateProtocol, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol, NSScrubberFlowLayoutDelegateProtocol {
    cxx_destruct<R = void>(): R;
    moveAssetAtIndex_beforeObjectAtIndex_ForPickerView<R = boolean, P0 = number, P1 = number, P2 = unknown>(_moveAssetAtIndex: P0, _beforeObjectAtIndex: P1, _ForPickerView: P2): R;
    indexesOfAsset_forPickerView<R = unknown, P0 = unknown, P1 = unknown>(_indexesOfAsset: P0, _forPickerView: P1): R;
    removeAssetAtIndex_forPickerView<R = void, P0 = number, P1 = unknown>(_removeAssetAtIndex: P0, _forPickerView: P1): R;
    assetAtIndex_forPickerView<R = unknown, P0 = number, P1 = unknown>(_assetAtIndex: P0, _forPickerView: P1): R;
    insertAsset_atIndex_forPickerView<R = void, P0 = unknown, P1 = number, P2 = unknown>(_insertAsset: P0, _atIndex: P1, _forPickerView: P2): R;
    addAsset_forPickerView<R = void, P0 = unknown, P1 = unknown>(_addAsset: P0, _forPickerView: P1): R;
    numberOfAssetsForPickerView<R = number, P0 = unknown>(_numberOfAssetsForPickerView: P0): R;
    assetType<R = number>(): R;
    fittingAssetScrubberLabelItemSizeForTitle<R = CGSize, P0 = unknown>(_fittingAssetScrubberLabelItemSizeForTitle: P0): R;
    scrubberItemViewForAssetAtIndex_amongAssets_isLastItemInScrubber<R = unknown, P0 = number, P1 = unknown, P2 = boolean>(_scrubberItemViewForAssetAtIndex: P0, _amongAssets: P1, _isLastItemInScrubber: P2): R;
    colorAssetCollectionLabelWithTitle<R = unknown, P0 = unknown>(_colorAssetCollectionLabelWithTitle: P0): R;
    scrubberItemViewWrapping<R = unknown, P0 = unknown>(_scrubberItemViewWrapping: P0): R;
    assetScrubberLabelItemTitleOfKind<R = unknown, P0 = number>(_assetScrubberLabelItemTitleOfKind: P0): R;
    firstGlobalAssetScrubberIndexAfterDocumentAssets<R = number, P0 = unknown>(_firstGlobalAssetScrubberIndexAfterDocumentAssets: P0): R;
    assetScrubberItemKindAtIndex<R = number, P0 = number>(_assetScrubberItemKindAtIndex: P0): R;
    touchBarCompatibleAssetsForPickerView<R = unknown, P0 = unknown>(_touchBarCompatibleAssetsForPickerView: P0): R;
    makeTouchBarItemForIdentifier<R = unknown, P0 = unknown>(_makeTouchBarItemForIdentifier: P0): R;
    customTouchBarItemIdentifiers<R = unknown>(): R;
    assetPickerViewKeys<R = unknown>(): R;
    assetPickerViews<R = unknown>(): R;
    viewsWithColorPickerView_blendingView_topViewIsEmpty<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_viewsWithColorPickerView: P0, _blendingView: P1, _topViewIsEmpty: P2): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    colorPickerChangedTo<R = void, P0 = unknown>(_colorPickerChangedTo: P0): R;
    popoverWillClose<R = void>(): R;
    validate<R = void>(): R;
    isEnabled<R = boolean>(): R;
    fillType<R = number>(): R;
    reloadPresetPicker<R = void, P0 = unknown>(_reloadPresetPicker: P0): R;
    assetCollectionForPresetPicker<R = unknown, P0 = unknown>(_assetCollectionForPresetPicker: P0): R;
    minimumHeight<R = number>(): R;
    scrollViewWithStackedViews<R = unknown, P0 = unknown>(_scrollViewWithStackedViews: P0): R;
    stackViewsInVerticalScrollView_frame<R = unknown, P0 = unknown, P1 = CGRect>(_stackViewsInVerticalScrollView: P0, _frame: P1): R;
    didMoveThroughHistory<R = void, P0 = unknown>(_didMoveThroughHistory: P0): R;
    hasPresetPickers<R = boolean>(): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    scrubberToAssets<R = NSMapTable>(): R;
    setScrubberToAssets<R = void, P0 = NSMapTable>(_v: P0): R;
    documentPresetPicker<R = MSAssetPickerView>(): R;
    setDocumentPresetPicker<R = void, P0 = MSAssetPickerView>(_v: P0): R;
    globalPresetPicker<R = MSAssetPickerView>(): R;
    setGlobalPresetPicker<R = void, P0 = MSAssetPickerView>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSColorInspectorSectionDelegate>(): R;
    setDelegate<R = void, P0 = MSColorInspectorSectionDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSPresetPickerViewDelegateProtocol, MSAssetPickerHeaderViewDelegateProtocol, NSTouchBarDelegateProtocol, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol, NSScrubberFlowLayoutDelegateProtocol {
      alloc<R = MSColorInspectorSection>(): R;
      new: <R = MSColorInspectorSection>() => R;
      viewsByAddingColorInspectorSeparators<R = unknown, P0 = unknown>(_viewsByAddingColorInspectorSeparators: P0): R;
      refreshColorPickerViewHeight<R = void, P0 = unknown>(_refreshColorPickerViewHeight: P0): R;
      drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor<R = void, P0 = CGRect, P1 = number, P2 = CGColor, P3 = CGColor>(_drawCheckerboardBackgroundInRect: P0, _size: P1, _foreColor: P2, _backgroundColor: P3): R;
    }
  }
}

declare const MSColorInspectorSection: cocoa.MSColorInspectorSection.CLASS;
