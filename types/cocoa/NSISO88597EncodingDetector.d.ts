/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88597EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISO88597EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISO88597EncodingDetector>(): R;
      new: <R = NSISO88597EncodingDetector>() => R;
    }
  }
}

declare const NSISO88597EncodingDetector: cocoa.classes.NSISO88597EncodingDetector;
