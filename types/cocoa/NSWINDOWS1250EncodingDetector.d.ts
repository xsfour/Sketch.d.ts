/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1250EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1250EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1250EncodingDetector>(): R;
      new: <R = NSWINDOWS1250EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1250EncodingDetector: cocoa.classes.NSWINDOWS1250EncodingDetector;
