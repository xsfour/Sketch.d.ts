/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowLocallyRenderedLayerSurface<T = any> extends cocoa.NSCGSWindowLayerSurface {
    isLocallyRendered<R = boolean>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    layer<R = unknown>(): R;
    setDisplayNumber<R = void, P0 = number>(_setDisplayNumber: P0): R;
    displayNumber<R = number>(): R;
    setDisplayMask<R = void, P0 = number>(_setDisplayMask: P0): R;
    displayMask<R = number>(): R;
    setScale<R = void, P0 = number>(_setScale: P0): R;
    scale<R = number>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    isOpaque<R = boolean>(): R;
    setColorSpace<R = void, P0 = cocoa.CGColorSpace>(_setColorSpace: P0): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    frame<R = cocoa.CGRect>(): R;
    surfaceID<R = number>(): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace classes {
    export interface _NSCGSWindowLocallyRenderedLayerSurface<T = any> extends cocoa.classes.NSCGSWindowLayerSurface {
      alloc<R = _NSCGSWindowLocallyRenderedLayerSurface>(): R;
      new: <R = _NSCGSWindowLocallyRenderedLayerSurface>() => R;
      initialize<R = void>(): R;
    }
  }
}
