/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapePathLayer<T = any> extends cocoa._MSShapePathLayer, cocoa.MSLayerPreviewabilityProtocol, cocoa.MSPathLayerProtocol {
    resizeWithOldGroupSize<R = void, P0 = cocoa.CGSize>(_resizeWithOldGroupSize: P0): R;
    adjustmentHandleAtPoint_zoomScale_resizing<R = number, P0 = cocoa.CGPoint, P1 = number, P2 = boolean>(_adjustmentHandleAtPoint: P0, _zoomScale: P1, _resizing: P2): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    willChangeValueForKey<R = void, P0 = unknown>(_willChangeValueForKey: P0): R;
    isPolygon<R = boolean>(): R;
    isRectangle<R = boolean>(): R;
    attemptToSimplifyBetweenPoint_andPoint_pathToLayerTransform<R = boolean, P0 = unknown, P1 = unknown, P2 = cocoa.CGAffineTransform>(_attemptToSimplifyBetweenPoint: P0, _andPoint: P1, _pathToLayerTransform: P2): R;
    simplifyPathOnce<R = boolean>(): R;
    pointsAroundIndex<R = unknown, P0 = number>(_pointsAroundIndex: P0): R;
    flattenedLayer<R = unknown>(): R;
    flatten<R = void>(): R;
    setEndMarkerType<R = void, P0 = number>(_setEndMarkerType: P0): R;
    setStartMarkerType<R = void, P0 = number>(_setStartMarkerType: P0): R;
    distanceSquaredToSegmentAtIndex_fromPoint_tolerance<R = number, P0 = number, P1 = cocoa.CGPoint, P2 = number>(_distanceSquaredToSegmentAtIndex: P0, _fromPoint: P1, _tolerance: P2): R;
    indexOfSegmentAtPoint_tolerance<R = number, P0 = cocoa.CGPoint, P1 = cocoa.CGSize>(_indexOfSegmentAtPoint: P0, _tolerance: P1): R;
    isPartOfClippingMask<R = boolean>(): R;
    isNearlyEmpty<R = boolean>(): R;
    didEdit<R = void>(): R;
    pointCenteredAfterPointIndex<R = cocoa.CGPoint, P0 = number>(_pointCenteredAfterPointIndex: P0): R;
    adjustGeometryToBoundsRect<R = void, P0 = cocoa.CGRect>(_adjustGeometryToBoundsRect: P0): R;
    boundsOfPathIntegral<R = cocoa.CGRect, P0 = boolean>(_boundsOfPathIntegral: P0): R;
    adjustFrameAfterEditIntegral_fixAncestors<R = void, P0 = boolean, P1 = boolean>(_adjustFrameAfterEditIntegral: P0, _fixAncestors: P1): R;
    applyAffineTransformToPath<R = void, P0 = cocoa.CGAffineTransform>(_applyAffineTransformToPath: P0): R;
    editable<R = boolean>(): R;
    resetPoints<R = void>(): R;
    resetPointsBasedOnUserInteraction<R = void>(): R;
    setParentObject<R = void, P0 = unknown>(_setParentObject: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    shouldDrawSelection<R = boolean>(): R;
    canSmartRotate<R = boolean>(): R;
    handlerClass<R = unknown>(): R;
    handleDoubleClick<R = boolean>(): R;
    setP2<R = void, P0 = cocoa.CGPoint>(_setP2: P0): R;
    p2<R = cocoa.CGPoint>(): R;
    setP1<R = void, P0 = cocoa.CGPoint>(_setP1: P0): R;
    p1<R = cocoa.CGPoint>(): R;
    boundsForCursorPreview<R = cocoa.CGRect>(): R;
    bezierPathForCursorPreview<R = unknown>(): R;
    insertionCursor<R = unknown>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    styleForBooleanOperation<R = unknown>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    shouldHitTestOnFill<R = boolean, P0 = unknown>(_shouldHitTestOnFill: P0): R;
    hitTestAsPath<R = boolean>(): R;
    isEditing<R = boolean>(): R;
    setIsEditing<R = void, P0 = boolean>(_v: P0): R;
    canFlatten<R = boolean>(): R;
    lastPoint<R = cocoa.MSCurvePoint>(): R;
    firstPoint<R = cocoa.MSCurvePoint>(): R;
    numberOfCurvePoints<R = number>(): R;
    hasRoundedCorners<R = boolean>(): R;
    pathInFrame<R = cocoa.MSPath>(): R;
    setPathInFrame<R = void, P0 = cocoa.MSPath>(_v: P0): R;
    length<R = number>(): R;
    setLength<R = void, P0 = number>(_v: P0): R;
    y2<R = number>(): R;
    setY2<R = void, P0 = number>(_v: P0): R;
    x2<R = number>(): R;
    setX2<R = void, P0 = number>(_v: P0): R;
    y1<R = number>(): R;
    setY1<R = void, P0 = number>(_v: P0): R;
    x1<R = number>(): R;
    setX1<R = void, P0 = number>(_v: P0): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    badgeType<R = number>(): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
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
    export interface MSShapePathLayer<T = any> extends cocoa.classes._MSShapePathLayer, cocoa.classes.MSLayerPreviewabilityProtocol, cocoa.classes.MSPathLayerProtocol {
      alloc<R = MSShapePathLayer>(): R;
      new: <R = MSShapePathLayer>() => R;
      performBatchEdits<R = void, P0 = cocoa.CDUnknownBlockType>(_performBatchEdits: P0): R;
      shapeWithRect<R = unknown, P0 = cocoa.CGRect>(_shapeWithRect: P0): R;
      layerWithShapeGroupSubpath<R = unknown, P0 = unknown>(_layerWithShapeGroupSubpath: P0): R;
      layerWithPath_integralFrame<R = unknown, P0 = unknown, P1 = boolean>(_layerWithPath: P0, _integralFrame: P1): R;
    }
  }
}

declare const MSShapePathLayer: cocoa.classes.MSShapePathLayer;
