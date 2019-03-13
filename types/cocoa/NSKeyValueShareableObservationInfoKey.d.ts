/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueShareableObservationInfoKey<T = any> extends NSObject {}
  namespace classes {
    export interface NSKeyValueShareableObservationInfoKey<T = any> extends NSObject {
      alloc<R = NSKeyValueShareableObservationInfoKey>(): R;
      new: <R = NSKeyValueShareableObservationInfoKey>() => R;
    }
  }
}

declare const NSKeyValueShareableObservationInfoKey: cocoa.classes.NSKeyValueShareableObservationInfoKey;
