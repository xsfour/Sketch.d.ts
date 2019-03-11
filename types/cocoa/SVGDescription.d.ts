/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGDescription<T = any> extends cocoa.SVGElement {}
  namespace classes {
    export interface SVGDescription<T = any> extends cocoa.classes.SVGElement {
      alloc<R = SVGDescription>(): R;
      new: <R = SVGDescription>() => R;
    }
  }
}

declare const SVGDescription: cocoa.classes.SVGDescription;
