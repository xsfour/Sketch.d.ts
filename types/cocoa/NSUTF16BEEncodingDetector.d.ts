/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16BEEncodingDetector<T = any> extends NSUTF16BaseEncodingDetector {}
  namespace classes {
    export interface NSUTF16BEEncodingDetector<T = any> extends NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16BEEncodingDetector>(): R;
      new: <R = NSUTF16BEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16BEEncodingDetector: cocoa.classes.NSUTF16BEEncodingDetector;
