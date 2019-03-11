/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsSaturationValueTransformer<T = any> extends cocoa.MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsSaturationValueTransformer<T = any> extends cocoa.classes.MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsSaturationValueTransformer>(): R;
      new: <R = MSColorControlsSaturationValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsSaturationValueTransformer: cocoa.classes.MSColorControlsSaturationValueTransformer;
