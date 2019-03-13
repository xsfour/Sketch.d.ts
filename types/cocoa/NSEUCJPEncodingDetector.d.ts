/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCJPEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSEUCJPEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSEUCJPEncodingDetector>(): R;
      new: <R = NSEUCJPEncodingDetector>() => R;
    }
  }
}

declare const NSEUCJPEncodingDetector: cocoa.classes.NSEUCJPEncodingDetector;
