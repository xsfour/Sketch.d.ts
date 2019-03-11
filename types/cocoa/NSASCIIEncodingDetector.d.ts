/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSASCIIEncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSASCIIEncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSASCIIEncodingDetector>(): R;
      new: <R = NSASCIIEncodingDetector>() => R;
    }
  }
}

declare const NSASCIIEncodingDetector: cocoa.classes.NSASCIIEncodingDetector;
