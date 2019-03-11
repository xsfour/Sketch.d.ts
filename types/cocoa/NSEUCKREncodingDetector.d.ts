/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCKREncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSEUCKREncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSEUCKREncodingDetector>(): R;
      new: <R = NSEUCKREncodingDetector>() => R;
    }
  }
}

declare const NSEUCKREncodingDetector: cocoa.classes.NSEUCKREncodingDetector;
