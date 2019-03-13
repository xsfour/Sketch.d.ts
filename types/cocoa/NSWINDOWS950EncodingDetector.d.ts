/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS950EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS950EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSWINDOWS950EncodingDetector>(): R;
      new: <R = NSWINDOWS950EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS950EncodingDetector: cocoa.classes.NSWINDOWS950EncodingDetector;
