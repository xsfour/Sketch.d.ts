/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransformEventHandler<T = any> extends cocoa.MSPointsEventHandler {
    coordinateSpace<R = unknown>(): R;
    resetTransformsForLayer<R = void, P0 = unknown>(_resetTransformsForLayer: P0): R;
    transformLayers<R = void>(): R;
    cursorForCorner<R = unknown, P0 = number>(_cursorForCorner: P0): R;
    replacePointAtCorner_withPoint<R = void, P0 = number, P1 = cocoa.CGPoint>(_replacePointAtCorner: P0, _withPoint: P1): R;
    pointAtCorner<R = cocoa.CGPoint, P0 = number>(_pointAtCorner: P0): R;
    movePointsRelatedToCorner_newLocation_previous_modifierFlags<R = void, P0 = number, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint, P3 = number>(_movePointsRelatedToCorner: P0, _newLocation: P1, _previous: P2, _modifierFlags: P3): R;
    recordOriginalShapes<R = void>(): R;
    firstSelectedLocation<R = cocoa.CGPoint>(): R;
    setFirstSelectedLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    directionLock<R = number>(): R;
    setDirectionLock<R = void, P0 = number>(_v: P0): R;
    currentGroup<R = cocoa.MSLayerGroup>(): R;
    setCurrentGroup<R = void, P0 = cocoa.MSLayerGroup>(_v: P0): R;
    originalPoints<R = cocoa.NSMutableArray>(): R;
    setOriginalPoints<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    transform<R = cocoa.DKDistortionTransform>(): R;
    setTransform<R = void, P0 = cocoa.DKDistortionTransform>(_v: P0): R;
    shapeMapping<R = cocoa.NSMapTable>(): R;
    setShapeMapping<R = void, P0 = cocoa.NSMapTable>(_v: P0): R;
    mouseDownPoints<R = cocoa.MSPointArray>(): R;
    setMouseDownPoints<R = void, P0 = cocoa.MSPointArray>(_v: P0): R;
    transformPoints<R = cocoa.MSPointArray>(): R;
    setTransformPoints<R = void, P0 = cocoa.MSPointArray>(_v: P0): R;
    originalRect<R = cocoa.CGRect>(): R;
    setOriginalRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSTransformEventHandler<T = any> extends cocoa.classes.MSPointsEventHandler {
      alloc<R = MSTransformEventHandler>(): R;
      new: <R = MSTransformEventHandler>() => R;
    }
  }
}

declare const MSTransformEventHandler: cocoa.classes.MSTransformEventHandler;
