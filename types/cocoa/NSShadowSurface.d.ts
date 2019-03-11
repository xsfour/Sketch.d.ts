/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSShadowSurface<T = any> extends cocoa.NSSurface {
    initWithView_height_fill<R = unknown, P0 = unknown, P1 = number, P2 = string>(_initWithView: P0, _height: P1, _fill: P2): R;
    initWithView_height_fill_isHorizontal<R = unknown, P0 = unknown, P1 = number, P2 = string, P3 = boolean>(_initWithView: P0, _height: P1, _fill: P2, _isHorizontal: P3): R;
  }
  namespace classes {
    export interface NSShadowSurface<T = any> extends cocoa.classes.NSSurface {
      alloc<R = NSShadowSurface>(): R;
      new: <R = NSShadowSurface>() => R;
    }
  }
}

declare const NSShadowSurface: cocoa.classes.NSShadowSurface;
