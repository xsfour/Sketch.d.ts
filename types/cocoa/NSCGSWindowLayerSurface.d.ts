/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowLayerSurface<T = any> extends NSCGSWindowSurface {
    locallyRendered<R = boolean>(): R;
    colorSpace<R = CGColorSpace>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
    displayMask<R = number>(): R;
    setDisplayMask<R = void, P0 = number>(_v: P0): R;
    displayNumber<R = number>(): R;
    setDisplayNumber<R = void, P0 = number>(_v: P0): R;
    layer<R = CALayer>(): R;
    setLayer<R = void, P0 = CALayer>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCGSWindowLayerSurface<T = any> extends NSCGSWindowSurface {
      alloc<R = NSCGSWindowLayerSurface>(): R;
      new: <R = NSCGSWindowLayerSurface>() => R;
    }
  }
}

declare const NSCGSWindowLayerSurface: cocoa.classes.NSCGSWindowLayerSurface;
