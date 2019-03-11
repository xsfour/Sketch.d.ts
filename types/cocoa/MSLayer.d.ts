/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayer<T = any> extends cocoa._MSLayer, cocoa.MSInterfaceImageOwnerProtocol, cocoa.MSLayerPreviewabilityProtocol, cocoa.MSHoverableItemProtocol, cocoa.MSSnappableProtocol, cocoa.MSLayerListLayerExtensionsProtocol, cocoa.MSLayerContainmentProtocol, cocoa.MSLayerProtocol, cocoa.NSCopyingProtocol, cocoa.MSRectDelegateProtocol {
    changeObservers<R = cocoa.NSHashTable>(): R;
    setChangeObservers<R = void, P0 = cocoa.NSHashTable>(_v: P0): R;
    absoluteRect<R = cocoa.MSAbsoluteRect>(): R;
    setAbsoluteRect<R = void, P0 = cocoa.MSAbsoluteRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayer<T = any> extends cocoa.classes._MSLayer, cocoa.classes.MSInterfaceImageOwnerProtocol, cocoa.classes.MSLayerPreviewabilityProtocol, cocoa.classes.MSHoverableItemProtocol, cocoa.classes.MSSnappableProtocol, cocoa.classes.MSLayerListLayerExtensionsProtocol, cocoa.classes.MSLayerContainmentProtocol, cocoa.classes.MSLayerProtocol, cocoa.classes.NSCopyingProtocol, cocoa.classes.MSRectDelegateProtocol {
      alloc<R = MSLayer>(): R;
      new: <R = MSLayer>() => R;
      makeLayerNamesUnique_withOptions<R = void, P0 = unknown, P1 = number>(_makeLayerNamesUnique: P0, _withOptions: P1): R;
      layerWithPath<R = unknown, P0 = unknown>(_layerWithPath: P0): R;
      alignLayers_toValue_forKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_alignLayers: P0, _toValue: P1, _forKey: P2): R;
      alignmentRectForLayers<R = cocoa.CGRect, P0 = unknown>(_alignmentRectForLayers: P0): R;
      alignLayers_withMode_toKey_pixelFit<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_alignLayers: P0, _withMode: P1, _toKey: P2, _pixelFit: P3): R;
      keyPathsForValuesAffectingBadgeMap<R = unknown>(): R;
      keyPathsForValuesAffectingNodeName<R = unknown>(): R;
      keyPathsForValuesAffectingUserVisibleRotation<R = unknown>(): R;
      rotationForUserVisibleRotation<R = number, P0 = number>(_rotationForUserVisibleRotation: P0): R;
      userVisibleRotationForRotation<R = number, P0 = number>(_userVisibleRotationForRotation: P0): R;
    }
  }
}

declare const MSLayer: cocoa.classes.MSLayer;
