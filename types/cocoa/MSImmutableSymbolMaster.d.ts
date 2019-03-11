/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbolMaster<T = any> extends cocoa._MSImmutableSymbolMaster {
    availableOverridesWithDocument<R = unknown, P0 = unknown>(_availableOverridesWithDocument: P0): R;
    influenceRectPaddingForInstancesInDocument_visitedSymbols<R = cocoa.BCEdgePaddings, P0 = unknown, P1 = unknown>(_influenceRectPaddingForInstancesInDocument: P0, _visitedSymbols: P1): R;
    preserveFlexibleWidthTextLayersInMutableMaster_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_preserveFlexibleWidthTextLayersInMutableMaster: P0, _inBlock: P1): R;
    modifiedMasterByApplyingInstance_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_modifiedMasterByApplyingInstance: P0, _inDocument: P1): R;
    calculateAvailableOverridesWithDocument<R = unknown, P0 = unknown>(_calculateAvailableOverridesWithDocument: P0): R;
    availableOverridesWithParent_overrideValues_inDocument<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_availableOverridesWithParent: P0, _overrideValues: P1, _inDocument: P2): R;
    mergeNestedOverridesTo_withParent<R = void, P0 = unknown, P1 = unknown>(_mergeNestedOverridesTo: P0, _withParent: P1): R;
    canAddOverridesForMaster_toParent<R = boolean, P0 = unknown, P1 = unknown>(_canAddOverridesForMaster: P0, _toParent: P1): R;
    modifiedMasterCache<R = cocoa.BCCache>(): R;
    changeIdentifier<R = number>(): R;
  }
  namespace classes {
    export interface MSImmutableSymbolMaster<T = any> extends cocoa.classes._MSImmutableSymbolMaster {
      alloc<R = MSImmutableSymbolMaster>(): R;
      new: <R = MSImmutableSymbolMaster>() => R;
    }
  }
}

declare const MSImmutableSymbolMaster: cocoa.classes.MSImmutableSymbolMaster;
