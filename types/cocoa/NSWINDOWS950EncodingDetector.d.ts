/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS950EncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS950EncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSWINDOWS950EncodingDetector>(): R;
      new: <R = NSWINDOWS950EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS950EncodingDetector: cocoa.classes.NSWINDOWS950EncodingDetector;
