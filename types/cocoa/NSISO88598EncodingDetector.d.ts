/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88598EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISO88598EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88598EncodingDetector>(): R;
      new: <R = NSISO88598EncodingDetector>() => R;
    }
  }
}

declare const NSISO88598EncodingDetector: cocoa.classes.NSISO88598EncodingDetector;
