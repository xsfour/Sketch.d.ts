/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN10EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN10EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN10EncodingDetector>(): R;
      new: <R = NSISOLATIN10EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN10EncodingDetector: cocoa.classes.NSISOLATIN10EncodingDetector;
