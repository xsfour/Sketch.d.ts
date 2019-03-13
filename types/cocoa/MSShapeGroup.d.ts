/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeGroup<T = any> extends _MSShapeGroup, MSLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSPathLayerProtocol {
    canRotate<R = boolean>(): R;
    isVerticalLine<R = boolean>(): R;
    isHorizontalLine<R = boolean>(): R;
    hasLines<R = boolean>(): R;
    moveTransformsToChildren<R = void>(): R;
    flatten<R = unknown>(): R;
    safeFrameForBezierPath<R = CGRect, P0 = unknown>(_safeFrameForBezierPath: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    canSmartRotate<R = boolean>(): R;
    isStraightTriangle<R = boolean>(): R;
    shouldFlattenAfterRotate<R = boolean>(): R;
    handlerClass<R = unknown>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    changeInnerOuterBordersIfHasOpenPaths<R = void>(): R;
    cacheOwner<R = unknown>(): R;
    canFlatten<R = boolean>(): R;
    canProbablyFlatten<R = boolean>(): R;
    hasFlattenablePath<R = boolean>(): R;
    hasBooleanOperations<R = boolean>(): R;
    shouldHitTestOnFill<R = boolean, P0 = unknown>(_shouldHitTestOnFill: P0): R;
    hitTestAsPath<R = boolean>(): R;
    isPartOfClippingMask<R = boolean>(): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
    pathInFrame<R = MSPath>(): R;
    setPathInFrame<R = void, P0 = MSPath>(_v: P0): R;
    hasMarkers<R = boolean>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    badgeType<R = number>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
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
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSShapeGroup<T = any> extends _MSShapeGroup, MSLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSPathLayerProtocol {
      alloc<R = MSShapeGroup>(): R;
      new: <R = MSShapeGroup>() => R;
      shapeWithRect<R = unknown, P0 = CGRect>(_shapeWithRect: P0): R;
      applyStyleForBooleanOperationFrom_toShapeGroup<R = void, P0 = unknown, P1 = unknown>(_applyStyleForBooleanOperationFrom: P0, _toShapeGroup: P1): R;
      shapeWithBooleanOperation_onLayers<R = unknown, P0 = number, P1 = unknown>(_shapeWithBooleanOperation: P0, _onLayers: P1): R;
    }
  }
}

declare const MSShapeGroup: cocoa.classes.MSShapeGroup;
