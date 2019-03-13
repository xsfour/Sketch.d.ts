/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterRendererCG<T = any> extends MSArtboardRendererCG {}
  namespace classes {
    export interface MSSymbolMasterRendererCG<T = any> extends MSArtboardRendererCG {
      alloc<R = MSSymbolMasterRendererCG>(): R;
      new: <R = MSSymbolMasterRendererCG>() => R;
    }
  }
}

declare const MSSymbolMasterRendererCG: cocoa.classes.MSSymbolMasterRendererCG;
