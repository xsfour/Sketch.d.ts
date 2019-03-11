/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN8EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN8EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN8EncodingDetector>(): R;
      new: <R = NSISOLATIN8EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN8EncodingDetector: cocoa.classes.NSISOLATIN8EncodingDetector;
