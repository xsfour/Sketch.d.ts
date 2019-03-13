/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88596EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISO88596EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88596EncodingDetector>(): R;
      new: <R = NSISO88596EncodingDetector>() => R;
    }
  }
}

declare const NSISO88596EncodingDetector: cocoa.classes.NSISO88596EncodingDetector;
