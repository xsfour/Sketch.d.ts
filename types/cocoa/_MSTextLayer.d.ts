/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSTextLayer<T = any> extends cocoa.MSStyledLayer {
    textBehaviour<R = number>(): R;
    setTextBehaviour<R = void, P0 = number>(_v: P0): R;
    preview<R = cocoa.MSImageData>(): R;
    setPreview<R = void, P0 = cocoa.MSImageData>(_v: P0): R;
    lineSpacingBehaviour<R = number>(): R;
    setLineSpacingBehaviour<R = void, P0 = number>(_v: P0): R;
    glyphBounds<R = cocoa.CGRect>(): R;
    setGlyphBounds<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    dontSynchroniseWithSymbol<R = boolean>(): R;
    setDontSynchroniseWithSymbol<R = void, P0 = boolean>(_v: P0): R;
    automaticallyDrawOnUnderlyingPath<R = boolean>(): R;
    setAutomaticallyDrawOnUnderlyingPath<R = void, P0 = boolean>(_v: P0): R;
    attributedString<R = cocoa.MSAttributedString>(): R;
    setAttributedString<R = void, P0 = cocoa.MSAttributedString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSTextLayer<T = any> extends cocoa.classes.MSStyledLayer {
      alloc<R = _MSTextLayer>(): R;
      new: <R = _MSTextLayer>() => R;
    }
  }
}
