/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSingleByteEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSSingleByteEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSSingleByteEncodingDetector>(): R;
      new: <R = NSSingleByteEncodingDetector>() => R;
    }
  }
}

declare const NSSingleByteEncodingDetector: cocoa.classes.NSSingleByteEncodingDetector;
