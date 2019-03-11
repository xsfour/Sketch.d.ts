/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGCircleShape<T = any> extends cocoa.SVGBasicShape {
    r<R = number>(): R;
    setR<R = void, P0 = number>(_v: P0): R;
    cy<R = number>(): R;
    setCy<R = void, P0 = number>(_v: P0): R;
    cx<R = number>(): R;
    setCx<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGCircleShape<T = any> extends cocoa.classes.SVGBasicShape {
      alloc<R = _SVGCircleShape>(): R;
      new: <R = _SVGCircleShape>() => R;
    }
  }
}
