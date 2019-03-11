/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022KREncodingDetector<T = any> extends cocoa.NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSISO2022KREncodingDetector<T = any> extends cocoa.classes.NSISO2022EncodingDetector {
      alloc<R = NSISO2022KREncodingDetector>(): R;
      new: <R = NSISO2022KREncodingDetector>() => R;
    }
  }
}

declare const NSISO2022KREncodingDetector: cocoa.classes.NSISO2022KREncodingDetector;
