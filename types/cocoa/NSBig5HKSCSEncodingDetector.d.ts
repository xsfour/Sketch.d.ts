/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBig5HKSCSEncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSBig5HKSCSEncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSBig5HKSCSEncodingDetector>(): R;
      new: <R = NSBig5HKSCSEncodingDetector>() => R;
    }
  }
}

declare const NSBig5HKSCSEncodingDetector: cocoa.classes.NSBig5HKSCSEncodingDetector;
