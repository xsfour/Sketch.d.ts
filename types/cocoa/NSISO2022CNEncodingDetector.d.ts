/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022CNEncodingDetector<T = any> extends cocoa.NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSISO2022CNEncodingDetector<T = any> extends cocoa.classes.NSISO2022EncodingDetector {
      alloc<R = NSISO2022CNEncodingDetector>(): R;
      new: <R = NSISO2022CNEncodingDetector>() => R;
    }
  }
}

declare const NSISO2022CNEncodingDetector: cocoa.classes.NSISO2022CNEncodingDetector;
