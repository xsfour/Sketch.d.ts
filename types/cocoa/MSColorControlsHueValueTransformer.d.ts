/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsHueValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsHueValueTransformer<T = any> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsHueValueTransformer>(): R;
      new: <R = MSColorControlsHueValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsHueValueTransformer: cocoa.classes.MSColorControlsHueValueTransformer;
