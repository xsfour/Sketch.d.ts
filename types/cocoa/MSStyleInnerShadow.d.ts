/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleInnerShadow<T = any> extends cocoa._MSStyleInnerShadow {
    colorEqualApproximately<R = boolean>(): R;
  }
  namespace classes {
    export interface MSStyleInnerShadow<T = any> extends cocoa.classes._MSStyleInnerShadow {
      alloc<R = MSStyleInnerShadow>(): R;
      new: <R = MSStyleInnerShadow>() => R;
    }
  }
}

declare const MSStyleInnerShadow: cocoa.classes.MSStyleInnerShadow;
