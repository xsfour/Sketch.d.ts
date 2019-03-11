/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPage<T = any> extends cocoa._MSPage, cocoa.MSRootLayerProtocol {
    setIsLocked<R = void, P0 = boolean>(_setIsLocked: P0): R;
    isLocked<R = boolean>(): R;
    setIsVisible<R = void, P0 = boolean>(_setIsVisible: P0): R;
    isVisible<R = boolean>(): R;
    originForNewArtboardWithSize<R = cocoa.CGPoint, P0 = cocoa.CGSize>(_originForNewArtboardWithSize: P0): R;
    artboardsMatchingWidth<R = unknown, P0 = number>(_artboardsMatchingWidth: P0): R;
    contentIntersectsWithRect<R = boolean, P0 = cocoa.CGRect>(_contentIntersectsWithRect: P0): R;
    hasClickThrough<R = boolean>(): R;
    limitsSelectionToBounds<R = boolean>(): R;
    moveLayersToArtboards<R = void>(): R;
    rectSizeDidChange<R = void, P0 = unknown>(_rectSizeDidChange: P0): R;
    changeLayerExpandedTypeToAutomaticIfCollapsed<R = void>(): R;
    artboardWithID<R = unknown, P0 = unknown>(_artboardWithID: P0): R;
    parentRoot<R = unknown>(): R;
    ancestorsAndSelfTransforms<R = unknown>(): R;
    parentPage<R = unknown>(): R;
    layers_fitOnArtboard<R = boolean, P0 = unknown, P1 = unknown>(_layers: P0, _fitOnArtboard: P1): R;
    destinationArtboardForLayers_artboards<R = unknown, P0 = unknown, P1 = unknown>(_destinationArtboardForLayers: P0, _artboards: P1): R;
    tryToMoveLayerToArtboard<R = boolean, P0 = unknown>(_tryToMoveLayerToArtboard: P0): R;
    addOrRemoveLayerFromArtboardIfNecessary<R = boolean, P0 = unknown>(_addOrRemoveLayerFromArtboardIfNecessary: P0): R;
    tryToMoveLayer_toArtboards<R = boolean, P0 = unknown, P1 = unknown>(_tryToMoveLayer: P0, _toArtboards: P1): R;
    symbolLayersInGroup<R = unknown, P0 = unknown>(_symbolLayersInGroup: P0): R;
    artboardForSlice_inArtboards<R = unknown, P0 = unknown, P1 = unknown>(_artboardForSlice: P0, _inArtboards: P1): R;
    rulerCoordinateSpace<R = unknown>(): R;
    refreshOverlayInRect<R = void, P0 = cocoa.CGRect>(_refreshOverlayInRect: P0): R;
    transform<R = unknown>(): R;
    dealloc<R = void>(): R;
    changeSelectionByDeselectingLayers<R = void, P0 = unknown>(_changeSelectionByDeselectingLayers: P0): R;
    changeSelectionBySelectingLayers<R = void, P0 = unknown>(_changeSelectionBySelectingLayers: P0): R;
    changeSelectionUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_changeSelectionUsingBlock: P0): R;
    isLayerSelected<R = boolean, P0 = unknown>(_isLayerSelected: P0): R;
    layersWithIDs<R = unknown, P0 = unknown>(_layersWithIDs: P0): R;
    layersByObjectID<R = unknown>(): R;
    selectedLayers<R = unknown>(): R;
    parentGroup<R = unknown>(): R;
    resetSelectedLayerIDs<R = void, P0 = unknown>(_resetSelectedLayerIDs: P0): R;
    scrollOriginToCenterContentInViewBounds<R = cocoa.CGPoint, P0 = cocoa.CGRect>(_scrollOriginToCenterContentInViewBounds: P0): R;
    adjustRulerDataToTopLeftInViewBounds<R = void>(): R;
    shouldDrawSelection<R = boolean>(): R;
    displayName<R = unknown>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    previewImages<R = unknown>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    isTooSmallForPreciseHitTestingAtZoomValue<R = boolean, P0 = number>(_isTooSmallForPreciseHitTestingAtZoomValue: P0): R;
    containsPoint_zoomValue<R = boolean, P0 = cocoa.CGPoint, P1 = number>(_containsPoint: P0, _zoomValue: P1): R;
    cachedSelectedLayers<R = cocoa.MSLayerArray>(): R;
    setCachedSelectedLayers<R = void, P0 = cocoa.MSLayerArray>(_v: P0): R;
    cachedArtboards<R = cocoa.NSArray>(): R;
    setCachedArtboards<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    cachedExportableLayers<R = cocoa.NSArray>(): R;
    setCachedExportableLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    currentArtboard<R = cocoa.MSArtboardGroup>(): R;
    setCurrentArtboard<R = void, P0 = cocoa.MSArtboardGroup>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = cocoa.CGPoint>(): R;
    setScrollOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    symbols<R = cocoa.NSArray>(): R;
    currentVerticalRulerData<R = cocoa.MSRulerData>(): R;
    currentHorizontalRulerData<R = cocoa.MSRulerData>(): R;
    artboards<R = cocoa.NSArray>(): R;
    currentRoot<R = cocoa.MSRootLayer>(): R;
    contentBounds<R = cocoa.CGRect>(): R;
    exportableLayers<R = cocoa.NSArray>(): R;
    rulerBase<R = cocoa.CGPoint>(): R;
    setRulerBase<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    selectedLayerIDs<R = cocoa.NSMutableSet>(): R;
    setSelectedLayerIDs<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    grid<R = cocoa.MSSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSSimpleGrid>(_v: P0): R;
    hash<R = number>(): R;
    horizontalRulerData<R = cocoa.MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    layout<R = cocoa.MSLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSLayoutGrid>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = cocoa.MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
  }
  namespace classes {
    export interface MSPage<T = any> extends cocoa.classes._MSPage, cocoa.classes.MSRootLayerProtocol {
      alloc<R = MSPage>(): R;
      new: <R = MSPage>() => R;
      defaultSymbolsPageName<R = unknown>(): R;
      page<R = unknown>(): R;
    }
  }
}

declare const MSPage: cocoa.classes.MSPage;
