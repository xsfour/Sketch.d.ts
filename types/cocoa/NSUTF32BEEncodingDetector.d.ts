/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32BEEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSUTF32BEEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSUTF32BEEncodingDetector>(): R;
      new: <R = NSUTF32BEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF32BEEncodingDetector: cocoa.classes.NSUTF32BEEncodingDetector;
