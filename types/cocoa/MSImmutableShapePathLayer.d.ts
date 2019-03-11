/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapePathLayer<T = any> extends cocoa._MSImmutableShapePathLayer, cocoa.MSImmutableLayerPreviewabilityProtocol, cocoa.MSImmutablePathLayerProtocol {
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    migrateByTakingStyleFrom<R = void, P0 = unknown>(_migrateByTakingStyleFrom: P0): R;
    migratePropertiesFromShapeGroup<R = void, P0 = unknown>(_migratePropertiesFromShapeGroup: P0): R;
    migratePropertiesFromV99OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV99OrEarlierWithUnarchiver: P0): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    usedStyle<R = cocoa.MSImmutableStyle>(): R;
    isEditing<R = boolean>(): R;
    isRectangle<R = boolean>(): R;
    isPolyline<R = boolean>(): R;
    isPolygon<R = boolean>(): R;
    numberOfCurvePoints<R = number>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hasMarkers<R = boolean>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = cocoa.NSString>(): R;
    origin<R = cocoa.CGPoint>(): R;
    rect<R = cocoa.CGRect>(): R;
    rotation<R = number>(): R;
    style<R = cocoa.MSImmutableStyle>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableShapePathLayer<T = any> extends cocoa.classes._MSImmutableShapePathLayer, cocoa.classes.MSImmutableLayerPreviewabilityProtocol, cocoa.classes.MSImmutablePathLayerProtocol {
      alloc<R = MSImmutableShapePathLayer>(): R;
      new: <R = MSImmutableShapePathLayer>() => R;
    }
  }
}

declare const MSImmutableShapePathLayer: cocoa.classes.MSImmutableShapePathLayer;
