/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHZGB2312EncodingDetector<T = any> extends NSISO2022EncodingDetector {}
  namespace classes {
    export interface NSHZGB2312EncodingDetector<T = any> extends NSISO2022EncodingDetector {
      alloc<R = NSHZGB2312EncodingDetector>(): R;
      new: <R = NSHZGB2312EncodingDetector>() => R;
    }
  }
}

declare const NSHZGB2312EncodingDetector: cocoa.classes.NSHZGB2312EncodingDetector;
