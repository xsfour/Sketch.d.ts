/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGRootElement<T = any> extends SVGGroupElement {
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGRootElement<T = any> extends SVGGroupElement {
      alloc<R = _SVGRootElement>(): R;
      new: <R = _SVGRootElement>() => R;
    }
  }
}
