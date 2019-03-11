/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalMultipleResizeEventHandler<T = any> extends cocoa.MSNormalBaseEventHandler {
    oppositeCorner<R = number>(): R;
    placeRectInOppositeCorner<R = cocoa.CGRect, P0 = cocoa.CGRect>(_placeRectInOppositeCorner: P0): R;
    makeRectConform_toProportions<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(_makeRectConform: P0, _toProportions: P1): R;
    validSnapEdgesForResizingCorner<R = number>(): R;
    snapRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_snapRect: P0): R;
    calculateOppositePoint<R = void>(): R;
    calculateMidPoint<R = void>(): R;
    displayResizeCursor<R = void>(): R;
    storeCurrentLayerFrame<R = void>(): R;
    flattenPathLayerIfNecessary<R = void, P0 = unknown>(_flattenPathLayerIfNecessary: P0): R;
    flattenShapeGroupIfNecessary<R = void, P0 = unknown>(_flattenShapeGroupIfNecessary: P0): R;
    flattenRotatedShapes<R = void>(): R;
    oppositePoint<R = cocoa.CGPoint>(): R;
    setOppositePoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    midPoint<R = cocoa.CGPoint>(): R;
    setMidPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    absoluteLayerFramesBeforeResize<R = cocoa.NSDictionary>(): R;
    setAbsoluteLayerFramesBeforeResize<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    layerFramesBeforeResize<R = cocoa.NSDictionary>(): R;
    setLayerFramesBeforeResize<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    originalProportions<R = number>(): R;
    setOriginalProportions<R = void, P0 = number>(_v: P0): R;
    originalRect<R = cocoa.CGRect>(): R;
    setOriginalRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    eventData<R = cocoa.MSNormalEventData>(): R;
    setEventData<R = void, P0 = cocoa.MSNormalEventData>(_v: P0): R;
    layerSnapper<R = cocoa.MSSnapper>(): R;
    setLayerSnapper<R = void, P0 = cocoa.MSSnapper>(_v: P0): R;
    resizingCorner<R = number>(): R;
    setResizingCorner<R = void, P0 = number>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalMultipleResizeEventHandler<T = any> extends cocoa.classes.MSNormalBaseEventHandler {
      alloc<R = MSNormalMultipleResizeEventHandler>(): R;
      new: <R = MSNormalMultipleResizeEventHandler>() => R;
    }
  }
}

declare const MSNormalMultipleResizeEventHandler: cocoa.classes.MSNormalMultipleResizeEventHandler;
