/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSLFlexibleColor<T = any> extends BCFlexibleColor {
    blue<R = number>(): R;
    green<R = number>(): R;
    red<R = number>(): R;
  }
  namespace classes {
    export interface BCHSLFlexibleColor<T = any> extends BCFlexibleColor {
      alloc<R = BCHSLFlexibleColor>(): R;
      new: <R = BCHSLFlexibleColor>() => R;
    }
  }
}

declare const BCHSLFlexibleColor: cocoa.classes.BCHSLFlexibleColor;
