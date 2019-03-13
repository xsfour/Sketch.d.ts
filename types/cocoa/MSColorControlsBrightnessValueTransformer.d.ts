/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsBrightnessValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsBrightnessValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsBrightnessValueTransformer>(): R;
      new: <R = MSColorControlsBrightnessValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsBrightnessValueTransformer: cocoa.classes.MSColorControlsBrightnessValueTransformer;
