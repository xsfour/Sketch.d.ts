/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGDescription<T = any> extends SVGElement {}
  namespace classes {
    export interface SVGDescription<T = any> extends SVGElement {
      alloc<R = SVGDescription>(): R;
      new: <R = SVGDescription>() => R;
    }
  }
}

declare const SVGDescription: cocoa.classes.SVGDescription;
