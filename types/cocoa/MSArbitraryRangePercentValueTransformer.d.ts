/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArbitraryRangePercentValueTransformer<T = any> extends NSValueTransformer {}
  namespace classes {
    export interface MSArbitraryRangePercentValueTransformer<T = any> extends NSValueTransformer {
      alloc<R = MSArbitraryRangePercentValueTransformer>(): R;
      new: <R = MSArbitraryRangePercentValueTransformer>() => R;
      hundredPercentValue<R = number>(): R;
      zeroPercentValue<R = number>(): R;
    }
  }
}

declare const MSArbitraryRangePercentValueTransformer: cocoa.classes.MSArbitraryRangePercentValueTransformer;
