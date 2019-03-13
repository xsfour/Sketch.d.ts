/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCacheGeneration<T = any> extends NSObject {}
  namespace classes {
    export interface MSModelObjectCacheGeneration<T = any> extends NSObject {
      alloc<R = MSModelObjectCacheGeneration>(): R;
      new: <R = MSModelObjectCacheGeneration>() => R;
    }
  }
}

declare const MSModelObjectCacheGeneration: cocoa.classes.MSModelObjectCacheGeneration;
