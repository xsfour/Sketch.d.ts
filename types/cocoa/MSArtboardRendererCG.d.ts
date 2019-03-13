/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardRendererCG<T = any> extends MSGroupRendererCG {}
  namespace classes {
    export interface MSArtboardRendererCG<T = any> extends MSGroupRendererCG {
      alloc<R = MSArtboardRendererCG>(): R;
      new: <R = MSArtboardRendererCG>() => R;
    }
  }
}

declare const MSArtboardRendererCG: cocoa.classes.MSArtboardRendererCG;
