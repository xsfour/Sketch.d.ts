/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1256EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1256EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1256EncodingDetector>(): R;
      new: <R = NSWINDOWS1256EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1256EncodingDetector: cocoa.classes.NSWINDOWS1256EncodingDetector;
