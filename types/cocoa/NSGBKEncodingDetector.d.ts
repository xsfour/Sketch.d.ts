/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGBKEncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSGBKEncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSGBKEncodingDetector>(): R;
      new: <R = NSGBKEncodingDetector>() => R;
    }
  }
}

declare const NSGBKEncodingDetector: cocoa.classes.NSGBKEncodingDetector;
