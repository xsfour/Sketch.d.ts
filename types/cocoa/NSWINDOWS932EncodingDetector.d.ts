/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS932EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS932EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSWINDOWS932EncodingDetector>(): R;
      new: <R = NSWINDOWS932EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS932EncodingDetector: cocoa.classes.NSWINDOWS932EncodingDetector;
