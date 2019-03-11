/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGLSurface<T = any> extends cocoa.NSCGLSurface {
    layerContents<R = unknown>(): R;
    _copyNonatomicRenderValue<R = void>(): R;
    image<R = cocoa.CGImage>(): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    isOpaque<R = boolean>(): R;
    isStereo<R = boolean>(): R;
    isFloatingPoint<R = boolean>(): R;
    bitsPerPixel<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    displayMask<R = number>(): R;
    size<R = cocoa.CGSize>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCGLSurface<T = any> extends cocoa.classes.NSCGLSurface {
      alloc<R = _NSCGLSurface>(): R;
      new: <R = _NSCGLSurface>() => R;
    }
  }
}
