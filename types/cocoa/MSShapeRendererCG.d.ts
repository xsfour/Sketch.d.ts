/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeRendererCG<T = any> extends MSGroupRendererCG {}
  namespace classes {
    export interface MSShapeRendererCG<T = any> extends MSGroupRendererCG {
      alloc<R = MSShapeRendererCG>(): R;
      new: <R = MSShapeRendererCG>() => R;
    }
  }
}

declare const MSShapeRendererCG: cocoa.classes.MSShapeRendererCG;
