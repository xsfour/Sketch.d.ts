/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalResizeEventHandler<T = any> extends MSNormalBaseEventHandler {
    finishResizing<R = void>(): R;
    oppositeCorner<R = number>(): R;
    updateResize<R = void, P0 = unknown>(_updateResize: P0): R;
    prepareForResize<R = void>(): R;
    resizeLayer<R = void, P0 = unknown>(_resizeLayer: P0): R;
    resizeGestureRecognizer<R = MSDragGestureRecognizer>(): R;
    resizeSession<R = _TtC17SketchControllers15MSResizeSession>(): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    snappingSession<R = MSSnappingSession>(): R;
    setSnappingSession<R = void, P0 = MSSnappingSession>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalResizeEventHandler<T = any> extends MSNormalBaseEventHandler {
      alloc<R = MSNormalResizeEventHandler>(): R;
      new: <R = MSNormalResizeEventHandler>() => R;
    }
  }
}

declare const MSNormalResizeEventHandler: cocoa.classes.MSNormalResizeEventHandler;
