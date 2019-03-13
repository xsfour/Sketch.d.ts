/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSISO2022EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSISO2022EncodingDetector>(): R;
      new: <R = NSISO2022EncodingDetector>() => R;
    }
  }
}

declare const NSISO2022EncodingDetector: cocoa.classes.NSISO2022EncodingDetector;
