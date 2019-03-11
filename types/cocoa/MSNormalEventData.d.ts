/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalEventData<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    snapperData<R = cocoa.MSSnapperData>(): R;
    setSnapperData<R = void, P0 = cocoa.MSSnapperData>(_v: P0): R;
    dragMode<R = number>(): R;
    setDragMode<R = void, P0 = number>(_v: P0): R;
    resizingHandle<R = number>(): R;
    setResizingHandle<R = void, P0 = number>(_v: P0): R;
    resizingLayer<R = cocoa.MSLayer>(): R;
    setResizingLayer<R = void, P0 = cocoa.MSLayer>(_v: P0): R;
    originalScrollOrigin<R = cocoa.CGPoint>(): R;
    setOriginalScrollOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    midPoint<R = cocoa.CGPoint>(): R;
    setMidPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    mouseDown<R = cocoa.CGPoint>(): R;
    setMouseDown<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    didMouseDown<R = boolean>(): R;
    setDidMouseDown<R = void, P0 = boolean>(_v: P0): R;
    hasMultipleTouches<R = boolean>(): R;
    setHasMultipleTouches<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalEventData<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSNormalEventData>(): R;
      new: <R = MSNormalEventData>() => R;
    }
  }
}

declare const MSNormalEventData: cocoa.classes.MSNormalEventData;
