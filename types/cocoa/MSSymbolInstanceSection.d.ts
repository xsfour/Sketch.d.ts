/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceSection<T = any> extends cocoa.MSBaseInspectorSection, cocoa.MSInspectorTableViewManagerDelegateProtocol, cocoa.MSInspectorItemProviderProtocol {
    rowHeightCacheKeyForOverrideRepresentation_shouldShowLabel_indentationLevel<R = unknown, P0 = unknown, P1 = boolean, P2 = number>(_rowHeightCacheKeyForOverrideRepresentation: P0, _shouldShowLabel: P1, _indentationLevel: P2): R;
    getAndCacheHeightForOverrideRepresentation_shouldShowLabel_indentationLevel<R = number, P0 = unknown, P1 = boolean, P2 = number>(_getAndCacheHeightForOverrideRepresentation: P0, _shouldShowLabel: P1, _indentationLevel: P2): R;
    cacheHeight_forOverrideRepresentation_shouldShowLabel_indentationLevel<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number>(_cacheHeight: P0, _forOverrideRepresentation: P1, _shouldShowLabel: P2, _indentationLevel: P3): R;
    displaysLabelAtIndex<R = boolean, P0 = number>(_displaysLabelAtIndex: P0): R;
    overrideSelectionHasChanged<R = boolean, P0 = unknown>(_overrideSelectionHasChanged: P0): R;
    uniqueArtboardIDsOfSelectedLayers<R = unknown>(): R;
    recursivelyGatherOverrideItemsForOverrides_into<R = void, P0 = unknown, P1 = unknown>(_recursivelyGatherOverrideItemsForOverrides: P0, _into: P1): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    rowHeightCache<R = cocoa.NSMutableDictionary>(): R;
    setRowHeightCache<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    tableViewManager<R = cocoa.MSInspectorTableViewManager>(): R;
    setTableViewManager<R = void, P0 = cocoa.MSInspectorTableViewManager>(_v: P0): R;
    overrideContainerItem<R = cocoa.MSTableContainerInspectorItem>(): R;
    setOverrideContainerItem<R = void, P0 = cocoa.MSTableContainerInspectorItem>(_v: P0): R;
    overrideItemDescriptions<R = cocoa.MSSymbolOverrideItemDescription>(): R;
    setOverrideItemDescriptions<R = void, P0 = cocoa.MSSymbolOverrideItemDescription>(_v: P0): R;
    headerItem<R = cocoa.MSCollapsibleHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSCollapsibleHeaderInspectorItem>(_v: P0): R;
    sharedStyleItem<R = cocoa.MSSharedSymbolStylesInspectorItem>(): R;
    setSharedStyleItem<R = void, P0 = cocoa.MSSharedSymbolStylesInspectorItem>(_v: P0): R;
    selectedOverrides<R = cocoa.NSArray>(): R;
    setSelectedOverrides<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    numberOfItems<R = number>(): R;
    delegate<R = cocoa.MSSymbolInstanceSectionDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSSymbolInstanceSectionDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSSymbolInstanceSection<T = any> extends cocoa.classes.MSBaseInspectorSection, cocoa.classes.MSInspectorTableViewManagerDelegateProtocol, cocoa.classes.MSInspectorItemProviderProtocol {
      alloc<R = MSSymbolInstanceSection>(): R;
      new: <R = MSSymbolInstanceSection>() => R;
    }
  }
}

declare const MSSymbolInstanceSection: cocoa.classes.MSSymbolInstanceSection;
