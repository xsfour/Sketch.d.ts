/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGradientStop<T = any> extends cocoa.SVGElement {
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
    color<R = cocoa.MSImmutableColor>(): R;
    setColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGGradientStop<T = any> extends cocoa.classes.SVGElement {
      alloc<R = _SVGGradientStop>(): R;
      new: <R = _SVGGradientStop>() => R;
    }
  }
}
