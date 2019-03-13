/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRulerData<T = any> extends _MSImmutableRulerData {}
  namespace classes {
    export interface MSImmutableRulerData<T = any> extends _MSImmutableRulerData {
      alloc<R = MSImmutableRulerData>(): R;
      new: <R = MSImmutableRulerData>() => R;
    }
  }
}

declare const MSImmutableRulerData: cocoa.classes.MSImmutableRulerData;
