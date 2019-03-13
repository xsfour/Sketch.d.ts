/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsSaturationValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsSaturationValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsSaturationValueTransformer>(): R;
      new: <R = MSColorControlsSaturationValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsSaturationValueTransformer: cocoa.classes.MSColorControlsSaturationValueTransformer;
