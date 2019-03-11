/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsBrightnessValueTransformer<T = any> extends cocoa.MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsBrightnessValueTransformer<T = any> extends cocoa.classes.MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsBrightnessValueTransformer>(): R;
      new: <R = MSColorControlsBrightnessValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsBrightnessValueTransformer: cocoa.classes.MSColorControlsBrightnessValueTransformer;
