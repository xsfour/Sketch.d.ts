/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPattern<T = any> extends _SVGPattern {
    isLikelyASketchExportedPattern<R = boolean>(): R;
    isSketchSVGTilePattern<R = boolean>(): R;
    isSketchSVGFitPattern<R = boolean>(): R;
    isSketchSVGFillPattern<R = boolean>(): R;
    svgImageElement<R = SVGImage>(): R;
    svgImageElementInLinkElement<R = SVGImage>(): R;
    svgLinkElement<R = SVGLink>(): R;
    sketchPatternFillType<R = number>(): R;
    scale<R = number>(): R;
    imageData<R = MSImageData>(): R;
  }
  namespace classes {
    export interface SVGPattern<T = any> extends _SVGPattern {
      alloc<R = SVGPattern>(): R;
      new: <R = SVGPattern>() => R;
    }
  }
}

declare const SVGPattern: cocoa.classes.SVGPattern;
