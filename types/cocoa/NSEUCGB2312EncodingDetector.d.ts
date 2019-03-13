/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCGB2312EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSEUCGB2312EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSEUCGB2312EncodingDetector>(): R;
      new: <R = NSEUCGB2312EncodingDetector>() => R;
    }
  }
}

declare const NSEUCGB2312EncodingDetector: cocoa.classes.NSEUCGB2312EncodingDetector;
