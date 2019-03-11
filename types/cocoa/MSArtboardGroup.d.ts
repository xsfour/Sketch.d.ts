/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardGroup<T = any> extends cocoa._MSArtboardGroup, cocoa.MSArtboardGroupProtocol, cocoa.MSRootLayerProtocol, cocoa.MSLayerWithMutableBackgroundColorProtocol, cocoa.MSColorConvertibleProtocol {
    setShouldBreakMaskChain<R = void, P0 = boolean>(_setShouldBreakMaskChain: P0): R;
    closestClippingLayer<R = unknown>(): R;
    rootForNameUniquing<R = unknown>(): R;
    moveChildrenToIdenticalPositionAfterResizeFromRect<R = void, P0 = cocoa.CGRect>(_moveChildrenToIdenticalPositionAfterResizeFromRect: P0): R;
    layerDidResizeFromRect_corner<R = void, P0 = cocoa.CGRect, P1 = number>(_layerDidResizeFromRect: P0, _corner: P1): R;
    canRotate<R = boolean>(): R;
    otherArtboardUnderArtboard<R = unknown>(): R;
    moveBySuggestedOffset<R = void, P0 = cocoa.CGVector>(_moveBySuggestedOffset: P0): R;
    setRect<R = void, P0 = cocoa.CGRect>(_setRect: P0): R;
    parentRoot<R = unknown>(): R;
    parentArtboard<R = unknown>(): R;
    rulerCoordinateSpace<R = unknown>(): R;
    constrainProportions<R = boolean>(): R;
    isLocked<R = boolean>(): R;
    setIsLocked<R = void, P0 = boolean>(_setIsLocked: P0): R;
    isOpen<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    isAutomaticScalingEnabled<R = boolean>(): R;
    hasClickThrough<R = boolean>(): R;
    hitTestInNameLabel_zoomValue<R = boolean, P0 = cocoa.CGPoint, P1 = number>(_hitTestInNameLabel: P0, _zoomValue: P1): R;
    setIsVisible<R = void, P0 = boolean>(_setIsVisible: P0): R;
    defaultArtboardStyle<R = unknown>(): R;
    canBeHidden<R = boolean>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    optimalBoundingBox<R = cocoa.CGRect>(): R;
    parentForInsertingLayers<R = unknown>(): R;
    displayName<R = unknown>(): R;
    shouldResizeToFitRect<R = boolean, P0 = cocoa.CGRect>(_shouldResizeToFitRect: P0): R;
    resizeToFitChildren<R = void>(): R;
    selectionHitTest_options_zoomValue<R = unknown, P0 = cocoa.CGPoint, P1 = number, P2 = number>(_selectionHitTest: P0, _options: P1, _zoomValue: P2): R;
    parentRootForAbsoluteRect<R = unknown>(): R;
    contentBounds<R = cocoa.CGRect>(): R;
    preset<R = cocoa.MSArtboardPreset>(): R;
    setPreset<R = void, P0 = cocoa.MSArtboardPreset>(_v: P0): R;
    rulerBase<R = cocoa.CGPoint>(): R;
    setRulerBase<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    rotation<R = number>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    backgroundColor<R = cocoa.MSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    bounds<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    grid<R = cocoa.MSSimpleGrid>(): R;
    setGrid<R = void, P0 = cocoa.MSSimpleGrid>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = cocoa.MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    layout<R = cocoa.MSLayoutGrid>(): R;
    setLayout<R = void, P0 = cocoa.MSLayoutGrid>(_v: P0): R;
    objectID<R = cocoa.NSString>(): R;
    origin<R = cocoa.CGPoint>(): R;
    rect<R = cocoa.CGRect>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = cocoa.MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardGroup<T = any> extends cocoa.classes._MSArtboardGroup, cocoa.classes.MSArtboardGroupProtocol, cocoa.classes.MSRootLayerProtocol, cocoa.classes.MSLayerWithMutableBackgroundColorProtocol, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSArtboardGroup>(): R;
      new: <R = MSArtboardGroup>() => R;
      artboardRectFromLayersInArray<R = cocoa.CGRect, P0 = unknown>(_artboardRectFromLayersInArray: P0): R;
    }
  }
}

declare const MSArtboardGroup: cocoa.classes.MSArtboardGroup;
