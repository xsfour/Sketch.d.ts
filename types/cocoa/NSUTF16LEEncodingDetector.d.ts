/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16LEEncodingDetector<T = any> extends NSUTF16BaseEncodingDetector {}
  namespace classes {
    export interface NSUTF16LEEncodingDetector<T = any> extends NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16LEEncodingDetector>(): R;
      new: <R = NSUTF16LEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16LEEncodingDetector: cocoa.classes.NSUTF16LEEncodingDetector;
