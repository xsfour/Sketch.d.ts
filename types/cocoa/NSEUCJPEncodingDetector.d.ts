/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCJPEncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSEUCJPEncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSEUCJPEncodingDetector>(): R;
      new: <R = NSEUCJPEncodingDetector>() => R;
    }
  }
}

declare const NSEUCJPEncodingDetector: cocoa.classes.NSEUCJPEncodingDetector;
