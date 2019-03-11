/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueShareableObservationInfoKey<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSKeyValueShareableObservationInfoKey<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSKeyValueShareableObservationInfoKey>(): R;
      new: <R = NSKeyValueShareableObservationInfoKey>() => R;
    }
  }
}

declare const NSKeyValueShareableObservationInfoKey: cocoa.classes.NSKeyValueShareableObservationInfoKey;
