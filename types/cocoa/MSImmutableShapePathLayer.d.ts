/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapePathLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePathLayer, MSImmutableLayerPreviewabilityProtocol, MSImmutablePathLayerProtocol {
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    migrateByTakingStyleFrom<R = void, P0 = unknown>(_migrateByTakingStyleFrom: P0): R;
    migratePropertiesFromShapeGroup<R = void, P0 = unknown>(_migratePropertiesFromShapeGroup: P0): R;
    migratePropertiesFromV99OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV99OrEarlierWithUnarchiver: P0): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    usedStyle<R = MSImmutableStyle>(): R;
    isEditing<R = boolean>(): R;
    isRectangle<R = boolean>(): R;
    isPolyline<R = boolean>(): R;
    isPolygon<R = boolean>(): R;
    numberOfCurvePoints<R = number>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasMarkers<R = boolean>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    style<R = MSImmutableStyle>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableShapePathLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePathLayer, MSImmutableLayerPreviewabilityProtocol, MSImmutablePathLayerProtocol {
      alloc<R = MSImmutableShapePathLayer>(): R;
      new: <R = MSImmutableShapePathLayer>() => R;
    }
  }
}

declare const MSImmutableShapePathLayer: cocoa.MSImmutableShapePathLayer.CLASS;
