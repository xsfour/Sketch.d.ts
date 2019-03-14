/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMaster<T0 = void, T1 = void, T2 = void> extends _MSSymbolMaster, MSPreviewGenerationProtocol, MSLayerPreviewabilityProtocol, MSSharedObjectStylingProtocol, BCSortableProtocol {
    limitsSelectionToBounds<R = boolean>(): R;
    parentSymbol<R = unknown>(): R;
    ancestorIDsForLayerNamed_skip<R = unknown, P0 = unknown, P1 = unknown>(_ancestorIDsForLayerNamed: P0, _skip: P1): R;
    ancestorIDsForLayerNamed<R = unknown, P0 = unknown>(_ancestorIDsForLayerNamed: P0): R;
    isSafeToDelete<R = boolean>(): R;
    removeFromParentAndDetachAllInstances<R = void>(): R;
    detachAllInstances<R = void>(): R;
    ensureSymbolIDUniqueInDocument<R = boolean, P0 = unknown>(_ensureSymbolIDUniqueInDocument: P0): R;
    canInsertInstanceIntoGroupWithoutInfiniteRecursion<R = boolean, P0 = unknown>(_canInsertInstanceIntoGroupWithoutInfiniteRecursion: P0): R;
    hasInstances<R = boolean>(): R;
    nestedSymbolsSkipping<R = unknown, P0 = unknown>(_nestedSymbolsSkipping: P0): R;
    newSymbolInstance<R = unknown>(): R;
    copyWithIDMapping<R = unknown, P0 = unknown>(_copyWithIDMapping: P0): R;
    invalidateModifiedSymbolCache<R = void>(): R;
    initWithFrame<R = unknown, P0 = CGRect>(_initWithFrame: P0): R;
    canSnap_toLayer<R = boolean, P0 = number, P1 = unknown>(_canSnap: P0, _toLayer: P1): R;
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    generatePreviewWithImageSize_previewSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = number, P3 = boolean, P4 = unknown, P5 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _backingScale: P2, _shadow: P3, _colorSpace: P4, _completionBlock: P5): R;
    isDirty<R = boolean>(): R;
    setIsDirty<R = void, P0 = boolean>(_v: P0): R;
    changeIdentifier<R = number>(): R;
    setChangeIdentifier<R = void, P0 = number>(_v: P0): R;
    allInfluencedInstances<R = NSArray>(): R;
    nestedSymbols<R = NSSet>(): R;
    allInstances<R = NSArray>(): R;
    availableOverrides<R = NSArray>(): R;
    badgeType<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    name<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSymbolMaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSymbolMaster, MSPreviewGenerationProtocol, MSLayerPreviewabilityProtocol, MSSharedObjectStylingProtocol, BCSortableProtocol {
      alloc<R = MSSymbolMaster>(): R;
      new: <R = MSSymbolMaster>() => R;
      copyPropertiesFrom_to<R = void, P0 = unknown, P1 = unknown>(_copyPropertiesFrom: P0, _to: P1): R;
      convertSymbolToArtboard<R = unknown, P0 = unknown>(_convertSymbolToArtboard: P0): R;
      convertArtboardToSymbol<R = unknown, P0 = unknown>(_convertArtboardToSymbol: P0): R;
    }
  }
}

declare const MSSymbolMaster: cocoa.MSSymbolMaster.CLASS;
