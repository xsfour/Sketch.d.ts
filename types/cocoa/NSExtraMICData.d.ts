/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtraMICData<T = any> extends NSObject {}
  namespace classes {
    export interface NSExtraMICData<T = any> extends NSObject {
      alloc<R = NSExtraMICData>(): R;
      new: <R = NSExtraMICData>() => R;
    }
  }
}

declare const NSExtraMICData: cocoa.classes.NSExtraMICData;
