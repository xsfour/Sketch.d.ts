/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentData<T = any> extends cocoa._MSDocumentData, cocoa.MSLayerContainmentProtocol, cocoa.MSDocumentDataProtocol {
    determineCurrentArtboard<R = void>(): R;
    refreshOverlay<R = void>(): R;
    refreshOverlayInRect<R = void, P0 = cocoa.CGRect>(_refreshOverlayInRect: P0): R;
    immediatelyShowSelectionForAllLayers<R = void>(): R;
    temporarilyHideSelectionForLayers<R = void, P0 = unknown>(_temporarilyHideSelectionForLayers: P0): R;
    replaceExistingCreationMetadata<R = void>(): R;
    removeShareableObjectsFromInstanceOverrides<R = void, P0 = unknown>(_removeShareableObjectsFromInstanceOverrides: P0): R;
    images<R = unknown>(): R;
    layerStyleWithID<R = unknown, P0 = unknown>(_layerStyleWithID: P0): R;
    textStyleWithID<R = unknown, P0 = unknown>(_textStyleWithID: P0): R;
    allLayerStyles<R = unknown>(): R;
    allTextStyles<R = unknown>(): R;
    sharedObjectContainerOfType<R = unknown, P0 = number>(_sharedObjectContainerOfType: P0): R;
    purgeForeignObjects<R = void>(): R;
    purgeForeignStyles<R = void>(): R;
    stylesReferencedInDocument<R = unknown>(): R;
    purgeForeignSymbols<R = void>(): R;
    symbolsReferencedBySymbolInstances<R = unknown>(): R;
    symbolsReferencedBySymbolMasters<R = unknown>(): R;
    symbolsReferencedByInstances<R = unknown, P0 = unknown>(_symbolsReferencedByInstances: P0): R;
    enumerateForeignObjects_withLibraries_block<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_enumerateForeignObjects: P0, _withLibraries: P1, _block: P2): R;
    libraryForForeignObject_inLibraries<R = unknown, P0 = unknown, P1 = unknown>(_libraryForForeignObject: P0, _inLibraries: P1): R;
    invalidateAffectedSymbolInstances<R = void>(): R;
    addCopyOfInstanceMasterToDocumentIfNecessary<R = unknown, P0 = unknown>(_addCopyOfInstanceMasterToDocumentIfNecessary: P0): R;
    addSymbolMaster<R = void, P0 = unknown>(_addSymbolMaster: P0): R;
    addCopyOfMasterToDocumentIfNecessary<R = unknown, P0 = unknown>(_addCopyOfMasterToDocumentIfNecessary: P0): R;
    symbolWithID<R = unknown, P0 = unknown>(_symbolWithID: P0): R;
    allForeignObjects<R = unknown>(): R;
    allSymbols<R = unknown>(): R;
    localSymbols<R = unknown>(): R;
    allArtboards<R = unknown>(): R;
    populateDictionary_withChildrenOf<R = void, P0 = unknown, P1 = unknown>(_populateDictionary: P0, _withChildrenOf: P1): R;
    layersByObjectID<R = unknown>(): R;
    artboardWithID<R = unknown, P0 = unknown>(_artboardWithID: P0): R;
    layerWithID<R = unknown, P0 = unknown>(_layerWithID: P0): R;
    layerTreeLayoutDidChange<R = void>(): R;
    selectedLayers<R = unknown>(): R;
    documentIsEmpty<R = boolean>(): R;
    nameForNewPage<R = unknown>(): R;
    symbolsPageOrCreateIfNecessary<R = unknown>(): R;
    symbolsPage<R = unknown>(): R;
    addBlankPage<R = unknown>(): R;
    removePages_detachInstances<R = void, P0 = unknown, P1 = boolean>(_removePages: P0, _detachInstances: P1): R;
    setCurrentPageIndex<R = void, P0 = number>(_setCurrentPageIndex: P0): R;
    dealloc<R = void>(): R;
    documentData<R = unknown>(): R;
    defaultPagesArray<R = unknown>(): R;
    convertToColorSpace<R = void, P0 = number>(_convertToColorSpace: P0): R;
    assignColorSpace<R = void, P0 = number>(_assignColorSpace: P0): R;
    replaceInstancesOfColor_withColor_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean>(_replaceInstancesOfColor: P0, _withColor: P1, _ignoreAlphaWhenMatching: P2, _replaceAlphaOfOriginalColor: P3): R;
    enumerateColorConvertiblesIgnoringForeignSymbols<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateColorConvertiblesIgnoringForeignSymbols: P0): R;
    replaceFonts<R = void, P0 = unknown>(_replaceFonts: P0): R;
    invalidateFonts<R = void>(): R;
    metadataForKey_object<R = unknown, P0 = unknown, P1 = unknown>(_metadataForKey: P0, _object: P1): R;
    storeMetadata_forKey_object<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_storeMetadata: P0, _forKey: P1, _object: P2): R;
    UIMetadataKey<R = unknown>(): R;
    fontList<R = cocoa.MSFontList>(): R;
    setFontList<R = void, P0 = cocoa.MSFontList>(_v: P0): R;
    metadata<R = cocoa.NSDictionary>(): R;
    setMetadata<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    autoExpandGroupsInLayerList<R = boolean>(): R;
    setAutoExpandGroupsInLayerList<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.MSDocumentDataDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSDocumentDataDelegate>(_v: P0): R;
    cache<R = cocoa.BCCache>(): R;
    setCache<R = void, P0 = cocoa.BCCache>(_v: P0): R;
    selectedOverrides<R = cocoa.NSArray>(): R;
    setSelectedOverrides<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    symbolMap<R = cocoa.NSDictionary>(): R;
    currentPage<R = cocoa.MSPage>(): R;
    setCurrentPage<R = void, P0 = cocoa.MSPage>(_v: P0): R;
    pages<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSDocumentData<T = any> extends cocoa.classes._MSDocumentData, cocoa.classes.MSLayerContainmentProtocol, cocoa.classes.MSDocumentDataProtocol {
      alloc<R = MSDocumentData>(): R;
      new: <R = MSDocumentData>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSDocumentData: cocoa.classes.MSDocumentData;
