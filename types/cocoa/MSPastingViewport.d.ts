/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPastingViewport<T = any> extends NSObject {
    viewportContainingLayers<R = unknown, P0 = unknown>(_viewportContainingLayers: P0): R;
    visibleRect<R = CGRect>(): R;
    setVisibleRect<R = void, P0 = CGRect>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSPastingViewport<T = any> extends NSObject {
      alloc<R = MSPastingViewport>(): R;
      new: <R = MSPastingViewport>() => R;
      viewportWithVisibleRect_zoom<R = unknown, P0 = CGRect, P1 = number>(_viewportWithVisibleRect: P0, _zoom: P1): R;
    }
  }
}

declare const MSPastingViewport: cocoa.classes.MSPastingViewport;
