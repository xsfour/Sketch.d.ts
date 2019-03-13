/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTextSpan<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    attributes<R = NSDictionary>(): R;
    setAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    text<R = NSString>(): R;
    setText<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface SVGTextSpan<T = any> extends NSObject {
      alloc<R = SVGTextSpan>(): R;
      new: <R = SVGTextSpan>() => R;
    }
  }
}

declare const SVGTextSpan: cocoa.classes.SVGTextSpan;
