/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtraMIData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSExtraMIData<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSExtraMIData>(): R;
      new: <R = NSExtraMIData>() => R;
    }
  }
}

declare const NSExtraMIData: cocoa.classes.NSExtraMIData;
