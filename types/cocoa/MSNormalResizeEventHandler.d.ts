/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalResizeEventHandler<T = any> extends cocoa.MSNormalBaseEventHandler {
    finishResizing<R = void>(): R;
    oppositeCorner<R = number>(): R;
    updateResize<R = void, P0 = unknown>(_updateResize: P0): R;
    prepareForResize<R = void>(): R;
    resizeLayer<R = void, P0 = unknown>(_resizeLayer: P0): R;
    resizeGestureRecognizer<R = cocoa.MSDragGestureRecognizer>(): R;
    resizeSession<R = cocoa._TtC17SketchControllers15MSResizeSession>(): R;
    eventData<R = cocoa.MSNormalEventData>(): R;
    setEventData<R = void, P0 = cocoa.MSNormalEventData>(_v: P0): R;
    snappingSession<R = cocoa.MSSnappingSession>(): R;
    setSnappingSession<R = void, P0 = cocoa.MSSnappingSession>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalResizeEventHandler<T = any> extends cocoa.classes.MSNormalBaseEventHandler {
      alloc<R = MSNormalResizeEventHandler>(): R;
      new: <R = MSNormalResizeEventHandler>() => R;
    }
  }
}

declare const MSNormalResizeEventHandler: cocoa.classes.MSNormalResizeEventHandler;
