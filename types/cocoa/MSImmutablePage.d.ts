/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePage<T = any> extends cocoa._MSImmutablePage, cocoa.MSWebExportableRootLayerProtocol, cocoa.MSImmutableRootLayerProtocol {
    rulerBase<R = cocoa.CGPoint>(): R;
    archiveReferenceIdentifier_bc<R = unknown>(): R;
    shouldDiffSublayersForDifferingLayer<R = boolean, P0 = unknown>(_shouldDiffSublayersForDifferingLayer: P0): R;
    migratePropertiesFromV79OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV79OrEarlierWithUnarchiver: P0): R;
    selectedLayerIDs<R = cocoa.NSSet>(): R;
    symbols<R = cocoa.NSArray>(): R;
    hasArtboards<R = boolean>(): R;
    artboards<R = cocoa.NSArray>(): R;
    containsFixedLayers<R = boolean>(): R;
    preset<R = cocoa.MSArtboardPreset>(): R;
    isFlowHome<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = cocoa.MSImmutableColor>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    grid<R = cocoa.MSImmutableSimpleGrid>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = cocoa.MSImmutableRulerData>(): R;
    layout<R = cocoa.MSImmutableLayoutGrid>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = cocoa.MSImmutableRulerData>(): R;
  }
  namespace classes {
    export interface MSImmutablePage<T = any> extends cocoa.classes._MSImmutablePage, cocoa.classes.MSWebExportableRootLayerProtocol, cocoa.classes.MSImmutableRootLayerProtocol {
      alloc<R = MSImmutablePage>(): R;
      new: <R = MSImmutablePage>() => R;
    }
  }
}

declare const MSImmutablePage: cocoa.classes.MSImmutablePage;
