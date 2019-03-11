/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGEllipseShape<T = any> extends cocoa.SVGBasicShape {
    ry<R = number>(): R;
    setRy<R = void, P0 = number>(_v: P0): R;
    rx<R = number>(): R;
    setRx<R = void, P0 = number>(_v: P0): R;
    cy<R = number>(): R;
    setCy<R = void, P0 = number>(_v: P0): R;
    cx<R = number>(): R;
    setCx<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGEllipseShape<T = any> extends cocoa.classes.SVGBasicShape {
      alloc<R = _SVGEllipseShape>(): R;
      new: <R = _SVGEllipseShape>() => R;
    }
  }
}
