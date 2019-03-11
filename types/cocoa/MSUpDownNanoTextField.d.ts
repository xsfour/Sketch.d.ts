/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownNanoTextField<T = any> extends cocoa.MSUpDownTextField {}
  namespace classes {
    export interface MSUpDownNanoTextField<T = any> extends cocoa.classes.MSUpDownTextField {
      alloc<R = MSUpDownNanoTextField>(): R;
      new: <R = MSUpDownNanoTextField>() => R;
    }
  }
}

declare const MSUpDownNanoTextField: cocoa.classes.MSUpDownNanoTextField;
