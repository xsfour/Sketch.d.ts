/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGB18030EncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSGB18030EncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSGB18030EncodingDetector>(): R;
      new: <R = NSGB18030EncodingDetector>() => R;
    }
  }
}

declare const NSGB18030EncodingDetector: cocoa.classes.NSGB18030EncodingDetector;
