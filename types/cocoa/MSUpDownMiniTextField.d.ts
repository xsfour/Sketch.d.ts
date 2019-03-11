/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownMiniTextField<T = any> extends cocoa.MSUpDownTextField {}
  namespace classes {
    export interface MSUpDownMiniTextField<T = any> extends cocoa.classes.MSUpDownTextField {
      alloc<R = MSUpDownMiniTextField>(): R;
      new: <R = MSUpDownMiniTextField>() => R;
    }
  }
}

declare const MSUpDownMiniTextField: cocoa.classes.MSUpDownMiniTextField;
