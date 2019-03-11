/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16EncodingDetector<T = any> extends cocoa.NSUTF16BaseEncodingDetector {}
  namespace classes {
    export interface NSUTF16EncodingDetector<T = any> extends cocoa.classes.NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16EncodingDetector>(): R;
      new: <R = NSUTF16EncodingDetector>() => R;
    }
  }
}

declare const NSUTF16EncodingDetector: cocoa.classes.NSUTF16EncodingDetector;
