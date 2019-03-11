/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS874EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS874EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS874EncodingDetector>(): R;
      new: <R = NSWINDOWS874EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS874EncodingDetector: cocoa.classes.NSWINDOWS874EncodingDetector;
