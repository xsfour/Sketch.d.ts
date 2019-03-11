/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPattern<T = any> extends cocoa._SVGPattern {
    isLikelyASketchExportedPattern<R = boolean>(): R;
    isSketchSVGTilePattern<R = boolean>(): R;
    isSketchSVGFitPattern<R = boolean>(): R;
    isSketchSVGFillPattern<R = boolean>(): R;
    svgImageElement<R = cocoa.SVGImage>(): R;
    svgImageElementInLinkElement<R = cocoa.SVGImage>(): R;
    svgLinkElement<R = cocoa.SVGLink>(): R;
    sketchPatternFillType<R = number>(): R;
    scale<R = number>(): R;
    imageData<R = cocoa.MSImageData>(): R;
  }
  namespace classes {
    export interface SVGPattern<T = any> extends cocoa.classes._SVGPattern {
      alloc<R = SVGPattern>(): R;
      new: <R = SVGPattern>() => R;
    }
  }
}

declare const SVGPattern: cocoa.classes.SVGPattern;
