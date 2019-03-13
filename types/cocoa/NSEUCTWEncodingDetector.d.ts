/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCTWEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSEUCTWEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSEUCTWEncodingDetector>(): R;
      new: <R = NSEUCTWEncodingDetector>() => R;
    }
  }
}

declare const NSEUCTWEncodingDetector: cocoa.classes.NSEUCTWEncodingDetector;
