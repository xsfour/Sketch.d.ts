/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBigEEncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSBigEEncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSBigEEncodingDetector>(): R;
      new: <R = NSBigEEncodingDetector>() => R;
    }
  }
}

declare const NSBigEEncodingDetector: cocoa.classes.NSBigEEncodingDetector;
