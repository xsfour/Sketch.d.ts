/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCacheGeneration<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSModelObjectCacheGeneration<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSModelObjectCacheGeneration>(): R;
      new: <R = MSModelObjectCacheGeneration>() => R;
    }
  }
}

declare const MSModelObjectCacheGeneration: cocoa.classes.MSModelObjectCacheGeneration;
