/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers15MSResizeSession<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    updateModel<R = unknown>(): R;
    locationInCoordinateSpace<R = CGPoint, P0 = unknown>(_locationInCoordinateSpace: P0): R;
    updateWithPoint_modifierFlags<R = void, P0 = CGPoint, P1 = number>(_updateWithPoint: P0, _modifierFlags: P1): R;
    updateWithDragRecognizer<R = void, P0 = unknown>(_updateWithDragRecognizer: P0): R;
    dealloc<R = void>(): R;
    finish<R = void>(): R;
    initWithSnappingSession<R = unknown, P0 = unknown>(_initWithSnappingSession: P0): R;
    initWithLayers_handle_session<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithLayers: P0, _handle: P1, _session: P2): R;
    initWithLayer_handle_session<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithLayer: P0, _handle: P1, _session: P2): R;
    originalCenter<R = CGPoint>(): R;
    originalLocationOfOppositeHandle<R = CGPoint>(): R;
    wantsConstrainProportions<R = boolean>(): R;
    setWantsConstrainProportions<R = void, P0 = boolean>(_v: P0): R;
    snappingEnabled<R = boolean>(): R;
    setSnappingEnabled<R = void, P0 = boolean>(_v: P0): R;
    alwaysRound<R = boolean>(): R;
    setAlwaysRound<R = void, P0 = boolean>(_v: P0): R;
    resizesAboutCenter<R = boolean>(): R;
    setResizesAboutCenter<R = void, P0 = boolean>(_v: P0): R;
    visibleRect<R = CGRect>(): R;
    setVisibleRect<R = void, P0 = CGRect>(_v: P0): R;
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    handle<R = number>(): R;
    layers<R = NSArray>(): R;
  
}
  namespace _TtC17SketchControllers15MSResizeSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers15MSResizeSession>(): R;
      new: <R = _TtC17SketchControllers15MSResizeSession>() => R;
  
  }
  }
}
