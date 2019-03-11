/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRGBFlexibleColor<T = any> extends cocoa.BCFlexibleColor {
    light<R = number>(): R;
    sat<R = number>(): R;
    hue<R = number>(): R;
  }
  namespace classes {
    export interface BCRGBFlexibleColor<T = any> extends cocoa.classes.BCFlexibleColor {
      alloc<R = BCRGBFlexibleColor>(): R;
      new: <R = BCRGBFlexibleColor>() => R;
    }
  }
}

declare const BCRGBFlexibleColor: cocoa.classes.BCRGBFlexibleColor;
