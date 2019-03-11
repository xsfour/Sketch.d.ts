/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPencilEventHandler<T = any> extends cocoa.MSEventHandler {
    addCurvePoint<R = void, P0 = unknown>(_addCurvePoint: P0): R;
    addPoint<R = void, P0 = cocoa.CGPoint>(_addPoint: P0): R;
    pathShouldClose<R = boolean>(): R;
    removeRedundantPoints<R = void, P0 = unknown>(_removeRedundantPoints: P0): R;
    fittedBezierPathFromShapePath<R = unknown, P0 = unknown>(_fittedBezierPathFromShapePath: P0): R;
    unflattenResult<R = void>(): R;
    selectShape<R = void>(): R;
    removeShape<R = void>(): R;
    finishShapeOrRemoveIfEmpty<R = void>(): R;
    adjustStyleForGroup<R = void, P0 = unknown>(_adjustStyleForGroup: P0): R;
    insertNewShapeForEditingAtPoint<R = void, P0 = cocoa.CGPoint>(_insertNewShapeForEditingAtPoint: P0): R;
    lastMouse<R = cocoa.CGPoint>(): R;
    setLastMouse<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    isDragging<R = boolean>(): R;
    setIsDragging<R = void, P0 = boolean>(_v: P0): R;
    currentGroup<R = cocoa.MSLayerGroup>(): R;
    setCurrentGroup<R = void, P0 = cocoa.MSLayerGroup>(_v: P0): R;
    shape<R = cocoa.MSShapePathLayer>(): R;
    setShape<R = void, P0 = cocoa.MSShapePathLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSPencilEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSPencilEventHandler>(): R;
      new: <R = MSPencilEventHandler>() => R;
    }
  }
}

declare const MSPencilEventHandler: cocoa.classes.MSPencilEventHandler;
