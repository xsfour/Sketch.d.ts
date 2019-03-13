/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentValueTextField<T = any> extends MSUpDownTextField {
    counterpart<R = MSColorComponentValueTextField>(): R;
    setCounterpart<R = void, P0 = MSColorComponentValueTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorComponentValueTextField<T = any> extends MSUpDownTextField {
      alloc<R = MSColorComponentValueTextField>(): R;
      new: <R = MSColorComponentValueTextField>() => R;
    }
  }
}

declare const MSColorComponentValueTextField: cocoa.classes.MSColorComponentValueTextField;
