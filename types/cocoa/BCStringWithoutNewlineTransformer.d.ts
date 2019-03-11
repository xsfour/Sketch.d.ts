/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCStringWithoutNewlineTransformer<T = any> extends cocoa.NSValueTransformer {}
  namespace classes {
    export interface BCStringWithoutNewlineTransformer<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = BCStringWithoutNewlineTransformer>(): R;
      new: <R = BCStringWithoutNewlineTransformer>() => R;
    }
  }
}

declare const BCStringWithoutNewlineTransformer: cocoa.classes.BCStringWithoutNewlineTransformer;
