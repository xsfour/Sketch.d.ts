/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSASCIIEncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSASCIIEncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSASCIIEncodingDetector>(): R;
      new: <R = NSASCIIEncodingDetector>() => R;
    }
  }
}

declare const NSASCIIEncodingDetector: cocoa.classes.NSASCIIEncodingDetector;
