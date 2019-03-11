/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardRendererCG<T = any> extends cocoa.MSGroupRendererCG {}
  namespace classes {
    export interface MSArtboardRendererCG<T = any> extends cocoa.classes.MSGroupRendererCG {
      alloc<R = MSArtboardRendererCG>(): R;
      new: <R = MSArtboardRendererCG>() => R;
    }
  }
}

declare const MSArtboardRendererCG: cocoa.classes.MSArtboardRendererCG;
