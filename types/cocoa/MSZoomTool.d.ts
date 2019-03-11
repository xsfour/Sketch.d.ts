/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomTool<T = any> extends cocoa.NSObject {
    zoomValueAfterZoomOutUnCapped<R = number>(): R;
    zoomValueAfterZoomOut<R = number>(): R;
    zoomValueAfterZoomInUnCapped<R = number>(): R;
    zoomValueAfterZoomIn<R = number>(): R;
    drawWithScrollOrigin<R = void, P0 = cocoa.CGPoint>(_drawWithScrollOrigin: P0): R;
    shouldZoomIntoRect<R = boolean>(): R;
    mouseUp_inView<R = void, P0 = unknown, P1 = unknown>(_mouseUp: P0, _inView: P1): R;
    zoomRect<R = cocoa.CGRect>(): R;
    applyZoomCursor<R = void>(): R;
    mouseDragged_inView<R = void, P0 = unknown, P1 = unknown>(_mouseDragged: P0, _inView: P1): R;
    mouseMoved<R = void>(): R;
    mouseDown_inView<R = void, P0 = unknown, P1 = unknown>(_mouseDown: P0, _inView: P1): R;
    flagsChanged<R = void>(): R;
    zoomPointFromEvent_inView<R = cocoa.CGPoint, P0 = unknown, P1 = unknown>(_zoomPointFromEvent: P0, _inView: P1): R;
    endZoomToolModeInView<R = void, P0 = unknown>(_endZoomToolModeInView: P0): R;
    beginZoomToolModeActivatedByKey<R = void, P0 = boolean>(_beginZoomToolModeActivatedByKey: P0): R;
    activatedByKey<R = boolean>(): R;
    active<R = boolean>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSZoomTool<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSZoomTool>(): R;
      new: <R = MSZoomTool>() => R;
    }
  }
}

declare const MSZoomTool: cocoa.classes.MSZoomTool;
