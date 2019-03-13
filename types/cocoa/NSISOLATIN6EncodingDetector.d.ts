/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN6EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN6EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN6EncodingDetector>(): R;
      new: <R = NSISOLATIN6EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN6EncodingDetector: cocoa.classes.NSISOLATIN6EncodingDetector;
