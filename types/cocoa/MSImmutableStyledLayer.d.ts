/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyledLayer<T = any> extends cocoa._MSImmutableStyledLayer, cocoa.MSImmutableLayerPreviewabilityProtocol, cocoa.MSStyledLayerProtocol {
    hasMarkers<R = boolean>(): R;
    decoratedPathInBoundsInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_decoratedPathInBoundsInDocument: P0, _asSubpath: P1): R;
    influenceRectEdgePaddingsThatDoNotCascade<R = cocoa.BCEdgePaddings>(): R;
    applyPropertiesToBezier<R = void, P0 = unknown>(_applyPropertiesToBezier: P0): R;
    shouldBeIncludedInParentPath<R = boolean>(): R;
    imageFillForOverridePoint_applyingStyleOverridesFrom_inDocument<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_imageFillForOverridePoint: P0, _applyingStyleOverridesFrom: P1, _inDocument: P2): R;
    bezierPathForEndDecorationOnPath<R = unknown, P0 = unknown>(_bezierPathForEndDecorationOnPath: P0): R;
    bezierPathForStartDecorationOnPath<R = unknown, P0 = unknown>(_bezierPathForStartDecorationOnPath: P0): R;
    roundDecorationTypeIfNecessary<R = number, P0 = number>(_roundDecorationTypeIfNecessary: P0): R;
    updateSharedStyleIDFromMigration<R = void, P0 = unknown>(_updateSharedStyleIDFromMigration: P0): R;
    trackColorsForBasicFill_tracker<R = void, P0 = unknown, P1 = unknown>(_trackColorsForBasicFill: P0, _tracker: P1): R;
    trackColors<R = void, P0 = unknown>(_trackColors: P0): R;
    strokeStyleForDecoratedPath<R = unknown>(): R;
    fillStyleForDecoratedPath<R = unknown>(): R;
    fillPathWithDecorations<R = unknown, P0 = unknown>(_fillPathWithDecorations: P0): R;
    prepareDrawingInContext_inBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_prepareDrawingInContext: P0, _inBlock: P1): R;
    svgPathAttribute<R = unknown, P0 = unknown>(_svgPathAttribute: P0): R;
    pathWithExporter_border<R = unknown, P0 = unknown, P1 = unknown>(_pathWithExporter: P0, _border: P1): R;
    shadowsFollowRotation<R = boolean>(): R;
    allowsBlur<R = boolean>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    shouldRasterize<R = boolean>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = cocoa.NSString>(): R;
    origin<R = cocoa.CGPoint>(): R;
    rect<R = cocoa.CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableStyledLayer<T = any> extends cocoa.classes._MSImmutableStyledLayer, cocoa.classes.MSImmutableLayerPreviewabilityProtocol, cocoa.classes.MSStyledLayerProtocol {
      alloc<R = MSImmutableStyledLayer>(): R;
      new: <R = MSImmutableStyledLayer>() => R;
      initialize<R = void>(): R;
      filledSquareRoundedDecoration<R = unknown>(): R;
      filledSquareDecoration<R = unknown>(): R;
      openSquareDecoration<R = unknown>(): R;
      filledCircleDecoration<R = unknown>(): R;
      openCircleDecoration<R = unknown>(): R;
      lineDecoration<R = unknown>(): R;
      openArrowDecoration<R = unknown>(): R;
      filledArrowDecoration<R = unknown>(): R;
      filledArrowRoundedDecoration<R = unknown>(): R;
      roundedPath_cornerRadius<R = unknown, P0 = unknown, P1 = number>(_roundedPath: P0, _cornerRadius: P1): R;
      pathForDecorationType<R = unknown, P0 = number>(_pathForDecorationType: P0): R;
      cacheDecorations<R = void>(): R;
      transformedPath_atPoint_rotation_scale_flipped<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = number, P3 = cocoa.CGSize, P4 = boolean>(_transformedPath: P0, _atPoint: P1, _rotation: P2, _scale: P3, _flipped: P4): R;
      adjustPath_forDecotationType_strokeWidth_scale<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = cocoa.CGSize>(_adjustPath: P0, _forDecotationType: P1, _strokeWidth: P2, _scale: P3): R;
      orderedIntersectionsForContour_withSegment<R = unknown, P0 = unknown, P1 = unknown>(_orderedIntersectionsForContour: P0, _withSegment: P1): R;
      intersectionPolygonForDecoration_atPoint_scale_strokeWidth<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = number, P3 = number>(_intersectionPolygonForDecoration: P0, _atPoint: P1, _scale: P2, _strokeWidth: P3): R;
      bezierPathForEndDecorationOnPath_strokeWidth_lineCap_decorationType<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_bezierPathForEndDecorationOnPath: P0, _strokeWidth: P1, _lineCap: P2, _decorationType: P3): R;
      bezierPathForStartDecorationOnPath_strokeWidth_lineCap_decorationType<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_bezierPathForStartDecorationOnPath: P0, _strokeWidth: P1, _lineCap: P2, _decorationType: P3): R;
      scaleForDecoration_stokeWidth<R = cocoa.CGSize, P0 = number, P1 = number>(_scaleForDecoration: P0, _stokeWidth: P1): R;
    }
  }
}

declare const MSImmutableStyledLayer: cocoa.classes.MSImmutableStyledLayer;
