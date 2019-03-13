/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32LEEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSUTF32LEEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSUTF32LEEncodingDetector>(): R;
      new: <R = NSUTF32LEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF32LEEncodingDetector: cocoa.classes.NSUTF32LEEncodingDetector;
