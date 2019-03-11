/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableArtboardGroup<T = any> extends cocoa._MSImmutableArtboardGroup, cocoa.MSWebExportableRootLayerProtocol, cocoa.MSColorUserProtocol, cocoa.MSLayerWithBackgroundColorProtocol, cocoa.MSArtboardGroupProtocol, cocoa.MSImmutableRootLayerProtocol {
    rulerBase<R = cocoa.CGPoint>(): R;
    migratePropertiesFromV100OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV100OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV79OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV79OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV57OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV57OrEarlierWithUnarchiver: P0): R;
    shouldDrawBackgroundInContext<R = boolean, P0 = unknown>(_shouldDrawBackgroundInContext: P0): R;
    unscaledNameSize<R = cocoa.CGSize>(): R;
    preset<R = cocoa.MSArtboardPreset>(): R;
    containsFixedLayers<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = cocoa.MSImmutableColor>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    grid<R = cocoa.MSImmutableSimpleGrid>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isFlowHome<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    layout<R = cocoa.MSImmutableLayoutGrid>(): R;
    objectID<R = cocoa.NSString>(): R;
    origin<R = cocoa.CGPoint>(): R;
    rect<R = cocoa.CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = cocoa.MSImmutableRulerData>(): R;
  }
  namespace classes {
    export interface MSImmutableArtboardGroup<T = any> extends cocoa.classes._MSImmutableArtboardGroup, cocoa.classes.MSWebExportableRootLayerProtocol, cocoa.classes.MSColorUserProtocol, cocoa.classes.MSLayerWithBackgroundColorProtocol, cocoa.classes.MSArtboardGroupProtocol, cocoa.classes.MSImmutableRootLayerProtocol {
      alloc<R = MSImmutableArtboardGroup>(): R;
      new: <R = MSImmutableArtboardGroup>() => R;
    }
  }
}

declare const MSImmutableArtboardGroup: cocoa.classes.MSImmutableArtboardGroup;
