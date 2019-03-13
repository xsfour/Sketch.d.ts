/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntegerSlider<T = any> extends NSSlider {}
  namespace classes {
    export interface MSIntegerSlider<T = any> extends NSSlider {
      alloc<R = MSIntegerSlider>(): R;
      new: <R = MSIntegerSlider>() => R;
    }
  }
}

declare const MSIntegerSlider: cocoa.classes.MSIntegerSlider;
