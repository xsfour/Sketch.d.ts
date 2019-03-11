/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayers<T = any> extends cocoa.NSObject, cocoa.MSLayerTraitsProtocol {
    cxx_destruct<R = void>(): R;
    suggestedRect<R = cocoa.CGRect>(): R;
    insertInGroup_atPosition_afterLayer_viewport_fitToParent<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = unknown, P3 = unknown, P4 = boolean>(_insertInGroup: P0, _atPosition: P1, _afterLayer: P2, _viewport: P3, _fitToParent: P4): R;
    insertOnPage_viewport_hint<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertOnPage: P0, _viewport: P1, _hint: P2): R;
    layerPositionsRelativeToUnion<R = unknown>(): R;
    unionSize<R = cocoa.CGSize>(): R;
    canBeContainedInLayer<R = boolean, P0 = unknown>(_canBeContainedInLayer: P0): R;
    parentTraits<R = number>(): R;
    setParentTraits<R = void, P0 = number>(_v: P0): R;
    suggestedPosition<R = cocoa.CGPoint>(): R;
    setSuggestedPosition<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    foreignSymbols<R = cocoa.NSDictionary>(): R;
    setForeignSymbols<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    localSymbols<R = cocoa.NSDictionary>(): R;
    setLocalSymbols<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    sharedStyles<R = cocoa.NSArray>(): R;
    setSharedStyles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    layers<R = cocoa.MSLayerArray>(): R;
    setLayers<R = void, P0 = cocoa.MSLayerArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPasteboardLayers<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSLayerTraitsProtocol {
      alloc<R = MSPasteboardLayers>(): R;
      new: <R = MSPasteboardLayers>() => R;
      originForLayer_rootIsPage<R = cocoa.CGPoint, P0 = unknown, P1 = boolean>(_originForLayer: P0, _rootIsPage: P1): R;
      suggestedOriginForLayers_rootIsPage<R = cocoa.CGPoint, P0 = unknown, P1 = boolean>(_suggestedOriginForLayers: P0, _rootIsPage: P1): R;
      parentTraitsForLayers<R = number, P0 = unknown>(_parentTraitsForLayers: P0): R;
      pasteboardLayersWithLayers<R = unknown, P0 = unknown>(_pasteboardLayersWithLayers: P0): R;
      pasteboardLayersWithForeignLayers<R = unknown, P0 = unknown>(_pasteboardLayersWithForeignLayers: P0): R;
      traitsForPropertyName<R = number, P0 = unknown>(_traitsForPropertyName: P0): R;
    }
  }
}

declare const MSPasteboardLayers: cocoa.classes.MSPasteboardLayers;
