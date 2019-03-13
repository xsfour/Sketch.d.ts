/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS936EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS936EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSWINDOWS936EncodingDetector>(): R;
      new: <R = NSWINDOWS936EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS936EncodingDetector: cocoa.classes.NSWINDOWS936EncodingDetector;
