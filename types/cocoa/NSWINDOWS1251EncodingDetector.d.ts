/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1251EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1251EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1251EncodingDetector>(): R;
      new: <R = NSWINDOWS1251EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1251EncodingDetector: cocoa.classes.NSWINDOWS1251EncodingDetector;
