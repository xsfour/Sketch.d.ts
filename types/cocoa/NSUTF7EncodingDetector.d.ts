/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF7EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSUTF7EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSUTF7EncodingDetector>(): R;
      new: <R = NSUTF7EncodingDetector>() => R;
    }
  }
}

declare const NSUTF7EncodingDetector: cocoa.classes.NSUTF7EncodingDetector;
