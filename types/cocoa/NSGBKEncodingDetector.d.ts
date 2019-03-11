/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGBKEncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSGBKEncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSGBKEncodingDetector>(): R;
      new: <R = NSGBKEncodingDetector>() => R;
    }
  }
}

declare const NSGBKEncodingDetector: cocoa.classes.NSGBKEncodingDetector;
