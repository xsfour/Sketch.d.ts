/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayerSurface<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    update<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
  }
  namespace classes {
    export interface _NSViewLayerSurface<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSViewLayerSurface>(): R;
      new: <R = _NSViewLayerSurface>() => R;
      initialize<R = void>(): R;
    }
  }
}
