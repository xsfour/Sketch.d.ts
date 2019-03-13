/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplicationMetadata<T = any> extends NSObject {}
  namespace classes {
    export interface MSApplicationMetadata<T = any> extends NSObject {
      alloc<R = MSApplicationMetadata>(): R;
      new: <R = MSApplicationMetadata>() => R;
      applicationKeys<R = unknown>(): R;
      metadata<R = unknown>(): R;
    }
  }
}

declare const MSApplicationMetadata: cocoa.classes.MSApplicationMetadata;
