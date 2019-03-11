/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntegerSlider<T = any> extends cocoa.NSSlider {}
  namespace classes {
    export interface MSIntegerSlider<T = any> extends cocoa.classes.NSSlider {
      alloc<R = MSIntegerSlider>(): R;
      new: <R = MSIntegerSlider>() => R;
    }
  }
}

declare const MSIntegerSlider: cocoa.classes.MSIntegerSlider;
