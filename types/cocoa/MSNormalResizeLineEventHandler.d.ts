/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalResizeLineEventHandler<T = any> extends cocoa.MSNormalBaseEventHandler, cocoa.MSAlignmentEngineDelegateProtocol {
    cursorForRadians<R = unknown, P0 = number>(_cursorForRadians: P0): R;
    displayResizeCursor<R = void>(): R;
    addSnapTargetsToEngine<R = void, P0 = unknown>(_addSnapTargetsToEngine: P0): R;
    prepareForSnapping<R = unknown>(): R;
    snapGuides<R = cocoa.MSAlignmentEngineResult>(): R;
    setSnapGuides<R = void, P0 = cocoa.MSAlignmentEngineResult>(_v: P0): R;
    eventData<R = cocoa.MSNormalEventData>(): R;
    setEventData<R = void, P0 = cocoa.MSNormalEventData>(_v: P0): R;
    layerSnapper<R = cocoa.MSSnapper>(): R;
    setLayerSnapper<R = void, P0 = cocoa.MSSnapper>(_v: P0): R;
    pointIndex<R = number>(): R;
    setPointIndex<R = void, P0 = number>(_v: P0): R;
    layer<R = cocoa.MSShapePathLayer>(): R;
    setLayer<R = void, P0 = cocoa.MSShapePathLayer>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNormalResizeLineEventHandler<T = any> extends cocoa.classes.MSNormalBaseEventHandler, cocoa.classes.MSAlignmentEngineDelegateProtocol {
      alloc<R = MSNormalResizeLineEventHandler>(): R;
      new: <R = MSNormalResizeLineEventHandler>() => R;
    }
  }
}

declare const MSNormalResizeLineEventHandler: cocoa.classes.MSNormalResizeLineEventHandler;
