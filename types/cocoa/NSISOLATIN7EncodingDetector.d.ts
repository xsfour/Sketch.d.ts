/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN7EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN7EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN7EncodingDetector>(): R;
      new: <R = NSISOLATIN7EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN7EncodingDetector: cocoa.classes.NSISOLATIN7EncodingDetector;
