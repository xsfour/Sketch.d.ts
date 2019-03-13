/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGLSurfaceNonAtomicLayerContents<T = any> extends NSObject {
    dealloc<R = void>(): R;
    CA_copyRenderValue<R = void>(): R;
    initWithSurface<R = unknown, P0 = unknown>(_initWithSurface: P0): R;
  }
  namespace classes {
    export interface _NSCGLSurfaceNonAtomicLayerContents<T = any> extends NSObject {
      alloc<R = _NSCGLSurfaceNonAtomicLayerContents>(): R;
      new: <R = _NSCGLSurfaceNonAtomicLayerContents>() => R;
    }
  }
}
