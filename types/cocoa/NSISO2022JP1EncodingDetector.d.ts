/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022JP1EncodingDetector<T = any> extends NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSISO2022JP1EncodingDetector<T = any> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022JP1EncodingDetector>(): R;
      new: <R = NSISO2022JP1EncodingDetector>() => R;
    }
  }
}

declare const NSISO2022JP1EncodingDetector: cocoa.classes.NSISO2022JP1EncodingDetector;
