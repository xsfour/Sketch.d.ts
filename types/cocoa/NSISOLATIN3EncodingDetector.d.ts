/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN3EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN3EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN3EncodingDetector>(): R;
      new: <R = NSISOLATIN3EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN3EncodingDetector: cocoa.classes.NSISOLATIN3EncodingDetector;
