/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1255EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1255EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1255EncodingDetector>(): R;
      new: <R = NSWINDOWS1255EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1255EncodingDetector: cocoa.classes.NSWINDOWS1255EncodingDetector;
