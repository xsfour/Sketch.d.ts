/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGLink<T = any> extends cocoa.SVGDrawableElement {
    primitiveSetLink<R = void, P0 = unknown>(_primitiveSetLink: P0): R;
    link<R = cocoa.SVGElement>(): R;
    setLink<R = void, P0 = cocoa.SVGElement>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGLink<T = any> extends cocoa.classes.SVGDrawableElement {
      alloc<R = _SVGLink>(): R;
      new: <R = _SVGLink>() => R;
    }
  }
}
