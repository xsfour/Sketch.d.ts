/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGClipPath<T = any> extends cocoa._SVGClipPath {}
  namespace classes {
    export interface SVGClipPath<T = any> extends cocoa.classes._SVGClipPath {
      alloc<R = SVGClipPath>(): R;
      new: <R = SVGClipPath>() => R;
    }
  }
}

declare const SVGClipPath: cocoa.classes.SVGClipPath;
