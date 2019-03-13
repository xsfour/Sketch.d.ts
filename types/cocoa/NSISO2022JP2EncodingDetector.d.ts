/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022JP2EncodingDetector<T = any> extends NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSISO2022JP2EncodingDetector<T = any> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022JP2EncodingDetector>(): R;
      new: <R = NSISO2022JP2EncodingDetector>() => R;
    }
  }
}

declare const NSISO2022JP2EncodingDetector: cocoa.classes.NSISO2022JP2EncodingDetector;
