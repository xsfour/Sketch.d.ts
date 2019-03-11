/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDrawerFrame<T = any> extends cocoa.NSFrameView {
    resizeWithEvent<R = void, P0 = unknown>(_resizeWithEvent: P0): R;
    drawerDidClose<R = void, P0 = unknown>(_drawerDidClose: P0): R;
    drawerDidOpen<R = void, P0 = unknown>(_drawerDidOpen: P0): R;
    setEdge<R = void, P0 = number>(_setEdge: P0): R;
    _removeTrackingRects<R = void>(): R;
    _addTrackingRects<R = void>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    resizeIndicatorRect<R = cocoa.CGRect>(): R;
    shadowOptions<R = number>(): R;
    registerForEdgeChanges<R = void, P0 = unknown>(_registerForEdgeChanges: P0): R;
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDrawerFrame<T = any> extends cocoa.classes.NSFrameView {
      alloc<R = NSDrawerFrame>(): R;
      new: <R = NSDrawerFrame>() => R;
    }
  }
}

declare const NSDrawerFrame: cocoa.classes.NSDrawerFrame;
