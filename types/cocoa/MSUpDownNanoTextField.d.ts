/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownNanoTextField<T = any> extends MSUpDownTextField {}
  namespace classes {
    export interface MSUpDownNanoTextField<T = any> extends MSUpDownTextField {
      alloc<R = MSUpDownNanoTextField>(): R;
      new: <R = MSUpDownNanoTextField>() => R;
    }
  }
}

declare const MSUpDownNanoTextField: cocoa.classes.MSUpDownNanoTextField;
