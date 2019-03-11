/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022JPEncodingDetector<T = any> extends cocoa.NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSISO2022JPEncodingDetector<T = any> extends cocoa.classes.NSISO2022EncodingDetector {
      alloc<R = NSISO2022JPEncodingDetector>(): R;
      new: <R = NSISO2022JPEncodingDetector>() => R;
    }
  }
}

declare const NSISO2022JPEncodingDetector: cocoa.classes.NSISO2022JPEncodingDetector;
