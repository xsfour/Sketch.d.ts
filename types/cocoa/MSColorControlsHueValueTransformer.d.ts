/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsHueValueTransformer<T = any> extends cocoa.MSArbitraryRangePercentValueTransformer {}
  namespace classes {
    export interface MSColorControlsHueValueTransformer<T = any> extends cocoa.classes.MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsHueValueTransformer>(): R;
      new: <R = MSColorControlsHueValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsHueValueTransformer: cocoa.classes.MSColorControlsHueValueTransformer;
