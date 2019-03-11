/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTextSpan<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    attributes<R = cocoa.NSDictionary>(): R;
    setAttributes<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    text<R = cocoa.NSString>(): R;
    setText<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface SVGTextSpan<T = any> extends cocoa.classes.NSObject {
      alloc<R = SVGTextSpan>(): R;
      new: <R = SVGTextSpan>() => R;
    }
  }
}

declare const SVGTextSpan: cocoa.classes.SVGTextSpan;
