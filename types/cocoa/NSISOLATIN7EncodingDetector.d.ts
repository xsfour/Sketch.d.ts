/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN7EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN7EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN7EncodingDetector>(): R;
      new: <R = NSISOLATIN7EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN7EncodingDetector: cocoa.classes.NSISOLATIN7EncodingDetector;
