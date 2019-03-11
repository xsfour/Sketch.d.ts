/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN9EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN9EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN9EncodingDetector>(): R;
      new: <R = NSISOLATIN9EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN9EncodingDetector: cocoa.classes.NSISOLATIN9EncodingDetector;
