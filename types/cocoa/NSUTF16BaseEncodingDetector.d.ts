/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16BaseEncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSUTF16BaseEncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSUTF16BaseEncodingDetector>(): R;
      new: <R = NSUTF16BaseEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16BaseEncodingDetector: cocoa.classes.NSUTF16BaseEncodingDetector;
