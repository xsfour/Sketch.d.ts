/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownMiniTextField<T = any> extends MSUpDownTextField {}
  namespace classes {
    export interface MSUpDownMiniTextField<T = any> extends MSUpDownTextField {
      alloc<R = MSUpDownMiniTextField>(): R;
      new: <R = MSUpDownMiniTextField>() => R;
    }
  }
}

declare const MSUpDownMiniTextField: cocoa.classes.MSUpDownMiniTextField;
