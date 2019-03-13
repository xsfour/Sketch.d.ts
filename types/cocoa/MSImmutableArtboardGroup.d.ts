/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableArtboardGroup<T = any> extends _MSImmutableArtboardGroup, MSWebExportableRootLayerProtocol, MSColorUserProtocol, MSLayerWithBackgroundColorProtocol, MSArtboardGroupProtocol, MSImmutableRootLayerProtocol {
    rulerBase<R = CGPoint>(): R;
    migratePropertiesFromV100OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV100OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV79OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV79OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV57OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV57OrEarlierWithUnarchiver: P0): R;
    shouldDrawBackgroundInContext<R = boolean, P0 = unknown>(_shouldDrawBackgroundInContext: P0): R;
    unscaledNameSize<R = CGSize>(): R;
    preset<R = MSArtboardPreset>(): R;
    containsFixedLayers<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isFlowHome<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
  }
  namespace classes {
    export interface MSImmutableArtboardGroup<T = any> extends _MSImmutableArtboardGroup, MSWebExportableRootLayerProtocol, MSColorUserProtocol, MSLayerWithBackgroundColorProtocol, MSArtboardGroupProtocol, MSImmutableRootLayerProtocol {
      alloc<R = MSImmutableArtboardGroup>(): R;
      new: <R = MSImmutableArtboardGroup>() => R;
    }
  }
}

declare const MSImmutableArtboardGroup: cocoa.classes.MSImmutableArtboardGroup;
