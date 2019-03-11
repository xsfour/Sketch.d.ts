/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapeGroup<T = any> extends cocoa._MSImmutableShapeGroup, cocoa.MSImmutableLayerPreviewabilityProtocol, cocoa.MSShapeGroupProtocol, cocoa.MSImmutablePathLayerProtocol {
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    migratePropertiesFromV110OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV110OrEarlierWithUnarchiver: P0): R;
    calculateInfluenceRectForBoundsInDocumentPre108<R = cocoa.CGRect>(): R;
    migratePropertiesFromV103OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV103OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV51OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV51OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV106OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV106OrEarlierWithUnarchiver: P0): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    isPartOfClippingMask<R = boolean>(): R;
    hasMarkers<R = boolean>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
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
    export interface MSImmutableShapeGroup<T = any> extends cocoa.classes._MSImmutableShapeGroup, cocoa.classes.MSImmutableLayerPreviewabilityProtocol, cocoa.classes.MSShapeGroupProtocol, cocoa.classes.MSImmutablePathLayerProtocol {
      alloc<R = MSImmutableShapeGroup>(): R;
      new: <R = MSImmutableShapeGroup>() => R;
    }
  }
}

declare const MSImmutableShapeGroup: cocoa.classes.MSImmutableShapeGroup;
