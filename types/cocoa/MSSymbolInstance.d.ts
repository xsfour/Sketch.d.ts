/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstance<T = any> extends cocoa._MSSymbolInstance {
    invalidateIfAffectedBySymbolMastersIn<R = boolean, P0 = unknown>(_invalidateIfAffectedBySymbolMastersIn: P0): R;
    removeShareableObjectsFromOverrides<R = void, P0 = unknown>(_removeShareableObjectsFromOverrides: P0): R;
    setValue_forOverridePoint<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forOverridePoint: P1): R;
    prepareOverrideMappingForPoint_withSymbolMapTable_attributeMapTable<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_prepareOverrideMappingForPoint: P0, _withSymbolMapTable: P1, _attributeMapTable: P2): R;
    mapOverridesUnderOverridePoint_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_mapOverridesUnderOverridePoint: P0, _inBlock: P1): R;
    mapOverrides_forOverridePoint<R = void, P0 = unknown, P1 = unknown>(_mapOverrides: P0, _forOverridePoint: P1): R;
    internalSetValue_forOverridePointNamed<R = void, P0 = unknown, P1 = unknown>(_internalSetValue: P0, _forOverridePointNamed: P1): R;
    availableOverridesUnderPoint<R = unknown, P0 = unknown>(_availableOverridesUnderPoint: P0): R;
    updateOverridesWithObjectIDMap<R = void, P0 = unknown>(_updateOverridesWithObjectIDMap: P0): R;
    canScale<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    naturalSize<R = cocoa.CGSize>(): R;
    scale<R = number>(): R;
    resetSizeToMaster<R = void>(): R;
    updateOverrides_withMapping<R = void, P0 = unknown, P1 = unknown>(_updateOverrides: P0, _withMapping: P1): R;
    resizeInstanceToFitSymbol<R = void, P0 = unknown>(_resizeInstanceToFitSymbol: P0): R;
    shouldWrapDetachedSymbolMasterInGroup<R = boolean, P0 = unknown>(_shouldWrapDetachedSymbolMasterInGroup: P0): R;
    detachByReplacingWithGroup<R = unknown>(): R;
    numberOfVisibleCells<R = number>(): R;
    changeInstanceToSymbol<R = void, P0 = unknown>(_changeInstanceToSymbol: P0): R;
    isInstanceForMaster<R = boolean, P0 = unknown>(_isInstanceForMaster: P0): R;
    symbolID<R = unknown>(): R;
    symbolMaster<R = unknown>(): R;
    shouldRefreshOverlayForFlows<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
    pathForHoverInBounds<R = unknown>(): R;
    styleForBooleanOperation<R = unknown>(): R;
    isExpanded<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
    replaceWithInstanceOfSymbol<R = unknown, P0 = unknown>(_replaceWithInstanceOfSymbol: P0): R;
    selectionHitTest_options_zoomValue<R = unknown, P0 = cocoa.CGPoint, P1 = number, P2 = number>(_selectionHitTest: P0, _options: P1, _zoomValue: P2): R;
    overrideMatchingPoint<R = unknown, P0 = unknown>(_overrideMatchingPoint: P0): R;
    masterRefreshCounter<R = number>(): R;
    setMasterRefreshCounter<R = void, P0 = number>(_v: P0): R;
    influencingSymbolIDs<R = cocoa.NSSet>(): R;
    overrideContainer<R = cocoa.MSOverrideRepresentationContainer>(): R;
    modifiedMaster<R = cocoa.MSImmutableSymbolMaster>(): R;
    overrides<R = cocoa.NSDictionary>(): R;
    setOverrides<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    availableOverrides<R = cocoa.NSArray>(): R;
    overridePoints<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSSymbolInstance<T = any> extends cocoa.classes._MSSymbolInstance {
      alloc<R = MSSymbolInstance>(): R;
      new: <R = MSSymbolInstance>() => R;
    }
  }
}

declare const MSSymbolInstance: cocoa.classes.MSSymbolInstance;
