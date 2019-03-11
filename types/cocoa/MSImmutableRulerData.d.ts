/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRulerData<T = any> extends cocoa._MSImmutableRulerData {}
  namespace classes {
    export interface MSImmutableRulerData<T = any> extends cocoa.classes._MSImmutableRulerData {
      alloc<R = MSImmutableRulerData>(): R;
      new: <R = MSImmutableRulerData>() => R;
    }
  }
}

declare const MSImmutableRulerData: cocoa.classes.MSImmutableRulerData;
