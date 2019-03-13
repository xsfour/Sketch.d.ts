/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN4EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN4EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN4EncodingDetector>(): R;
      new: <R = NSISOLATIN4EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN4EncodingDetector: cocoa.classes.NSISOLATIN4EncodingDetector;
