/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayer<T0 = void, T1 = void, T2 = void> extends _MSLayer, MSInterfaceImageOwnerProtocol, MSLayerPreviewabilityProtocol, MSHoverableItemProtocol, MSSnappableProtocol, MSLayerListLayerExtensionsProtocol, MSLayerContainmentProtocol, MSLayerProtocol, NSCopyingProtocol, MSRectDelegateProtocol {
    changeObservers<R = NSHashTable>(): R;
    setChangeObservers<R = void, P0 = NSHashTable>(_v: P0): R;
    absoluteRect<R = MSAbsoluteRect>(): R;
    setAbsoluteRect<R = void, P0 = MSAbsoluteRect>(_v: P0): R;
  }
  namespace MSLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSLayer, MSInterfaceImageOwnerProtocol, MSLayerPreviewabilityProtocol, MSHoverableItemProtocol, MSSnappableProtocol, MSLayerListLayerExtensionsProtocol, MSLayerContainmentProtocol, MSLayerProtocol, NSCopyingProtocol, MSRectDelegateProtocol {
      alloc<R = MSLayer>(): R;
      new: <R = MSLayer>() => R;
      makeLayerNamesUnique_withOptions<R = void, P0 = unknown, P1 = number>(_makeLayerNamesUnique: P0, _withOptions: P1): R;
      layerWithPath<R = unknown, P0 = unknown>(_layerWithPath: P0): R;
      alignLayers_toValue_forKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_alignLayers: P0, _toValue: P1, _forKey: P2): R;
      alignmentRectForLayers<R = CGRect, P0 = unknown>(_alignmentRectForLayers: P0): R;
      alignLayers_withMode_toKey_pixelFit<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_alignLayers: P0, _withMode: P1, _toKey: P2, _pixelFit: P3): R;
      keyPathsForValuesAffectingBadgeMap<R = unknown>(): R;
      keyPathsForValuesAffectingNodeName<R = unknown>(): R;
      keyPathsForValuesAffectingUserVisibleRotation<R = unknown>(): R;
      rotationForUserVisibleRotation<R = number, P0 = number>(_rotationForUserVisibleRotation: P0): R;
      userVisibleRotationForRotation<R = number, P0 = number>(_userVisibleRotationForRotation: P0): R;
    }
  }
}

declare const MSLayer: cocoa.MSLayer.CLASS;
