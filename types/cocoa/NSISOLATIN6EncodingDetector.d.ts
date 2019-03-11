/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN6EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN6EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN6EncodingDetector>(): R;
      new: <R = NSISOLATIN6EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN6EncodingDetector: cocoa.classes.NSISOLATIN6EncodingDetector;
